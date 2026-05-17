import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 py-32 w-full">
        <div className="max-w-2xl">
          
          <h1 className="font-display italic font-bold text-cream leading-[0.95] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl reveal">
            L'Art de la
            <br />
            <span className="text-gold">Finition</span>
            <br />
            Parfaite
          </h1>

          <p className="mt-8 text-cream/70 max-w-lg text-lg leading-relaxed reveal">
            Revêtements architecturaux · Peinture professionnelle · Systèmes de
            façades
          </p>

          <div className="mt-12 flex flex-wrap gap-4 reveal">
            <a
              href="#projets"
              className="inline-flex items-center font-condensed text-xs px-7 py-4 bg-gold text-gold-foreground hover:bg-cream transition-colors"
            >
              Voir nos projets
            </a>
            <a
              href="#contact"
              className="inline-flex items-center font-condensed text-xs px-7 py-4 border border-cream/40 text-cream hover:border-gold hover:text-gold transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>

      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold animate-bounce"
        aria-label="Scroll"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
