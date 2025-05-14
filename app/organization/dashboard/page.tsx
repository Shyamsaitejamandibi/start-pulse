import { Suspense } from "react";
import { DashboardOverview } from "./components/dashboard-overview";
import { DashboardSkeleton } from "./components/dashboard-skeleton";
import { getServices, getIncidents, getMaintenances } from "@/app/actions";

export default async function DashboardPage() {
  const [{ services }, { incidents }, { maintenances }] = await Promise.all([
    getServices(),
    getIncidents(),
    getMaintenances(),
  ]);

  if (!services || !incidents || !maintenances) {
    throw new Error("Failed to fetch dashboard data");
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your status page and services
        </p>
      </div>

      <Suspense fallback={<DashboardSkeleton />}>
        <DashboardOverview
          services={services}
          incidents={incidents}
          maintenances={maintenances}
        />
      </Suspense>
    </div>
  );
}
