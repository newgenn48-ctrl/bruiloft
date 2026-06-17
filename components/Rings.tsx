"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Twee verstrengelde gouden trouwringen die zichzelf tekenen,
 * met een fonkelende diamant erboven. Symbool van de verbintenis.
 */
export function Rings({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 120 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      <defs>
        <linearGradient id="ringGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e3cd8e" />
          <stop offset="0.5" stopColor="#c8a24c" />
          <stop offset="1" stopColor="#9c7b3a" />
        </linearGradient>
      </defs>

      {/* linker ring */}
      <motion.circle
        cx="48"
        cy="42"
        r="20"
        stroke="url(#ringGold)"
        strokeWidth="3.5"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { pathLength: { duration: 1.6, ease }, opacity: { duration: 0.4 } },
          },
        }}
      />
      {/* rechter ring */}
      <motion.circle
        cx="72"
        cy="42"
        r="20"
        stroke="url(#ringGold)"
        strokeWidth="3.5"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { duration: 1.6, delay: 0.5, ease },
              opacity: { duration: 0.4, delay: 0.5 },
            },
          },
        }}
      />

      {/* fonkelende diamant */}
      <motion.path
        d="M72 6 L75 12 L81 14.5 L75 17 L72 23 L69 17 L63 14.5 L69 12 Z"
        fill="#f3e6c0"
        variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
        transition={{ duration: 0.6, delay: 1.2, ease }}
        style={{ transformOrigin: "72px 14px" }}
      />
      <motion.path
        d="M72 6 L75 12 L81 14.5 L75 17 L72 23 L69 17 L63 14.5 L69 12 Z"
        fill="#ffffff"
        animate={{ opacity: [0, 0.9, 0], scale: [0.6, 1.25, 0.6] }}
        transition={{ duration: 2.6, repeat: Infinity, delay: 1.8, ease: "easeInOut" }}
        style={{ transformOrigin: "72px 14px" }}
      />
    </motion.svg>
  );
}
