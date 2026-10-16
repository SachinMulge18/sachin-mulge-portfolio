"use client";
import { motion } from "framer-motion";
import {
  FaClipboardCheck,
  FaCreditCard,
  FaDiagramProject,
  FaLandmark,
  FaMapLocationDot,
  FaPlane,
  FaServer,
  FaCode,
  FaUsers,
} from "react-icons/fa6";
import { projects } from "@/lib/data";
import { TechIcon } from "./TechIcon";
import Reveal from "./Reveal";

const projectVisuals = [
  { Icon: FaLandmark, category: "Government · Geospatial", color: "#34d399" },
  { Icon: FaMapLocationDot, category: "Property · Mapping", color: "#38bdf8" },
  { Icon: FaDiagramProject, category: "Agile · Full stack", color: "#a78bfa" },
  { Icon: FaUsers, category: "CRM · Automation", color: "#fb923c" },
  { Icon: FaClipboardCheck, category: "Hiring · Workflow", color: "#f472b6" },
  { Icon: FaCreditCard, category: "Payments · Verification", color: "#60a5fa" },
  { Icon: FaPlane, category: "Travel · Dashboard", color: "#facc15" },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl border border-emerald-400/20 bg-emerald-400/10">
            <FaDiagramProject className="size-5 text-emerald-300" aria-hidden />
          </span>
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">Selected projects</h2>
        </div>
        <p className="mt-3 max-w-xl text-muted">
          Full-stack product work spanning government workflows, geospatial tools, business platforms, and test automation.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => {
          const visual = projectVisuals[i];
          const ProjectIcon = visual.Icon;
          return (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-surface via-surface to-[#0d0d10] p-6 transition-colors duration-300 hover:border-white/20 hover:shadow-[0_18px_55px_-28px_rgba(34,211,238,0.35)]"
          >
            <div
              className="pointer-events-none absolute -right-12 -top-14 size-40 rounded-full opacity-[0.07] blur-3xl transition-opacity group-hover:opacity-15"
              style={{ backgroundColor: visual.color }}
              aria-hidden
            />
            <div className="relative flex items-start gap-4">
              <span
                className="grid size-14 shrink-0 place-items-center rounded-2xl border border-white/[0.08] bg-white/[0.04] shadow-inner"
                style={{ color: visual.color, boxShadow: `inset 0 0 22px ${visual.color}18` }}
              >
                <ProjectIcon className="size-6" aria-hidden />
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: visual.color }}>
                  {visual.category}
                </p>
                <h3 className="font-display text-xl font-medium leading-snug text-white">{p.title}</h3>
              </div>
              <span className="ml-auto hidden font-display text-3xl font-semibold tabular-nums text-white/[0.08] sm:block">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="relative mt-4 flex-1 leading-relaxed text-muted">{p.summary}</p>
            <div className="relative mt-5 grid gap-4 border-t border-line pt-5 sm:grid-cols-2">
              <div className="rounded-xl border border-white/[0.05] bg-black/10 p-3.5">
                <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                  <FaCode className="size-3.5 text-cyan-300" aria-hidden /> Frontend
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.frontend}</p>
              </div>
              <div className="rounded-xl border border-white/[0.05] bg-black/10 p-3.5">
                <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                  <FaServer className="size-3.5 text-violet-300" aria-hidden /> Backend &amp; API
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.backend}</p>
              </div>
            </div>
            <ul className="relative mt-5 flex flex-wrap gap-2 border-t border-line pt-5" aria-label="Technologies">
              {p.tags.map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-raised/80 px-2.5 py-1.5 text-[11px] text-zinc-300">
                  <TechIcon name={t} className="size-3.5 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.article>
          );
        })}
      </div>
    </section>
  );
}
