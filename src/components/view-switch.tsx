"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type ViewMode = "initial" | "simple" | "detailed" | "developer";

const VIEW_OPTIONS: Array<{ label: string; value: ViewMode }> = [
  { label: "Simple", value: "simple" },
  { label: "Detailed", value: "detailed" },
  { label: "Developer", value: "developer" },
];

const SIZE_STYLES = {
  default: "h-8 w-20 text-xs sm:h-9 sm:w-24 sm:text-sm",
  large: "h-12 w-28 text-sm sm:h-14 sm:w-32 sm:text-base",
};

interface ViewSwitchProps {
  currentView: ViewMode;
  onChange: (view: ViewMode) => void;
  size?: keyof typeof SIZE_STYLES;
}

export function ViewSwitch({
  currentView,
  onChange,
  size = "default",
}: ViewSwitchProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="inline-flex items-center gap-1 rounded-lg border border-gray-800 bg-black p-1">
        {VIEW_OPTIONS.map((option) => (
          <Button
            key={option.value}
            variant="outline"
            className={cn(
              "border-0 font-medium transition-colors",
              SIZE_STYLES[size],
              currentView === option.value
                ? "bg-gray-800 text-white"
                : "bg-transparent text-gray-400 hover:bg-gray-800/50 hover:text-white",
            )}
            onClick={() => onChange(option.value)}
            aria-pressed={currentView === option.value}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
