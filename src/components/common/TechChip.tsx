import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/utils/cn";

interface TechChipProps {
  label: string;
  /** Optional icon path resolved from the shared tech icon map. */
  iconPath?: string;
  className?: string;
}

/**
 * Compact technology chip used on project cards. Deliberately low-contrast:
 * chips sit *inside* a card surface, so they use a flatter treatment than the
 * card itself to avoid stacking borders on top of each other.
 */
export default function TechChip({ label, iconPath, className }: TechChipProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-white/5 bg-white/[0.04] px-2.5 py-1 transition-colors duration-300 hover:border-white/10 hover:bg-white/[0.07]",
        className
      )}
    >
      {iconPath ? (
        <div className="relative h-4 w-4 flex-shrink-0">
          <Image src={iconPath} alt="" fill sizes="16px" className="object-contain" />
        </div>
      ) : (
        <FontAwesomeIcon
          icon={faCode}
          aria-hidden="true"
          className="text-xs text-slate-500"
        />
      )}
      <span className="text-xs font-medium text-slate-300">{label}</span>
    </div>
  );
}
