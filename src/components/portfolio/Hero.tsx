import { motion } from "motion/react";
import { ArrowDownRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/content/portfolio";
import { Magnetic, NodeField } from "./fx";

const ease = [0.22, 1, 0.36, 1] as const;

function Line({ children, d }: { children: React.ReactNode; d: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span className="block" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 1 + d, ease }}>
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const fade = (d: number) => ({ initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 + d, ease } });
  const missing = (what: string) => () => toast(`${what} belum tersedia`, { description: "Tautan akan ditambahkan segera." });

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden grid-bg">
      <NodeField />
      <div aria-hidden className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-24 pt-32 md:px-10">
        <motion.div {...fade(0)} className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-2 label-mono">
          <span className="flex items-center gap-2 text-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" /> Open to collaboration
          </span>
          <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3" />{profile.location}</span>
        </motion.div>

        <div className="flex flex-col-reverse lg:flex-row lg:items-end justify-between gap-8 xl:gap-12">
          <h1 className="text-[13vw] font-semibold uppercase leading-[0.86] tracking-[-0.04em] md:text-[9.5vw] xl:text-[8.5rem]">
            <Line d={0.05}>Dafa Dega</Line>
            <Line d={0.15}><span className="text-outline">Wijaya</span><span className="text-primary">.</span></Line>
          </h1>

          <motion.div
            {...fade(0.25)}
            className="group relative self-start lg:self-end shrink-0"
          >
            {/* Ambient backlight glow ensuring the avatar pops and doesn't look dark */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-4 rounded-3xl bg-primary/25 blur-3xl transition-opacity duration-500 group-hover:bg-primary/40"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-t from-primary/20 via-sky-500/10 to-transparent blur-xl"
            />

            {/* Avatar Card Frame */}
            <div className="relative flex flex-col items-center overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-b from-surface/90 via-surface/60 to-surface/40 p-2.5 backdrop-blur-md transition-all duration-500 group-hover:border-primary/50">
              {/* Inner ambient spotlight behind silhouette */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.12)_0%,transparent_70%)]"
              />

              <div className="relative h-48 w-36 sm:h-56 sm:w-44 md:h-64 md:w-48 lg:h-72 lg:w-56 overflow-hidden flex items-end justify-center">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="h-full w-full object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="eager"
                />
              </div>

              {/* Status pill tag at bottom */}
              <div className="mt-2.5 flex w-full items-center justify-between rounded-lg border border-border/70 bg-background/80 px-2.5 py-1 backdrop-blur-sm">
                <span className="flex items-center gap-1.5 font-mono text-[10px] text-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
                  Informatics ITS
                </span>
                <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">
                  Surabaya
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <motion.div {...fade(0.35)} className="md:col-span-4">
            <p className="label-mono mb-2">Informatics Engineering Student</p>
            <p className="font-mono text-sm text-foreground">Full-Stack Web Developer<br />Software Engineer</p>
          </motion.div>
          <motion.div {...fade(0.45)} className="md:col-span-8">
            <p className="text-2xl font-medium leading-snug tracking-tight md:text-3xl">
              Building Digital Solutions Through <span className="text-primary">Code, Logic,</span> and Innovation.
            </p>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Saya adalah mahasiswa Teknik Informatika ITS yang tertarik membangun solusi digital melalui full-stack development, backend engineering, database architecture, dan AI-powered applications.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Magnetic>
                <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-shadow hover:glow">
                  Explore My Work <ArrowDownRight className="h-4 w-4 transition-transform group-hover:rotate-[-45deg]" />
                </a>
              </Magnetic>
              <Magnetic>
                {profile.cvUrl ? (
                  <a href={profile.cvUrl} download="Dafa_Dega_Wijaya_CV.pdf" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition-colors hover:border-primary hover:text-primary">
                    <Download className="h-4 w-4" /> Download CV
                  </a>
                ) : (
                  <button onClick={missing("CV")} className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition-colors hover:border-primary hover:text-primary">
                    <Download className="h-4 w-4" /> Download CV
                  </button>
                )}
              </Magnetic>
              <div className="ml-1 flex items-center gap-1">
                {[
                  { icon: Github, label: "GitHub", href: profile.github },
                  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
                  { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
                ].map(({ icon: I, label, href }) =>
                  href ? (
                    <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition-colors hover:text-primary">
                      <I className="h-4 w-4" />
                    </a>
                  ) : (
                    <button key={label} onClick={missing(label)} aria-label={label} className="grid h-10 w-10 place-items-center rounded-full text-dim transition-colors hover:text-primary">
                      <I className="h-4 w-4" />
                    </button>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <a href="#about" className="relative mx-auto mb-8 flex flex-col items-center gap-3 label-mono hover:text-primary">
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-border">
          <span className="absolute inset-x-0 top-0 h-1/2 bg-primary animate-scroll-line" />
        </span>
      </a>
    </section>
  );
}
