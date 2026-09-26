"use client";

import { useReducedMotion } from "framer-motion";
import { typed } from "@/components/motion/typedMotion";

const { nav: MotionNav, span: MotionSpan } = typed;
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { INavItem } from "@/types";
import { useEffect, useState } from "react";
import { EASE } from "@/components/motion/motion";

const FloatingNavbar = ({
  navItems,
  className,
}: {
  navItems: INavItem[];
  className?: string;
}) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      // Elevation: the bar gains a background/border once the page has moved,
      // so it reads as a distinct layer over content without becoming a
      // heavy glass panel.
      setScrolled(window.scrollY > 24);

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let foundActive = false;
      for (const navItem of navItems) {
        const selector = navItem.link.startsWith("/#")
          ? navItem.link.replace("/", "")
          : navItem.link;
        const section = document.querySelector(selector);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionBottom = sectionTop + section.clientHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navItem.link);
            foundActive = true;
            break;
          }
        }
      }
      if (!foundActive && navItems.length > 0) {
        setActiveSection(navItems[0].link);
      }
    };

    // Passive listener so scrolling is never blocked by this effect.
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <MotionNav
      aria-label="Section navigation"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE.entrance }}
      className={cn(
        "fixed inset-x-0 top-4 z-[5000] mx-auto flex w-fit items-center gap-5 rounded-full border px-5 py-2.5 transition-[background-color,border-color,box-shadow] duration-300",
        scrolled
          ? "border-white/15 bg-slate-950/80 shadow-xl shadow-black/20 backdrop-blur-md"
          : "border-white/10 bg-slate-950/50 backdrop-blur-sm",
        className
      )}
    >
      {navItems.map((navItem) => {
        const isActive = activeSection === navItem.link;
        return (
          <Link
            key={navItem.link}
            href={navItem.link}
            aria-label={navItem.name}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "group relative flex items-center gap-2 transition-colors duration-300",
              isActive ? "text-indigo-300" : "text-neutral-400 hover:text-white"
            )}
          >
            <FontAwesomeIcon
              icon={navItem.icon}
              aria-hidden="true"
              className="text-base"
            />
            <span className="hidden text-sm font-medium sm:block">
              {navItem.name}
            </span>

            {/*
              Active indicator is a single shared element that slides between
              items via layoutId, so it glides across rather than blinking on
              and off. Falls back to a static dot under reduced motion.
            */}
            {isActive ? (
              reduceMotion ? (
                <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-indigo-400" />
              ) : (
                <MotionSpan
                  layoutId="nav-active-indicator"
                  className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-indigo-400 shadow-[0_0_6px_rgba(129,140,248,0.8)]"
                  transition={{ duration: 0.35, ease: EASE.interaction }}
                />
              )
            ) : null}
          </Link>
        );
      })}
    </MotionNav>
  );
};

export default FloatingNavbar;
