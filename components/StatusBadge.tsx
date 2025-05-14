import React from "react";
import { getStatusColor, getStatusText } from "@/utils/statusUtils";
import { StatusType } from "@/types";

interface StatusBadgeProps {
  status: StatusType;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
  animate?: boolean;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  size = "md",
  showText = true,
  className = "",
  animate = false,
}) => {
  const sizeClasses = {
    sm: "h-2 w-2",
    md: "h-3 w-3",
    lg: "h-4 w-4",
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span
        className={`${getStatusColor(status)} ${
          sizeClasses[size]
        } rounded-full ${animate ? "animate-pulse-slow" : ""}`}
      />
      {showText && (
        <span className="text-sm font-medium">{getStatusText(status)}</span>
      )}
    </div>
  );
};

export default StatusBadge;
