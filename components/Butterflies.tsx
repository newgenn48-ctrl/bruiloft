"use client";

import { motion } from "framer-motion";

/** Eén vleugelhelft (lichaam aan de linkerkant, lobben naar rechts). */
function Wing({ mirror = false }: { mirror?: boolean }) {
  return (
    <svg
      viewBox="0 0 60 80"
      className="h-full w-auto"
      style={mirror ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wingGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ecdcae" />
          <stop offset="1" stopColor="#bd9648" />
        </linearGradient>
      </defs>
      <g fill="url(#wingGold)" stroke="#9c7b3a" strokeWidth="0.8" opacity="0.92">
        <path d="M4 40 C 18 6, 58 8, 50 34 C 46 46, 16 44, 6 42 Z" />
        <path d="M6 44 C 22 48, 44 66, 30 76 C 18 84, 2 58, 4 46 Z" />
      </g>
      <g fill="#fff7e2" opacity="0.5">
        <circle cx="40" cy="22" r="3" />
        <circle cx="26" cy="62" r="2.2" />
      </g>
    </svg>
  );
}

const flap = { scaleX: [1, 0.22, 1] };
const flapT = { duration: 0.28, repeat: Infinity, ease: "easeInOut" as const };

type Path = {
  size: number;
  dur: number;
  delay: number;
  x: string[];
  y: string[];
  r: number[];
};

function Butterfly({ p }: { p: Path }) {
  return (
    <motion.div
      className="absolute left-0 top-0"
      style={{ width: p.size, height: p.size * 1.05 }}
      initial={{ x: p.x[0], y: p.y[0], opacity: 0 }}
      animate={{ x: p.x, y: p.y, rotate: p.r, opacity: [0, 1, 1, 0] }}
      transition={{
        duration: p.dur,
        delay: p.delay,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.1, 0.9, 1],
      }}
    >
      <motion.div
        className="relative h-full w-full"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute right-1/2 top-0 h-full origin-right"
          animate={flap}
          transition={flapT}
        >
          <Wing mirror />
        </motion.div>
        <motion.div
          className="absolute left-1/2 top-0 h-full origin-left"
          animate={flap}
          transition={flapT}
        >
          <Wing />
        </motion.div>
        <div className="absolute left-1/2 top-[16%] h-[66%] w-[2px] -translate-x-1/2 rounded-full bg-[#5b4a23]" />
      </motion.div>
    </motion.div>
  );
}

const paths: Path[] = [
  {
    size: 36,
    dur: 21,
    delay: 0,
    x: ["-8vw", "30vw", "70vw", "110vw"],
    y: ["80vh", "40vh", "58vh", "16vh"],
    r: [12, -8, 10, -6],
  },
  {
    size: 26,
    dur: 27,
    delay: 5,
    x: ["110vw", "64vw", "26vw", "-8vw"],
    y: ["24vh", "54vh", "30vh", "72vh"],
    r: [-10, 8, -6, 12],
  },
  {
    size: 30,
    dur: 24,
    delay: 11,
    x: ["18vw", "50vw", "32vw", "64vw"],
    y: ["98vh", "56vh", "34vh", "-12vh"],
    r: [6, -6, 8, -4],
  },
];

/** Zwevende, klapperende gouden vlinders — een levende, cinematische laag. */
export function Butterflies({ count = paths.length }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {paths.slice(0, count).map((p, i) => (
        <Butterfly key={i} p={p} />
      ))}
    </div>
  );
}
