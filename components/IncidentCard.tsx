import React from "react";
import { Incident } from "@prisma/client";
import { IncidentStatus, IncidentImpact } from "@/lib/generated/prisma";
import { formatTimeAgo } from "@/utils/dateUtils";
import {
  getIncidentImpactColor,
  getIncidentStatusColor,
} from "@/utils/statusUtils";
import TimelineItem from "@/components/TimeLineItem";

interface IncidentCardProps {
  incident: Omit<Incident, "status" | "impact"> & {
    status: IncidentStatus;
    impact: IncidentImpact;
    updates: {
      id: string;
      message: string;
      status: IncidentStatus;
      createdAt: Date;
      createdBy: string;
    }[];
  };
}

const IncidentCard: React.FC<IncidentCardProps> = ({ incident }) => {
  const { title, status, impact, createdAt, resolvedAt, updates } = incident;

  const getImpactText = (impact: IncidentImpact): string => {
    switch (impact) {
      case IncidentImpact.none:
        return "No Impact";
      case IncidentImpact.minor:
        return "Minor Impact";
      case IncidentImpact.major:
        return "Major Impact";
      case IncidentImpact.critical:
        return "Critical Impact";
      default:
        return impact;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-gray-900">{title}</h3>
          <div className="flex gap-2">
            <span
              className={`text-xs px-2 py-1 rounded-full ${getIncidentImpactColor(
                impact
              )}`}
            >
              {getImpactText(impact)}
            </span>
            <span
              className={`text-xs px-2 py-1 rounded-full ${getIncidentStatusColor(
                status
              )}`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          <span>Started {formatTimeAgo(createdAt.toISOString())}</span>
          {resolvedAt && (
            <span className="ml-2">
              • Resolved {formatTimeAgo(resolvedAt.toISOString())}
            </span>
          )}
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

export default IncidentCard;
