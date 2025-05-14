import React, { useState } from "react";
import { Incident } from "@/types";
import { useStatus } from "@/context/StatusContext";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface IncidentFormProps {
  editMode?: boolean;
  initialData?: Incident;
  onCancel: () => void;
}

const IncidentForm: React.FC<IncidentFormProps> = ({
  editMode = false,
  initialData,
  onCancel,
}) => {
  const { addIncident, updateIncident, services } = useStatus();

  const [title, setTitle] = useState(initialData?.title || "");
  const [status, setStatus] = useState<Incident["status"]>(
    initialData?.status || "investigating"
  );
  const [impact, setImpact] = useState<Incident["impact"]>(
    initialData?.impact || "minor"
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
      updateIncident({
        ...initialData,
        title,
        status,
        impact,
        affectedServices: selectedServices,
      });
    } else {
      addIncident({
        title,
        status,
        impact,
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
          placeholder="Incident title"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Status
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as Incident["status"])}
          className="w-full p-2 border rounded-md"
        >
          <option value="investigating">Investigating</option>
          <option value="identified">Identified</option>
          <option value="monitoring">Monitoring</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Impact Level
        </label>
        <select
          value={impact}
          onChange={(e) => setImpact(e.target.value as Incident["impact"])}
          className="w-full p-2 border rounded-md"
        >
          <option value="none">None</option>
          <option value="minor">Minor</option>
          <option value="major">Major</option>
          <option value="critical">Critical</option>
        </select>
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
            Initial Message
          </label>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Describe the incident"
            rows={3}
          />
        </div>
      )}

      <div className="flex justify-end space-x-2 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {editMode ? "Update Incident" : "Report Incident"}
        </Button>
      </div>
    </form>
  );
};

export default IncidentForm;
