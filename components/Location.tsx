"use client";

import { wedding } from "@/lib/config";
import { SectionHeading } from "./SectionHeading";
import { CinematicReveal } from "./CinematicReveal";
import { useLang } from "./LanguageProvider";

export function Location() {
  const { lang, t } = useLang();
  return (
    <section id="mawqi" className="relative overflow-hidden bg-night/30 px-7 py-24 backdrop-blur-[2px] sm:py-28">
      <div className="relative mx-auto max-w-md">
        <SectionHeading kicker={t.venue.kicker} title={t.venue.title} />

        <CinematicReveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-gold/40 shadow-[var(--shadow-luxe)]">
            <iframe
              title="Romance Weddings&Events — Google Maps"
              src="https://www.google.com/maps?q=Kon.%20Wilhelminahaven%20Zuidwestzijde%2013,%203134%20KG%20Vlaardingen&z=16&output=embed"
              className="block aspect-[4/3] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </CinematicReveal>

        <CinematicReveal delay={0.1}>
          <div className="mt-9 text-center">
            <h3 className="font-display text-4xl text-gradient-gold shimmer">{t.venue.name}</h3>
            <p className="mt-3 text-lg text-sand">{t.venue.address}</p>
            <p className="mt-4 leading-loose text-muted">{t.venue.desc}</p>
            <a
              href={wedding.venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold px-7 py-3 font-head text-sm tracking-[0.12em] text-gold transition-all duration-300 hover:bg-gold hover:text-ember"
            >
              <span aria-hidden="true">{lang === "ar" ? "←" : "→"}</span>
              {t.venue.route}
            </a>
          </div>
        </CinematicReveal>
      </div>
    </section>
  );
}
