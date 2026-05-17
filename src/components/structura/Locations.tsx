import { MapPin, ArrowUpRight } from "lucide-react";

const locations = [
  {
    city: "Nouakchott",
    country: "Mauritanie",
    count: "18 projets",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    project: "Villa Tevragh-Zeina",
    type: "Résidentiel · Béton ciré",
  },
  {
    city: "Dakar",
    country: "Sénégal",
    count: "12 projets",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    project: "Tour Almadies",
    type: "Commercial · Façade",
  },
  {
    city: "Nouadhibou",
    country: "Mauritanie",
    count: "8 projets",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80",
    project: "Résidence Marine",
    type: "Résidentiel · Stuc vénitien",
  },
  {
    city: "Saint-Louis",
    country: "Sénégal",
    count: "5 projets",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    project: "Boutique Hôtel Faidherbe",
    type: "Commercial · Patrimoine",
  },
  {
    city: "Rosso",
    country: "Mauritanie",
    count: "3 projets",
    img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&q=80",
    project: "Centre administratif",
    type: "Industriel · Enduits",
  },
];

export function Locations() {
  return (
    <section id="localisations" className="py-28 lg:py-36 bg-cream text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <div className="reveal max-w-2xl">
            <span className="inline-block h-px w-14 bg-bordeaux mr-4 align-middle" />
            <span className="font-condensed text-xs text-bordeaux">Présence terrain</span>
            <h2 className="mt-6 font-display italic text-4xl sm:text-5xl lg:text-6xl text-background">
              Là où nous intervenons
            </h2>
            <p className="mt-6 text-background/70 max-w-md">
              Nos chantiers s'étendent à travers la Mauritanie et le Sénégal —
              chaque ville, une signature, chaque projet, un repère.
            </p>
          </div>
          <div className="reveal flex items-center gap-8">
            <Stat n="46" label="Projets livrés" />
            <span className="h-12 w-px bg-background/20" />
            <Stat n="5" label="Villes couvertes" />
            <span className="h-12 w-px bg-background/20" />
            <Stat n="2" label="Pays" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {locations.map((l, i) => (
            <a
              key={l.city}
              href="#contact"
              className={`reveal group relative overflow-hidden bg-background ${
                i === 0 ? "lg:row-span-2 lg:col-span-1 aspect-[3/5]" : "aspect-[4/5] lg:aspect-[5/4]"
              }`}
            >
              <img
                src={l.img}
                alt={`${l.project} — ${l.city}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />

              <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-cream text-background px-3 py-1.5">
                <MapPin size={12} className="text-bordeaux" strokeWidth={2.2} />
                <span className="font-condensed text-[10px]">{l.country}</span>
              </div>

              <div className="absolute top-5 right-5 inline-flex items-center justify-center h-9 w-9 rounded-full bg-cream text-background opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={16} strokeWidth={1.6} />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="font-condensed text-[10px] text-gold">{l.count}</div>
                <h3 className="mt-1 font-display italic text-3xl text-cream">{l.city}</h3>
                <div className="mt-3 pt-3 border-t border-cream/20">
                  <div className="text-cream text-sm">{l.project}</div>
                  <div className="font-condensed text-[10px] text-cream/70 mt-1">{l.type}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display italic text-4xl text-bordeaux">{n}</div>
      <div className="font-condensed text-[10px] text-background/60 mt-1">{label}</div>
    </div>
  );
}
