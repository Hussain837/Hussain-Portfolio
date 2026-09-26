/**
 * Shared building blocks for home sections.
 *
 * The section shell is intentionally minimal: the page-wide atmosphere now
 * lives on `html`/`body` (see `globals.scss`), so a section only needs to
 * span the full width and provide one consistent content container. The
 * per-section blurred orbs and grid overlay that were duplicated across every
 * section are gone - they are what made the page read as a stack of
 * independently decorated bands with visible seams.
 */

/** Fluid gutters: 16px mobile -> 24px tablet -> 32px desktop. */
export const SECTION_CONTAINER =
  "mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 relative z-10";

/**
 * Vertical rhythm. Consistent across sections so the page scrolls as one
 * continuous canvas rather than a set of differently-sized bands.
 */
export const SECTION_PADDING = "py-16 sm:py-20 lg:py-24";

/**
 * Sections are transparent by default and inherit the page canvas. `variant`
 * is exposed on `<Section>` for the few places that genuinely need a tonal
 * shift (e.g. the contact section closing the page) without reintroducing
 * per-section colour noise.
 */
export const SECTION_SURFACE = "";
