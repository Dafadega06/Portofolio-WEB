import { GraduationCap } from "lucide-react";
import { education, trainings } from "@/content/portfolio";
import { Reveal, SectionHeader } from "./fx";

export function TrainingEducation() {
  return (
    <section id="training" className="scroll-mt-16 border-y border-border bg-surface/40 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader index="05" label="Training & Education" title="Always learning, always building." />
        <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {trainings.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.06} className="h-full">
              <div data-hover className="group flex h-full flex-col justify-between bg-background p-7 transition-colors hover:bg-surface">
                <span className="font-mono text-xs text-dim transition-colors group-hover:text-primary">T—{String(i + 1).padStart(2, "0")}</span>
                <div className="mt-10">
                  <h3 className="text-lg leading-snug tracking-tight">{t.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t.by}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <span className="label-mono flex items-center gap-2"><GraduationCap className="h-3.5 w-3.5 text-primary" /> Education</span>
          </div>
          <div className="md:col-span-9">
            {education.map((e, i) => (
              <Reveal key={e.school} delay={i * 0.1}>
                <div className="grid gap-2 border-t border-border py-8 md:grid-cols-9">
                  <span className="font-mono text-xs text-primary md:col-span-2 md:pt-2">{e.period}</span>
                  <div className="md:col-span-7">
                    <h3 className="text-2xl tracking-tight md:text-3xl">{e.school}</h3>
                    <p className="mt-1 text-muted-foreground">{e.field}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
