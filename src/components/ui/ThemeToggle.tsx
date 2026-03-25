"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiSun, HiMoon } from "react-icons/hi";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark =
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (dark === null) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={toggle}
      className="relative w-9 h-9 rounded-lg flex items-center justify-center text-text-muted hover:text-primary transition-colors hover:bg-surface-light"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: dark ? 0 : 180, scale: [1, 0.8, 1] }}
        transition={{ duration: 0.3 }}
      >
        {dark ? <HiSun size={18} /> : <HiMoon size={18} />}
      </motion.div>
    </button>
  );
}
