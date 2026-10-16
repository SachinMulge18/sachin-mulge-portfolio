"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BriefcaseBusiness, ChevronDown } from "lucide-react";
import { experience } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
            <BriefcaseBusiness className="size-5" aria-hidden />
          </span>
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">Experience</h2>
        </div>
      </Reveal>
      <ol className="relative mt-12 border-l border-line">
        {experience.map((job, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={job.company} delay={i * 0.06}>
              <li className="relative pb-8 pl-8 last:pb-0">
                <span className={`absolute -left-[5px] top-6 size-2.5 rounded-full transition-colors ${isOpen ? "bg-accent shadow-[0_0_12px_var(--color-accent)]" : "bg-zinc-600"}`} />
                <div className="rounded-2xl border border-line bg-surface transition-colors hover:border-zinc-600">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 rounded-2xl p-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <span>
                      <span className="block font-display text-lg font-medium text-white">{job.role}</span>
                      <span className="block text-sm text-muted">{job.company} · {job.period}</span>
                    </span>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <ChevronDown className="size-5 text-muted" aria-hidden />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5">
                          <ul className="list-disc space-y-2 pl-5 text-muted marker:text-zinc-600">
                            {job.points.map((p) => <li key={p}>{p}</li>)}
                          </ul>
                          <ul className="mt-4 flex flex-wrap gap-2">
                            {job.stack.map((s) => <li key={s} className="rounded-md bg-raised px-2.5 py-1 text-xs text-zinc-300">{s}</li>)}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </li>
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
}
