"use client";

import { useMemo, useSyncExternalStore } from "react";
import { MoonStarIcon, SunMediumIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "theme-preference";

// The inline script in the root layout sets data-theme before first paint,
// so the attribute is the single source of truth for the current theme.
function subscribeToTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function readTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

function readServerTheme(): Theme {
  return "dark";
}

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    readTheme,
    readServerTheme,
  );

  const icon = useMemo(() => {
    if (theme === "dark") {
      return <SunMediumIcon className="h-4 w-4" />;
    }
    return <MoonStarIcon className="h-4 w-4" />;
  }, [theme]);

  const handleToggle = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  };

  const label =
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={handleToggle}
      className={cn("h-11 w-11 rounded-full sm:h-9 sm:w-9", className)}
      aria-label={label}
      title={label}
    >
      {icon}
    </Button>
  );
}
