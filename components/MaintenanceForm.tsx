import React, { useState } from "react";
import { Maintenance } from "@/types";
import { useStatus } from "@/context/StatusContext";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { formatDateForInput } from "@/utils/dateUtils";

interface MaintenanceFormProps {
  editMode?: boolean;
  initialData?: Maintenance;
  onCancel: () => void;
}

const MaintenanceForm: React.FC<MaintenanceFormProps> = ({
  editMode = false,
  initialData,
  onCancel,
}) => {
  const { addMaintenance, updateMaintenance, services } = useStatus();

  const [title, setTitle] = useState(initialData?.title || "");
  const [status, setStatus] = useState<Maintenance["status"]>(
    initialData?.status || "scheduled"
  );
  const [scheduledStart, setScheduledStart] = useState(
    initialData ? formatDateForInput(initialData.scheduledStart) : ""
  );
  const [scheduledEnd, setScheduledEnd] = useState(
    initialData ? formatDateForInput(initialData.scheduledEnd) : ""
  );
  const [message, setMessage] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialData?.affectedServices || []
  );

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editMode && initialData) {
      updateMaintenance({
        ...initialData,
        title,
        status,
        scheduledStart: new Date(scheduledStart).toISOString(),
        scheduledEnd: new Date(scheduledEnd).toISOString(),
        affectedServices: selectedServices,
      });
    } else {
      addMaintenance({
        title,
        status,
        scheduledStart: new Date(scheduledStart).toISOString(),
        scheduledEnd: new Date(scheduledEnd).toISOString(),
        affectedServices: selectedServices,
      });
    }

    onCancel();
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
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Status
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Start Time
          </label>
          <input
            required
            type="datetime-local"
            value={scheduledStart}
            onChange={(e) => setScheduledStart(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            End Time
          </label>
          <input
            required
            type="datetime-local"
            value={scheduledEnd}
            onChange={(e) => setScheduledEnd(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Affected Services
        </label>
        <div className="border rounded-md p-3 max-h-60 overflow-y-auto space-y-2">
          {services.map((service) => (
            <div key={service.id} className="flex items-center space-x-2">
              <Checkbox
                id={`service-${service.id}`}
                checked={selectedServices.includes(service.id)}
                onCheckedChange={() => handleServiceToggle(service.id)}
              />
              <label
                htmlFor={`service-${service.id}`}
                className="text-sm cursor-pointer"
              >
                {service.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      {!editMode && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Describe the maintenance"
            rows={3}
          />
        </div>
      )}

      <div className="flex justify-end space-x-2 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {editMode ? "Update Maintenance" : "Schedule Maintenance"}
        </Button>
      </div>
    </form>
  );
};

export default MaintenanceForm;
