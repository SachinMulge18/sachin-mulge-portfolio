import { certifications, education } from "@/lib/data";
import { Award, GraduationCap } from "lucide-react";
import Reveal from "./Reveal";

export default function Background() {
  return (
    <section id="education" className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-300">
            <GraduationCap className="size-5" aria-hidden />
          </span>
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">Education</h2>
        </div>
        <ul className="mt-8 space-y-4">
          {education.map((item) => (
            <li key={item.degree} className="rounded-2xl border border-line bg-surface p-5">
              <h3 className="font-medium text-white">{item.degree}</h3>
              <p className="mt-1 text-sm text-muted">{item.institution}</p>
              <p className="mt-3 text-xs text-zinc-400">{item.period}</p>
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
            <Award className="size-5" aria-hidden />
          </span>
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">Certifications &amp; learning</h2>
        </div>
        <ul className="mt-8 space-y-4">
          {certifications.map((item) => (
            <li key={item.name} className="rounded-2xl border border-line bg-surface p-5">
              <h3 className="font-medium text-white">{item.name}</h3>
              <p className="mt-1 text-sm text-muted">{item.provider} · {item.period}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.details}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
