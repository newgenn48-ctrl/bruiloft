"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import { GoldDust } from "./GoldDust";
import { Ornament } from "./Ornament";
import { Butterflies } from "./Butterflies";
import { useLang } from "./LanguageProvider";
import { useAudio } from "./AudioProvider";

/**
 * Envelop-intro (smaragd & goud): een verzegelde envelop die de gast aantikt.
 * Het lakzegel breekt, de flap klapt 3D open, de uitnodigingskaart schuift
 * eruit en de hele intro vervaagt naar de volledige site. Mobile-first.
 */
export function EnvelopeGate({ children }: { children: ReactNode }) {
  const { t } = useLang();
  const { start: startMusic } = useAudio();
  const [scope, animate] = useAnimate();
  const [opened, setOpened] = useState(false);
  const [gone, setGone] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setOpened(true);
      setGone(true);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  async function open() {
    if (busy || gone) return;
    setBusy(true);

    // Start de achtergrondmuziek (deze tik is de vereiste gebruikersactie)
    startMusic();

    await animate(
      ".env-seal",
      { scale: [1, 1.15, 0], rotate: [0, -8, -30], opacity: [1, 1, 0] },
      { duration: 0.5, ease: "easeIn" },
    );
    await animate(".env-flap", { rotateX: 180 }, { duration: 0.85, ease: [0.3, 0, 0.2, 1] });
    await animate(".env-flap", { opacity: 0.001 }, { duration: 0.01 });
    await animate(
      ".env-letter",
      { y: "-122%", scale: 1.02 },
      { duration: 1.0, ease: [0.22, 1, 0.36, 1] },
    );

    setOpened(true);
    await animate(scope.current, { opacity: 0 }, { duration: 0.85, ease: "easeInOut" });
    setGone(true);
  }

  return (
    <>
      {children}

      {!gone && (
        <motion.div
          ref={scope}
          className="grain fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-accent-deep px-6"
        >
          {/* achtergrondfoto met cinematisch Ken Burns-effect */}
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.14, 1], x: ["0%", "-2.5%", "0%"], y: ["0%", "2%", "0%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          >
            <Image src="/m.webp" alt="" fill priority sizes="100vw" className="object-cover" />
          </motion.div>
          {/* lichte sluier over de foto voor contrast */}
          <div
            className="absolute inset-0 bg-night/75"
            aria-hidden="true"
          />
          {/* sfeer */}
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,rgba(176,136,58,0.25),transparent_60%)]"
            aria-hidden="true"
          />
          <GoldDust count={16} />
          <Butterflies />

          {/* gouden kaderlijn */}
          <div className="pointer-events-none absolute inset-4 rounded-sm border border-gold/25" />

          <div className="relative mt-20 flex flex-col items-center sm:mt-0" style={{ perspective: 1600 }}>
            <motion.button
              type="button"
              onClick={open}
              aria-label={t.envelope.aria}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-[1.55/1] w-[min(86vw,420px)] cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.span
                aria-hidden="true"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* envelop-basis */}
                <span className="absolute inset-0 rounded-md border border-gold/50 bg-gradient-to-b from-accent to-accent-deep shadow-[0_28px_70px_-45px_rgba(60,45,15,0.3)]" />

                {/* uitnodigingskaart (zit binnenin) */}
                <span
                  className="absolute inset-x-[6%] bottom-[7%] top-[11%]"
                  style={{ zIndex: 20 }}
                >
                  <span className="env-letter absolute inset-0 flex flex-col items-center justify-center rounded-sm border border-gold/40 bg-gradient-to-b from-[#f7efdc] to-[#ece0c4] px-4 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]">
                    <span className="font-head text-[0.55rem] tracking-luxe text-bronze">
                      {t.kicker}
                    </span>
                    <span className="mt-1 font-display text-2xl leading-tight text-ink-deep sm:text-3xl">
                      {t.nameA} {t.and} {t.nameB}
                    </span>
                    <span className="mt-1 font-head text-[0.6rem] tracking-[0.2em] text-bronze">
                      {t.dateLabel}
                    </span>
                  </span>
                </span>

                {/* onderste & zij-flappen */}
                <span
                  className="absolute inset-0 rounded-md bg-gradient-to-t from-accent-deep to-accent"
                  style={{ zIndex: 30, clipPath: "polygon(0% 100%, 100% 100%, 50% 46%)" }}
                />
                <span
                  className="absolute inset-0 rounded-md bg-gradient-to-r from-[#e7ddc6] to-[#dccfb3]"
                  style={{ zIndex: 30, clipPath: "polygon(0% 0%, 0% 100%, 50% 50%)" }}
                />
                <span
                  className="absolute inset-0 rounded-md bg-gradient-to-l from-[#e7ddc6] to-[#dccfb3]"
                  style={{ zIndex: 30, clipPath: "polygon(100% 0%, 100% 100%, 50% 50%)" }}
                />

                {/* bovenflap (klapt open) */}
                <span
                  className="env-flap absolute inset-x-0 top-0 h-full rounded-md border-t border-gold/50 bg-gradient-to-b from-accent-soft to-accent"
                  style={{
                    zIndex: 40,
                    transformOrigin: "top",
                    transformStyle: "preserve-3d",
                    clipPath: "polygon(0% 0%, 100% 0%, 50% 56%)",
                  }}
                />

                {/* lakzegel */}
                <span
                  className="absolute left-1/2 top-[40%] h-16 w-16"
                  style={{ zIndex: 50, transform: "translate(-50%, -50%)" }}
                >
                  <span
                    className="env-seal absolute inset-0 flex items-center justify-center rounded-full text-ink-deep shadow-[0_12px_26px_-8px_rgba(0,0,0,0.6)]"
                    style={{
                      background:
                        "radial-gradient(circle at 35% 30%, #e3cd8e, #c8a24c 55%, #9c7b3a 100%)",
                    }}
                  >
                    <span className="absolute inset-1 rounded-full border border-ink-deep/20" />
                    <span className="px-1 text-center font-head text-[0.62rem] font-medium uppercase leading-none text-ink-deep/85">
                      {t.envelope.open}
                    </span>
                  </span>
                </span>
              </motion.span>
            </motion.button>

            {/* hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: busy ? 0 : 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-10 flex flex-col items-center"
            >
              <Ornament />
              <motion.p
                animate={{ opacity: [0.55, 1, 0.55] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="mt-4 font-head text-sm tracking-luxe text-gold"
              >
                {t.envelope.hint}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
}
