"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { CinematicReveal } from "./CinematicReveal";
import { useLang } from "./LanguageProvider";

// Echte 3D-scène alleen client-side laden (WebGL, geen SSR).
const Scene3D = dynamic(() => import("./Scene3D").then((m) => m.Scene3D), {
  ssr: false,
  loading: () => <div className="h-full w-full" />,
});

/** Champagne-baan met het draaiende 3D Islamitische medaillon als blikvanger. */
export function Medallion() {
  const { t } = useLang();
  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-accent/40 px-7 py-28 text-center backdrop-blur-[2px]">
      {/* gouden gloed achter het medaillon */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/25 blur-3xl"
        aria-hidden="true"
      />

      <Reveal>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-64 w-64 sm:h-72 sm:w-72"
        >
          <Scene3D />
        </motion.div>
      </Reveal>

      <CinematicReveal delay={0.1}>
        <p className="relative mt-8 font-display text-3xl text-gradient-gold shimmer sm:text-4xl">
          {t.blessing}
        </p>
      </CinematicReveal>
    </section>
  );
}
