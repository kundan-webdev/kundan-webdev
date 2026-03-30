"use client";

import { useEffect } from "react";

import type { Theme } from "@/hooks/useTheme";

interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: "class";
  defaultTheme?: Theme;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "dark",
  enableSystem = false,
}: ThemeProviderProps) {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolvedTheme =
      storedTheme ?? (enableSystem ? (prefersDark ? "dark" : "light") : defaultTheme);

    if (attribute === "class") {
      document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
      document.documentElement.classList.toggle("light", resolvedTheme === "light");
    }

    document.documentElement.style.colorScheme = resolvedTheme;
    localStorage.setItem("theme", resolvedTheme);
  }, [attribute, defaultTheme, enableSystem]);

  return <>{children}</>;
}
