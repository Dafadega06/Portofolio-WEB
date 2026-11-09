import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Github, ExternalLink, ImageIcon } from "lucide-react";
import { projects, type Category, type Project } from "@/content/portfolio";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Reveal, SectionHeader } from "./fx";

const filters: ("All" | Category)[] = ["All", "Full-Stack", "Frontend", "Backend", "AI/ML", "Software Development"];

function ShotPlaceholder({ className = "", src, video, alt = "", controls = false }: { className?: string; src?: string | undefined; video?: string | undefined; alt?: string; controls?: boolean }) {
  if (video) return <video src={video} poster={src} autoPlay muted loop playsInline controls={controls} preload="metadata" aria-label={alt} className={`object-cover border border-border bg-surface ${className}`} />;
  if (src) return <img src={src} alt={alt} loading="lazy" className={`object-cover border border-border ${className}`} />;
  return (
    <div className={`relative flex items-center justify-center overflow-hidden border border-dashed border-border placeholder-stripes ${className}`}>
      <span className="flex items-center gap-2 label-mono"><ImageIcon className="h-3.5 w-3.5" /> Screenshot placeholder</span>
    </div>
  );
}

function Tech({ items, max }: { items: string[]; max?: number }) {
  if (!items.length) return <span className="font-mono text-xs text-dim">Tech stack — TBA</span>;
  const shown = max ? items.slice(0, max) : items;
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-1">
      {shown.map((t) => <span key={t} className="font-mono text-xs text-muted-foreground">{t}</span>)}
      {max && items.length > max && <span className="font-mono text-xs text-dim">+{items.length - max}</span>}
    </div>
  );
}

function Featured({ p, i, onOpen }: { p: Project; i: number; onOpen: () => void }) {
  return (
    <Reveal>
      <button onClick={onOpen} className={`group grid w-full gap-8 border-t border-border py-12 text-left md:grid-cols-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
        <ShotPlaceholder src={p.image} video={p.video} alt={`Screenshot ${p.title}`} className="w-full aspect-[16/10] rounded-md transition-colors duration-500 group-hover:border-primary/50 md:col-span-7" />
        <div className="flex flex-col justify-between md:col-span-5">
          <div>
            <div className="mb-6 flex items-center justify-between">
              <span className="font-mono text-xs text-primary">Featured / {String(i + 1).padStart(2, "0")}</span>
              <span className="label-mono">{p.categories[0]}</span>
            </div>
            <h3 className="text-3xl font-medium leading-tight tracking-tight transition-colors group-hover:text-primary md:text-4xl">{p.title}</h3>
            <p className="mt-4 text-muted-foreground">{p.description}</p>
          </div>
          <div className="mt-8 flex items-end justify-between gap-4">
            <Tech items={p.tech} max={6} />
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border transition-all duration-300 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </button>
    </Reveal>
  );
}

function Row({ p, n, onOpen }: { p: Project; n: number; onOpen: () => void }) {
  return (
    <motion.li layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <button onClick={onOpen} className="group relative grid w-full grid-cols-12 items-center gap-4 border-b border-border py-6 text-left transition-colors hover:bg-surface md:px-4">
        <span className="absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100" />
        <span className="col-span-2 font-mono text-xs text-dim md:col-span-1">{String(n).padStart(2, "0")}</span>
        <span className="col-span-9 text-lg tracking-tight transition-transform duration-300 group-hover:translate-x-2 md:col-span-5 md:text-xl">{p.title}</span>
        <span className="hidden md:col-span-4 md:block"><Tech items={p.tech} max={3} /></span>
        <span className="col-span-1 flex justify-end md:col-span-2">
          <ArrowUpRight className="h-4 w-4 text-dim transition-all group-hover:rotate-45 group-hover:text-primary" />
        </span>
      </button>
    </motion.li>
  );
}

function LinkSlot({ href, label, icon: I }: { href?: string | undefined; label: string; icon: typeof Github }) {
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary">
      <I className="h-4 w-4" /> {label}
    </a>
  ) : (
    <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-border px-4 py-2 text-sm text-dim" title="Belum tersedia">
      <I className="h-4 w-4" /> {label} — coming soon
    </span>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);
  const list = useMemo(() => (filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter))), [filter]);
  const featured = list.filter((p) => p.featured);
  const rest = list.filter((p) => !p.featured);

  return (
    <section id="projects" className="mx-auto max-w-7xl scroll-mt-16 px-6 py-28 md:px-10 md:py-40">
      <SectionHeader index="03" label="Selected Work" title="Projects built to solve real workflows." />
      <div className="mb-10 flex flex-wrap gap-2" role="tablist">
        {filters.map((f) => (
          <button key={f} role="tab" aria-selected={filter === f} onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-2 font-mono text-xs transition-colors ${filter === f ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"}`}>
            {f} <span className="opacity-60">{f === "All" ? projects.length : projects.filter((p) => p.categories.includes(f)).length}</span>
          </button>
        ))}
      </div>

      {featured.map((p, i) => <Featured key={p.id} p={p} i={i} onOpen={() => setActive(p)} />)}

      {rest.length > 0 && (
        <div className="mt-16">
          <p className="label-mono mb-4">{featured.length ? "More projects" : "Projects"}</p>
          <ul className="border-t border-border">
            <AnimatePresence mode="popLayout">
              {rest.map((p, i) => <Row key={p.id} p={p} n={featured.length + i + 1} onOpen={() => setActive(p)} />)}
            </AnimatePresence>
          </ul>
        </div>
      )}

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto border-border bg-background">
          {active && (
            <div>
              <ShotPlaceholder src={active.image} video={active.video} controls alt={`Screenshot ${active.title}`} className="w-full mb-6 aspect-[16/9] rounded-md" />
              <div className="mb-2 flex flex-wrap gap-2">
                {active.categories.map((c) => <span key={c} className="font-mono text-[11px] text-primary">#{c}</span>)}
              </div>
              <DialogTitle className="text-3xl font-medium tracking-tight">{active.title}</DialogTitle>
              <DialogDescription className="mt-3 text-base text-muted-foreground">{active.description}</DialogDescription>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <p className="label-mono mb-3">Key features</p>
                  {active.features?.length ? (
                    <ul className="space-y-2 text-sm">
                      {active.features.map((f) => <li key={f} className="flex gap-2"><span className="text-primary">→</span>{f}</li>)}
                    </ul>
                  ) : <p className="text-sm text-dim">Akan dilengkapi.</p>}
                </div>
                <div>
                  <p className="label-mono mb-3">Tech stack</p>
                  <Tech items={active.tech} />
                  <p className="label-mono mb-3 mt-6">Contribution</p>
                  <p className="text-sm text-dim">{active.contribution ?? "Detail kontribusi akan dilengkapi."}</p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
                <LinkSlot href={active.github} label="Source" icon={Github} />
                <LinkSlot href={active.demo} label="Live demo" icon={ExternalLink} />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
