"use client";

import { useState } from "react";
import { LayoutGridIcon } from "lucide-react";

import { ViewSwitch, type ViewMode } from "@/components/view-switch";
import FlowiseChatbot from "@/components/chatbot";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ModePickerButtonProps {
  viewMode: ViewMode;
  onChange: (mode: ViewMode) => void;
}

function ModePickerButton({ viewMode, onChange }: ModePickerButtonProps) {
  const [open, setOpen] = useState(false);

  const handleChange = (mode: ViewMode) => {
    onChange(mode);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-11 w-11 rounded-full sm:h-9 sm:w-9"
          aria-label="Open view mode picker"
          title="Select view mode"
        >
          <LayoutGridIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="surface-panel max-w-[20rem] sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold">
            Select Mode
          </DialogTitle>
          <DialogDescription className="text-center">
            Select the view mode to continue
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center pt-2">
          <ViewSwitch
            currentView={viewMode}
            onChange={handleChange}
            size="default"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface ViewControlsOverlayProps {
  viewMode: ViewMode;
  onChange: (mode: ViewMode) => void;
  /**
   * The chatbot script positions itself, but some layouts need an extra fixed wrapper.
   * Keep it configurable to avoid changing existing behaviour.
   */
  wrapChatbot?: boolean;
  chatbotClassName?: string;
}

export function ViewControlsOverlay({
  viewMode,
  onChange,
  wrapChatbot = true,
  chatbotClassName,
}: ViewControlsOverlayProps) {
  return (
    <>
      <div
        className={cn(
          "fixed z-50 flex items-center gap-2",
          "right-7 top-[max(2.25rem,calc(env(safe-area-inset-top)+1.5rem))]",
          "sm:right-6 sm:top-[max(2rem,env(safe-area-inset-top))]",
        )}
      >
        <ModePickerButton viewMode={viewMode} onChange={onChange} />
        <ThemeToggle />
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


