import { INavItem } from "@/types";
import {
  faHome,
  faUser,
  faCode,
  faBriefcase,
  faTimeline,
  faAward,
  faLaptopCode,
  faEnvelope,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

export const navMenus: INavItem[] = [
  { name: "Home", link: "/#hero", icon: faHome },
  { name: "About", link: "/#about", icon: faUser },
  { name: "Skills", link: "/#skills", icon: faAward },
  { name: "Experience", link: "/#experience", icon: faTimeline },
  { name: "Projects", link: "/#projects", icon: faLaptopCode },
  { name: "AI", link: "/#ai", icon: faCode },
  // { name: "Education", link: "/#education", icon: faGraduationCap },
  { name: "Contact", link: "/#contact", icon: faEnvelope },
];
