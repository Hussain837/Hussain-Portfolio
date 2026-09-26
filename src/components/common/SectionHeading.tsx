import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  /** Rendered with the indigo→purple→pink gradient. */
  highlight: string;
  /** Rendered in solid white directly after the highlight. */
  rest?: string;
  description?: string;
  className?: string;
}

/**
 * Gradient section title with the decorative flanking rules, plus an optional
 * supporting line. Replaces the identical heading markup in every section.
 */
export default function SectionHeading({
  highlight,
  rest,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3 mb-4">
        <div
          aria-hidden="true"
          className="h-px w-8 sm:w-12 bg-gradient-to-r from-indigo-500 to-transparent"
        />
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          <span className="text-gradient">{highlight}</span>
          {rest ? <span className="text-white">{rest}</span> : null}
        </h2>
        <div
          aria-hidden="true"
          className="h-px flex-1 bg-gradient-to-l from-indigo-500 to-transparent"
        />
      </div>

      {description ? (
        <p className="text-slate-400 text-sm sm:text-base mb-8 sm:mb-10 md:mb-12 max-w-2xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}
