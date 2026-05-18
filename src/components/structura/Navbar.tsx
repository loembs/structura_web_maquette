import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#projets", label: "Projets" },
  { href: "#equipe", label: "Notre Équipe" },
  { href: "#localisations", label: "Localisations" },
  { href: "#innovations", label: "Innovations" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#accueil" className="flex items-center gap-3 group">
          <img src="https://res.cloudinary.com/dlna2kuo1/image/upload/v1779048556/structura-removebg-preview_kdmgk7.png" alt="Structura Logo" className="h-12 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-condensed text-xs text-cream/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center font-condensed text-xs px-5 py-3 bg-gold text-gold-foreground hover:bg-cream transition-colors"
        >
          Demander un devis
        </a>

        <button
          aria-label="Menu"
          className="lg:hidden text-cream"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`lg:hidden absolute top-20 right-0 w-72 bg-background border-l border-b border-border transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-condensed text-sm text-cream hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center font-condensed text-xs px-5 py-3 bg-gold text-gold-foreground"
          >
            Demander un devis
          </a>
        </nav>
      </div>
    </header>
  );
}
