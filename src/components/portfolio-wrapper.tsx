"use client";

import { useState } from "react";
import { type ReactNode } from "react";

import { ViewMode, ViewSwitch } from "@/components/view-switch";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { SimpleView } from "@/components/simplified-view";
import { JsonDisplay } from "@/components/json-display";
import { type ResumeData } from "@/lib/data";
import { ViewControlsOverlay } from "@/components/view-controls-overlay";
import { AnimatedView } from "@/components/animated-view";

interface PortfolioWrapperProps {
  data: ResumeData;
  detailedView: ReactNode;
}

/**
 * Client-side wrapper component that handles view switching and animations
 * This is the only client component at the top level, keeping server rendering benefits
 */
export function PortfolioWrapper({
  data,
  detailedView,
}: PortfolioWrapperProps) {
  // State to track the current view mode
  const [viewMode, setViewMode] = useState<ViewMode>("initial");
  // State to handle smooth transitions
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to handle view mode change with smooth animation
  const handleViewModeChange = (mode: ViewMode) => {
    // If same mode is selected, do nothing
    if (mode === viewMode) return;

    // Start smooth transition
    setIsTransitioning(true);

    // Quick transition - change content after fade out
    setTimeout(() => {
      setViewMode(mode);
      setIsTransitioning(false);
    }, 200); // Smooth transition matching CSS timing
  };

  // Initial view - just the switch button centered with shader animation background
  if (viewMode === "initial") {
    return (
      <div className="relative min-h-screen overflow-hidden">
        {/* Animated shader background */}
        <ShaderAnimation />

        {/* Content overlay */}
        <div className="absolute inset-0 z-10 flex min-h-screen flex-col items-center justify-center px-4">
          <div className="mb-8 text-center">
            <h1 className="mb-6 text-3xl font-bold text-white drop-shadow-lg sm:text-4xl">
              Select mode
            </h1>
            <p className="text-sm text-gray-300 drop-shadow-md sm:text-base">
              Choose a view mode to continue
            </p>
          </div>
          <ViewSwitch
            currentView="simple"
            onChange={handleViewModeChange}
            size="default"
          />
        </div>
      </div>
    );
  }

  const renderWithAnimation = (
    content: ReactNode,
    overlayProps?: { wrapChatbot?: boolean },
  ) => (
    <AnimatedView isTransitioning={isTransitioning}>
      {content}
      <ViewControlsOverlay
        viewMode={viewMode}
        onChange={handleViewModeChange}
        wrapChatbot={overlayProps?.wrapChatbot}
      />
    </AnimatedView>
  );

  // Simplified view
  if (viewMode === "simple") {
    return renderWithAnimation(<SimpleView data={data} />);
  }

  // Developer view - display JSON data
  if (viewMode === "developer") {
    return renderWithAnimation(
      <main className="container relative mx-auto min-h-screen scroll-my-12 overflow-auto bg-black p-2 sm:p-4 md:p-6 lg:p-8 print:p-12">
        <div className="mx-auto w-full max-w-6xl space-y-3 pt-2 text-white sm:space-y-4 sm:pt-4">
          <JsonDisplay data={data} title="My Portfolio API Data" />
        </div>
      </main>,
    );
  }

  // Full/Detailed view (original content) - Server-rendered
  return renderWithAnimation(detailedView, { wrapChatbot: false });
}
