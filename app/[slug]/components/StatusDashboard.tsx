"use client";

import React from "react";
import { Service, Incident, Maintenance, ServiceGroup } from "@prisma/client";
import {
  ServiceStatus,
  IncidentStatus,
  IncidentImpact,
  MaintenanceStatus,
} from "@/lib/generated/prisma";
import ServiceCard from "@/components/ServiceCard";
import IncidentCard from "@/components/IncidentCard";
import MaintenanceCard from "@/components/MaintenanceCard";
import { getOverallStatusText } from "@/utils/statusUtils";
import StatusBadge from "@/components/StatusBadge";

interface StatusDashboardProps {
  services: (Omit<Service, "status"> & { status: ServiceStatus } & {
    group?: ServiceGroup | null;
  })[];
  incidents: (Omit<Incident, "status" | "impact"> & {
    status: IncidentStatus;
    impact: IncidentImpact;
    affectedServices: { id: string }[];
    updates: {
      id: string;
      message: string;
      status: IncidentStatus;
      createdAt: Date;
      createdBy: string;
    }[];
  })[];
  maintenances: (Omit<Maintenance, "status"> & {
    status: MaintenanceStatus;
    affectedServices: { id: string }[];
    updates: {
      id: string;
      message: string;
      status: MaintenanceStatus;
      createdAt: Date;
      createdBy: string;
    }[];
  })[];
  serviceGroups: ServiceGroup[];
}

export default function StatusDashboard({
  services,
  incidents,
  maintenances,
  serviceGroups,
}: StatusDashboardProps) {
  const getServiceStatus = (
    service: Omit<Service, "status"> & { status: ServiceStatus }
  ): ServiceStatus => {
    // Check if there are any active incidents affecting this service
    const hasActiveIncidents = incidents.some(
      (incident) =>
        incident.status !== IncidentStatus.resolved &&
        incident.affectedServices.some((s) => s.id === service.id)
    );

    // Check if there are any active maintenances affecting this service
    const hasActiveMaintenance = maintenances.some(
      (maintenance) =>
        maintenance.status === MaintenanceStatus.in_progress &&
        maintenance.affectedServices.some((s) => s.id === service.id)
    );

    if (hasActiveIncidents) {
      return ServiceStatus.degraded;
    }

    if (hasActiveMaintenance) {
      return ServiceStatus.maintenance;
    }

    return service.status;
  };

  const getOverallStatus = (): ServiceStatus => {
    const serviceStatuses = services.map(getServiceStatus);
    if (serviceStatuses.includes(ServiceStatus.majorOutage)) {
      return ServiceStatus.majorOutage;
    }
    if (serviceStatuses.includes(ServiceStatus.partialOutage)) {
      return ServiceStatus.partialOutage;
    }
    if (serviceStatuses.includes(ServiceStatus.degraded)) {
      return ServiceStatus.degraded;
    }
    if (serviceStatuses.includes(ServiceStatus.maintenance)) {
      return ServiceStatus.maintenance;
    }
    return ServiceStatus.operational;
  };

  const overallStatus = getOverallStatus();
  const activeIncidents = incidents.filter(
    (inc) => inc.status !== IncidentStatus.resolved
  );
  const activeMaintenances = maintenances.filter(
    (mnt) =>
      mnt.status === MaintenanceStatus.scheduled ||
      mnt.status === MaintenanceStatus.in_progress
  );

  // Get services grouped by their group
  const groupedServices = serviceGroups
    .map((group) => ({
      group,
      services: services.filter((service) => service.groupId === group.id),
    }))
    .filter(({ services }) => services.length > 0);

  // Get services without a group
  const ungroupedServices = services.filter((service) => !service.groupId);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="flex flex-col items-center justify-center py-6 text-center">
          <div className="flex items-center mb-2">
            <StatusBadge
              status={overallStatus}
              size="lg"
              animate={overallStatus !== ServiceStatus.operational}
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            {getOverallStatusText(overallStatus)}
          </h1>
          <p className="text-gray-600 mt-2">
            Last checked {new Date().toLocaleTimeString()}
          </p>
        </div>
      </section>

      {activeIncidents.length > 0 && (
        <section className="mb-12">
          <div className="border-b pb-2 mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Active Incidents
            </h2>
          </div>
          <div className="space-y-4">
            {activeIncidents.map((incident) => (
              <IncidentCard key={incident.id} incident={incident} />
            ))}
          </div>
        </section>
      )}

      {activeMaintenances.length > 0 && (
        <section className="mb-12">
          <div className="border-b pb-2 mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Scheduled Maintenance
            </h2>
          </div>
          <div className="space-y-4">
            {activeMaintenances.map((maintenance) => (
              <MaintenanceCard key={maintenance.id} maintenance={maintenance} />
            ))}
          </div>
        </section>
      )}

      <section className="mb-12">
        <div className="border-b pb-2 mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Services</h2>
        </div>

        {/* Grouped services */}
        {groupedServices.map(({ group, services }) => (
          <div key={group.id} className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              {group.name}
            </h3>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        ))}

        {/* Ungrouped services */}
        {ungroupedServices.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Other Services
            </h3>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {ungroupedServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
