"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowIcon } from "@/components/icons";

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
      {/* Main switch component */}
      <div
        className={cn(
          "relative flex select-none items-center rounded-full p-1",
          "border border-gray-800 bg-black",
          size === "large"
            ? "h-12 w-72 text-base sm:h-16 sm:w-96 sm:text-lg"
            : "h-10 w-64 text-xs sm:h-12 sm:w-80 sm:text-sm md:text-base",
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

      {/* Triple arrows pointing to all buttons - only show on large size (initial view) */}
      {size === "large" && (
        <div className="flex flex-col items-center mt-6">
          {/* <div 
            className={cn(
              "transition-all duration-300",
              "w-96 h-20 sm:w-[480px] sm:h-24"
            )}
          >
            <ArrowIcon 
              className="w-full h-full text-white opacity-90" 
            />
          </div> */}
          
          {/* "Click It" text */}
          <div 
            className={cn(
              "mt-2 font-medium text-white opacity-80 transition-all duration-300",
              "text-base sm:text-lg"
            )}
          >
            click to see my portfolio
          </div>
        </div>
      )}
    </div>
  );
}
