import { BriefcaseBusiness, Rocket, Workflow } from "lucide-react";
import Reveal from "./Reveal";

const highlights = [
  {
    title: "2 Years 10 Months",
    subtitle: "Professional Development Experience",
    description: "Building and delivering real-world web applications.",
    icon: BriefcaseBusiness,
    color: "text-cyan-400",
    iconBackground: "bg-cyan-400/10",
  },
  {
    title: "End-to-End Architecture",
    subtitle: "Frontend + Backend",
    description: "Reusable React architecture, REST APIs, authentication, and database integration.",
    icon: Workflow,
    color: "text-violet-400",
    iconBackground: "bg-violet-400/10",
  },
  {
    title: "Production-Focused Engineering",
    subtitle: "Performance, Testing & Deployment",
    description: "API optimization, Playwright testing, Docker, and CI/CD workflows.",
    icon: Rocket,
    color: "text-amber-400",
    iconBackground: "bg-amber-400/10",
  },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-16 border-y border-line bg-surface px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 id="about-heading" className="font-display text-3xl font-semibold text-white md:text-4xl">
            About Me
          </h2>
          <p className="mt-2 text-lg font-medium text-zinc-300">
            Full-Stack Developer | Frontend &amp; Backend Architecture
          </p>
          <div className="mt-6 max-w-4xl space-y-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            <p>
              With <strong className="font-semibold text-zinc-200">2 years and 10 months of experience</strong>, I build scalable web applications by architecting responsive frontend interfaces, robust backend services, and efficient API-driven systems.
            </p>
            <p>
              My experience spans <strong className="font-semibold text-zinc-200">React.js, Next.js, Node.js, Express.js, and databases</strong>, with hands-on work in enterprise CRM platforms, geospatial applications, land acquisition workflows, payment integrations, and document verification systems.
            </p>
            <p>
              I focus on <strong className="font-semibold text-zinc-200">clean architecture, reusable components, performance optimization, secure APIs, and maintainable code</strong>—turning complex business requirements into reliable, production-ready applications.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <ul className="grid overflow-hidden rounded-2xl border border-white/10 bg-base/70 md:grid-cols-3 md:divide-x md:divide-white/[0.08]">
            {highlights.map(({ title, subtitle, description, icon: Icon, color, iconBackground }) => (
              <li key={title} className="flex gap-3 border-b border-white/[0.08] px-4 py-4 last:border-b-0 md:border-b-0 md:px-4 md:py-5">
                <span className={`grid size-9 shrink-0 place-items-center rounded-lg ${iconBackground} ${color}`}>
                  <Icon className="size-5" aria-hidden />
                </span>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-sm font-semibold leading-snug text-white">{title}</h3>
                  <p className="mt-1 text-xs text-zinc-300">{subtitle}</p>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-400">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
