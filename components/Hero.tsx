"use client";
import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import OrbitSkills from "./OrbitSkills";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={`${styles.section} pb-16 pt-28 md:pb-20 md:pt-36`}>
      <div className={`${styles.content} mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-2`}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <p className="mb-5 flex items-center gap-2 text-lg text-muted">
            <MapPin className="size-6 text-accent-2" aria-hidden /> Full-stack Developer · {profile.location}
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl">
            Fast apps. Polished UIs. Reliable APIs.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {profile.summary}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-zinc-950 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              View projects <ArrowDown className="size-4" aria-hidden />
            </a>
            <a href={profile.resume} download className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              <Download className="size-4" aria-hidden /> Download resume
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          <OrbitSkills />
        </motion.div>
      </div>
    </section>
  );
}
