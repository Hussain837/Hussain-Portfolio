import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ComponentType, HTMLAttributes } from "react";

/**
 * Typed access to Framer Motion's HTML element factories.
 *
 * Why this exists:
 * `motion.div` and friends are typed through Framer Motion's
 * `HTMLMotionProps<Tag>`, which is derived from React's `ReactHTML` and
 * `DetailedHTMLFactory`. Both of those were removed in `@types/react` 19
 * (they only exist in the 18.x typings). With Framer Motion 11.11.x that
 * makes the attribute half of `HTMLMotionProps` collapse to `unknown`, so the
 * component is inferred as
 * `HTMLAttributesWithoutMotionProps<unknown, unknown> & MotionProps` and even
 * `className` is rejected:
 *
 *   Property 'className' does not exist on type
 *   'IntrinsicAttributes & HTMLAttributesWithoutMotionProps<unknown, unknown> & ...'
 *
 * This is purely a typing defect - the rendered element and runtime behaviour
 * are correct - but it breaks the build under the pinned dependency set.
 *
 * `MotionTagProps` intersects Framer Motion's props with React's own
 * `HTMLAttributes`, which does exist on React 19. That restores the real HTML
 * and ARIA attributes (with their correct types, e.g. `aria-hidden` as
 * `Booleanish`) while keeping every Motion prop, including `style` and
 * `MotionValue`s. Nothing is widened to `any`, and unknown props are still
 * rejected.
 *
 * `typedMotion` is an identity function: it returns the exact same component,
 * so it adds no wrapper element and changes nothing at runtime. It exists only
 * to funnel the broken intrinsic-element inference through a single typed
 * boundary, so call sites stay readable and the workaround lives in one place.
 */
export type MotionTag = keyof HTMLElementTagNameMap;

export type MotionTagProps<T extends MotionTag> = HTMLMotionProps<T> &
  HTMLAttributes<HTMLElementTagNameMap[T]>;

/** Re-types a Framer Motion element factory without altering it. */
export function typedMotion<T extends MotionTag>(
  component: ComponentType<MotionTagProps<T>>
): ComponentType<MotionTagProps<T>> {
  return component;
}

/**
 * Typed factory for components that pick their element dynamically (the
 * polymorphic `as` prop). Each tag is resolved through `typedMotion` so the
 * result is a concrete, fully-typed component rather than the union of every
 * motion element, which TypeScript cannot reduce.
 *
 * The generic is deliberately unconstrained so each entry keeps its own exact
 * component type. Constraining it to a record of `ComponentType<...>` would
 * force every entry to a single shared prop type, and a constrained record
 * keyed by one tag collapses the other keys away entirely. The entries are
 * built from `typed`, so they are already real motion components.
 */
export function motionTags<T extends Record<string, unknown>>(tags: T): T {
  return tags;
}

/** Pre-resolved factories for the tags this project animates. */
export const typed = {
  div: typedMotion<"div">(motion.div),
  span: typedMotion<"span">(motion.span),
  p: typedMotion<"p">(motion.p),
  nav: typedMotion<"nav">(motion.nav),
  section: typedMotion<"section">(motion.section),
  li: typedMotion<"li">(motion.li),
  ul: typedMotion<"ul">(motion.ul),
  ol: typedMotion<"ol">(motion.ol),
  article: typedMotion<"article">(motion.article),
  a: typedMotion<"a">(motion.a),
  h1: typedMotion<"h1">(motion.h1),
  h2: typedMotion<"h2">(motion.h2),
} as const;
