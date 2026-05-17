import { Plus } from "lucide-react";
import { useState } from "react";

const filters = ["Tout", "Résidentiel", "Commercial", "Façades", "Intérieurs"];

const projects = [
  {
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    title: "Villa contemporaine",
    tag: "Intérieurs · Béton ciré",
    cat: "Intérieurs",
    span: "lg:col-span-2 lg:row-span-2 aspect-[4/5] lg:aspect-auto",
  },
  {
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    title: "Tour résidentielle",
    tag: "Façade · Enduit",
    cat: "Façades",
    span: "aspect-square",
  },
  {
    img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&q=80",
    title: "Mur signature",
    tag: "Bandes armées",
    cat: "Intérieurs",
    span: "aspect-square",
  },
  {
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    title: "Suite hôtelière",
    tag: "Stuc vénitien",
    cat: "Commercial",
    span: "aspect-square",
  },
  {
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80",
    title: "Loft urbain",
    tag: "Béton ciré",
    cat: "Résidentiel",
    span: "aspect-square",
  },
  {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    title: "Résidence privée",
    tag: "Peinture décorative",
    cat: "Résidentiel",
    span: "lg:col-span-2 aspect-[2/1]",
  },
];

export function Projects() {
  const [active, setActive] = useState("Tout");
  const filtered = active === "Tout" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="projets" className="py-28 lg:py-36 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-14">
          <div className="reveal">
            <span className="gold-rule mr-4 align-middle" />
            <span className="font-condensed text-xs text-gold">Portfolio</span>
            <h2 className="mt-6 font-display italic text-4xl sm:text-5xl lg:text-6xl text-cream">
              Nos Réalisations
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 reveal">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-condensed text-[11px] px-4 py-2 border transition-colors ${
                  active === f
                    ? "bg-gold text-gold-foreground border-gold"
                    : "border-border text-cream/70 hover:border-gold hover:text-gold"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:auto-rows-[220px]">
          {filtered.map((p) => (
            <a
              key={p.title}
              href="#contact"
              className={`group relative overflow-hidden bg-card ${p.span}`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="font-condensed text-[10px] text-gold">{p.tag}</div>
                    <h3 className="font-display italic text-2xl text-cream mt-1">{p.title}</h3>
                  </div>
                  <span className="h-10 w-10 rounded-full border border-gold/50 flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    <Plus size={16} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14 text-center reveal">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-condensed text-xs text-gold hover:text-cream"
          >
            Voir tous les projets →
          </a>
        </div>
      </div>
    </section>
  );
}
