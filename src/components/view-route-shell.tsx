"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

import { AnimatedView } from "@/components/animated-view";
import { ViewControlsOverlay } from "@/components/view-controls-overlay";
import { type ViewMode } from "@/components/view-switch";
import { trackEvent } from "@/lib/utils";

const PATH_TO_VIEW: Record<string, ViewMode> = {
  "/": "detailed",
  "/quick": "simple",
  "/api": "developer",
};

const VIEW_TO_PATH: Record<ViewMode, string> = {
  detailed: "/",
  simple: "/quick",
  developer: "/api",
};

interface ViewRouteShellProps {
  children: ReactNode;
  wrapChatbot?: boolean;
}

export function ViewRouteShell({
  children,
  wrapChatbot = true,
}: ViewRouteShellProps) {
  const router = useRouter();
  const pathname = usePathname();
  const viewMode = PATH_TO_VIEW[pathname] ?? "detailed";

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    trackEvent("view_landing", { view: viewMode });
  }, [viewMode]);

  const handleViewModeChange = (mode: ViewMode) => {
    if (mode === viewMode) return;

    trackEvent("view_select", { from: viewMode, to: mode });

    setIsTransitioning(true);
    setTimeout(() => {
      router.push(VIEW_TO_PATH[mode]);
    }, 200);
  };

  return (
    <AnimatedView isTransitioning={isTransitioning}>
      {children}
      <ViewControlsOverlay
        viewMode={viewMode}
        onChange={handleViewModeChange}
        wrapChatbot={wrapChatbot}
      />
    </AnimatedView>
  );
}
