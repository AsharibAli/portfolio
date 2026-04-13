"use client";

import { ViewSwitch, type ViewMode } from "@/components/view-switch";
import FlowiseChatbot from "@/components/chatbot";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

interface ViewControlsOverlayProps {
  viewMode: ViewMode;
  onChange: (mode: ViewMode) => void;
  /**
   * The chatbot script positions itself, but some layouts need an extra fixed wrapper.
   * Keep it configurable to avoid changing existing behaviour.
   */
  wrapChatbot?: boolean;
  className?: string;
  chatbotClassName?: string;
}

export function ViewControlsOverlay({
  viewMode,
  onChange,
  wrapChatbot = true,
  className,
  chatbotClassName,
}: ViewControlsOverlayProps) {
  const isContentDenseMobileView =
    viewMode === "detailed" || viewMode === "developer";

  return (
    <>
      <div
        className={cn(
          "fixed z-50 sm:right-6 sm:top-[max(2rem,env(safe-area-inset-top))]",
          isContentDenseMobileView
            ? "right-4 top-[max(1rem,env(safe-area-inset-top))]"
            : "right-3 top-[max(0.75rem,env(safe-area-inset-top))]",
        )}
      >
        <ThemeToggle />
      </div>

      <div
        className={cn(
          "fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 z-50 w-full max-w-[calc(100%-1.25rem)] -translate-x-1/2 transform px-1 sm:bottom-[max(2rem,env(safe-area-inset-bottom))] sm:max-w-none sm:px-0",
          className,
        )}
      >
        <ViewSwitch currentView={viewMode} onChange={onChange} />
      </div>

      {wrapChatbot ? (
        <div className={cn("fixed bottom-6 right-4 z-50 sm:right-6", chatbotClassName)}>
          <FlowiseChatbot />
        </div>
      ) : (
        <FlowiseChatbot />
      )}
    </>
  );
}


