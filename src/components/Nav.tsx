"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/resume";

const links = [
  { href: "#summary", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#other", label: "Beyond the Role" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-zinc-200 dark:bg-black/70 dark:border-zinc-800"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {profile.name}
        </a>
        <ul className="hidden gap-8 text-sm text-zinc-600 dark:text-zinc-400 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
