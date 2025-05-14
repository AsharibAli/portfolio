"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type ViewMode = "initial" | "simple" | "detailed";

interface ViewSwitchProps {
  currentView: ViewMode;
  onChange: (view: ViewMode) => void;
  size?: "default" | "large";
}

export function ViewSwitch({
  currentView,
  onChange,
  size = "default",
}: ViewSwitchProps) {
  return (
    <div
      className={cn(
        "relative flex select-none items-center rounded-full p-1",
        "border border-gray-800 bg-black",
        size === "large"
          ? "h-16 w-80 text-lg"
          : "h-12 w-64 text-sm md:text-base", // Responsive text sizing
        "shadow-lg backdrop-blur-sm", // Add subtle elevation
      )}
    >
      <div
        className={cn(
          "absolute h-[calc(100%-8px)] transform rounded-full bg-gray-800 transition-all duration-300",
          size === "large" ? "w-[calc(50%-4px)]" : "w-[calc(50%-4px)]",
          currentView === "simple" ? "left-1" : "left-[calc(50%+1px)]",
        )}
      />
      <button
        className={cn(
          "z-10 flex h-full w-1/2 items-center justify-center rounded-full font-medium transition-colors",
          "touch-manipulation", // Improve touch behavior
          currentView === "simple" ? "text-white" : "text-gray-400",
        )}
        onClick={() => onChange("simple")}
        aria-pressed={currentView === "simple"}
      >
        Simple
      </button>
      <button
        className={cn(
          "z-10 flex h-full w-1/2 items-center justify-center rounded-full font-medium transition-colors",
          "touch-manipulation", // Improve touch behavior
          currentView === "detailed" ? "text-white" : "text-gray-400",
        )}
        onClick={() => onChange("detailed")}
        aria-pressed={currentView === "detailed"}
      >
        Detailed
      </button>
    </div>
  );
}
