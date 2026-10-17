"use client";

import { useState } from "react";
import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  House,
  Mail,
  Menu,
  FolderKanban,
  UserRound,
  X,
} from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { label: "Home", href: "#home", icon: House },
  { label: "About", href: "#about", icon: UserRound },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Experience", href: "#experience", icon: BriefcaseBusiness },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navigation = (
    <ul className="grid gap-1">
      {links.map(({ label, href, icon: Icon }) => (
        <li key={href}>
          <a
            href={href}
            aria-current={activeLink === href ? "page" : undefined}
            onClick={() => {
              setActiveLink(href);
              setMenuOpen(false);
            }}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
              activeLink === href
                ? "bg-white text-zinc-950"
                : "text-zinc-300 hover:bg-white/8 hover:text-white"
            }`}
          >
            <Icon className="size-5 shrink-0" aria-hidden />
            {label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-base/95 backdrop-blur-lg lg:hidden">
        <nav className="flex h-16 items-center justify-between px-5" aria-label="Primary">
          <a href="#home" className="font-display text-lg font-semibold tracking-tight text-white">SM<span className="text-blue-400">.</span></a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-lg border border-white/15 text-zinc-200 transition hover:border-white/40 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </nav>
        {menuOpen && (
          <div id="mobile-navigation" className="absolute inset-x-0 top-full border-b border-white/10 bg-base/98 p-4 shadow-2xl">
            {navigation}
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-300 transition hover:bg-white/8 hover:text-white"
            >
              <Mail className="size-5 shrink-0" aria-hidden />
              Connect
            </a>
          </div>
        )}
      </header>

      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[250px] flex-col border-r border-white/10 bg-base px-[18px] py-7 lg:flex">
        <a href="#home" className="mb-12 px-2 font-display text-xl font-semibold tracking-tight text-white">
          SM<span className="text-blue-400">.</span>
        </a>
        <nav aria-label="Primary" className="flex-1">
          {navigation}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-300 transition hover:bg-white/8 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <Mail className="size-5 shrink-0" aria-hidden />
          Connect
        </a>
      </aside>
    </>
  );
}
