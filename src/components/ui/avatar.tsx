"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type AvatarProps = React.ComponentPropsWithoutRef<"span">;
type AvatarImageProps = React.ComponentPropsWithoutRef<"img">;
type AvatarFallbackProps = React.ComponentPropsWithoutRef<"span">;

const AvatarContext = React.createContext<{ imageFailed: boolean; setImageFailed: (value: boolean) => void } | null>(null);

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, ...props }, ref) => {
    const [imageFailed, setImageFailed] = React.useState(false);

    return (
      <AvatarContext.Provider value={{ imageFailed, setImageFailed }}>
        <span
          ref={ref}
          className={cn(
            "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-xl",
            className,
          )}
          {...props}
        />
      </AvatarContext.Provider>
    );
  },
);
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, alt = "", onError, ...props }, ref) => {
    const context = React.useContext(AvatarContext);
    if (context?.imageFailed) return null;

    return (
      <img
        ref={ref}
        className={cn("aspect-square h-full w-full object-cover", className)}
        alt={alt}
        onError={(event) => {
          context?.setImageFailed(true);
          onError?.(event);
        }}
        {...props}
      />
    );
  },
);
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(AvatarContext);
    if (!context?.imageFailed) return null;

    return (
      <span
        ref={ref}
        className={cn(
          "flex h-full w-full items-center justify-center rounded-xl bg-muted",
          className,
        )}
        {...props}
      />
    );
  },
);
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
