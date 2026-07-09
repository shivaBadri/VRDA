"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * App Router `template.tsx` re-mounts on every navigation, so this gives
 * each page a smooth enter transition. Skipped under reduced motion.
 * Fixed/sticky chrome (header, progress bar, floating buttons) lives in
 * the layout — outside this wrapper — so it is unaffected by the transform.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
