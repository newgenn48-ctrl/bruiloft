"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GoldDust } from "./GoldDust";
import { Arabesque } from "./Ornament";
import { Rings } from "./Rings";
import { Butterflies } from "./Butterflies";
import { useLang } from "./LanguageProvider";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="grain relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-7 py-20 text-center"
    >
      {/* subtiele gouden gloed bovenop de foto-achtergrond */}
      <div className="pointer-events-none absolute inset-0 -z-[5] bg-[radial-gradient(ellipse_at_50%_30%,rgba(176,136,58,0.12),transparent_60%)]" />
      {/* zachte ivoren scrim voor leesbaarheid van de tekst */}
      <div className="pointer-events-none absolute inset-0 -z-[4] bg-[radial-gradient(ellipse_50%_46%_at_50%_46%,rgba(246,241,230,0.6),transparent_72%)]" />
      <GoldDust count={16} />
      <Butterflies count={2} />

      {/* arabesk hoeken */}
      <Arabesque className="absolute right-3 top-24 w-16 text-gold/35 sm:w-28" />
      <Arabesque className="absolute bottom-4 left-3 w-16 -scale-x-100 text-gold/35 sm:w-28" />

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-md">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease }}
          className="mb-5 font-display text-base text-gold sm:text-lg"
        >
          {t.bismillah}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease }}
          className="font-head text-[0.7rem] tracking-luxe text-bronze sm:text-xs"
        >
          {t.kicker}
        </motion.p>

        <h1 className="mt-6 font-display leading-[1.04] text-sand">
          <motion.span
            initial={{ opacity: 0, y: 34, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.3, delay: 0.5, ease }}
            className="block text-balance text-[2.5rem] text-gradient-gold shimmer sm:text-6xl"
          >
            {t.nameA}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.78, ease }}
            className="my-1 block font-head text-2xl text-bronze sm:text-3xl"
          >
            {t.and}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 34, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.3, delay: 0.66, ease }}
            className="block text-balance text-[2.5rem] text-gradient-gold shimmer sm:text-6xl"
          >
            {t.nameB}
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1, ease }}
          className="mt-7 flex justify-center"
        >
          <Rings className="w-20 text-gold sm:w-24" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease }}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <p className="font-head text-lg tracking-[0.12em] text-sand sm:text-xl">
            {t.dateLabel}
          </p>
          <span className="h-px w-10 bg-gold/50" />
          <p className="font-head text-sm tracking-[0.16em] text-sand/75">
            {t.location}
          </p>
        </motion.div>
      </motion.div>

      <motion.a
        href="#ayah"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="relative z-10 mt-12 flex flex-col items-center gap-2 text-gold"
        aria-label={t.scrollHint}
      >
        <span className="font-head text-xs text-gold sm:text-sm">{t.scrollHint}</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 bg-night/40 text-xl backdrop-blur-sm"
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}
