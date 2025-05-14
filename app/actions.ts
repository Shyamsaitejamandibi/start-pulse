"use server";

import { revalidatePath } from "next/cache";
import {
  ServiceStatus,
  IncidentStatus,
  IncidentImpact,
  MaintenanceStatus,
  PrismaClient,
} from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export async function getServices() {
  console.log("Fetching services");
  try {
    const services = await prisma.service.findMany({
      include: {
        group: true,
      },
    });
    return { services };
  } catch (e) {
    console.error("Error fetching services:", e);
    return { error: "Failed to fetch services" };
  }
}

export async function getIncidents() {
  try {
    const incidents = await prisma.incident.findMany({
      include: {
        updates: {
          orderBy: {
            createdAt: "desc",
          },
        },
        affectedServices: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Transform the data to match the expected types
    const typedIncidents = incidents.map((incident) => ({
      ...incident,
      status: incident.status as IncidentStatus,
      impact: incident.impact as IncidentImpact,
      updates: incident.updates.map((update) => ({
        ...update,
        status: update.status as IncidentStatus,
      })),
    }));

    return { incidents: typedIncidents };
  } catch {
    return { error: "Failed to fetch incidents" };
  }
}

export async function getMaintenances() {
  try {
    const maintenances = await prisma.maintenance.findMany({
      include: {
        updates: {
          orderBy: {
            createdAt: "desc",
          },
        },
        affectedServices: true,
      },
      orderBy: {
        startTime: "desc",
      },
    });

    // Transform the data to match the expected types
    const typedMaintenances = maintenances.map((maintenance) => ({
      ...maintenance,
      status: maintenance.status as MaintenanceStatus,
      updates: maintenance.updates.map((update) => ({
        ...update,
        status: update.status as MaintenanceStatus,
      })),
    }));

    return { maintenances: typedMaintenances };
  } catch {
    return { error: "Failed to fetch maintenances" };
  }
}

export async function getServiceGroups() {
  try {
    const serviceGroups = await prisma.serviceGroup.findMany();
    return { serviceGroups };
  } catch {
    return { error: "Failed to fetch service groups" };
  }
}

export async function getServiceStatus() {
  try {
    const services = await prisma.service.findMany();

    if (services.some((s) => s.status === ServiceStatus.majorOutage)) {
      return ServiceStatus.majorOutage;
    } else if (services.some((s) => s.status === ServiceStatus.partialOutage)) {
      return ServiceStatus.partialOutage;
    } else if (
      services.some(
        (s) =>
          s.status === ServiceStatus.degraded ||
          s.status === ServiceStatus.maintenance
      )
    ) {
      return ServiceStatus.degraded;
    } else {
      return ServiceStatus.operational;
    }
  } catch {
    return ServiceStatus.operational; // Default to operational on error
  }
}

export async function updateServiceStatus(id: string, status: ServiceStatus) {
  try {
    // Validate the status
    if (!Object.values(ServiceStatus).includes(status)) {
      throw new Error("Invalid status value");
    }

    const updatedService = await prisma.service.update({
      where: { id },
      data: {
        status,
        updatedAt: new Date(), // Ensure updatedAt is set
      },
      include: {
        group: true,
      },
    });

    // Revalidate all relevant paths
    revalidatePath("/");
    revalidatePath("/organization/services");
    revalidatePath("/organization/dashboard");

    return { service: updatedService };
  } catch (error) {
    console.error("Error updating service status:", error);
    throw new Error(
      error instanceof Error ? error.message : "Failed to update service status"
    );
  }
}

export async function addIncident(data: {
  title: string;
  description: string;
  impact: IncidentImpact;
  affectedServices: string[];
}) {
  try {
    const incident = await prisma.incident.create({
      data: {
        title: data.title,
        description: data.description,
        impact: data.impact,
        status: IncidentStatus.investigating,
        affectedServices: {
          connect: data.affectedServices.map((id) => ({ id })),
        },
        updates: {
          create: {
            message: "Incident created",
            status: IncidentStatus.investigating,
            createdBy: "System", // TODO: Get from auth
          },
        },
      },
      include: {
        updates: true,
        affectedServices: true,
      },
    });
    revalidatePath("/");
    return { incident };
  } catch {
    return { error: "Failed to create incident" };
  }
}

export async function updateIncident(data: {
  id: string;
  title: string;
  description: string;
  status: IncidentStatus;
  impact: IncidentImpact;
  affectedServices: string[];
}) {
  try {
    const incident = await prisma.incident.update({
      where: { id: data.id },
      data: {
        title: data.title,
        description: data.description,
        status: data.status,
        impact: data.impact,
        affectedServices: {
          set: data.affectedServices.map((id) => ({ id })),
        },
      },
      include: {
        updates: true,
        affectedServices: true,
      },
    });
    revalidatePath("/");
    return { incident };
  } catch {
    return { error: "Failed to update incident" };
  }
}

export async function resolveIncident(id: string) {
  try {
    const incident = await prisma.incident.update({
      where: { id },
      data: {
        status: IncidentStatus.resolved,
        resolvedAt: new Date(),
        updates: {
          create: {
            message: "Incident resolved",
            status: IncidentStatus.resolved,
            createdBy: "System", // TODO: Get from auth
          },
        },
      },
      include: {
        updates: true,
        affectedServices: true,
      },
    });
    revalidatePath("/");
    return { incident };
  } catch {
    return { error: "Failed to resolve incident" };
  }
}

export async function deleteIncident(id: string) {
  try {
    await prisma.incident.delete({
      where: { id },
    });
    revalidatePath("/");
    return { success: true };
  } catch {
    return { error: "Failed to delete incident" };
  }
}

export async function addIncidentUpdate(data: {
  incidentId: string;
  message: string;
  status: IncidentStatus;
}) {
  try {
    const update = await prisma.incidentUpdate.create({
      data: {
        incidentId: data.incidentId,
        message: data.message,
        status: data.status,
        createdBy: "System", // TODO: Get from auth
      },
    });

    // Update the incident status
    await prisma.incident.update({
      where: { id: data.incidentId },
      data: {
        status: data.status,
        ...(data.status === IncidentStatus.resolved && {
          resolvedAt: new Date(),
        }),
      },
    });

    revalidatePath("/");
    return { update };
  } catch {
    return { error: "Failed to add incident update" };
  }
}

export async function addMaintenance(data: {
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  affectedServices: string[];
}) {
  try {
    const maintenance = await prisma.maintenance.create({
      data: {
        title: data.title,
        description: data.description,
        startTime: data.startTime,
        endTime: data.endTime,
        status: MaintenanceStatus.scheduled,
        affectedServices: {
          connect: data.affectedServices.map((id) => ({ id })),
        },
        updates: {
          create: {
            message: "Maintenance scheduled",
            status: MaintenanceStatus.scheduled,
            createdBy: "System", // TODO: Get from auth
          },
        },
      },
      include: {
        updates: true,
        affectedServices: true,
      },
    });
    revalidatePath("/");
    return { maintenance };
  } catch {
    return { error: "Failed to create maintenance" };
  }
}

export async function addService(data: {
  name: string;
  description: string;
  status: ServiceStatus;
  groupId?: string;
}) {
  try {
    const service = await prisma.service.create({
      data: {
        name: data.name,
        description: data.description,
        status: data.status,
        groupId: data.groupId,
      },
      include: {
        group: true,
      },
    });
    revalidatePath("/");
    return { service };
  } catch {
    return { error: "Failed to create service" };
  }
}

export async function addServiceGroup(data: {
  name: string;
  description: string;
}) {
  try {
    const serviceGroup = await prisma.serviceGroup.create({
      data: {
        name: data.name,
        description: data.description,
      },
    });
    revalidatePath("/");
    revalidatePath("/organization/services");
    return { serviceGroup };
  } catch (error) {
    console.error("Error creating service group:", error);
    throw new Error(
      error instanceof Error ? error.message : "Failed to create service group"
    );
  }
}

export async function updateServiceGroup(
  id: string,
  data: {
    name: string;
    description: string;
  }
) {
  try {
    const serviceGroup = await prisma.serviceGroup.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
      },
    });
    revalidatePath("/");
    revalidatePath("/organization/services");
    return { serviceGroup };
  } catch (error) {
    console.error("Error updating service group:", error);
    throw new Error(
      error instanceof Error ? error.message : "Failed to update service group"
    );
  }
}

export async function deleteServiceGroup(id: string) {
  try {
    await prisma.serviceGroup.delete({
      where: { id },
    });
    revalidatePath("/");
    revalidatePath("/organization/services");
    return { success: true };
  } catch (error) {
    console.error("Error deleting service group:", error);
    throw new Error(
      error instanceof Error ? error.message : "Failed to delete service group"
    );
  }
}

export async function deleteService(id: string) {
  try {
    await prisma.service.delete({
      where: { id },
    });
    revalidatePath("/");
    revalidatePath("/organization/services");
    return { success: true };
  } catch (error) {
    console.error("Error deleting service:", error);
    throw new Error(
      error instanceof Error ? error.message : "Failed to delete service"
    );
  }
}
