const team = [
  { name: "Mamadou", role: "Chef de chantier", spec: "Façades & enduits", img: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600&q=80" },
  { name: "Aïcha", role: "Architecte d'intérieur", spec: "Conseil & matériaux", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" },
  { name: "Ibrahim", role: "Applicateur senior", spec: "Béton ciré · Stuc", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80" },
  { name: "Fatou", role: "Responsable projets", spec: "Coordination chantier", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80" },
];

export function Team() {
  return (
    <section id="equipe" className="py-28 lg:py-36 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16 reveal">
          <span className="gold-rule mr-4 align-middle" />
          <span className="font-condensed text-xs text-gold">Notre équipe</span>
          <h2 className="mt-6 font-display italic text-4xl sm:text-5xl lg:text-6xl text-cream">
            Des Professionnels à Votre Service
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((m) => (
            <div
              key={m.name}
              className="reveal group relative overflow-hidden border border-border hover:border-gold transition-colors"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 bg-card">
                <div className="font-condensed text-[10px] text-gold">{m.spec}</div>
                <div className="mt-2 font-display text-xl text-cream">{m.name}</div>
                <div className="text-muted-foreground text-xs mt-1">{m.role}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-muted-foreground reveal">
          Notre équipe dispose de techniciens certifiés disponibles sur tout le
          territoire mauritanien et sénégalais.
        </p>
      </div>
    </section>
  );
}
