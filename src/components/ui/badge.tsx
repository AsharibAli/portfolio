import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap",
  {
    variants: {
      variant: {
        default:
          "border-border bg-secondary text-secondary-foreground hover:bg-secondary/90 print:bg-gray-200 print:text-black",
        secondary:
          "border-border bg-background text-foreground hover:bg-accent print:bg-gray-200 print:text-black",
        destructive:
          "border-transparent bg-red-900/90 text-red-100 hover:bg-red-900",
        outline:
          "border-border bg-transparent text-foreground hover:bg-accent print:text-black print:border-gray-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
