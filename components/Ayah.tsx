"use client";

import { useLang } from "./LanguageProvider";
import { CinematicReveal } from "./CinematicReveal";
import { WordReveal } from "./WordReveal";
import { GoldDust } from "./GoldDust";

/** Champagne-baan met het Koranvers (Soera Ar-Rum 30:21) — filmisch focusmoment. */
export function Ayah() {
  const { lang, t } = useLang();
  return (
    <section
      id="ayah"
      className="relative overflow-hidden bg-accent/45 px-7 py-24 text-center backdrop-blur-[2px] sm:py-28"
    >
      <GoldDust count={10} />

      <div className="relative mx-auto max-w-md">
        <CinematicReveal>
          <p className="font-head text-[0.7rem] tracking-luxe text-gold">{t.ayah.label}</p>
        </CinematicReveal>

        <blockquote className="mt-6 text-balance font-display text-2xl leading-[2] text-sand sm:text-3xl">
          ﴿ <WordReveal key={lang} text={t.ayah.text} /> ﴾
        </blockquote>

        <CinematicReveal delay={0.1}>
          <div className="mx-auto mt-7 flex items-center justify-center gap-3 text-gold">
            <span className="h-px w-10 bg-gold/50" />
            <span className="font-head text-xs tracking-[0.2em]">{t.ayah.ref}</span>
            <span className="h-px w-10 bg-gold/50" />
          </div>
        </CinematicReveal>
      </div>
    </section>
  );
}
