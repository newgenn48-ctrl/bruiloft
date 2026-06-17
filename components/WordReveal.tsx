"use client";

import { Fragment } from "react";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Onthult tekst woord voor woord (fade + blur + opstijgen). Splitst op spaties,
 * dus woorden blijven heel — ook veilig voor verbonden Arabisch schrift.
 */
export function WordReveal({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {words.map((w, i) => (
        <Fragment key={i}>
          <motion.span variants={word} className="inline-block">
            {w}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </motion.span>
  );
}
