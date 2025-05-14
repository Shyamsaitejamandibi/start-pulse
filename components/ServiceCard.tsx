import React from "react";
import { Service } from "@prisma/client";
import { ServiceStatus } from "@/lib/generated/prisma";
import StatusBadge from "@/components/StatusBadge";
import { formatTimeAgo } from "@/utils/dateUtils";
import { Button } from "@/components/ui/button";
import { updateServiceStatus } from "@/app/actions";
import { useRouter } from "next/navigation";

interface ServiceCardProps {
  service: Omit<Service, "status"> & { status: ServiceStatus };
}

const statusOptions = [
  { value: ServiceStatus.operational, label: "Operational" },
  { value: ServiceStatus.degraded, label: "Degraded" },
  { value: ServiceStatus.partialOutage, label: "Partial Outage" },
  { value: ServiceStatus.majorOutage, label: "Major Outage" },
  { value: ServiceStatus.maintenance, label: "Under Maintenance" },
] as const;

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const router = useRouter();
  const [isUpdating, setIsUpdating] = React.useState(false);

  const handleStatusChange = async (newStatus: ServiceStatus) => {
    try {
      setIsUpdating(true);
      await updateServiceStatus(service.id, newStatus);
      router.refresh();
    } catch (error) {
      console.error("Failed to update service status:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-medium text-gray-900">{service.name}</h3>
          <p className="text-sm text-gray-500">{service.description}</p>
        </div>
        <StatusBadge
          status={service.status}
          animate={service.status !== ServiceStatus.operational}
        />
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="text-xs text-gray-500">
          Last updated {formatTimeAgo(service.updatedAt.toISOString())}
        </div>
        <div className="flex space-x-2">
          {statusOptions.map((option) => (
            <Button
              key={option.value}
              variant={service.status === option.value ? "default" : "outline"}
              size="sm"
              onClick={() => handleStatusChange(option.value)}
              disabled={isUpdating || service.status === option.value}
              className="text-xs"
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
