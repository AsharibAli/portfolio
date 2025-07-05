"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type ViewMode = "initial" | "simple" | "detailed" | "developer";

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
          ? "h-16 w-96 text-lg"
          : "h-12 w-80 text-sm md:text-base",
        "shadow-lg backdrop-blur-sm",
      )}
    >
      <div
        className={cn(
          "absolute h-[calc(100%-8px)] transform rounded-full bg-gray-800 transition-all duration-300",
          size === "large" ? "w-[calc(33.333%-4px)]" : "w-[calc(33.333%-4px)]",
          currentView === "simple"
            ? "left-1"
            : currentView === "detailed"
              ? "left-[calc(33.333%+1px)]"
              : "left-[calc(66.666%+1px)]",
        )}
      />
      <button
        className={cn(
          "z-10 flex h-full w-1/3 items-center justify-center rounded-full font-medium transition-colors",
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
          "z-10 flex h-full w-1/3 items-center justify-center rounded-full font-medium transition-colors",
          "touch-manipulation", // Improve touch behavior
          currentView === "detailed" ? "text-white" : "text-gray-400",
        )}
        onClick={() => onChange("detailed")}
        aria-pressed={currentView === "detailed"}
      >
        Detailed
      </button>
      <button
        className={cn(
          "z-10 flex h-full w-1/3 items-center justify-center rounded-full font-medium transition-colors",
          "touch-manipulation", // Improve touch behavior
          currentView === "developer" ? "text-white" : "text-gray-400",
        )}
        onClick={() => onChange("developer")}
        aria-pressed={currentView === "developer"}
      >
        Developer
      </button>
    </div>
  );
}
