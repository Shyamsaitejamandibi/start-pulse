import { Suspense } from "react";
import { DashboardOverview } from "./components/dashboard-overview";
import { DashboardSkeleton } from "./components/dashboard-skeleton";

export default async function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your status page and services
        </p>
      </div>

      <Suspense fallback={<DashboardSkeleton />}>
        <DashboardOverview />
      </Suspense>
    </div>
  );
}
