"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/lib/data";
import OrbitSkills from "./OrbitSkills";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={`${styles.section} flex min-h-[calc(100svh-4rem)] items-center px-6 py-16 sm:px-10 lg:min-h-[100svh] lg:px-10`}>
      <div className={`${styles.content} mx-auto grid w-full max-w-[1500px] items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-2`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full"
        >
          <h1 className="font-display text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
            Hi, I&apos;m
            <br />
            <span className={styles.name}>{profile.name}</span>
          </h1>
          <p className="mt-6 text-xl leading-snug text-zinc-400 sm:text-2xl">
            Full-Stack Developer &amp; Software Engineer
          </p>
          <p className="mt-7 max-w-[680px] text-base leading-relaxed text-zinc-400 sm:text-lg">
            {/* Full-stack MERN developer with 2.9+ years of experience building enterprise and government web applications. I work across React and Next.js interfaces, Node.js and Express APIs, geospatial workflows, and automated testing. */}
            2.9+ years of experience building scalable, responsive web applications with React, Next.js, and Node.js. I care about clean, maintainable code and thoughtful experiences that work reliably.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center gap-3 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              View My Work <ArrowRight className="size-4" aria-hidden />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Get in Touch
            </a>
            <a href={profile.resume} download className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/40 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              <Download className="size-4" aria-hidden /> Resume
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-0 mx-auto w-full max-w-[620px] lg:max-w-none"
        >
          <OrbitSkills />
        </motion.div>
      </div>
    </section>
  );
}
