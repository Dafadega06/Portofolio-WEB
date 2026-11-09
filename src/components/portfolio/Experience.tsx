import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { experiences } from "@/content/portfolio";
import { SectionHeader } from "./fx";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="relative scroll-mt-16 border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader index="04" label="Experience & Organizations" title="Collaboration, leadership, and shipping together." />
        <div ref={ref} className="relative md:ml-[25%]">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
          <motion.div style={{ scaleY }} className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-primary" />
          <ol className="space-y-2">
            {experiences.map((e, i) => (
              <motion.li key={e.org + i}
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative grid gap-2 py-6 pl-10 md:grid-cols-12 md:gap-6">
                <span className="absolute left-0 top-8 grid h-[15px] w-[15px] place-items-center rounded-full border border-border bg-background transition-colors group-hover:border-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-dim transition-colors group-hover:bg-primary" />
                </span>
                <span className="font-mono text-xs text-primary md:col-span-3 md:pt-1.5">{e.period}</span>
                <div className="md:col-span-9">
                  <h3 className="text-xl tracking-tight transition-colors group-hover:text-primary md:text-2xl">{e.org}</h3>
                  <p className="mt-2 text-muted-foreground">{e.role}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
