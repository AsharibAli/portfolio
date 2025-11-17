"use client";

import { MailIcon } from "lucide-react";

import { type ResumeDataWithIcons } from "@/lib/icons-mapper";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const buttonSizeMap = {
  sm: {
    button: "h-7 w-7 sm:h-8 sm:w-8",
    icon: "h-3.5 w-3.5 sm:h-4 sm:w-4",
  },
  md: {
    button: "h-8 w-8 sm:h-9 sm:w-9",
    icon: "h-4 w-4 sm:h-5 sm:w-5",
  },
} as const;

type ButtonSize = keyof typeof buttonSizeMap;

interface ContactActionsProps {
  contact: ResumeDataWithIcons["contact"];
  size?: ButtonSize;
  className?: string;
  buttonClassName?: string;
  iconClassName?: string;
}

/**
 * Small presentational helper that renders email + social buttons.
 * The layout, sizing and colors stay consistent everywhere.
 */
export function ContactActions({
  contact,
  size = "sm",
  className,
  buttonClassName,
  iconClassName,
}: ContactActionsProps) {
  const sizing = buttonSizeMap[size];

  return (
    <div className={cn("flex flex-wrap gap-1 font-mono text-sm text-muted-foreground", className)}>
      {contact.email ? (
        <Button className={cn(sizing.button, buttonClassName)} variant="outline" size="icon" asChild>
          <a href={`mailto:${contact.email}`} aria-label="Email">
            <MailIcon className={cn(sizing.icon, iconClassName)} />
          </a>
        </Button>
      ) : null}

      {contact.social.map((social) => (
        <Button
          key={social.name}
          className={cn(sizing.button, buttonClassName)}
          variant="outline"
          size="icon"
          asChild
        >
          <a href={social.url} target="_blank" aria-label={social.name}>
            <social.icon className={cn(sizing.icon, iconClassName)} />
          </a>
        </Button>
      ))}
    </div>
  );
}


