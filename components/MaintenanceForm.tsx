import React from "react";
import { Maintenance, Service } from "@prisma/client";
import { MaintenanceStatus } from "@/lib/generated/prisma";
import { Button } from "@/components/ui/button";
import { addMaintenance, updateMaintenance } from "@/app/actions/maintenance";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface MaintenanceFormProps {
  editMode?: boolean;
  initialData?: Maintenance & {
    affectedServices: { id: string }[];
  };
  onCancel: () => void;
  services: Service[];
}

const statusOptions = [
  { value: MaintenanceStatus.scheduled, label: "Scheduled" },
  { value: MaintenanceStatus.in_progress, label: "In Progress" },
  { value: MaintenanceStatus.completed, label: "Completed" },
] as const;

const MaintenanceForm: React.FC<MaintenanceFormProps> = ({
  editMode = false,
  initialData,
  onCancel,
  services,
}) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [title, setTitle] = React.useState(initialData?.title || "");
  const [description, setDescription] = React.useState(
    initialData?.description || ""
  );
  const [status, setStatus] = React.useState<MaintenanceStatus>(
    (initialData?.status as MaintenanceStatus) || MaintenanceStatus.scheduled
  );
  const [startTime, setStartTime] = React.useState<string>(
    initialData?.startTime
      ? new Date(initialData.startTime).toISOString().slice(0, 16)
      : ""
  );
  const [endTime, setEndTime] = React.useState<string>(
    initialData?.endTime
      ? new Date(initialData.endTime).toISOString().slice(0, 16)
      : ""
  );
  const [affectedServices, setAffectedServices] = React.useState<string[]>(
    initialData?.affectedServices?.map((s) => s.id) || []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const maintenanceData = {
        title,
        description,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        affectedServices,
      };

      if (editMode && initialData) {
        const result = await updateMaintenance(initialData.id, maintenanceData);
        if (result.error) {
          toast.error(result.error);
          return;
        }
        toast.success("Maintenance updated successfully");
      } else {
        const result = await addMaintenance(maintenanceData);
        if (result.error) {
          toast.error(result.error);
          return;
        }
        toast.success("Maintenance scheduled successfully");
      }

      router.refresh();
      onCancel();
    } catch (error) {
      console.error("Error submitting maintenance:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as MaintenanceStatus;
    setStatus(value);
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setAffectedServices(selectedOptions);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          required
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Maintenance title"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Describe the maintenance"
          rows={3}
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Status
        </label>
        <select
          value={status}
          onChange={handleStatusChange}
          className="w-full p-2 border rounded-md"
          disabled={isSubmitting}
        >
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Start Time
        </label>
        <input
          required
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="w-full p-2 border rounded-md"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          End Time
        </label>
        <input
          required
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="w-full p-2 border rounded-md"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Affected Services
        </label>
        <select
          multiple
          value={affectedServices}
          onChange={handleServiceChange}
          className="w-full p-2 border rounded-md"
          disabled={isSubmitting}
        >
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end space-x-2 pt-2">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? "Saving..."
            : editMode
            ? "Update Maintenance"
            : "Add Maintenance"}
        </Button>
      </div>
    </form>
  );
};

export default MaintenanceForm;
