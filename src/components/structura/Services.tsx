import { PaintRoller, Castle, Gem, Wallpaper, FlaskRound, DraftingCompass, ArrowUpRight } from "lucide-react";

const services = [
  { icon: PaintRoller, title: "Peinture Professionnelle", desc: "Application experte, finitions lisses ou texturées sur tout support." },
  { icon: Castle, title: "Revêtements de Façades", desc: "Systèmes d'isolation et d'enduits architecturaux durables." },
  { icon: Gem, title: "Béton Ciré & Stuc", desc: "Surfaces contemporaines pour intérieurs haut de gamme." },
  { icon: Wallpaper, title: "Revêtements Muraux", desc: "Papiers peints, lambris, bandes armées et finitions sur mesure." },
  { icon: FlaskRound, title: "Produits Techniques", desc: "Application Fosroc, imperméabilisants, résines techniques." },
  { icon: DraftingCompass, title: "Conseil & Expertise", desc: "Diagnostic chantier et recommandation matériaux adaptés." },
];

export function Services() {
  return (
    <section id="services" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16 reveal">
          <span className="gold-rule mr-4 align-middle" />
          <span className="font-condensed text-xs text-gold">Notre savoir-faire</span>
          <h2 className="mt-6 font-display italic text-4xl sm:text-5xl lg:text-6xl text-cream">
            Notre Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <div
              key={s.title}
              className="reveal group bg-card hover:bg-surface p-10 border-l-[3px] border-gold/0 hover:border-gold transition-all duration-500"
            >
              <div className="h-14 w-14 rounded-full border border-gold/40 bg-gold/5 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all">
                <s.icon className="text-gold group-hover:text-gold-foreground transition-colors" size={22} strokeWidth={1.4} />
              </div>
              <h3 className="mt-6 font-display text-2xl text-cream">{s.title}</h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 font-condensed text-[11px] text-gold opacity-0 group-hover:opacity-100 transition-opacity"
              >
                En savoir plus <ArrowUpRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
