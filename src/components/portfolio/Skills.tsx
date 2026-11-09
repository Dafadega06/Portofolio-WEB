import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Boxes, Brain, Code2, Database, Layout, Network, Plus, Server, Users, Wrench, type LucideIcon } from "lucide-react";
import { skills } from "@/content/portfolio";
import { SectionHeader } from "./fx";

const icons: Record<string, LucideIcon> = { Code2, Layout, Server, Database, Brain, Network, Boxes, Wrench, Users };

export function Skills() {
  const [open, setOpen] = useState<string[]>(["lang", "fe"]);
  const toggle = (id: string) => setOpen((o) => (o.includes(id) ? o.filter((x) => x !== id) : [...o, id]));
  return (
    <section id="skills" className="relative scroll-mt-16 border-y border-border bg-surface/40 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader index="02" label="Technical Skills" title="A toolkit across the stack." />
        <div className="flex justify-end pb-4">
          <button onClick={() => setOpen(open.length === skills.length ? [] : skills.map((s) => s.id))} className="label-mono hover:text-primary">
            {open.length === skills.length ? "Collapse all" : "Expand all"}
          </button>
        </div>
        <div className="border-t border-border">
          {skills.map((g, i) => {
            const I = icons[g.icon] ?? Boxes;
            const isOpen = open.includes(g.id);
            return (
              <div key={g.id} className="border-b border-border">
                <button onClick={() => toggle(g.id)} aria-expanded={isOpen} className="group grid w-full grid-cols-12 items-center gap-4 py-6 text-left">
                  <span className="col-span-2 font-mono text-xs text-dim md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                  <span className="col-span-8 flex items-center gap-4 md:col-span-9">
                    <I className={`h-5 w-5 shrink-0 transition-colors ${isOpen ? "text-primary" : "text-dim group-hover:text-foreground"}`} />
                    <span className="text-xl tracking-tight transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">{g.title}</span>
                  </span>
                  <span className="col-span-2 flex items-center justify-end gap-4">
                    <span className="hidden font-mono text-xs text-dim md:inline">{g.items.length}</span>
                    <Plus className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-45 text-primary" : ""}`} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                      <ul className="flex flex-wrap gap-2 pb-8 md:pl-[8.33%]">
                        {g.items.map((s, j) => (
                          <motion.li key={s} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: j * 0.03 }}
                            data-hover
                            className="rounded-full border border-border px-4 py-2 font-mono text-xs text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-accent hover:text-primary">
                            {s}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
