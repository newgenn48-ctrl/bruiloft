"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/**
 * Filmische onthulling via GSAP ScrollTrigger: de inhoud komt zacht in beeld
 * met fade + opschalen + uit-blur zodra je 'm nadert. Eénmalig per element.
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
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      gsap.registerPlugin(ScrollTrigger);

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      gsap.set(el, { opacity: 0, y, scale, filter: `blur(${blur}px)` });
      gsap.to(el, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 82%", once: true },
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
