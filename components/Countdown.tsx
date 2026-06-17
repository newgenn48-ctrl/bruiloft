"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { wedding } from "@/lib/config";
import { toArabic } from "@/lib/format";
import { Reveal } from "./Reveal";
import { Tilt } from "./Tilt";
import { useLang } from "./LanguageProvider";

type Parts = { days: number; hours: number; mins: number; secs: number };

function getParts(target: number): { parts: Parts; done: boolean } {
  const diff = target - Date.now();
  if (diff <= 0) return { parts: { days: 0, hours: 0, mins: 0, secs: 0 }, done: true };
  const s = Math.floor(diff / 1000);
  return {
    parts: {
      days: Math.floor(s / 86400),
      hours: Math.floor((s % 86400) / 3600),
      mins: Math.floor((s % 3600) / 60),
      secs: s % 60,
    },
    done: false,
  };
}

const order: (keyof Parts)[] = ["days", "hours", "mins", "secs"];

export function Countdown() {
  const { lang, t } = useLang();
  const target = new Date(wedding.date).getTime();
  const [state, setState] = useState<{ parts: Parts; done: boolean } | null>(null);

  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, margin: "-80px" });
  const [intro, setIntro] = useState(0); // 0 → 1: filmische "in-tik"

  useEffect(() => {
    setState(getParts(target));
    const id = setInterval(() => setState(getParts(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  // Cijfers tellen van 0 op naar hun waarde zodra het blok in beeld komt.
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, 1, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setIntro(v),
    });
    return () => controls.stop();
  }, [inView]);

  const fmt = (n: number) => {
    const padded = String(Math.max(0, Math.round(n))).padStart(2, "0");
    return lang === "ar" ? toArabic(padded) : padded;
  };

  return (
    <section className="relative overflow-hidden bg-night/35 py-24 backdrop-blur-[2px] sm:py-28">
      <div className="relative mx-auto max-w-md px-7 text-center">
        <Reveal>
          <p className="mb-3 text-xs tracking-luxe text-gold">{t.countdown.kicker}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-4xl text-sand sm:text-5xl">{t.countdown.title}</h2>
        </Reveal>

        {state?.done ? (
          <Reveal delay={0.2}>
            <p className="mt-12 font-display text-4xl text-gradient-gold sm:text-5xl">
              {t.countdown.done}
            </p>
          </Reveal>
        ) : (
          <Reveal delay={0.2}>
            <div ref={gridRef} className="mt-12 grid grid-cols-2 gap-4">
              {order.map((key) => (
                <Tilt key={key} className="rounded-xl" max={14}>
                  <div className="preserve-3d rounded-xl border border-line bg-ember/80 px-3 py-7 shadow-[var(--shadow-card)] backdrop-blur-sm">
                    <div className="font-display text-5xl text-gradient-gold shimmer sm:text-6xl [transform:translateZ(36px)] tabular-nums">
                      {state ? fmt(state.parts[key] * intro) : "—"}
                    </div>
                    <div className="mt-3 font-head text-[0.7rem] tracking-luxe text-muted [transform:translateZ(18px)]">
                      {t.countdown[key]}
                    </div>
                  </div>
                </Tilt>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
