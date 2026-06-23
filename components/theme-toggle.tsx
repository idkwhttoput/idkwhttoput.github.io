"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const preferred = saved ? saved === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(preferred);
    document.documentElement.classList.toggle("dark", preferred);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return <button onClick={toggle} aria-label={`Switch to ${dark ? "light" : "dark"} mode`} className="grid size-10 place-items-center rounded-full border border-black/15 transition hover:bg-black hover:text-white dark:border-white/20 dark:hover:bg-white dark:hover:text-black">{dark ? <Sun size={17} /> : <Moon size={17} />}</button>;
}
