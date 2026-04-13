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
  default: "h-11 min-w-[4.25rem] px-3 text-sm sm:h-10 sm:min-w-[5.3rem] sm:px-3.5",
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
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.getAttribute("role") !== "tab") {
      return;
    }

    const tabs = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>('[role="tab"]'),
    );
    const activeIndex = tabs.indexOf(target);

    if (activeIndex < 0) {
      return;
    }

    const focusTabAt = (index: number) => {
      const safeIndex = (index + tabs.length) % tabs.length;
      const tab = tabs[safeIndex];
      const nextView = tab.dataset.view as ViewMode;

      tab.focus();
      onChange(nextView);
    };

    if (event.key === "ArrowRight") {
      event.preventDefault();
      focusTabAt(activeIndex + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusTabAt(activeIndex - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusTabAt(0);
    } else if (event.key === "End") {
      event.preventDefault();
      focusTabAt(tabs.length - 1);
    }
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div
        role="tablist"
        aria-label="Portfolio view mode"
        onKeyDown={handleKeyDown}
        className="surface-panel inline-flex max-w-full items-center gap-1 overflow-x-auto rounded-full p-1 shadow-sm"
      >
        {VIEW_OPTIONS.map((option) => (
          <Button
            key={option.value}
            data-view={option.value}
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
