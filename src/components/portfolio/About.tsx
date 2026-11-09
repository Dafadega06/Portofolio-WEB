import { Reveal, SectionHeader } from "./fx";

const facts = [
  ["Institution", "Institut Teknologi Sepuluh Nopember"],
  ["Major", "Informatics Engineering"],
  ["Period", "2025 – 2029"],
  ["Based in", "Surabaya, Indonesia"],
];

function CodeVisual() {
  const lines = [
    ["const", " engineer = {"],
    ["  name", ': "Dafa Dega Wijaya",'],
    ["  focus", ': ["full-stack", "backend", "AI"],'],
    ["  stack", ': ["React", "Node", "PostgreSQL"],'],
    ["  mindset", ': "practical · structured · scalable",'],
    ["", "};"],
    ["", ""],
    ["export", " default build(engineer);"],
  ];
  return (
    <div className="relative overflow-hidden rounded-md border border-border bg-surface">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-border" /><span className="h-2 w-2 rounded-full bg-border" /><span className="h-2 w-2 rounded-full bg-primary/70" />
        <span className="ml-3 font-mono text-[11px] text-dim">about.ts</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
        {lines.map(([k, v], i) => (
          <div key={i} className="flex">
            <span className="mr-5 w-4 select-none text-right text-dim">{i + 1}</span>
            <span><span className="text-primary">{k}</span><span className="text-muted-foreground">{v}</span></span>
          </div>
        ))}
        <div className="flex"><span className="mr-5 w-4 text-right text-dim">9</span><span className="h-5 w-2 bg-primary animate-pulse-dot" /></div>
      </pre>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl scroll-mt-16 px-6 py-28 md:px-10 md:py-40">
      <SectionHeader index="01" label="About" title="Engineering practical solutions for real problems." />
      <div className="grid gap-14 md:grid-cols-12">
        <div className="md:col-span-3">
          <dl className="space-y-6">
            {facts.map(([k, v], i) => (
              <Reveal key={k} delay={i * 0.05}>
                <dt className="label-mono">{k}</dt>
                <dd className="mt-1 text-sm">{v}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-5">
          <Reveal>
            <p><span className="text-foreground">Saya merupakan mahasiswa S1 Teknik Informatika di Institut Teknologi Sepuluh Nopember (ITS).</span> Saya memiliki pengalaman dalam pengembangan aplikasi full-stack, backend engineering, perancangan database, RESTful API, serta integrasi fitur berbasis AI.</p>
          </Reveal>
          <Reveal delay={0.1}><p>Saya tertarik membangun solusi teknologi yang praktis, terstruktur, scalable, dan berorientasi pada penyelesaian masalah nyata.</p></Reveal>
          <Reveal delay={0.2}><p>Selain pengembangan software, saya juga aktif dalam organisasi, kegiatan teknologi, kolaborasi tim, dan pengelolaan acara.</p></Reveal>
        </div>
        <Reveal delay={0.15} className="md:col-span-4"><CodeVisual /></Reveal>
      </div>
    </section>
  );
}
