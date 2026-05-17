import { Check } from "lucide-react";

export function Innovations() {
  return (
    <section id="innovations" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal order-2 lg:order-1">
          <span className="gold-rule mr-4 align-middle" />
          <span className="font-condensed text-xs text-gold">Technologies</span>
          <h2 className="mt-6 font-display italic text-4xl sm:text-5xl lg:text-6xl text-cream">
            Innovations & Systèmes
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
            Nous utilisons les meilleures technologies du marché — partenaires
            officiels Fosroc — pour garantir durabilité, esthétique et
            performance technique sur chaque chantier.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              ["Garantie", "Jusqu'à 10 ans sur systèmes de façades"],
              ["Résistance", "Certifié climat sahélien & humidité côtière"],
              ["Durabilité", "Matériaux premium à faible entretien"],
            ].map(([k, v]) => (
              <li key={k} className="flex items-start gap-4">
                <Check className="text-gold mt-1 shrink-0" size={18} />
                <div>
                  <div className="font-condensed text-[11px] text-gold">{k}</div>
                  <div className="text-cream text-sm">{v}</div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex items-center gap-6 opacity-70">
            <span className="font-condensed text-[11px] text-muted-foreground">Partenaires</span>
            <span className="font-display italic text-xl text-cream">Fosroc</span>
            <span className="text-muted-foreground">·</span>
            <span className="font-display italic text-xl text-cream">Sika</span>
          </div>
        </div>

        <div className="reveal order-1 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
              alt="Équipe sur chantier"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="font-condensed text-[10px] text-gold">Sur chantier · Nouakchott</div>
              <div className="font-display italic text-2xl text-cream mt-1">L'expertise sur le terrain</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
