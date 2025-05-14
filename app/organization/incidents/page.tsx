import { Suspense } from "react";
import { IncidentsOverview } from "./components/incidents-overview";
import { IncidentsSkeleton } from "./components/incidents-skeleton";
import { getIncidents, getServices } from "@/app/actions";

export default async function IncidentsPage() {
  const [{ incidents, error }, { services }] = await Promise.all([
    getIncidents(),
    getServices(),
  ]);

  if (error) {
    throw new Error("Failed to fetch incidents");
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Incidents</h1>
        <p className="text-muted-foreground">
          Manage and track system incidents and outages.
        </p>
      </div>

      <Suspense fallback={<IncidentsSkeleton />}>
        <IncidentsOverview
          incidents={incidents || []}
          services={services || []}
        />
      </Suspense>
    </div>
  );
}
