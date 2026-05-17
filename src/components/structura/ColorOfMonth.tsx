const swatches = [
  { name: "Terracotta", hex: "#A24A37" },
  { name: "Sable doré", hex: "#C9A84C" },
  { name: "Nuit profonde", hex: "#1A1A1A" },
  { name: "Crème lin", hex: "#E8DCC8" },
];

export function ColorOfMonth() {
  return (
    <section className="relative grain bg-background py-28 lg:py-36 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <span className="font-condensed text-xs text-gold border border-gold px-3 py-1.5">
            Mai 2025
          </span>
          <h2 className="mt-8 font-display italic text-5xl lg:text-6xl text-cream leading-tight">
            Couleur
            <br />
            du Mois
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
            Chaque mois, nos experts sélectionnent la teinte tendance pour
            sublimer vos espaces — une palette pensée pour l'architecture
            contemporaine africaine.
          </p>

          <div className="mt-10 flex gap-3">
            {swatches.map((s) => (
              <div key={s.hex} className="text-center">
                <div
                  className="h-14 w-14 border border-border"
                  style={{ backgroundColor: s.hex }}
                />
                <div className="mt-2 font-condensed text-[9px] text-muted-foreground">
                  {s.name}
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center font-condensed text-xs px-7 py-4 border border-gold text-gold hover:bg-gold hover:text-gold-foreground transition-colors"
          >
            Recevoir la palette du mois
          </a>
        </div>

        <div className="reveal">
          <div
            className="aspect-[4/5] w-full relative overflow-hidden"
            style={{ backgroundColor: "#8B2635" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-cream">
              <div className="font-condensed text-[11px] text-cream/70">Teinte vedette</div>
              <div className="font-display italic text-4xl mt-1">Bordeaux Impérial</div>
              <div className="font-condensed text-xs mt-3 text-gold">#8B2635</div>
              <p className="mt-4 text-sm text-cream/80 max-w-xs">
                Une teinte intemporelle, riche et contemplative — idéale pour
                les espaces qui veulent affirmer leur caractère.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
