"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DURATION, EASE, VIEWPORT } from "@/components/motion/motion";

interface SectionHeadingProps {
  /** Rendered with the accent gradient. */
  highlight: string;
  /** Rendered in solid white italic directly after the highlight. */
  rest?: string;
  description?: string;
  className?: string;
}

/**
 * Section title with the decorative flanking rules and an optional supporting
 * line.
 *
 * The three parts animate in sequence - rule, then heading, then description -
 * so the eye is led down the hierarchy instead of the block appearing at once.
 * The heading reveals through a clipped container, giving the serif type the
 * same "settling onto the baseline" entrance as the hero name.
 */
export default function SectionHeading({
  highlight,
  rest,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      <div className="mb-4 flex items-center gap-3">
        <motion.div
          aria-hidden="true"
          className="h-px w-8 origin-left bg-gradient-to-r from-indigo-500 to-transparent sm:w-12"
          variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
          transition={{ duration: 0.7, ease: EASE.entrance }}
        />

        <h2 className="display-type text-[clamp(1.9rem,4.2vw,3.25rem)] text-white">
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span
              className="block"
              variants={{ hidden: { y: "105%" }, visible: { y: "0%" } }}
              transition={{ duration: 0.8, delay: 0.08, ease: EASE.entrance }}
            >
              <span className="text-gradient">{highlight}</span>
              {rest ? <span className="text-white italic"> {rest}</span> : null}
            </motion.span>
          </span>
        </h2>

        <motion.div
          aria-hidden="true"
          className="h-px flex-1 origin-right bg-gradient-to-l from-indigo-500 to-transparent"
          variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
          transition={{ duration: 0.8, delay: 0.16, ease: EASE.entrance }}
        />
      </div>

      {description ? (
        <motion.p
          className="mb-8 max-w-2xl text-sm text-slate-400 sm:mb-10 sm:text-base md:mb-12"
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          transition={{
            duration: DURATION.reveal,
            delay: 0.22,
            ease: EASE.entrance,
          }}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
