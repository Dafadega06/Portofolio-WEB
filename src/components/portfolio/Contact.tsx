import { useState } from "react";
import { z } from "zod";
import { Check, Copy, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/content/portfolio";
import { Magnetic, Reveal, SectionHeader } from "./fx";

const schema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter").max(100),
  email: z.string().trim().email("Format email tidak valid").max(255),
  message: z.string().trim().min(10, "Pesan minimal 10 karakter").max(1000, "Pesan maksimal 1000 karakter"),
});
type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast.success("Email disalin");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Gagal menyalin email");
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Errors = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as keyof Errors] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    // TODO: hubungkan ke layanan form / backend. Sementara, buka aplikasi email dengan isi pesan.
    const body = encodeURIComponent(`${r.data.message}\n\n— ${r.data.name} (${r.data.email})`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Pesan dari ${r.data.name}`)}&body=${body}`;
    toast("Membuka aplikasi email…", { description: "Form belum terhubung ke server; pesan dikirim lewat aplikasi email Anda." });
  };

  const field = "w-full border-b border-border bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-dim focus:border-primary";

  return (
    <section id="contact" className="relative scroll-mt-16 overflow-hidden py-28 md:py-40">
      <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader index="06" label="Contact" title="Let's build something together." />
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="label-mono mb-3">Email</p>
              <a href={`mailto:${profile.email}`} className="break-all text-2xl tracking-tight transition-colors hover:text-primary md:text-3xl">{profile.email}</a>
              <div className="mt-6 flex flex-wrap gap-3">
                <Magnetic>
                  <button onClick={copy} className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-primary hover:text-primary">
                    {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />} {copied ? "Copied" : "Copy email"}
                  </button>
                </Magnetic>
                <Magnetic>
                  <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-primary hover:text-primary">
                    <Mail className="h-4 w-4" /> Open mail app
                  </a>
                </Magnetic>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <dl className="mt-14 space-y-5 text-sm">
                <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /><span>{profile.location}</span></div>
                {[{ I: Github, l: "GitHub", h: profile.github }, { I: Linkedin, l: "LinkedIn", h: profile.linkedin }].map(({ I, l, h }) => (
                  <div key={l} className="flex items-center gap-3">
                    <I className="h-4 w-4 text-primary" />
                    {h ? <a href={h} target="_blank" rel="noreferrer" className="hover:text-primary">{l}</a> : <span className="text-dim">{l} — segera ditambahkan</span>}
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:col-span-7">
            <form onSubmit={submit} noValidate className="space-y-8">
              {(["name", "email"] as const).map((k) => (
                <div key={k}>
                  <label htmlFor={k} className="label-mono">{k === "name" ? "Your name" : "Your email"}</label>
                  <input id={k} type={k === "email" ? "email" : "text"} value={form[k]} maxLength={k === "email" ? 255 : 100}
                    onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                    aria-invalid={!!errors[k]} className={field} placeholder={k === "name" ? "Nama lengkap" : "nama@email.com"} />
                  {errors[k] && <p className="mt-2 text-sm text-destructive">{errors[k]}</p>}
                </div>
              ))}
              <div>
                <label htmlFor="message" className="label-mono">Message</label>
                <textarea id="message" rows={4} maxLength={1000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  aria-invalid={!!errors.message} className={`${field} resize-none`} placeholder="Ceritakan ide atau kebutuhan Anda…" />
                <div className="mt-2 flex justify-between text-sm">
                  <span className="text-destructive">{errors.message}</span>
                  <span className="font-mono text-xs text-dim">{form.message.length}/1000</span>
                </div>
              </div>
              <Magnetic>
                <button type="submit" className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:glow active:scale-95">
                  Send via email <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </Magnetic>
            </form>
          </Reveal>
        </div>
      </div>
      <footer className="relative mx-auto mt-32 flex max-w-7xl flex-col justify-between gap-4 border-t border-border px-6 pt-8 label-mono md:flex-row md:px-10">
        <span>© {new Date().getFullYear()} Dafa Dega Wijaya</span>
        <span>Designed & built with code, logic, and care.</span>
      </footer>
    </section>
  );
}
