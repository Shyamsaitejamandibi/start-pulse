import {
  getServices,
  getIncidents,
  getMaintenances,
  getServiceGroups,
} from "@/app/actions";
import StatusDashboard from "./components/StatusDashboard";
import {
  ServiceStatus,
  IncidentStatus,
  MaintenanceStatus,
} from "@/lib/generated/prisma";

export default async function Page() {
  const [{ services }, { incidents }, { maintenances }, { serviceGroups }] =
    await Promise.all([
      getServices(),
      getIncidents(),
      getMaintenances(),
      getServiceGroups(),
    ]);

  if (!services || !incidents || !maintenances) {
    throw new Error("Failed to fetch required data");
  }

  // Ensure proper typing of the data
  const typedServices = services.map((service) => ({
    ...service,
    status: service.status as ServiceStatus,
  }));

  const typedIncidents = incidents.map((incident) => ({
    ...incident,
    status: incident.status as IncidentStatus,
    impact: incident.impact as "none" | "minor" | "major" | "critical",
  }));

  const typedMaintenances = maintenances.map((maintenance) => ({
    ...maintenance,
    status: maintenance.status as MaintenanceStatus,
  }));

  return (
    <StatusDashboard
      services={typedServices}
      incidents={typedIncidents}
      maintenances={typedMaintenances}
      serviceGroups={serviceGroups || []}
    />
  );
}
