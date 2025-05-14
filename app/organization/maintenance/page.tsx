import { Suspense } from "react";
import MaintenanceOverview from "./components/maintenance-overview";
import { MaintenanceSkeleton } from "./components/maintenance-skeleton";
import { getMaintenances } from "@/app/actions/maintenance";
import { getServices } from "@/app/actions";

export default async function MaintenancePage() {
  const [{ maintenances }, { services }] = await Promise.all([
    getMaintenances(),
    getServices(),
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Maintenance</h1>
        <p className="text-muted-foreground">
          Schedule and manage system maintenance windows
        </p>
      </div>

      <Suspense fallback={<MaintenanceSkeleton />}>
        <MaintenanceOverview
          maintenances={maintenances || []}
          services={services || []}
        />
      </Suspense>
    </div>
  );
}
