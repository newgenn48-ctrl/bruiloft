"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wedding } from "@/lib/config";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { useLang } from "./LanguageProvider";

type Status = "idle" | "loading" | "success" | "error";

const inputBase =
  "w-full rounded-lg border border-line bg-ember/60 px-4 py-3 text-sand outline-none transition-colors placeholder:text-muted/60 focus:border-gold focus:ring-2 focus:ring-gold/20";

export function Rsvp() {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>("idle");
  const [attending, setAttending] = useState<"yes" | "no">("yes");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="hudoor" className="bg-night/40 px-7 py-24 backdrop-blur-[2px] sm:py-28">
      <div className="mx-auto max-w-md">
        <SectionHeading kicker={t.rsvp.kicker} title={t.rsvp.title} />

        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-muted">
            {t.rsvp.introBefore}{" "}
            <span className="font-medium text-sand">{t.rsvp.deadline}</span>.
          </p>
        </Reveal>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-12 rounded-2xl border border-gold/40 bg-ember p-10 text-center shadow-[var(--shadow-luxe)]"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m20 6-11 11-5-5" />
                </svg>
              </div>
              <h3 className="font-display text-4xl text-gradient-gold">{t.rsvp.successTitle}</h3>
              <p className="mt-3 text-muted">{t.rsvp.successText}</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-12 space-y-5"
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-muted">{t.rsvp.name}</label>
                <input id="name" name="name" required className={inputBase} placeholder={t.rsvp.namePh} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-muted">{t.rsvp.email}</label>
                <input id="email" name="email" type="email" required className={inputBase} placeholder="name@example.com" dir="ltr" />
              </div>

              <div>
                <span className="mb-2 block text-sm text-muted">{t.rsvp.attendingQ}</span>
                <div className="grid grid-cols-2 gap-3">
                  {([
                    { v: "yes", label: t.rsvp.yes },
                    { v: "no", label: t.rsvp.no },
                  ] as const).map((opt) => (
                    <label
                      key={opt.v}
                      className={`cursor-pointer rounded-lg border px-4 py-3 text-center text-sm transition-all ${
                        attending === opt.v
                          ? "border-gold bg-gold/10 text-sand"
                          : "border-line bg-ember/60 text-muted hover:border-gold/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="attending"
                        value={opt.v}
                        checked={attending === opt.v}
                        onChange={() => setAttending(opt.v)}
                        className="sr-only"
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="guests" className="mb-2 block text-sm text-muted">{t.rsvp.guests}</label>
                  <input id="guests" name="guests" type="number" min="1" max="10" defaultValue="1" className={inputBase} />
                </div>
                <div>
                  <label htmlFor="diet" className="mb-2 block text-sm text-muted">{t.rsvp.diet}</label>
                  <input id="diet" name="diet" className={inputBase} placeholder={t.rsvp.dietPh} />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-muted">{t.rsvp.message}</label>
                <textarea id="message" name="message" rows={3} className={inputBase} placeholder={t.rsvp.messagePh} />
              </div>

              {status === "error" && (
                <p className="text-center text-sm text-red-500">
                  {t.rsvp.errorBefore} {wedding.contactEmail}.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 w-full rounded-full bg-gradient-to-l from-bronze via-gold to-gold-soft py-4 font-head text-sm tracking-[0.15em] text-ink-deep transition-all duration-300 hover:opacity-90 disabled:opacity-60"
              >
                {status === "loading" ? t.rsvp.sending : t.rsvp.submit}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
