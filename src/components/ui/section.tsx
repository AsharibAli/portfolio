import { cn } from "@/lib/utils";
import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Section({ className, ...props }: BadgeProps) {
  return (
    <section
      className={cn("flex min-h-0 flex-col gap-y-4 md:gap-y-5", className)}
      {...props}
    />
  );
}
