"use client";

import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface AnimatedViewProps {
  isTransitioning: boolean;
  children: ReactNode;
}

export function AnimatedView({ isTransitioning, children }: AnimatedViewProps) {
  return (
    <div className={cn("smooth-transition", isTransitioning ? "fade-out" : "fade-in")}>
      {children}
    </div>
  );
}


