import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 46, suffix: "", label: "Projets documentés" },
  { value: 965, suffix: "", label: "Clients & Abonnés" },
  { value: 5, suffix: "+", label: "Années d'expertise" },
  { value: 100, suffix: "%", label: "Satisfaction chantier" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1600;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section id="stats" className="bg-gold text-gold-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center lg:text-left">
            <div className="font-display italic font-bold text-5xl sm:text-6xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="font-condensed text-[11px] mt-2 opacity-80">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
