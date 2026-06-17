"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * 3D pointer-tilt wrapper. De inhoud kantelt naar de muis met een
 * vloeiende veer, plus een subtiele gouden glans die de cursor volgt.
 */
export function Tilt({
  children,
  className = "",
  max = 11,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const spring = { stiffness: 150, damping: 18, mass: 0.4 };
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);

  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const glareX = useTransform(sx, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(sy, [0, 1], ["0%", "100%"]);
  const glareBg = useTransform<string, string>(
    [glareX, glareY],
    ([x, y]) =>
      `radial-gradient(circle at ${x} ${y}, rgba(227,205,142,0.22), transparent 55%)`,
  );

  function handle(e: React.PointerEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }
  function reset() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <div
      ref={ref}
      onPointerMove={handle}
      onPointerLeave={reset}
      className={`group [perspective:900px] ${className}`}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full w-full rounded-[inherit]"
      >
        {children}
        {glare && (
          <motion.span
            aria-hidden="true"
            style={{ background: glareBg }}
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 [transform:translateZ(2px)]"
          />
        )}
      </motion.div>
    </div>
  );
}
