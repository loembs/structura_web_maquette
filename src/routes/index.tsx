import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/structura/Navbar";
import { Hero } from "@/components/structura/Hero";
import { Stats } from "@/components/structura/Stats";
import { Services } from "@/components/structura/Services";
import { ColorOfMonth } from "@/components/structura/ColorOfMonth";
import { Projects } from "@/components/structura/Projects";
import { Process } from "@/components/structura/Process";
import { Team } from "@/components/structura/Team";
import { Innovations } from "@/components/structura/Innovations";
import { Locations } from "@/components/structura/Locations";
import { Testimonials } from "@/components/structura/Testimonials";
import { Contact } from "@/components/structura/Contact";
import { Footer } from "@/components/structura/Footer";
import { ProgressBar } from "@/components/structura/ProgressBar";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "STRUCTURA — L'Art de la Finition Parfaite" },
      {
        name: "description",
        content:
          "STRUCTURA · Revêtements architecturaux, peinture professionnelle et finitions haut de gamme en Mauritanie et au Sénégal.",
      },
      { property: "og:title", content: "STRUCTURA — L'Art de la Finition Parfaite" },
      {
        property: "og:description",
        content:
          "Revêtements architecturaux, béton ciré, façades et expertise Fosroc.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
      },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <ProgressBar />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <ColorOfMonth />
        <Projects />
        <Locations />
        <Process />
        <Team />
        <Innovations />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
