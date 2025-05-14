import React from "react";
import { ServiceGroup } from "@/types";
import { useStatus } from "@/context/StatusContext";
import { Button } from "@/components/ui/button";

interface ServiceGroupFormProps {
  editMode?: boolean;
  initialData?: ServiceGroup;
  onCancel: () => void;
}

const ServiceGroupForm: React.FC<ServiceGroupFormProps> = ({
  editMode = false,
  initialData,
  onCancel,
}) => {
  const { addServiceGroup, updateServiceGroup } = useStatus();

  const [name, setName] = React.useState(initialData?.name || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editMode && initialData) {
      updateServiceGroup({
        ...initialData,
        name,
      });
    } else {
      addServiceGroup({
        name,
      });
    }

    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Group Name
        </label>
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Group name"
        />
      </div>

      <div className="flex justify-end space-x-2 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">{editMode ? "Update Group" : "Add Group"}</Button>
      </div>
    </form>
  );
};

export default ServiceGroupForm;
