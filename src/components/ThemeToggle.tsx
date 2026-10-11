"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setDark(isDark);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="p-2 rounded-lg text-charcoal-500 hover:text-ember-600 hover:bg-charcoal-100 dark:text-charcoal-300 dark:hover:text-ember-400 dark:hover:bg-charcoal-800 transition-colors"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
