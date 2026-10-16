"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-base/70 backdrop-blur-md">
      <nav className="relative mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Primary">
        <a href="#home" className="font-display font-medium text-white">&lt; Sachin Mulge /&gt;</a>
        <ul className="hidden gap-5 text-sm text-muted md:flex">
          {links.map(([label, href]) => (
            <li key={href}><a href={href} className="transition hover:text-white">{label}</a></li>
          ))}
        </ul>
        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg border border-line text-zinc-200 transition hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
        {menuOpen && (
          <ul
            id="mobile-navigation"
            className="absolute inset-x-0 top-full grid gap-1 border-b border-line bg-base/95 p-3 text-sm text-muted shadow-xl backdrop-blur-md md:hidden"
          >
            {links.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 transition hover:bg-raised hover:text-white focus-visible:outline-2 focus-visible:outline-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
