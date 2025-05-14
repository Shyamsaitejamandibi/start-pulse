import { getServices, getServiceGroups } from "@/app/actions";
import { ServicesOverview } from "./components/services-overview";

export default async function ServicesPage() {
  const { services = [] } = await getServices();
  const { serviceGroups = [] } = await getServiceGroups();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Services</h1>
        <p className="text-muted-foreground">
          Manage your services and service groups.
        </p>
      </div>

      <ServicesOverview services={services} serviceGroups={serviceGroups} />
    </div>
  );
}
