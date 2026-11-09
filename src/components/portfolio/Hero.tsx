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

        <h1 className="text-[13vw] font-semibold uppercase leading-[0.86] tracking-[-0.04em] md:text-[9.5vw] xl:text-[8.5rem]">
          <Line d={0.05}>Dafa Dega</Line>
          <Line d={0.15}><span className="text-outline">Wijaya</span><span className="text-primary">.</span></Line>
        </h1>

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
                  <a href={profile.cvUrl} download className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition-colors hover:border-primary hover:text-primary">
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
