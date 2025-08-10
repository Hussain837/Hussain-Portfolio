"use client";

import { motion, AnimatePresence } from "framer-motion";
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

  // Scroll-based active section detection
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
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={cn(
          // Horizontal top navbar styling
          "flex w-fit fixed top-4 inset-x-0 mx-auto border border-white/[0.25] rounded-full bg-[var(--dialogColor50)] backdrop-blur-sm shadow-lg z-[5000] px-6 py-3 items-center space-x-6",
          className
        )}
      >
        {navItems.map((navItem, idx) => {
          const isActive = activeSection === navItem.link;
          return (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative flex items-center space-x-2 group transition-all duration-300",
                isActive
                  ? "text-[var(--primaryColor)] drop-shadow-[0_0_6px_var(--primaryColor50)]"
                  : "text-neutral-50 hover:text-[var(--primaryColor)]"
              )}
            >
              {/* Icon */}
              <FontAwesomeIcon
                icon={navItem.icon}
                title={navItem.name}
                className="text-lg"
              />

              {/* Text */}
              <span className="hidden sm:block text-sm lg:text-base">
                {navItem.name}
              </span>

              {/* Active indicator (dot below link) */}
              {isActive && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--primaryColor)] rounded-full shadow-[0_0_8px_var(--primaryColor)]"
                />
              )}
            </Link>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNavbar;
