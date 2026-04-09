"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type ViewMode = "initial" | "simple" | "detailed" | "developer";

const VIEW_OPTIONS: Array<{ label: string; value: ViewMode }> = [
  { label: "Quick", value: "simple" },
  { label: "Full", value: "detailed" },
  { label: "API", value: "developer" },
];

const SIZE_STYLES = {
  default: "h-9 min-w-[4.9rem] px-3.5 text-sm sm:h-10 sm:min-w-[5.6rem]",
  large: "h-12 min-w-[7rem] px-5 text-base sm:h-14 sm:min-w-[8rem]",
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
      <div
        role="tablist"
        aria-label="Portfolio view mode"
        className="surface-panel inline-flex items-center gap-1 rounded-full p-1 shadow-sm"
      >
        {VIEW_OPTIONS.map((option) => (
          <Button
            key={option.value}
            variant="outline"
            role="tab"
            tabIndex={currentView === option.value ? 0 : -1}
            aria-selected={currentView === option.value}
            aria-label={`Switch to ${option.label} view`}
            className={cn(
              "rounded-full border border-transparent font-medium tracking-wide transition-all duration-200",
              SIZE_STYLES[size],
              currentView === option.value
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-transparent text-muted-foreground hover:border-border hover:bg-accent/60 hover:text-foreground",
            )}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
