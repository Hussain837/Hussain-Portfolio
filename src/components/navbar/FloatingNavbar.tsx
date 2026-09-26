"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { INavItem } from "@/types";
import { useEffect, useState } from "react";

const FloatingNavbar = ({
  navItems,
  className,
}: {
  navItems: INavItem[];
  className?: string;
}) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
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
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className={cn(
        "flex w-fit fixed top-4 inset-x-0 mx-auto border border-white/20 rounded-full bg-slate-950/70 backdrop-blur-md shadow-xl z-[5000] px-5 py-2.5 items-center gap-5",
        className
      )}
    >
      {navItems.map((navItem, idx) => {
        const isActive = activeSection === navItem.link;
        return (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            aria-label={navItem.name}
            className={cn(
              "relative flex items-center gap-2 group transition-colors duration-300",
              isActive ? "text-indigo-400" : "text-neutral-300 hover:text-white"
            )}
          >
            <FontAwesomeIcon
              icon={navItem.icon}
              aria-hidden="true"
              className="text-base"
            />
            <span className="hidden sm:block text-sm font-medium">
              {navItem.name}
            </span>
            {isActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-400 rounded-full shadow-[0_0_6px_rgba(129,140,248,0.8)]" />
            )}
          </Link>
        );
      })}
    </motion.div>
  );
};

export default FloatingNavbar;
