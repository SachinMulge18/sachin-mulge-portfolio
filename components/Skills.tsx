import { skillGroups } from "@/lib/data";
import { skillCategoryIcons, TechIcon } from "./TechIcon";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
            <TechIcon name="Frontend" className="size-5" />
          </span>
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">Skills &amp; tools</h2>
        </div>
        <p className="mt-3 max-w-xl text-muted">
          The technologies and engineering practices I use to build, test, and ship web applications.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={(index % 3) * 0.05}>
            <article className="group h-full rounded-2xl border border-line bg-gradient-to-br from-surface to-[#0d0d10] p-5 transition duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:shadow-[0_16px_45px_-28px_rgba(34,211,238,0.35)]">
              <div className="flex items-center gap-3">
                {(() => {
                  const category = skillCategoryIcons[group.title];
                  const Icon = category.Icon;
                  return (
                    <span
                      className="grid size-10 place-items-center rounded-xl border border-white/5 bg-white/[0.04]"
                      style={{ color: category.color }}
                    >
                      <Icon className="size-5" aria-hidden />
                    </span>
                  );
                })()}
                <div>
                  <h3 className="font-display text-lg font-medium text-white">{group.title}</h3>
                  <p className="text-xs text-zinc-500">{group.skills.length} skills</p>
                </div>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-raised/80 px-2.5 py-2 text-xs text-zinc-300 transition-colors hover:border-white/15 hover:bg-white/[0.06]"
                  >
                    <TechIcon name={skill} className="size-3.5 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
