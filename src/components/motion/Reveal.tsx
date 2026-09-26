"use client";

import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import {
  VIEWPORT,
  revealDuration,
  revealVariants,
  staggerContainer,
  staggerItem,
  transition,
  type RevealVariant,
} from "./motion";
import { motionTags, typed, type MotionTagProps } from "./typedMotion";

/**
 * Element factories for the polymorphic `as` prop, pre-resolved through
 * `motionTags` so each tag keeps its own concrete, fully-typed component.
 * Looking these up as `motion[as]` instead yields a union TypeScript cannot
 * reduce, which loses every HTML attribute - see `typedMotion`.
 */
const revealTags = motionTags({
  div: typed.div,
  section: typed.section,
  li: typed.li,
  article: typed.article,
});

const staggerTags = motionTags({
  div: typed.div,
  ul: typed.ul,
  ol: typed.ol,
});

const itemTags = motionTags({
  div: typed.div,
  li: typed.li,
  article: typed.article,
  a: typed.a,
  section: typed.section,
});

/**
 * Scroll-triggered reveal for a block of content.
 *
 * `variant` selects the movement character; without it every element on the
 * page would fade up identically, which is exactly the generic look to avoid.
 * Defaults to a fade+rise with no y-offset so it cannot cause layout shift.
 */
export function Reveal({
  children,
  variant = "soft",
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const Component = revealTags[as];
  return (
    <Component
      className={className}
      variants={revealVariants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={transition(revealDuration[variant], delay)}
    >
      {children}
    </Component>
  );
}

/**
 * Parent for a staggered group. Children must be `StaggerItem`.
 *
 * The stagger is intentionally short (60ms) and the container is capped so
 * large grids do not make the last item feel late.
 */
export function Stagger({
  children,
  className,
  stagger = 0.06,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: "div" | "ul" | "ol";
}) {
  const Component = staggerTags[as];
  return (
    <Component
      className={className}
      variants={staggerContainer(stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </Component>
  );
}

/** Child of `Stagger`. Inherits the timing from its parent. */
export function StaggerItem({
  children,
  variant = "soft",
  className,
  as = "div",
  ...rest
}: {
  children: ReactNode;
  variant?: RevealVariant;
  className?: string;
  as?: "div" | "li" | "article" | "a" | "section";
  [key: string]: unknown;
}) {
  const Component = itemTags[as];
  return (
    <Component className={className} variants={staggerItem(variant)} {...rest}>
      {children}
    </Component>
  );
}

