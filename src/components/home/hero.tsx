"use client"
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faArrowRight, 
  faEnvelope, 
  faDownload,
  faCode,
  faRocket,
  faBrain
} from "@fortawesome/free-solid-svg-icons";
import Column from "@/components/core/Column";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import { heroHighlights, heroTechBadges } from "@/data/content";
import { heroContainer, heroItem, EASE, DURATION } from "@/components/motion/motion";

const floatingIcons = [
  { icon: faCode, delay: "0s", position: "top-10 left-10" },
  { icon: faRocket, delay: "2s", position: "bottom-20 right-10" },
  { icon: faEnvelope, delay: "2s", position: "bottom-20 left-10" },
  { icon: faBrain, delay: "4s", position: "top-20 right-20" },
];

export default function HeroSection({ id }: { id: string }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // The parallax is decorative and pointer-driven, so it is skipped entirely
    // for touch devices and for users who prefer reduced motion.
    if (reduceMotion || !window.matchMedia("(pointer: fine)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [reduceMotion]);

  return (
    <ResponsiveBox
      classNames="relative flex items-center overflow-hidden"
      id={id}
    >
      {/* Hero reuses the page-wide atmosphere from html/body; the only local
          decoration is a soft accent glow anchored to the content column. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          className="absolute left-1/2 top-[-15%] h-[520px] w-[820px] max-w-[120vw] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: EASE.cinematic }}
        />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} hidden text-4xl text-indigo-400/30 lg:block`}
          style={{ animationDelay: item.delay }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: DURATION.cinematic,
            delay: 0.6 + index * 0.12,
            ease: EASE.entrance,
          }}
        >
          <FontAwesomeIcon icon={item.icon} />
        </motion.div>
      ))}

      {/* Cinematic settle: eyebrow -> name -> description -> actions -> tech.
          Each block staggers in so the hero composes rather than appearing. */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-wrap gap-12 lg:gap-16 items-center">
          <Column classNames="items-start gap-4 sm:gap-6">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-500/10 px-4 py-2 backdrop-blur-sm"
              variants={heroItem}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
              </span>
              <span className="technical-label">
                Full-Stack Developer &amp; AI Engineer
              </span>
            </motion.div>

            {/* Name. Each line reveals through a clipped container so the type
                settles onto the baseline - the one place on the site that gets
                a true line-by-line text reveal. */}
            <motion.h1
              className="display-type text-[clamp(2.75rem,9vw,6.5rem)] leading-[0.92] tracking-[-0.035em]"
              variants={heroContainer}
            >
              <span className="inline-block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block text-white"
                  variants={{ hidden: { y: "110%" }, visible: { y: "0%" } }}
                  transition={{ duration: 0.9, ease: EASE.entrance }}
                >
                  Hussain
                </motion.span>
              </span>
              <span className="inline-block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="text-gradient block italic"
                  variants={{ hidden: { y: "110%" }, visible: { y: "0%" } }}
                  transition={{ duration: 0.9, delay: 0.09, ease: EASE.entrance }}
                >
                  <span className="px-4">Zaidi</span>
                </motion.span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="max-w-2xl text-base font-normal leading-relaxed text-slate-300 sm:text-lg md:text-xl"
              variants={heroItem}
            >
              Building scalable web applications, AI-powered products, analytics
              platforms, and real-time systems.
            </motion.p>

            {/* Tech Badges with improved styling */}
            <motion.div
              className="mt-2 flex flex-wrap gap-2 sm:gap-3"
              variants={heroItem}
            >
              {heroTechBadges.map((badge) => (
                <span
                  key={badge.name}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur-sm transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.09] sm:px-4 sm:py-1.5 sm:text-sm"
                >
                  {badge.name}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="mt-4 flex w-full flex-wrap gap-3 sm:mt-6 sm:gap-4"
              variants={heroItem}
            >
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold transition-all duration-300 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105 active:scale-95"
              >
                View Projects 
                <FontAwesomeIcon 
                  icon={faArrowRight} 
                  className="group-hover:translate-x-1 transition-transform duration-300" 
                />
              </Link>
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/5 hover:bg-white/20 text-white font-semibold border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm hover:scale-105 active:scale-95"
              >
                <FontAwesomeIcon icon={faEnvelope} /> 
                <span className="hidden sm:inline">Contact Me</span>
                <span className="sm:hidden">Contact</span>
              </Link>
              <Link
                href={site.resumeUrl}
                target="_blank"
                className="group inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/5 hover:bg-white/20 text-white font-semibold border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm hover:scale-105 active:scale-95"
              >
                <FontAwesomeIcon icon={faDownload} /> 
                <span className="hidden sm:inline">Resume</span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-4 flex w-full gap-6 border-t border-white/10 pt-4 sm:gap-8"
              variants={heroItem}
            >
              {heroHighlights.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-400 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </Column>

          {/* Profile Image - revealed with a mask + scale so it resolves into
              focus rather than simply appearing. */}
          <motion.div
            className="mt-8 flex flex-1 justify-center lg:mt-0 lg:justify-end"
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: EASE.entrance }}
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-full bg-indigo-500/20 blur-2xl animate-pulse" />
              
              {/* Main image container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-indigo-500/30 shadow-2xl shadow-indigo-900/50 transition-all duration-500 hover:scale-105 hover:border-indigo-400/50"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
                }}
              >
                <Image
                  src={site.profileImage}
                  alt="Hussain Zaidi"
                  fill
                  sizes="(min-width: 1280px) 320px, (min-width: 1024px) 288px, (min-width: 768px) 256px, (min-width: 640px) 224px, (min-width: 480px) 192px, 192px"
                  className="object-cover"
                  priority
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-transparent to-purple-900/20" />
              </div>

              {/* Decorative rings */}
              <div className="absolute -top-6 -right-6 w-12 h-12 sm:w-16 sm:h-16 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-700" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 sm:w-16 sm:h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center">
          <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-scroll" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(16px); opacity: 0; }
        }
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </ResponsiveBox>
  );
}