/** Decorative `✦` divider that closes every home section. */
export default function SectionDivider({
  className = "mt-12",
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-center justify-center gap-2 text-slate-600 text-xs sm:text-sm">
        <span
          aria-hidden="true"
          className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-indigo-500/50"
        />
        <span aria-hidden="true" className="text-slate-500">
          ✦
        </span>
        <span
          aria-hidden="true"
          className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-indigo-500/50"
        />
      </div>
    </div>
  );
}
