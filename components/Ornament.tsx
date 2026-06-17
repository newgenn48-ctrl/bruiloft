"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const drawPath = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.6, delay: i * 0.12, ease },
      opacity: { duration: 0.4, delay: i * 0.12 },
    },
  }),
};

/** Sierlijke gouden scheidingslijn met een draaiende achtpuntige ster (khatam). */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`flex items-center justify-center gap-4 text-gold ${className}`}
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      <motion.span
        className="h-px w-16 origin-left bg-gradient-to-l from-transparent to-gold/70 sm:w-24"
        variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 1 } }}
        transition={{ duration: 0.7, ease }}
      />
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        variants={{
          hidden: { scale: 0, rotate: -90, opacity: 0 },
          visible: { scale: 1, rotate: 0, opacity: 1 },
        }}
        transition={{ duration: 0.8, delay: 0.25, ease }}
      >
        <path
          d="M12 1l2.6 4.8L20 4l-1.8 5.4L24 12l-5.8 2.6L20 20l-5.4-1.8L12 23l-2.6-4.8L4 20l1.8-5.4L0 12l5.8-2.6L4 4l5.4 1.8z"
          fill="currentColor"
          opacity="0.9"
        />
        <circle cx="12" cy="12" r="2.4" fill="var(--color-ink-deep)" />
      </motion.svg>
      <motion.span
        className="h-px w-16 origin-right bg-gradient-to-r from-transparent to-gold/70 sm:w-24"
        variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 1 } }}
        transition={{ duration: 0.7, ease }}
      />
    </motion.div>
  );
}

/** Arabesk hoekornament dat zichzelf in goud tekent. */
export function Arabesque({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <g stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round">
        <motion.path d="M4 4 C 4 70, 40 96, 96 96" custom={0} variants={drawPath} />
        <motion.path d="M4 4 C 70 4, 96 40, 96 96" custom={0} variants={drawPath} />
        <motion.path d="M4 30 C 40 40, 56 56, 60 92" custom={1} variants={drawPath} />
        <motion.path d="M30 4 C 40 40, 56 56, 92 60" custom={1} variants={drawPath} />
        <motion.path d="M96 96 C 120 96, 140 80, 150 56" custom={2} variants={drawPath} />
        <motion.path d="M96 96 C 96 120, 80 140, 56 150" custom={2} variants={drawPath} />
      </g>
      <motion.g
        fill="currentColor"
        variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}
        transition={{ duration: 0.6, delay: 0.5, ease }}
        style={{ transformOrigin: "96px 96px" }}
      >
        <circle cx="96" cy="96" r="4" />
        <ellipse cx="150" cy="50" rx="5" ry="9" transform="rotate(45 150 50)" />
        <ellipse cx="50" cy="150" rx="5" ry="9" transform="rotate(45 50 150)" />
        <circle cx="4" cy="4" r="3" />
      </motion.g>
    </motion.svg>
  );
}
