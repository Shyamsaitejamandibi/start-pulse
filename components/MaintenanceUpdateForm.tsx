import React from "react";
import { Maintenance } from "@prisma/client";
import { MaintenanceStatus } from "@/lib/generated/prisma";
import { Button } from "@/components/ui/button";
import { addMaintenanceUpdate } from "@/app/actions/maintenance";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface MaintenanceUpdateFormProps {
  maintenance: Maintenance;
  onCancel: () => void;
}

const statusOptions = [
  { value: MaintenanceStatus.scheduled, label: "Scheduled" },
  { value: MaintenanceStatus.in_progress, label: "In Progress" },
  { value: MaintenanceStatus.completed, label: "Completed" },
] as const;

const MaintenanceUpdateForm: React.FC<MaintenanceUpdateFormProps> = ({
  maintenance,
  onCancel,
}) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState<MaintenanceStatus>(
    maintenance.status as MaintenanceStatus
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await addMaintenanceUpdate(
        maintenance.id,
        message,
        status
      );

      if (result.error) {
        toast.error(result.error);
        return;
      }

      toast.success("Update added successfully");
      router.refresh();
      onCancel();
    } catch (error) {
      console.error("Error adding update:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Status
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as MaintenanceStatus)}
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
          Update Message
        </label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Describe the update"
          rows={3}
          disabled={isSubmitting}
        />
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
          {isSubmitting ? "Adding Update..." : "Add Update"}
        </Button>
      </div>
    </form>
  );
};

export default MaintenanceUpdateForm;
