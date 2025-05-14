"use client";

import React from "react";
import { useStatus } from "@/context/StatusContext";
import ServiceCard from "@/components/ServiceCard";
import IncidentCard from "@/components/IncidentCard";
import MaintenanceCard from "@/components/MaintenanceCard";
import { getOverallStatusText } from "@/utils/statusUtils";
import StatusBadge from "@/components/StatusBadge";

const StatusDashboard: React.FC = () => {
  const { services, incidents, maintenances, serviceGroups, getServiceStatus } =
    useStatus();

  const overallStatus = getServiceStatus();
  const activeIncidents = incidents.filter((inc) => inc.status !== "resolved");
  const activeMaintenances = maintenances.filter(
    (mnt) => mnt.status === "scheduled" || mnt.status === "in_progress"
  );

  // Get services grouped by their group
  const groupedServices = serviceGroups.map((group) => ({
    group,
    services: services.filter((service) => service.groupId === group.id),
  }));

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
              animate={overallStatus !== "operational"}
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
};

export default StatusDashboard;
