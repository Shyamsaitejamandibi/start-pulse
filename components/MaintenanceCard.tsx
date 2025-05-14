import React from "react";
import { Maintenance } from "@prisma/client";
import { MaintenanceStatus } from "@/lib/generated/prisma";
import { formatDateRange } from "@/utils/dateUtils";
import { getMaintenanceStatusColor } from "@/utils/statusUtils";
import TimelineItem from "@/components/TimeLineItem";

interface MaintenanceCardProps {
  maintenance: Omit<Maintenance, "status"> & {
    status: MaintenanceStatus;
    updates: {
      id: string;
      message: string;
      status: MaintenanceStatus;
      createdAt: Date;
      createdBy: string;
    }[];
  };
}

const MaintenanceCard: React.FC<MaintenanceCardProps> = ({ maintenance }) => {
  const { title, status, startTime, endTime, updates } = maintenance;

  const getStatusText = (status: MaintenanceStatus) => {
    switch (status) {
      case MaintenanceStatus.scheduled:
        return "Scheduled";
      case MaintenanceStatus.in_progress:
        return "In Progress";
      case MaintenanceStatus.completed:
        return "Completed";
      default:
        return status;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-gray-900">{title}</h3>
          <span
            className={`text-xs px-2 py-1 rounded-full ${getMaintenanceStatusColor(
              status
            )}`}
          >
            {getStatusText(status)}
          </span>
        </div>

        <div className="text-sm text-gray-500">
          <span>
            {formatDateRange(startTime.toISOString(), endTime.toISOString())}
          </span>
        </div>
      </div>

      <div className="mt-4">
        {updates.map((update) => (
          <TimelineItem
            key={update.id}
            title={`Update by ${update.createdBy}`}
            message={update.message}
            timestamp={update.createdAt.toISOString()}
            status={update.status}
          />
        ))}
      </div>
    </div>
  );
};

export default MaintenanceCard;
