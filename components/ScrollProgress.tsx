"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useLang } from "./LanguageProvider";

/** Dunne gouden voortgangsbalk bovenaan die meeloopt met het scrollen. */
export function ScrollProgress() {
  const { lang } = useLang();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: lang === "ar" ? "right" : "left" }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-gradient-to-r from-bronze via-gold to-gold-soft"
      aria-hidden="true"
    />
  );
}
