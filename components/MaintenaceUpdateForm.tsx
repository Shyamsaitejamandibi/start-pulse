import React, { useState } from "react";
import { Maintenance } from "@/types";
import { useStatus } from "@/context/StatusContext";
import { Button } from "@/components/ui/button";

interface MaintenanceUpdateFormProps {
  maintenanceId: string;
  onCancel: () => void;
}

const MaintenanceUpdateForm: React.FC<MaintenanceUpdateFormProps> = ({
  maintenanceId,
  onCancel,
}) => {
  const { addMaintenanceUpdate, maintenances } = useStatus();

  const maintenance = maintenances.find((mnt) => mnt.id === maintenanceId);

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Maintenance["status"]>(
    maintenance?.status || "scheduled"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addMaintenanceUpdate(maintenanceId, message, status);
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Update Status
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as Maintenance["status"])}
          className="w-full p-2 border rounded-md"
        >
          <option value="scheduled">Scheduled</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
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
          placeholder="Provide an update on the maintenance"
          rows={3}
        />
      </div>

      <div className="flex justify-end space-x-2 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Add Update</Button>
      </div>
    </form>
  );
};

export default MaintenanceUpdateForm;
