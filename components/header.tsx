"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const links = ["About", "Work", "Experience", "Contact"];
export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f6f5f0]/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#161614]/85">
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
      <a href="#top" className="text-lg font-extrabold tracking-[-.04em]">AM<span className="text-[#f15b3a]">.</span></a>
      <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">{links.map((x) => <a key={x} href={`#${x.toLowerCase()}`} className="text-sm font-semibold text-black/60 transition hover:text-black dark:text-white/60 dark:hover:text-white">{x}</a>)}</nav>
      <div className="flex items-center gap-2"><ThemeToggle/><a href="#contact" className="hidden rounded-full bg-[#20201e] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#f15b3a] dark:bg-white dark:text-black sm:block">Let’s talk</a><button onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open} className="grid size-10 place-items-center md:hidden">{open ? <X/> : <Menu/>}</button></div>
    </div>
    {open && <nav className="border-t border-black/10 px-5 py-5 md:hidden dark:border-white/10">{links.map((x) => <a key={x} onClick={() => setOpen(false)} href={`#${x.toLowerCase()}`} className="block border-b border-black/10 py-4 text-2xl font-semibold dark:border-white/10">{x}</a>)}</nav>}
  </header>;
}
