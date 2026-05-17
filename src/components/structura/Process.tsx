const steps = [
  { n: "01", title: "Diagnostic", desc: "Visite du chantier et évaluation technique précise." },
  { n: "02", title: "Devis", desc: "Proposition personnalisée et transparente sous 48h." },
  { n: "03", title: "Réalisation", desc: "Équipe certifiée, matériaux premium, délais respectés." },
  { n: "04", title: "Livraison", desc: "Contrôle qualité minutieux et garantie chantier." },
];

export function Process() {
  return (
    <section className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16 reveal">
          <span className="gold-rule mr-4 align-middle" />
          <span className="font-condensed text-xs text-gold">Méthode</span>
          <h2 className="mt-6 font-display italic text-4xl sm:text-5xl lg:text-6xl text-cream">
            Comment ça marche
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {steps.map((s, i) => (
            <div key={s.n} className="reveal bg-background p-10 relative">
              <div className="font-display italic text-gold text-6xl">{s.n}</div>
              <h3 className="mt-6 font-display text-2xl text-cream">{s.title}</h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 -right-px w-10 h-px bg-gold" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
