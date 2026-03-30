"use client";

import { useState, useEffect, useCallback } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("dark");

  // Read from DOM on mount (DOM already set by inline script in layout)
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ? stored : prefersDark ? "dark" : "light";
    setTheme(initial);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("theme", next);
      return next;
    });
  }, []);

  const setSpecificTheme = useCallback((newTheme) => {
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  }, []);

  return {
    theme,
    isDark: theme === "dark",
    isLight: theme === "light",
    toggleTheme,
    setTheme: setSpecificTheme,
  };
}

export default useTheme;