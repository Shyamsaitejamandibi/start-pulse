"use client";

import React, { createContext, useContext, useState } from "react";
import { Service, Incident, Maintenance, ServiceGroup } from "@/types";
import {
  services as initialServices,
  incidents as initialIncidents,
  maintenances as initialMaintenances,
  serviceGroups as initialServiceGroups,
} from "@/data/mockData";
import { toast } from "sonner";

interface StatusContextType {
  services: Service[];
  incidents: Incident[];
  maintenances: Maintenance[];
  serviceGroups: ServiceGroup[];
  updateServiceStatus: (id: string, status: Service["status"]) => void;
  addService: (service: Omit<Service, "id" | "updatedAt">) => void;
  updateService: (service: Service) => void;
  deleteService: (id: string) => void;
  addIncident: (
    incident: Omit<Incident, "id" | "createdAt" | "updatedAt" | "updates">
  ) => void;
  updateIncident: (incident: Incident) => void;
  resolveIncident: (id: string) => void;
  deleteIncident: (id: string) => void;
  addIncidentUpdate: (
    incidentId: string,
    message: string,
    status: Incident["status"]
  ) => void;
  addMaintenance: (
    maintenance: Omit<Maintenance, "id" | "createdAt" | "updates">
  ) => void;
  updateMaintenance: (maintenance: Maintenance) => void;
  deleteMaintenance: (id: string) => void;
  addMaintenanceUpdate: (
    maintenanceId: string,
    message: string,
    status: Maintenance["status"]
  ) => void;
  addServiceGroup: (group: Omit<ServiceGroup, "id">) => void;
  updateServiceGroup: (group: ServiceGroup) => void;
  deleteServiceGroup: (id: string) => void;
  getServiceStatus: () =>
    | "operational"
    | "degraded"
    | "partialOutage"
    | "majorOutage";
}

const StatusContext = createContext<StatusContextType | undefined>(undefined);

export const StatusProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
  const [maintenances, setMaintenances] =
    useState<Maintenance[]>(initialMaintenances);
  const [serviceGroups, setServiceGroups] =
    useState<ServiceGroup[]>(initialServiceGroups);

  const updateServiceStatus = (id: string, status: Service["status"]) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === id
          ? { ...service, status, updatedAt: new Date().toISOString() }
          : service
      )
    );
    toast("Service status updated successfully");
  };

  const addService = (service: Omit<Service, "id" | "updatedAt">) => {
    const newService: Service = {
      ...service,
      id: `service-${Date.now()}`,
      updatedAt: new Date().toISOString(),
    };
    setServices((prev) => [...prev, newService]);
    toast(`Service ${service.name} added successfully`);
  };

  const updateService = (service: Service) => {
    setServices((prev) =>
      prev.map((s) =>
        s.id === service.id
          ? { ...service, updatedAt: new Date().toISOString() }
          : s
      )
    );
    toast(`Service ${service.name} updated successfully`);
  };

  const deleteService = (id: string) => {
    const serviceName = services.find((s) => s.id === id)?.name;
    setServices((prev) => prev.filter((service) => service.id !== id));
    toast(`Service ${serviceName} deleted successfully`);
  };

  const addIncident = (
    incidentData: Omit<Incident, "id" | "createdAt" | "updatedAt" | "updates">
  ) => {
    const now = new Date().toISOString();
    const newIncident: Incident = {
      ...incidentData,
      id: `inc-${Date.now()}`,
      createdAt: now,
      updatedAt: now,
      updates: [
        {
          id: `update-${Date.now()}`,
          incidentId: `inc-${Date.now()}`,
          message: `Initial report: ${incidentData.title}`,
          status: incidentData.status,
          createdAt: now,
          createdBy: "System",
        },
      ],
    };

    setIncidents((prev) => [newIncident, ...prev]);

    // Update affected services
    if (incidentData.affectedServices.length > 0) {
      const status =
        incidentData.impact === "critical"
          ? "majorOutage"
          : incidentData.impact === "major"
          ? "partialOutage"
          : "degraded";

      setServices((prev) =>
        prev.map((service) =>
          incidentData.affectedServices.includes(service.id)
            ? { ...service, status, updatedAt: now }
            : service
        )
      );
    }

    toast(`Incident ${incidentData.title} reported successfully`);
  };

  const updateIncident = (incident: Incident) => {
    setIncidents((prev) =>
      prev.map((inc) =>
        inc.id === incident.id
          ? { ...incident, updatedAt: new Date().toISOString() }
          : inc
      )
    );
    toast(`Incident ${incident.title} updated successfully`);
  };

  const resolveIncident = (id: string) => {
    const now = new Date().toISOString();
    setIncidents((prev) =>
      prev.map((inc) =>
        inc.id === id
          ? {
              ...inc,
              status: "resolved",
              resolvedAt: now,
              updatedAt: now,
            }
          : inc
      )
    );

    // Reset affected services to operational
    const resolvedIncident = incidents.find((inc) => inc.id === id);
    if (resolvedIncident) {
      setServices((prev) =>
        prev.map((service) =>
          resolvedIncident.affectedServices.includes(service.id)
            ? { ...service, status: "operational", updatedAt: now }
            : service
        )
      );
    }

    toast(`Incident ${resolvedIncident?.title} resolved successfully`);
  };

  const deleteIncident = (id: string) => {
    setIncidents((prev) => prev.filter((incident) => incident.id !== id));
    toast(`Incident ${id} deleted successfully`);
  };

  const addIncidentUpdate = (
    incidentId: string,
    message: string,
    status: Incident["status"]
  ) => {
    const now = new Date().toISOString();
    setIncidents((prev) =>
      prev.map((inc) => {
        if (inc.id === incidentId) {
          const newUpdate = {
            id: `update-${Date.now()}`,
            incidentId,
            message,
            status,
            createdAt: now,
            createdBy: "System",
          };

          return {
            ...inc,
            status,
            updates: [...inc.updates, newUpdate],
            updatedAt: now,
            ...(status === "resolved" ? { resolvedAt: now } : {}),
          };
        }
        return inc;
      })
    );

    // Update affected services if status changed
    const incident = incidents.find((inc) => inc.id === incidentId);
    if (incident) {
      if (status === "resolved") {
        setServices((prev) =>
          prev.map((service) =>
            incident.affectedServices.includes(service.id)
              ? { ...service, status: "operational", updatedAt: now }
              : service
          )
        );
      }
    }

    toast(`Incident ${incidentId} updated successfully`);
  };

  const addMaintenance = (
    maintenanceData: Omit<Maintenance, "id" | "createdAt" | "updates">
  ) => {
    const now = new Date().toISOString();
    const newMaintenance: Maintenance = {
      ...maintenanceData,
      id: `mnt-${Date.now()}`,
      createdAt: now,
      updates: [
        {
          id: `update-${Date.now()}`,
          maintenanceId: `mnt-${Date.now()}`,
          message: `Scheduled maintenance: ${maintenanceData.title}`,
          status: maintenanceData.status,
          createdAt: now,
          createdBy: "System",
        },
      ],
    };

    setMaintenances((prev) => [...prev, newMaintenance]);

    // Update affected services if maintenance is in progress
    if (
      maintenanceData.status === "in_progress" &&
      maintenanceData.affectedServices.length > 0
    ) {
      setServices((prev) =>
        prev.map((service) =>
          maintenanceData.affectedServices.includes(service.id)
            ? { ...service, status: "maintenance", updatedAt: now }
            : service
        )
      );
    }

    toast(`Maintenance ${maintenanceData.title} scheduled successfully`);
  };

  const updateMaintenance = (maintenance: Maintenance) => {
    setMaintenances((prev) =>
      prev.map((m) => (m.id === maintenance.id ? maintenance : m))
    );
    toast(`Maintenance ${maintenance.title} updated successfully`);
  };

  const deleteMaintenance = (id: string) => {
    setMaintenances((prev) =>
      prev.filter((maintenance) => maintenance.id !== id)
    );
    toast(`Maintenance ${id} deleted successfully`);
  };

  const addMaintenanceUpdate = (
    maintenanceId: string,
    message: string,
    status: Maintenance["status"]
  ) => {
    const now = new Date().toISOString();
    setMaintenances((prev) =>
      prev.map((mnt) => {
        if (mnt.id === maintenanceId) {
          const newUpdate = {
            id: `update-${Date.now()}`,
            maintenanceId,
            message,
            status,
            createdAt: now,
            createdBy: "System",
          };

          return {
            ...mnt,
            status,
            updates: [...mnt.updates, newUpdate],
          };
        }
        return mnt;
      })
    );

    // Update affected services based on maintenance status
    const maintenance = maintenances.find((mnt) => mnt.id === maintenanceId);
    if (maintenance) {
      if (status === "in_progress") {
        setServices((prev) =>
          prev.map((service) =>
            maintenance.affectedServices.includes(service.id)
              ? { ...service, status: "maintenance", updatedAt: now }
              : service
          )
        );
      } else if (status === "completed") {
        setServices((prev) =>
          prev.map((service) =>
            maintenance.affectedServices.includes(service.id)
              ? { ...service, status: "operational", updatedAt: now }
              : service
          )
        );
      }
    }

    toast(`Maintenance ${maintenanceId} updated successfully`);
  };

  const addServiceGroup = (group: Omit<ServiceGroup, "id">) => {
    const newGroup: ServiceGroup = {
      ...group,
      id: `group-${Date.now()}`,
    };
    setServiceGroups((prev) => [...prev, newGroup]);
    toast(`Service group ${group.name} added successfully`);
  };

  const updateServiceGroup = (group: ServiceGroup) => {
    setServiceGroups((prev) =>
      prev.map((g) => (g.id === group.id ? group : g))
    );
    toast(`Service group ${group.name} updated successfully`);
  };

  const deleteServiceGroup = (id: string) => {
    const groupName = serviceGroups.find((g) => g.id === id)?.name;

    // Remove group from services
    setServices((prev) =>
      prev.map((service) =>
        service.groupId === id ? { ...service, groupId: undefined } : service
      )
    );

    setServiceGroups((prev) => prev.filter((group) => group.id !== id));

    toast(`Service group ${groupName} deleted successfully`);
  };

  const getServiceStatus = () => {
    if (services.some((s) => s.status === "majorOutage")) {
      return "majorOutage";
    } else if (services.some((s) => s.status === "partialOutage")) {
      return "partialOutage";
    } else if (
      services.some(
        (s) => s.status === "degraded" || s.status === "maintenance"
      )
    ) {
      return "degraded";
    } else {
      return "operational";
    }
  };

  return (
    <StatusContext.Provider
      value={{
        services,
        incidents,
        maintenances,
        serviceGroups,
        updateServiceStatus,
        addService,
        updateService,
        deleteService,
        addIncident,
        updateIncident,
        resolveIncident,
        deleteIncident,
        addIncidentUpdate,
        addMaintenance,
        updateMaintenance,
        deleteMaintenance,
        addMaintenanceUpdate,
        addServiceGroup,
        updateServiceGroup,
        deleteServiceGroup,
        getServiceStatus,
      }}
    >
      {children}
    </StatusContext.Provider>
  );
};

export const useStatus = (): StatusContextType => {
  const context = useContext(StatusContext);
  if (context === undefined) {
    throw new Error("useStatus must be used within a StatusProvider");
  }
  return context;
};
