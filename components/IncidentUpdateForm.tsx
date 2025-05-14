import React, { useState } from "react";
import { Incident } from "@/types";
import { useStatus } from "@/context/StatusContext";
import { Button } from "@/components/ui/button";

interface IncidentUpdateFormProps {
  incidentId: string;
  onCancel: () => void;
}

const IncidentUpdateForm: React.FC<IncidentUpdateFormProps> = ({
  incidentId,
  onCancel,
}) => {
  const { addIncidentUpdate, incidents } = useStatus();

  const incident = incidents.find((inc) => inc.id === incidentId);

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Incident["status"]>(
    incident?.status || "investigating"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addIncidentUpdate(incidentId, message, status);
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
          Update Message
        </label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Provide an update on the incident"
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

export default IncidentUpdateForm;
