import { Suspense } from "react";
import { IncidentsOverview } from "./components/incidents-overview";
import { IncidentsSkeleton } from "./components/incidents-skeleton";

export default function IncidentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Incidents</h1>
        <p className="text-muted-foreground">
          Manage and track system incidents and outages.
        </p>
      </div>

      <Suspense fallback={<IncidentsSkeleton />}>
        <IncidentsOverview />
      </Suspense>
    </div>
  );
}
