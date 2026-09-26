"use client";

import type { HTMLAttributes } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

/**
 * Global scroll-progress indicator.
 *
 * A 2px accent line pinned to the very top of the viewport. It communicates
 * position rather than decorating, so it drives `scaleX` (a compositor-only
 * transform) instead of animating `width`.
 *
 * Why the props are declared separately instead of being inferred from
 * `<motion.div>` inline:
 * `motion.div` is typed as a mapped/intersection type keyed off
 * `keyof HTMLElements`. When TypeScript resolves the module's types under a
 * different toolchain (e.g. the bun install on CI, a different @types/react
 * patch, or a stale `next` type-augmentation build) that conditional can fail
 * to reduce, and the component degrades to
 * `ComponentType<MotionComponentProps<...<unknown, unknown>>>`. The resulting
 * props type becomes
 * `IntrinsicAttributes & HTMLAttributesWithoutMotionProps<unknown, unknown> & ...`,
 * which carries no `className`, so passing Tailwind classes fails to
 * type-check even though the runtime is perfectly valid.
 *
 * Annotating the props as `HTMLMotionProps<"div">` pins them to the exact
 * definition Framer Motion uses for `motion.div`, so the object is accepted no
 * matter how the intrinsic component type is inferred. This is a real type -
 * not `any` and not a cast - so genuine mistakes still fail to compile, and
 * `style.scaleX` keeps its `MotionValue<number> | number` union.
 *
 * Why the extra `& HTMLAttributes<HTMLDivElement>`:
 * `HTMLMotionProps` is derived from `ReactHTML` / `DetailedHTMLFactory`, both of
 * which `@types/react` 19 removed (they now live only on the 18.x typings). In
 * Framer Motion 11.11.10 that makes `UnwrapFactoryAttributes` collapse to
 * `unknown`, so the motion props alone carry no plain ARIA/HTML attributes and
 * `aria-hidden` is rejected. Intersecting with React's own
 * `HTMLAttributes<HTMLDivElement>` - which does exist on React 19 - restores
 * the accessibility attributes and their correct types (`aria-hidden` as
 * `Booleanish`) without widening anything to `any`. The animation half
 * (`style`, `MotionValue`s) still comes from `HTMLMotionProps`, and unknown
 * properties are still rejected.
 */
type ProgressBarProps = HTMLMotionProps<"div"> & HTMLAttributes<HTMLDivElement>;

export default function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Spring smoothing keeps the line from jittering on trackpad micro-scrolls.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 40,
    restDelta: 0.001,
  });

  // Reduced motion: the element stays in the tree so the server-rendered
  // markup matches (the media query is only known on the client, so returning
  // null here would risk a hydration mismatch), but it is collapsed to zero
  // scale, which makes it invisible. `aria-hidden` - not the transform - is
  // what keeps the purely decorative bar out of the accessibility tree.
  const props: ProgressBarProps = {
    "aria-hidden": true,
    style: { scaleX: reduceMotion ? 0 : scaleX },
    className:
      "fixed inset-x-0 top-0 z-[5100] h-[2px] origin-left bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400",
  };

  return <motion.div {...props} />;
}
