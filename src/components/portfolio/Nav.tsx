import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["training", "Training"],
  ["contact", "Contact"],
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on, { passive: true });
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", on); io.disconnect(); };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border bg-background/75 backdrop-blur-md" : "border-b border-transparent"}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#top" className="font-mono text-sm tracking-widest">
          DDW<span className="text-primary">_</span>
        </a>
        <ul className="hidden gap-8 md:flex">
          {links.map(([id, l], i) => (
            <li key={id}>
              <a href={`#${id}`} className={`group font-mono text-xs uppercase tracking-widest transition-colors ${active === id ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                <span className="text-dim">0{i + 1}.</span>{l}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden" aria-label={open ? "Tutup menu" : "Buka menu"} onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-border bg-background/95 px-6 py-6 backdrop-blur md:hidden">
          {links.map(([id, l], i) => (
            <li key={id}>
              <a onClick={() => setOpen(false)} href={`#${id}`} className="block py-3 text-2xl">
                <span className="mr-3 font-mono text-xs text-primary">0{i + 1}</span>{l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
