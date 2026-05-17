"use client";

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

export default function HomePage() {
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
