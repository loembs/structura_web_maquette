import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-28 lg:py-36 grain">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16 reveal">
          <span className="gold-rule mr-4 align-middle" />
          <span className="font-condensed text-xs text-gold">Contact</span>
          <h2 className="mt-6 font-display italic text-4xl sm:text-5xl lg:text-6xl text-cream">
            Démarrons votre projet
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md">
            Remplissez le formulaire — nous revenons vers vous sous 48h avec un
            devis personnalisé et gratuit.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="lg:col-span-3 space-y-5 reveal"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Nom complet" name="name" />
              <Field label="Téléphone (+222 / +221)" name="phone" />
            </div>
            <Field label="Email" name="email" type="email" />
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-condensed text-[10px] text-gold">Type de projet</label>
                <select
                  required
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-gold py-3 text-cream outline-none transition-colors"
                >
                  <option className="bg-background">Résidentiel</option>
                  <option className="bg-background">Commercial</option>
                  <option className="bg-background">Industriel</option>
                </select>
              </div>
              <Field label="Surface approx. (m²)" name="surface" type="number" />
            </div>
            <div>
              <label className="font-condensed text-[10px] text-gold">Description du projet</label>
              <textarea
                required
                rows={4}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-gold py-3 text-cream outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full font-condensed text-xs px-7 py-4 bg-gold text-gold-foreground hover:bg-cream transition-colors"
            >
              {sent ? "Demande envoyée — merci !" : "Envoyer ma demande"}
            </button>
          </form>

          <aside className="lg:col-span-2 space-y-6 reveal">
            <div className="bg-card border border-border p-8 space-y-5">
              <Info icon={Phone} label="Téléphone" value="+222 00 00 00 00" />
              <Info icon={Mail} label="Email" value="contact@structura.mr" />
              <Info icon={MapPin} label="Adresse" value="Nouakchott, Mauritanie · Dakar, Sénégal" />
              <Info icon={Clock} label="Horaires" value="Lun – Sam · 8h – 18h" />
            </div>
            <a
              href="https://instagram.com/structura_officiel"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-card border border-border hover:border-gold p-6 transition-colors group"
            >
              <Instagram className="text-gold" size={24} />
              <div>
                <div className="font-condensed text-[10px] text-gold">Suivez-nous</div>
                <div className="font-display italic text-xl text-cream">@structura_officiel</div>
              </div>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="font-condensed text-[10px] text-gold" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-2 w-full bg-transparent border-b border-border focus:border-gold py-3 text-cream outline-none transition-colors"
      />
    </div>
  );
}

function Info({ icon: Icon, label, value }: { icon: typeof Phone; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="h-10 w-10 rounded-full border border-gold/40 bg-gold/5 flex items-center justify-center shrink-0">
        <Icon className="text-gold" size={16} strokeWidth={1.6} />
      </span>
      <div>
        <div className="font-condensed text-[10px] text-muted-foreground">{label}</div>
        <div className="text-cream text-sm mt-0.5">{value}</div>
      </div>
    </div>
  );
}
