import { StatusType } from "@/types";

export const getStatusColor = (status: StatusType): string => {
  switch (status) {
    case "operational":
      return "bg-status-operational";
    case "degraded":
      return "bg-status-degraded";
    case "partialOutage":
      return "bg-status-partialOutage";
    case "majorOutage":
      return "bg-status-majorOutage";
    case "maintenance":
      return "bg-status-maintenance";
    default:
      return "bg-gray-400";
  }
};

export const getStatusText = (status: StatusType): string => {
  switch (status) {
    case "operational":
      return "Operational";
    case "degraded":
      return "Degraded Performance";
    case "partialOutage":
      return "Partial Outage";
    case "majorOutage":
      return "Major Outage";
    case "maintenance":
      return "Maintenance";
    default:
      return "Unknown";
  }
};

export const getStatusTextColor = (status: StatusType): string => {
  switch (status) {
    case "operational":
      return "text-status-operational";
    case "degraded":
      return "text-status-degraded";
    case "partialOutage":
      return "text-status-partialOutage";
    case "majorOutage":
      return "text-status-majorOutage";
    case "maintenance":
      return "text-status-maintenance";
    default:
      return "text-gray-400";
  }
};

export const getIncidentImpactColor = (
  impact: "none" | "minor" | "major" | "critical"
): string => {
  switch (impact) {
    case "none":
      return "bg-green-100 text-green-800";
    case "minor":
      return "bg-yellow-100 text-yellow-800";
    case "major":
      return "bg-orange-100 text-orange-800";
    case "critical":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export const getIncidentStatusColor = (
  status: "investigating" | "identified" | "monitoring" | "resolved"
): string => {
  switch (status) {
    case "investigating":
      return "bg-red-100 text-red-800";
    case "identified":
      return "bg-orange-100 text-orange-800";
    case "monitoring":
      return "bg-blue-100 text-blue-800";
    case "resolved":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export const getMaintenanceStatusColor = (
  status: "scheduled" | "in_progress" | "completed"
): string => {
  switch (status) {
    case "scheduled":
      return "bg-blue-100 text-blue-800";
    case "in_progress":
      return "bg-yellow-100 text-yellow-800";
    case "completed":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export const getOverallStatusText = (
  status: "operational" | "degraded" | "partialOutage" | "majorOutage"
): string => {
  switch (status) {
    case "operational":
      return "All Systems Operational";
    case "degraded":
      return "Some Systems Experiencing Degraded Performance";
    case "partialOutage":
      return "Some Systems Experiencing Outages";
    case "majorOutage":
      return "Major System Outages";
    default:
      return "System Status Unknown";
  }
};
