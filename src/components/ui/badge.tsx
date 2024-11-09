import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-gray-800 text-white hover:bg-gray-700 print:bg-gray-200 print:text-black",
        secondary:
          "border-gray-700 bg-gray-900 text-gray-100 hover:bg-gray-800 print:bg-gray-200 print:text-black",
        destructive:
          "border-transparent bg-red-900/90 text-red-100 hover:bg-red-900",
        outline: "text-white border-gray-700 hover:bg-gray-800/50 print:text-black print:border-gray-300",
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
