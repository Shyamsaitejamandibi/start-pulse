import React from "react";
import { Maintenance } from "@/types";
import { formatDateRange, formatTimeAgo } from "@/utils/dateUtils";
import { getMaintenanceStatusColor } from "@/utils/statusUtils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TimelineItem from "./TimeLineItem";

interface MaintenanceCardProps {
  maintenance: Maintenance;
}

const MaintenanceCard: React.FC<MaintenanceCardProps> = ({ maintenance }) => {
  const { title, status, scheduledStart, scheduledEnd, updates } = maintenance;

  const getStatusText = (status: "scheduled" | "in_progress" | "completed") => {
    switch (status) {
      case "scheduled":
        return "Scheduled";
      case "in_progress":
        return "In Progress";
      case "completed":
        return "Completed";
      default:
        return status;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-4">
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
          <span>{formatDateRange(scheduledStart, scheduledEnd)}</span>
        </div>
      </div>

      <Accordion type="single" collapsible className="mt-4">
        <AccordionItem value="updates">
          <AccordionTrigger className="text-sm">
            View {updates.length} update{updates.length !== 1 ? "s" : ""}
          </AccordionTrigger>
          <AccordionContent>
            <div className="pt-4">
              {updates.map((update) => (
                <TimelineItem
                  key={update.id}
                  title={`Update ${formatTimeAgo(update.createdAt)}`}
                  message={update.message}
                  timestamp={update.createdAt}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default MaintenanceCard;
