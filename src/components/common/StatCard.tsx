import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@/utils/cn";

interface StatCardProps {
  label: string;
  value: string;
  icon: IconDefinition;
  className?: string;
}

/**
 * Small labelled figure. Uses the shared `card-surface` so stat tiles belong
 * to the same system as the project, skill and experience cards instead of
 * reading as a separately styled component.
 */
export default function StatCard({
  label,
  value,
  icon,
  className,
}: StatCardProps) {
  return (
    <div className={cn("card-surface group p-4 sm:p-5", className)}>
      <div className="mb-1 flex items-center gap-2">
        <FontAwesomeIcon
          icon={icon}
          aria-hidden="true"
          className="text-xs text-indigo-300/80 transition-colors group-hover:text-indigo-200 sm:text-sm"
        />
        <span className="text-xs font-medium text-slate-400 sm:text-sm">
          {label}
        </span>
      </div>
      <p className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
        {value}
      </p>
    </div>
  );
}
