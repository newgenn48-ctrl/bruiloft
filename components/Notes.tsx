"use client";

import type { ReactNode } from "react";
import { useLang } from "./LanguageProvider";
import { SectionHeading } from "./SectionHeading";
import { CinematicReveal } from "./CinematicReveal";

const icons: Record<string, ReactNode> = {
  // baby (kinderen)
  children: (
    <>
      <circle cx="12" cy="13" r="7.5" />
      <path d="M12 5.5c1.7-1 3.1.3 2.1 1.7" />
      <circle cx="9.4" cy="12" r="0.7" fill="currentColor" stroke="none" />
      <circle cx="14.6" cy="12" r="0.7" fill="currentColor" stroke="none" />
      <path d="M9.6 15.4c.9.9 3.9.9 4.8 0" />
    </>
  ),
  // camera met streep (geen foto's)
  photo: (
    <>
      <path d="M3 7h3l1.5-2h9L18 7h3v12H3z" />
      <circle cx="12" cy="13" r="3.2" />
      <line x1="4" y1="4" x2="20" y2="20" />
    </>
  ),
};

export function Notes() {
  const { t } = useLang();
  const items = [
    { key: "children", text: t.notes.children },
    { key: "photo", text: t.notes.photo },
  ];

  return (
    <section className="relative overflow-hidden bg-accent/45 px-7 py-24 backdrop-blur-[2px] sm:py-28">
      <div className="relative mx-auto max-w-md">
        <SectionHeading kicker={t.notes.kicker} title={t.notes.title} />

        <div className="mt-12 space-y-4">
          {items.map((item, i) => (
            <CinematicReveal key={item.key} delay={i * 0.08}>
              <div className="flex items-center gap-4 rounded-2xl border border-line bg-ember/70 p-5 shadow-[var(--shadow-card)]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {icons[item.key]}
                  </svg>
                </span>
                <p className="font-display text-lg leading-snug text-sand sm:text-xl">
                  {item.text}
                </p>
              </div>
            </CinematicReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
