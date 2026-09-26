import type { Variants, Transition } from "framer-motion";

/**
 * ---------------------------------------------------------------------------
 * Motion language
 * ---------------------------------------------------------------------------
 * Every animation on this site comes from this file. Sections and cards choose
 * a *character* rather than composing ad-hoc values, which is what keeps the
 * motion feeling like one system instead of a pile of independent effects.
 *
 * Design rules encoded here:
 *  - Only `transform`, `opacity` and `filter` are animated. No width/height/top
 *    /left/margin, so entrances can never cause layout shift.
 *  - Distances are small (8-32px). Motion should read as "settling", not flying.
 *  - Each character pairs a distinct movement with a distinct easing, so
 *    sections do not all fade up identically.
 */

/** Coherent timing scale. Mirrors the documented micro/reveal/cinematic bands. */
export const DURATION = {
  micro: 0.18,
  interaction: 0.28,
  reveal: 0.62,
  cinematic: 0.9,
} as const;

/**
 * Four easing curves, one per intent. Reusing a small set is what makes the
 * motion read as deliberate; a dozen bespoke curves would read as noise.
 */
export const EASE = {
  /** Entrances: fast start, long graceful settle. */
  entrance: [0.16, 1, 0.3, 1] as const,
  /** Hover/press: quick and responsive. */
  interaction: [0.4, 0, 0.2, 1] as const,
  /** Large, slow moves: softer, more cinematic. */
  cinematic: [0.22, 0.61, 0.36, 1] as const,
} as const;

/** Shared viewport config: reveal once, slightly before fully in view. */
export const VIEWPORT = { once: true, amount: 0.2, margin: "0px 0px -80px 0px" } as const;

/** Standard entrance transition. */
export const transition = (
  duration: number = DURATION.reveal,
  delay = 0
): Transition => ({
  duration,
  delay,
  ease: EASE.entrance,
});

/**
 * Section reveal characters.
 *
 * `soft`     - about: gentle rise, the baseline.
 * `technical`- skills: rises further with a slight settle-back and a touch of
 *              blur, reading as "systems coming online".
 * `cards`    - projects: subtle rise plus a whisper of scale.
 * `timeline` - experience: rises and drifts in from the side, as if read
 *              along a spine.
 * `cinematic`- AI: the most expressive; blur resolves while scaling up.
 * `calm`     - contact: slowest and flattest, an exhale at the end of the page.
 */
export type RevealVariant =
  | "soft"
  | "technical"
  | "cards"
  | "timeline"
  | "cinematic"
  | "calm";

export const revealVariants: Record<RevealVariant, Variants> = {
  soft: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  technical: {
    hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  cards: {
    hidden: { opacity: 0, y: 24, scale: 0.985 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  timeline: {
    hidden: { opacity: 0, x: -22, y: 12 },
    visible: { opacity: 1, x: 0, y: 0 },
  },
  cinematic: {
    hidden: { opacity: 0, y: 34, scale: 0.975, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  },
  calm: {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0 },
  },
};

/** Per-variant duration, so sections do not all take the same time. */
export const revealDuration: Record<RevealVariant, number> = {
  soft: DURATION.reveal,
  technical: DURATION.reveal + 0.08,
  cards: DURATION.reveal,
  timeline: DURATION.reveal + 0.04,
  cinematic: DURATION.cinematic,
  calm: DURATION.reveal + 0.16,
};

/**
 * Stagger children. `cap` bounds the total delay so a 6-item grid does not make
 * the last card wait a second and a half - content must become usable fast.
 */
export const staggerContainer = (stagger = 0.06, cap = 8): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: 0.04 },
  },
});

export const staggerItem = (variant: RevealVariant = "soft"): Variants => ({
  hidden: revealVariants[variant].hidden,
  visible: {
    ...revealVariants[variant].visible,
    transition: { duration: revealDuration[variant], ease: EASE.entrance },
  },
});

/**
 * Hero entrance: a cinematic settle. Each part gets its own delay so the eye is
 * led eyebrow -> name -> description -> actions -> tech, rather than the whole
 * block fading in as one object.
 */
export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.15 },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE.entrance },
  },
};

