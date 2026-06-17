"use client";

import { motion } from "framer-motion";
import { Ornament } from "./Ornament";
import { Reveal } from "./Reveal";
import { useLang } from "./LanguageProvider";

export function SectionHeading({
  kicker,
  title,
  onDark = false,
}: {
  kicker: string;
  title: string;
  onDark?: boolean;
}) {
  const { lang } = useLang();
  // Wipe-richting: in het Arabisch (RTL) van rechts naar links.
  const from = lang === "ar" ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)";

  return (
    <div className="flex flex-col items-center text-center">
      <Reveal>
        <p className={`mb-3 text-xs tracking-luxe ${onDark ? "text-gold-soft" : "text-gold"}`}>
          {kicker}
        </p>
      </Reveal>

      <motion.h2
        initial={{ clipPath: from, opacity: 0 }}
        whileInView={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        className={`font-display text-4xl leading-[1.3] pb-1 sm:text-5xl ${onDark ? "text-cream" : "text-sand"}`}
      >
        {title}
      </motion.h2>

      <Reveal delay={0.16}>
        <Ornament className="mt-6" />
      </Reveal>
    </div>
  );
}
