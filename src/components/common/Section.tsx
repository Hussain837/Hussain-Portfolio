import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { SECTION_CONTAINER, SECTION_PADDING } from "@/components/common/sectionTheme";

interface SectionProps {
  id: string;
  children: ReactNode;
  /**
   * Optional tonal shift for the few sections that genuinely need to read
   * differently. Kept as a neutral dark step rather than an accent gradient,
   * so the page-wide atmosphere stays the only coloured background layer.
   */
  variant?: "default" | "raised" | "recessed";
  className?: string;
}

const VARIANT_SURFACE: Record<NonNullable<SectionProps["variant"]>, string> = {
  default: "",
  raised: "bg-white/[0.015]",
  recessed: "",
};

/**
 * Home-section shell.
 *
 * The section spans the full document width and hosts the single shared
 * content container, so every section shares one left edge and one max width.
 * Background atmosphere is owned by `html`/`body` rather than repeated per
 * section, which is what previously produced visible seams between sections
 * and dead space beside the content on wide viewports.
 */
export default function Section({
  id,
  children,
  variant = "default",
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        SECTION_PADDING,
        VARIANT_SURFACE[variant],
        className
      )}
    >
      <div className={SECTION_CONTAINER}>{children}</div>
    </section>
  );
}
