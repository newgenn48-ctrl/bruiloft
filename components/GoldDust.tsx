"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * Zacht opstijgend / glinsterend goudstof.
 * Deterministisch (geen Math.random in render) zodat SSR en client matchen.
 */
export function GoldDust({ count = 26 }: { count?: number }) {
  const dust = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const r1 = ((i * 9301 + 49297) % 233280) / 233280;
      const r2 = ((i * 4099 + 7919) % 251) / 251;
      const r3 = ((i * 6151 + 1) % 313) / 313;
      return {
        left: `${(r1 * 100).toFixed(2)}%`,
        size: 1.5 + r2 * 3.5,
        duration: 7 + r3 * 9,
        delay: -r2 * 14,
        drift: (r1 - 0.5) * 80,
        peak: 0.25 + r3 * 0.65,
      };
    });
  }, [count]);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {dust.map((d, i) => (
        <motion.span
          key={i}
          className="absolute bottom-[-5%] block rounded-full bg-gold"
          style={{
            left: d.left,
            width: d.size,
            height: d.size,
            boxShadow: "0 0 7px rgba(176,136,58,0.55)",
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: "-110vh",
            x: [0, d.drift, 0],
            opacity: [0, d.peak, d.peak, 0],
          }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
