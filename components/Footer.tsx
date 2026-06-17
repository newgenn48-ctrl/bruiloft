"use client";

import { Ornament } from "./Ornament";
import { Rings } from "./Rings";
import { Reveal } from "./Reveal";
import { GoldDust } from "./GoldDust";
import { useLang } from "./LanguageProvider";

export function Footer() {
  const { lang, t } = useLang();
  return (
    <footer className="relative overflow-hidden bg-accent-deep/55 px-7 py-24 text-center backdrop-blur-[2px]">
      <GoldDust count={10} />
      <div className="relative mx-auto max-w-md">
        <Reveal>
          <Rings className="mx-auto mb-6 w-20 text-gold" />
        </Reveal>
        <Reveal delay={0.05}>
          <p className="font-display text-5xl text-gradient-gold shimmer sm:text-6xl">
            {t.nameA} {t.and} {t.nameB}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Ornament className="my-7" />
        </Reveal>
        <Reveal delay={0.15}>
          <p className="font-head text-sm tracking-luxe text-muted">{t.dateLabel}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 font-display text-xl leading-loose text-gold">{t.footer.dua}</p>
        </Reveal>
        <p className="mt-12 text-xs text-muted/70">
          {t.footer.madeWith} · {t.nameA} {t.and} {t.nameB} {lang === "ar" ? "٢٠٢٦" : "2026"}
        </p>
      </div>
    </footer>
  );
}
