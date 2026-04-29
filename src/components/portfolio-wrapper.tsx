"use client";

import { useEffect, useState } from "react";
import { type ReactNode } from "react";

import { ViewMode } from "@/components/view-switch";
import { SimpleView } from "@/components/simplified-view";
import { JsonDisplay } from "@/components/json-display";
import { type ResumeData } from "@/lib/data";
import { ViewControlsOverlay } from "@/components/view-controls-overlay";
import { AnimatedView } from "@/components/animated-view";
import { trackEvent } from "@/lib/utils";

const DEFAULT_VIEW: ViewMode = "detailed";

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
  const [viewMode, setViewMode] = useState<ViewMode>(DEFAULT_VIEW);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    trackEvent("view_landing", { view: DEFAULT_VIEW });
  }, []);

  const handleViewModeChange = (mode: ViewMode) => {
    if (mode === viewMode) return;

    trackEvent("view_select", { from: viewMode, to: mode });

    setIsTransitioning(true);

    setTimeout(() => {
      setViewMode(mode);
      setIsTransitioning(false);
    }, 200);
  };

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
      <main className="container relative mx-auto min-h-[100dvh] scroll-my-12 bg-background px-2 pb-[calc(8.5rem+env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))] sm:p-4 sm:pb-24 md:p-6 lg:p-8 print:p-12">
        <div className="mx-auto w-full max-w-6xl space-y-3 pt-2 text-foreground sm:space-y-4 sm:pt-4">
          <JsonDisplay data={data} title="Portfolio API Data" />
        </div>
      </main>,
    );
  }

  // Full/Detailed view (original content) - Server-rendered
  return renderWithAnimation(detailedView, { wrapChatbot: false });
}
