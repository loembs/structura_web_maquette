import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 rounded-full border border-gold flex items-center justify-center font-display italic text-gold text-xl">
              S
            </span>
            <span className="font-condensed text-cream text-sm tracking-[0.3em]">STRUCTURA</span>
          </div>
          <p className="mt-5 text-muted-foreground text-sm max-w-xs leading-relaxed">
            L'art de la finition parfaite. Revêtements architecturaux & peinture
            professionnelle.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="font-condensed text-[10px] text-gold mb-4">Navigation</div>
            <ul className="space-y-2 text-sm">
              {["Services", "Projets", "Équipe", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-cream/70 hover:text-gold">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-condensed text-[10px] text-gold mb-4">Expertise</div>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>Béton ciré</li>
              <li>Façades</li>
              <li>Peinture pro</li>
              <li>Fosroc</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="font-condensed text-[10px] text-gold mb-4">Réseaux</div>
          <a
            href="https://instagram.com/structura_officiel"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-cream hover:text-gold"
          >
            <Instagram size={18} />
            <span className="text-sm">@structura_officiel</span>
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-12 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
        <div className="font-condensed text-[10px] text-muted-foreground">
          © 2025 STRUCTURA · Tous droits réservés
        </div>
        <div className="font-condensed text-[10px] text-muted-foreground">
          Mauritanie · Sénégal
        </div>
      </div>
    </footer>
  );
}
