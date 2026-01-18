"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = (theme ?? resolvedTheme) === "dark";

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={cn(
          "glass group inline-flex h-9 w-9 items-center justify-center rounded-full shadow-sm",
          "text-[color:var(--foreground)] transition hover:opacity-95",
          className
        )}
      >
        <span aria-hidden className="h-4 w-4" />
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "glass group inline-flex h-9 w-9 items-center justify-center rounded-full shadow-sm cursor-pointer",
        "text-[color:var(--foreground)] transition hover:opacity-95",
        className
      )}
    >
      {isDark ? (
        <Moon className="h-4 w-4 transition-transform group-hover:rotate-6" />
      ) : (
        <Sun className="h-4 w-4 transition-transform group-hover:-rotate-6" />
      )}
    </button>
  );
}
