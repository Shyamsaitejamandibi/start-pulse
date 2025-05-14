import React from "react";
import { Service } from "@/types";
import StatusBadge from "./StatusBadge";
import { formatTimeAgo } from "@/utils/dateUtils";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium text-gray-900">{service.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{service.description}</p>
        </div>
        <StatusBadge
          status={service.status}
          animate={service.status !== "operational"}
        />
      </div>
      <div className="mt-2 text-xs text-gray-400">
        Updated {formatTimeAgo(service.updatedAt)}
      </div>
    </div>
  );
};

export default ServiceCard;
