"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { translations, type Dict, type Lang } from "@/lib/i18n";

type LangContext = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const Ctx = createContext<LangContext | null>(null);

export function useLang(): LangContext {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");

  // Synchroniseer richting + taal op het <html>-element.
  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang;
    el.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <Ctx.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </Ctx.Provider>
  );
}

/** Zwevende taalschakelaar — altijd zichtbaar, ook over de envelop-intro. */
export function LanguageToggle() {
  const { lang, setLang } = useLang();
  const other: Lang = lang === "ar" ? "nl" : "ar";
  const label = lang === "ar" ? "NL" : "ع";

  return (
    <button
      type="button"
      onClick={() => setLang(other)}
      aria-label={lang === "ar" ? "Schakel naar Nederlands" : "التبديل إلى العربية"}
      className="fixed right-4 top-4 z-[120] flex h-11 min-w-11 items-center justify-center gap-1 rounded-full border border-gold/50 bg-night/70 px-3 font-head text-sm text-gold shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)] backdrop-blur-md transition-colors hover:bg-gold hover:text-ink-deep"
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
      </svg>
      <AnimatePresence mode="wait">
        <motion.span
          key={label}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.2 }}
        >
          {label}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
