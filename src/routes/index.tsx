import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { TrainingEducation } from "@/components/portfolio/TrainingEducation";
import { Contact } from "@/components/portfolio/Contact";
import { BackToTop, Cursor, Loader, ScrollProgress } from "@/components/portfolio/fx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dafa Dega Wijaya — Full-Stack Web Developer & Software Engineer" },
      { name: "description", content: "Portfolio Dafa Dega Wijaya, mahasiswa Teknik Informatika ITS dan Full-Stack Web Developer: proyek, skill, dan pengalaman." },
      { property: "og:title", content: "Dafa Dega Wijaya — Full-Stack Web Developer" },
      { property: "og:description", content: "Building digital solutions through code, logic, and innovation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <TrainingEducation />
        <Contact />
      </main>
      <BackToTop />
      <Toaster theme="dark" position="bottom-left" />
    </>
  );
}
