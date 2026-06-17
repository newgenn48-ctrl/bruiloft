"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Filmische onthulling (Framer Motion): de inhoud komt zacht in beeld met
 * fade + opschalen + uit-blur zodra je 'm nadert. Eénmalig per element.
 */
export function CinematicReveal({
  children,
  className = "",
  y = 56,
  scale = 0.94,
  blur = 10,
  delay = 0,
  duration = 1.2,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  scale?: number;
  blur?: number;
  delay?: number;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const variants: Variants = {
    hidden: { opacity: 0, y, scale, filter: `blur(${blur}px)` },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration, delay, ease },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
}
