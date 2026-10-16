"use client";
import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { metrics } from "@/lib/data";
import Reveal from "./Reveal";

function CountUp({ to, decimals }: { to: number; decimals: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => { if (ref.current) ref.current.textContent = v.toFixed(decimals); },
    });
    return () => controls.stop();
  }, [inView, to, decimals]);
  return <span ref={ref}>{(0).toFixed(decimals)}</span>;
}

export default function Metrics() {
  return (
    <section aria-label="Key results" className="border-y border-line bg-surface">
      <Reveal className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-6 md:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="py-10 pr-4 md:px-6 md:first:pl-0">
            <p className="font-display text-4xl font-semibold tabular-nums text-white md:text-5xl">
              {m.prefix}<CountUp to={m.value} decimals={m.decimals} />{m.suffix}
            </p>
            <p className="mt-2 max-w-[22ch] text-sm leading-snug text-muted">{m.label}</p>
          </div>
        ))}
      </Reveal> 
    </section>
  );
}
