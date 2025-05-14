import React from "react";
import { Service, StatusType } from "@/types";
import { useStatus } from "@/context/StatusContext";
import { Button } from "@/components/ui/button";
import { getStatusText } from "@/utils/statusUtils";

interface ServiceFormProps {
  editMode?: boolean;
  initialData?: Service;
  onCancel: () => void;
}

const ServiceForm: React.FC<ServiceFormProps> = ({
  editMode = false,
  initialData,
  onCancel,
}) => {
  const { addService, updateService, serviceGroups } = useStatus();

  const [name, setName] = React.useState(initialData?.name || "");
  const [description, setDescription] = React.useState(
    initialData?.description || ""
  );
  const [status, setStatus] = React.useState<StatusType>(
    initialData?.status || "operational"
  );
  const [groupId, setGroupId] = React.useState<string | undefined>(
    initialData?.groupId
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editMode && initialData) {
      updateService({
        ...initialData,
        name,
        description,
        status,
        groupId,
      });
    } else {
      addService({
        name,
        description,
        status,
        groupId,
      });
    }

    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Service name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Describe this service"
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Status
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as StatusType)}
          className="w-full p-2 border rounded-md"
        >
          <option value="operational">{getStatusText("operational")}</option>
          <option value="degraded">{getStatusText("degraded")}</option>
          <option value="partialOutage">
            {getStatusText("partialOutage")}
          </option>
          <option value="majorOutage">{getStatusText("majorOutage")}</option>
          <option value="maintenance">{getStatusText("maintenance")}</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Service Group
        </label>
        <select
          value={groupId || ""}
          onChange={(e) =>
            setGroupId(e.target.value === "" ? undefined : e.target.value)
          }
          className="w-full p-2 border rounded-md"
        >
          <option value="">None</option>
          {serviceGroups.map((group) => (
            <option key={group.id} value={group.id}>
              {group.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end space-x-2 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {editMode ? "Update Service" : "Add Service"}
        </Button>
      </div>
    </form>
  );
};

export default ServiceForm;
