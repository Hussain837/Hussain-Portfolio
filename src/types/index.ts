import { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { MouseEventHandler, ReactNode, RefObject } from "react";

/** A top-level navigation entry rendered by the floating navbar. */
export interface INavItem {
  name: string;
  link: string;
  icon: IconProp;
}

/** Shared props for the layout primitives in `components/core`. */
export interface CoreComponentsProps {
  children: ReactNode;
  classNames?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  id?: string;
  elementRef?: RefObject<HTMLDivElement | null>;
}
