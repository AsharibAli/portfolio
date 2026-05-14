"use client";

import { useEffect, useTransition, type ReactNode } from "react";
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

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    trackEvent("view_landing", { view: viewMode });
  }, [viewMode]);

  // Warm the router cache for the other view routes so switching is instant.
  useEffect(() => {
    Object.values(VIEW_TO_PATH).forEach((path) => {
      if (path !== pathname) router.prefetch(path);
    });
  }, [router, pathname]);

  const handleViewModeChange = (mode: ViewMode) => {
    if (mode === viewMode) return;

    trackEvent("view_select", { from: viewMode, to: mode });

    startTransition(() => {
      router.push(VIEW_TO_PATH[mode]);
    });
  };

  return (
    <AnimatedView isTransitioning={isPending}>
      {children}
      <ViewControlsOverlay
        viewMode={viewMode}
        onChange={handleViewModeChange}
        wrapChatbot={wrapChatbot}
      />
    </AnimatedView>
  );
}
