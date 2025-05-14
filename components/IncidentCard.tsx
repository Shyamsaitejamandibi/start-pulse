import React from "react";
import { Incident } from "@/types";
import { formatTimeAgo, formatDate } from "@/utils/dateUtils";
import {
  getIncidentImpactColor,
  getIncidentStatusColor,
} from "@/utils/statusUtils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TimelineItem from "./TimeLineItem";

interface IncidentCardProps {
  incident: Incident;
}

const IncidentCard: React.FC<IncidentCardProps> = ({ incident }) => {
  const { title, status, impact, createdAt, updatedAt, resolvedAt, updates } =
    incident;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-4">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-gray-900">{title}</h3>
          <div className="flex items-center space-x-2">
            <span
              className={`text-xs px-2 py-1 rounded-full ${getIncidentStatusColor(
                status
              )}`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
            <span
              className={`text-xs px-2 py-1 rounded-full ${getIncidentImpactColor(
                impact
              )}`}
            >
              {impact.charAt(0).toUpperCase() + impact.slice(1)} Impact
            </span>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          {status === "resolved"
            ? `Resolved ${formatTimeAgo(resolvedAt || updatedAt)}`
            : `Reported ${formatTimeAgo(
                createdAt
              )}, Last update ${formatTimeAgo(updatedAt)}`}
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
                  title={`Update ${formatDate(update.createdAt)}`}
                  message={update.message}
                  timestamp={update.createdAt}
                  status={update.status}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default IncidentCard;
