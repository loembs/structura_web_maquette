import { Star } from "lucide-react";

const items = [
  {
    quote: "Un travail d'orfèvre. Notre villa a été transformée — chaque mur raconte une histoire.",
    name: "Aminata D.",
    project: "Villa résidentielle · Nouakchott",
    initials: "AD",
  },
  {
    quote: "Équipe ponctuelle, professionnelle, et le rendu dépasse nos attentes. Je recommande.",
    name: "Cheikh M.",
    project: "Tour de bureaux · Dakar",
    initials: "CM",
  },
  {
    quote: "Le béton ciré du salon est sublime. Travail soigné du début à la fin.",
    name: "Mariem S.",
    project: "Appartement · Nouadhibou",
    initials: "MS",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 lg:py-36 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-14 reveal">
          <span className="gold-rule mr-4 align-middle" />
          <span className="font-condensed text-xs text-gold">Témoignages</span>
          <h2 className="mt-6 font-display italic text-4xl sm:text-5xl lg:text-6xl text-cream">
            Ils nous ont fait confiance
          </h2>
        </div>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 lg:mx-0 lg:px-0">
          {items.map((t) => (
            <figure
              key={t.name}
              className="snap-start shrink-0 w-[88%] sm:w-[60%] lg:w-[40%] bg-card border border-border p-10 reveal"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-6 font-display italic text-2xl lg:text-3xl text-cream leading-snug">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full border border-gold flex items-center justify-center font-condensed text-gold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="text-cream text-sm">{t.name}</div>
                  <div className="font-condensed text-[10px] text-muted-foreground mt-1">
                    {t.project}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
