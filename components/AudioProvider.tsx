"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Achtergrondmuziek die start zodra de envelop wordt geopend (gebruikersactie,
 * dus toegestaan door de browser). Zet je bestand op: public/audio/music.mp3
 * Geen bestand? Dan gebeurt er niets en is er geen knop — niets breekt.
 */
const AUDIO_SRC = "/audio/geluid.mp3";
const VOLUME = 0.4;

type AudioCtx = {
  started: boolean;
  muted: boolean;
  start: () => void;
  toggle: () => void;
};

const Ctx = createContext<AudioCtx | null>(null);

export function useAudio(): AudioCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);

  // Aangeroepen bij het openen van de envelop.
  const start = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.volume = VOLUME;
    el.muted = false;
    el.play()
      .then(() => {
        setStarted(true);
        setMuted(false);
      })
      .catch(() => {
        // Geen bestand of geblokkeerd → stil falen, geen knop tonen.
      });
  }, []);

  const toggle = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    if (el.paused || el.muted) {
      el.muted = false;
      el.play().catch(() => {});
      setMuted(false);
    } else {
      el.muted = true;
      setMuted(true);
    }
  }, []);

  return (
    <Ctx.Provider value={{ started, muted, start, toggle }}>
      {/* preload none → laadt pas bij openen, geen 404 vooraf */}
      <audio ref={ref} src={AUDIO_SRC} loop preload="none" />
      {children}
    </Ctx.Provider>
  );
}

/** Zwevend mute-knopje — verschijnt pas zodra de muziek echt speelt. */
export function AudioToggle() {
  const { started, muted, toggle } = useAudio();

  return (
    <AnimatePresence>
      {started && (
        <motion.button
          type="button"
          onClick={toggle}
          aria-label={muted ? "Muziek aanzetten" : "Muziek dempen"}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed left-4 top-4 z-[120] flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-night/70 text-gold shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)] backdrop-blur-md transition-colors hover:bg-gold hover:text-ink-deep"
        >
          {muted ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M11 5 6 9H3v6h3l5 4V5z" />
              <line x1="22" y1="9" x2="16" y2="15" />
              <line x1="16" y1="9" x2="22" y2="15" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M11 5 6 9H3v6h3l5 4V5z" />
              <path d="M15.5 8.5a5 5 0 0 1 0 7" />
              <path d="M18.5 5.5a9 9 0 0 1 0 13" />
            </svg>
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
}
