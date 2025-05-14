import { Service, Incident, Maintenance, ServiceGroup } from "@/types";

export const serviceGroups: ServiceGroup[] = [
  {
    id: "core",
    name: "Core Services",
  },
  {
    id: "api",
    name: "API Services",
  },
  {
    id: "storage",
    name: "Storage Services",
  },
];

export const services: Service[] = [
  {
    id: "1",
    name: "Website",
    description: "Main customer-facing website",
    status: "operational",
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    groupId: "core",
  },
  {
    id: "2",
    name: "API",
    description: "REST API for client applications",
    status: "degraded",
    updatedAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    groupId: "api",
  },
  {
    id: "3",
    name: "Authentication Service",
    description: "User authentication and authorization",
    status: "operational",
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
    groupId: "core",
  },
  {
    id: "4",
    name: "Database",
    description: "Primary database for all services",
    status: "partialOutage",
    updatedAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    groupId: "storage",
  },
  {
    id: "5",
    name: "Storage Service",
    description: "File storage and CDN",
    status: "operational",
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    groupId: "storage",
  },
  {
    id: "6",
    name: "Search Service",
    description: "Content indexing and search functionality",
    status: "operational",
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
    groupId: "api",
  },
];

export const incidents: Incident[] = [
  {
    id: "inc-1",
    title: "API Performance Degradation",
    status: "monitoring",
    impact: "minor",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    affectedServices: ["2"],
    updates: [
      {
        id: "update-1",
        incidentId: "inc-1",
        message: "We are investigating reports of slow API response times.",
        status: "investigating",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
        createdBy: "System",
      },
      {
        id: "update-2",
        incidentId: "inc-1",
        message:
          "We have identified the issue as increased load on our database servers.",
        status: "identified",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 1.5).toISOString(),
        createdBy: "System",
      },
      {
        id: "update-3",
        incidentId: "inc-1",
        message:
          "We have scaled up our database servers and are monitoring the situation.",
        status: "monitoring",
        createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
        createdBy: "System",
      },
    ],
  },
  {
    id: "inc-2",
    title: "Database Connectivity Issues",
    status: "investigating",
    impact: "major",
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    affectedServices: ["4"],
    updates: [
      {
        id: "update-4",
        incidentId: "inc-2",
        message:
          "We are investigating reports of database connectivity issues.",
        status: "investigating",
        createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
        createdBy: "System",
      },
    ],
  },
  {
    id: "inc-3",
    title: "Website Outage",
    status: "resolved",
    impact: "critical",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1.5).toISOString(),
    resolvedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1.5).toISOString(),
    affectedServices: ["1"],
    updates: [
      {
        id: "update-5",
        incidentId: "inc-3",
        message: "The website is unavailable due to a configuration issue.",
        status: "investigating",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
        createdBy: "System",
      },
      {
        id: "update-6",
        incidentId: "inc-3",
        message: "We have identified a misconfiguration in our CDN.",
        status: "identified",
        createdAt: new Date(
          Date.now() - 1000 * 60 * 60 * 24 * 1.8
        ).toISOString(),
        createdBy: "System",
      },
      {
        id: "update-7",
        incidentId: "inc-3",
        message:
          "The configuration has been fixed and the website is now operational.",
        status: "resolved",
        createdAt: new Date(
          Date.now() - 1000 * 60 * 60 * 24 * 1.5
        ).toISOString(),
        createdBy: "System",
      },
    ],
  },
];

export const maintenances: Maintenance[] = [
  {
    id: "mnt-1",
    title: "Database Upgrade",
    status: "scheduled",
    scheduledStart: new Date(
      Date.now() + 1000 * 60 * 60 * 24 * 2
    ).toISOString(),
    scheduledEnd: new Date(
      Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 60 * 60 * 3
    ).toISOString(),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    affectedServices: ["4"],
    updates: [
      {
        id: "update-8",
        maintenanceId: "mnt-1",
        message:
          "We will be upgrading our database servers to improve performance.",
        status: "scheduled",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
        createdBy: "System",
      },
    ],
  },
  {
    id: "mnt-2",
    title: "API Infrastructure Maintenance",
    status: "in_progress",
    scheduledStart: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    scheduledEnd: new Date(Date.now() + 1000 * 60 * 60 * 1).toISOString(),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
    affectedServices: ["2", "6"],
    updates: [
      {
        id: "update-9",
        maintenanceId: "mnt-2",
        message: "Planned maintenance to upgrade API infrastructure.",
        status: "scheduled",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
        createdBy: "System",
      },
      {
        id: "update-10",
        maintenanceId: "mnt-2",
        message:
          "Maintenance has begun. API services may experience intermittent disruptions.",
        status: "in_progress",
        createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
        createdBy: "System",
      },
    ],
  },
];
