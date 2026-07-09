"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Wraps children in a scroll-linked transform. As the element travels
 * through the viewport, it drifts on the Y axis (parallax) and can fade.
 * Respects prefers-reduced-motion (renders a static wrapper).
 */
export function ScrollParallax({
  children,
  className = "",
  from = 0,
  to = -80,
  fade = false,
}: {
  children: ReactNode;
  className?: string;
  from?: number;
  to?: number;
  fade?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [from, to]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, fade ? 0 : 1]);

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} className={className} style={{ y, opacity }}>
      {children}
    </motion.div>
  );
}
