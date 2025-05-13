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
        "relative flex h-12 w-64 select-none items-center rounded-full p-1",
        "border border-gray-800 bg-black",
        size === "large" && "h-16 w-80 text-lg",
      )}
    >
      <div
        className={cn(
          "absolute h-[calc(100%-8px)] w-[calc(50%-4px)] transform rounded-full bg-gray-800 transition-all duration-300",
          currentView === "simple" ? "left-1" : "left-[calc(50%+1px)]",
        )}
      />
      <button
        className={cn(
          "z-10 flex h-full w-1/2 items-center justify-center rounded-full font-medium transition-colors",
          currentView === "simple" ? "text-white" : "text-gray-400",
        )}
        onClick={() => onChange("simple")}
      >
        Simple
      </button>
      <button
        className={cn(
          "z-10 flex h-full w-1/2 items-center justify-center rounded-full font-medium transition-colors",
          currentView === "detailed" ? "text-white" : "text-gray-400",
        )}
        onClick={() => onChange("detailed")}
      >
        Detailed
      </button>
    </div>
  );
}
