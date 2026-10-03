"use client";

import { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

/**
 * Light/dark toggle. The actual theme is applied pre-paint by the inline script
 * in layout.tsx (following a saved choice or the OS preference); this button just
 * reads that resolved state on mount and flips `.dark` on <html> + persists the
 * choice. We hold off on rendering the icon until mounted so the button never
 * mismatches the server-prerendered markup (static export has no `.dark` baked in).
 */
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable (private mode) — theme still applies for this session */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:text-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white"
    >
      {mounted &&
        (isDark ? (
          <IoSunnyOutline className="h-5 w-5" />
        ) : (
          <IoMoonOutline className="h-5 w-5" />
        ))}
    </button>
  );
}
