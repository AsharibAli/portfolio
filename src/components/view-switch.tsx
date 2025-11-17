"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
    <div className="flex flex-col items-center">
      {/* View switch buttons in a single container row */}
      <div className="inline-flex items-center gap-1 rounded-lg border border-gray-800 bg-black p-1">
        <Button
          variant="outline"
          className={cn(
            "h-8 w-20 border-0 text-xs font-medium transition-colors sm:h-9 sm:w-24 sm:text-sm",
            currentView === "simple"
              ? "bg-gray-800 text-white"
              : "bg-transparent text-gray-400 hover:bg-gray-800/50 hover:text-white",
          )}
          onClick={() => onChange("simple")}
          aria-pressed={currentView === "simple"}
        >
          Simple
        </Button>
        <Button
          variant="outline"
          className={cn(
            "h-8 w-20 border-0 text-xs font-medium transition-colors sm:h-9 sm:w-24 sm:text-sm",
            currentView === "detailed"
              ? "bg-gray-800 text-white"
              : "bg-transparent text-gray-400 hover:bg-gray-800/50 hover:text-white",
          )}
          onClick={() => onChange("detailed")}
          aria-pressed={currentView === "detailed"}
        >
          Detailed
        </Button>
        <Button
          variant="outline"
          className={cn(
            "h-8 w-20 border-0 text-xs font-medium transition-colors sm:h-9 sm:w-24 sm:text-sm",
            currentView === "developer"
              ? "bg-gray-800 text-white"
              : "bg-transparent text-gray-400 hover:bg-gray-800/50 hover:text-white",
          )}
          onClick={() => onChange("developer")}
          aria-pressed={currentView === "developer"}
        >
          Developer
        </Button>
      </div>
    </div>
  );
}
