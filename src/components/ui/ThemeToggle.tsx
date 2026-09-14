"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  // null = not yet determined (avoids hydration mismatch on first paint)
  const [isDark, setIsDark] = useState<boolean | null>(null);

  // On mount: read the actual applied state from the DOM
  // (the inline script in layout.tsx already set the correct class before paint)
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  // Follow system theme changes — but only if user hasn't made an explicit choice
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem("theme");
      // Only auto-follow if user has NOT made an explicit choice
      if (stored !== "light" && stored !== "dark") {
        const nextDark = e.matches;
        document.documentElement.classList.toggle("dark", nextDark);
        setIsDark(nextDark);
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleSystemChange);
      return () => mediaQuery.removeEventListener("change", handleSystemChange);
    } else {
      // Legacy Safari
      mediaQuery.addListener(handleSystemChange);
      return () => mediaQuery.removeListener(handleSystemChange);
    }
  }, []);

  const toggle = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    // Save explicit user choice — this overrides system from now on
    localStorage.setItem("theme", nextDark ? "dark" : "light");
  };

  // Before we know the state, render an invisible placeholder
  // (prevents icon flash and hydration mismatch)
  if (isDark === null) {
    return (
      <button
        aria-label="Toggle theme"
        className="rounded-md p-2 text-heading transition-colors hover:bg-surface-alt dark:text-white dark:hover:bg-navy-dark"
      >
        <span className="block h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-md p-2 text-heading transition-colors hover:bg-surface-alt dark:text-white dark:hover:bg-navy-dark"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}