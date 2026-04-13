"use client";

import { useEffect, useMemo, useState } from "react";
import { MoonStarIcon, SunMediumIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "theme-preference";

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  const icon = useMemo(() => {
    if (theme === "dark") {
      return <SunMediumIcon className="h-4 w-4" />;
    }
    return <MoonStarIcon className="h-4 w-4" />;
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const currentTheme: Theme =
      savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    setTheme(currentTheme);
    setMounted(true);
  }, []);

  const handleToggle = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={handleToggle}
      className={cn("h-11 w-11 rounded-full sm:h-9 sm:w-9", className)}
      aria-label={
        mounted
          ? theme === "dark"
            ? "Switch to light theme"
            : "Switch to dark theme"
          : "Toggle theme"
      }
      title={
        mounted ? (theme === "dark" ? "Switch to light theme" : "Switch to dark theme") : undefined
      }
    >
      {icon}
    </Button>
  );
}
