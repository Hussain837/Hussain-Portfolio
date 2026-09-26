"use client"
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import SectionDivider from "@/components/common/SectionDivider";
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
          rest=" Something"
          description={contactIntro.description}
        />

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
            {contactChannels.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="card-surface group p-4 text-center sm:p-6"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06] transition-colors group-hover:bg-white/10">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-xl text-indigo-300/90 sm:text-2xl"
                    />
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm font-medium">{item.label}</p>
                  <p className="text-white text-sm sm:text-base font-semibold group-hover:text-indigo-300 transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="card-surface p-6 sm:p-8">
            <p className="text-slate-400 text-sm mb-6">Connect with me on social media</p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 transition-colors duration-300 hover:border-indigo-400/40 hover:bg-white/[0.08] sm:gap-4 sm:px-5 sm:py-3"
                >
                  <FontAwesomeIcon 
                    icon={link.icon} 
                    className="text-slate-400 group-hover:text-indigo-400 text-base sm:text-lg transition-colors" 
                  />
                  <span className="text-slate-300 group-hover:text-white text-xs sm:text-sm font-medium transition-colors">
                    {link.text || link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Message */}
          <div className="mt-10 sm:mt-12">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-indigo-400/20 bg-indigo-500/[0.07] px-6 py-4 sm:px-8 sm:py-5">
              <FontAwesomeIcon icon={contactIntro.icon} className="text-indigo-400 text-lg sm:text-xl animate-pulse" />
              <span className="text-slate-300 text-sm sm:text-base">
                {contactIntro.ctaPrefix} <span className="text-indigo-400 font-semibold">{contactIntro.ctaEmphasis}</span>
              </span>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 sm:mt-10">
            <p className="text-slate-500 text-xs sm:text-sm">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
          </div>

          <SectionDivider className="mt-8" />
      </div>
    </Section>
  );
}