"use client"
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import SectionDivider from "@/components/common/SectionDivider";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { site, socialLinks, contactChannels, contactIntro } from "@/data/site";

export default function ContactSection({ id }: { id: string }) {
  return (
    <Section id={id} variant="recessed">
      {/* Floating particles */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-2 h-2 bg-indigo-400/30 rounded-full animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-pink-400/30 rounded-full animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-blue-400/20 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="text-center max-w-4xl mx-auto">
        <SectionHeading
          highlight="Let's Build"
          rest="Something"
          description={contactIntro.description}
        />

          {/* Contact Cards - calm, evenly paced stagger. The closing section
              should feel like an exhale, not a finale. */}
          <Stagger
            className="mb-10 grid grid-cols-1 gap-4 sm:mb-12 sm:grid-cols-3 sm:gap-6"
            stagger={0.08}
          >
            {contactChannels.map((item) => (
              <StaggerItem
                key={item.id}
                as="a"
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="card-surface group p-4 text-center transition-transform duration-300 hover:-translate-y-0.5 sm:p-6"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06] transition-colors group-hover:bg-white/10">
                    <FontAwesomeIcon
                      icon={item.icon}
                      aria-hidden="true"
                      className="text-xl text-indigo-300/90 sm:text-2xl"
                    />
                  </div>
                  <p className="text-xs font-medium text-slate-400 sm:text-sm">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-white transition-colors group-hover:text-indigo-300 sm:text-base">
                    {item.value}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Social Links */}
          <Reveal variant="calm">
            <div className="card-surface p-6 sm:p-8">
              <p className="mb-6 text-sm text-slate-400">
                Connect with me on social media
              </p>
              <Stagger
                className="flex flex-wrap justify-center gap-3 sm:gap-4"
                stagger={0.05}
              >
                {socialLinks.map((link) => (
                  <StaggerItem
                    key={link.name}
                    as="a"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 transition-colors duration-300 hover:border-indigo-400/40 hover:bg-white/[0.08] sm:gap-4 sm:px-5 sm:py-3"
                  >
                    <FontAwesomeIcon
                      icon={link.icon}
                      aria-hidden="true"
                      className="text-base text-slate-400 transition-colors group-hover:text-indigo-400 sm:text-lg"
                    />
                    <span className="text-xs font-medium text-slate-300 transition-colors group-hover:text-white sm:text-sm">
                      {link.text || link.name}
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>

          {/* CTA Message */}
          <Reveal variant="calm" className="mt-10 sm:mt-12">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-indigo-400/20 bg-indigo-500/[0.07] px-6 py-4 sm:px-8 sm:py-5">
              <FontAwesomeIcon
                icon={contactIntro.icon}
                aria-hidden="true"
                className="text-lg text-indigo-300 sm:text-xl"
              />
              <span className="text-sm text-slate-300 sm:text-base">
                {contactIntro.ctaPrefix}{" "}
                <span className="font-semibold text-indigo-300">
                  {contactIntro.ctaEmphasis}
                </span>
              </span>
            </div>
          </Reveal>

          {/* Footer Note */}
          <Reveal variant="calm" className="mt-8 sm:mt-10">
            <p className="text-xs text-slate-500 sm:text-sm">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
          </Reveal>

          <SectionDivider className="mt-8" />
      </div>
    </Section>
  );
}