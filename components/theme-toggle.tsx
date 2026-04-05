"use client";

import { MoonStar, SunMedium } from "lucide-react";

export function ThemeToggle() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const nextIsDark = !root.classList.contains("dark");

    root.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
  };

  return (
    <button
      type="button"
      aria-label="Toggle color mode"
      onClick={toggleTheme}
      className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/70 text-foreground backdrop-blur transition duration-300 hover:border-foreground/50 hover:bg-background"
    >
      <SunMedium
        className="absolute size-4 rotate-0 scale-100 opacity-100 transition duration-300 dark:rotate-90 dark:scale-0 dark:opacity-0"
      />
      <MoonStar
        className="absolute size-4 -rotate-90 scale-0 opacity-0 transition duration-300 dark:rotate-0 dark:scale-100 dark:opacity-100"
      />
    </button>
  );
}
