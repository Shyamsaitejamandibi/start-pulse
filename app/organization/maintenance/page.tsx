import { Suspense } from "react";
import { MaintenanceOverview } from "./components/maintenance-overview";
import { MaintenanceSkeleton } from "./components/maintenance-skeleton";

export default async function MaintenancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Maintenance</h1>
        <p className="text-muted-foreground">
          Schedule and manage system maintenance windows
        </p>
      </div>

      <Suspense fallback={<MaintenanceSkeleton />}>
        <MaintenanceOverview />
      </Suspense>
    </div>
  );
}
