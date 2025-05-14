"use server";

import { revalidatePath } from "next/cache";
import { MaintenanceStatus } from "@/lib/generated/prisma";
import { prisma } from "@/lib/db";

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

    return { maintenances };
  } catch (error) {
    console.error("Error fetching maintenances:", error);
    return { error: "Failed to fetch maintenances" };
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
    revalidatePath("/organization/maintenance");
    return { maintenance };
  } catch (error) {
    console.error("Error creating maintenance:", error);
    return { error: "Failed to create maintenance" };
  }
}

export async function updateMaintenance(
  id: string,
  data: {
    title: string;
    description: string;
    startTime: Date;
    endTime: Date;
    affectedServices: string[];
  }
) {
  try {
    // First, disconnect all existing affected services
    await prisma.maintenance.update({
      where: { id },
      data: {
        affectedServices: {
          set: [], // Disconnect all existing services
        },
      },
    });

    // Then update with new data
    const maintenance = await prisma.maintenance.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description,
        startTime: data.startTime,
        endTime: data.endTime,
        affectedServices: {
          connect: data.affectedServices.map((id) => ({ id })),
        },
      },
      include: {
        updates: true,
        affectedServices: true,
      },
    });
    revalidatePath("/organization/maintenance");
    return { maintenance };
  } catch (error) {
    console.error("Error updating maintenance:", error);
    return { error: "Failed to update maintenance" };
  }
}

export async function deleteMaintenance(id: string) {
  try {
    // First delete all updates
    await prisma.maintenanceUpdate.deleteMany({
      where: { maintenanceId: id },
    });

    // Then delete the maintenance
    await prisma.maintenance.delete({
      where: { id },
    });
    revalidatePath("/organization/maintenance");
    return { success: true };
  } catch (error) {
    console.error("Error deleting maintenance:", error);
    return { error: "Failed to delete maintenance" };
  }
}

export async function addMaintenanceUpdate(
  maintenanceId: string,
  message: string,
  status: MaintenanceStatus
) {
  try {
    // Create the update
    const update = await prisma.maintenanceUpdate.create({
      data: {
        maintenanceId,
        message,
        status,
        createdBy: "System", // TODO: Get from auth
      },
    });

    // Update the maintenance status
    await prisma.maintenance.update({
      where: { id: maintenanceId },
      data: { status },
    });

    revalidatePath("/organization/maintenance");
    return { update };
  } catch (error) {
    console.error("Error adding maintenance update:", error);
    return { error: "Failed to add maintenance update" };
  }
}
