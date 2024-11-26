"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  // Initialize theme detection and management
  useEffect(() => {
    // Function to handle system theme change
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const newTheme: Theme = e.matches ? "dark" : "light";
      setTheme(newTheme);
      updateThemeClass(newTheme);
      window.localStorage.setItem("theme", newTheme);
    };

    // Function to update DOM theme class
    const updateThemeClass = (activeTheme: Theme) => {
      if (activeTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    // Initialize theme based on priority:
    // 1. Local storage preference
    // 2. System preference
    // 3. Default to light
    const initializeTheme = () => {
      const storedTheme = window.localStorage.getItem("theme") as Theme | null;
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      let initialTheme: Theme;

      if (storedTheme) {
        initialTheme = storedTheme;
      } else if (systemPrefersDark) {
        initialTheme = "dark";
      } else {
        initialTheme = "light";
      }

      setTheme(initialTheme);
      updateThemeClass(initialTheme);
    };

    // Set up system theme change listener
    const systemThemeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );
    systemThemeMediaQuery.addEventListener("change", handleSystemThemeChange);

    // Initialize theme
    initializeTheme();

    // Cleanup listener on component unmount
    return () => {
      systemThemeMediaQuery.removeEventListener(
        "change",
        handleSystemThemeChange,
      );
    };
  }, []);

  // Theme toggle function with persistence
  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
