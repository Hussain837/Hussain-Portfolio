"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/**
 * Global scroll-progress indicator.
 *
 * A 2px accent line pinned to the very top of the viewport. It communicates
 * position rather than decorating, so it uses scaleX (a compositor-only
 * transform) rather than animating `width`. Hidden entirely under reduced
 * motion, where a continuously moving element would be unwanted.
 */
export default function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  // Spring smoothing keeps the line from jittering on trackpad micro-scrolls.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 40,
    restDelta: 0.001,
  });

  // Reduced motion: the element stays in the tree for the server-rendered
  // markup to match, but is collapsed to zero scale and taken out of the
  // accessibility tree. Rendering nothing here instead would cause a
  // hydration mismatch, because the media query is only known on the client.
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: reduceMotion ? 0 : scaleX }}
      className="fixed inset-x-0 top-0 z-[5100] h-[2px] origin-left bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
    />
  );
}
