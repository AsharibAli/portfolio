"use client";

import { ViewSwitch, type ViewMode } from "@/components/view-switch";
import FlowiseChatbot from "@/components/chatbot";
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
  return (
    <>
      <div
        className={cn(
          "fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform sm:bottom-8",
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


