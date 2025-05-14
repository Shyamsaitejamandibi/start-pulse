"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { formatTimeAgo, formatDateRange } from "@/utils/dateUtils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import MaintenanceForm from "@/components/MaintenanceForm";
import MaintenanceUpdateForm from "@/components/MaintenanceUpdateForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getMaintenanceStatusColor } from "@/utils/statusUtils";
import {
  Maintenance,
  Service,
  MaintenanceStatus,
} from "@/lib/generated/prisma";
import { deleteMaintenance } from "@/app/actions/maintenance";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type MaintenanceWithRelations = Maintenance & {
  affectedServices: Service[];
  updates: {
    id: string;
    message: string;
    status: MaintenanceStatus;
    createdAt: Date;
    createdBy: string;
  }[];
};

interface MaintenanceOverviewProps {
  maintenances: MaintenanceWithRelations[];
  services: Service[];
}

export default function MaintenanceOverview({
  maintenances,
  services,
}: MaintenanceOverviewProps) {
  const router = useRouter();
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedMaintenance, setSelectedMaintenance] =
    useState<MaintenanceWithRelations | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDeleteMaintenance = async (maintenanceId: string) => {
    if (!confirm("Are you sure you want to delete this maintenance?")) {
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await deleteMaintenance(maintenanceId);
      if (result.error) {
        toast.error(result.error);
        return;
      }
      toast.success("Maintenance deleted successfully");
      router.refresh();
    } catch (error) {
      console.error("Error deleting maintenance:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Filter maintenances
  const upcomingMaintenances = maintenances.filter(
    (m) => m.status === "scheduled"
  );
  const inProgressMaintenances = maintenances.filter(
    (m) => m.status === "in_progress"
  );
  const completedMaintenances = maintenances.filter(
    (m) => m.status === "completed"
  );

  const activeMaintenances = [
    ...upcomingMaintenances,
    ...inProgressMaintenances,
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Maintenance Windows
        </h2>
        <Button onClick={() => setShowAddForm(true)} disabled={isSubmitting}>
          Schedule Maintenance
        </Button>
      </div>

      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active & Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="pt-6">
          {activeMaintenances.length > 0 ? (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Schedule
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {activeMaintenances.map((maintenance) => (
                    <tr key={maintenance.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {maintenance.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-block px-2 py-1 text-xs rounded-full ${getMaintenanceStatusColor(
                            maintenance.status as MaintenanceStatus
                          )}`}
                        >
                          {maintenance.status === "scheduled"
                            ? "Scheduled"
                            : "In Progress"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDateRange(
                          maintenance.startTime.toISOString(),
                          maintenance.endTime.toISOString()
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setSelectedMaintenance(maintenance);
                            setShowUpdateForm(true);
                          }}
                        >
                          Add Update
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setSelectedMaintenance(maintenance);
                            setShowEditForm(true);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-800"
                          onClick={() =>
                            handleDeleteMaintenance(maintenance.id)
                          }
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500 mb-4">
                No scheduled maintenance windows.
              </p>
              <Button onClick={() => setShowAddForm(true)}>
                Schedule Maintenance
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="completed" className="pt-6">
          {completedMaintenances.length > 0 ? (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Schedule
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Created
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {completedMaintenances.map((maintenance) => (
                    <tr key={maintenance.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {maintenance.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDateRange(
                          maintenance.startTime.toISOString(),
                          maintenance.endTime.toISOString()
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatTimeAgo(maintenance.createdAt.toISOString())}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-800"
                          onClick={() =>
                            handleDeleteMaintenance(maintenance.id)
                          }
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500">
                No completed maintenance windows yet.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Add Maintenance Dialog */}
      <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Schedule Maintenance</DialogTitle>
          </DialogHeader>
          <MaintenanceForm
            services={services}
            onCancel={() => setShowAddForm(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Edit Maintenance Dialog */}
      <Dialog
        open={showEditForm && !!selectedMaintenance}
        onOpenChange={setShowEditForm}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Maintenance</DialogTitle>
          </DialogHeader>
          {selectedMaintenance && (
            <MaintenanceForm
              editMode
              initialData={selectedMaintenance}
              services={services}
              onCancel={() => {
                setShowEditForm(false);
                setSelectedMaintenance(null);
              }}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Add Update Dialog */}
      <Dialog
        open={showUpdateForm && !!selectedMaintenance}
        onOpenChange={setShowUpdateForm}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Maintenance Update</DialogTitle>
          </DialogHeader>
          {selectedMaintenance && (
            <MaintenanceUpdateForm
              maintenance={selectedMaintenance}
              onCancel={() => {
                setShowUpdateForm(false);
                setSelectedMaintenance(null);
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
