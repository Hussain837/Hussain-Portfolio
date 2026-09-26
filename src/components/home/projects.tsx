import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import SectionDivider from "@/components/common/SectionDivider";
import TechChip from "@/components/common/TechChip";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faRocket,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { projects, techIconMap } from "@/data/portfolio";

export default function ProjectsSection({ id }: { id: string }) {
  return (
    <Section id={id}>
      <SectionHeading
        highlight="Featured"
        rest="Projects"
        description="A showcase of my recent work and personal projects"
      />

      {/* Projects Grid - cards stagger in and lift slightly on hover. The lift
          is a transform, so it never shifts the surrounding layout. */}
      <Stagger
        className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
        stagger={0.08}
      >
        {projects.map((project) => (
          <StaggerItem
            key={project.id}
            as="a"
            variant="cards"
            href={project.url || undefined}
            target={project.url ? "_blank" : undefined}
            rel={project.url ? "noopener noreferrer" : undefined}
            className={`card-surface group relative block overflow-hidden p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6 ${
              !project.url ? "cursor-default" : ""
            }`}
          >
            {/* Project Header */}
            <div className="mb-3 flex items-start justify-between">
              <div className="flex-1">
                <h4 className="display-type overflow-hidden text-lg text-white sm:text-xl">
                  <span className="block transition-colors duration-300 group-hover:text-indigo-300">
                    {project.title}
                  </span>
                </h4>
                <p
                  className={`text-sm font-medium ${project.iconColor} mt-0.5`}
                >
                  {project.subtitle}
                </p>
              </div>
              {project.url && (
                <div className="ml-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-sm text-white/60 transition-colors group-hover:text-white"
                  />
                </div>
              )}
            </div>

            {/* Description */}
            <p className="mb-4 text-sm leading-relaxed text-slate-300">
              {project.description}
            </p>

            {/* Tech Tags with Icons */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <TechChip key={tag} label={tag} iconPath={techIconMap[tag]} />
              ))}
            </div>

            {/* Decorative corner accent */}
            <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-indigo-500/[0.07] blur-2xl transition-transform duration-500 group-hover:scale-150" />
          </StaggerItem>
        ))}
      </Stagger>

      {/* CTA - a 2px lift rather than the previous 5% scale, which felt
          cartoonish next to the calmer card motion. */}
      <Reveal variant="calm" className="mt-12 text-center sm:mt-16">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-500 hover:to-indigo-400 hover:shadow-indigo-600/50 active:translate-y-0 sm:px-8 sm:py-4"
        >
          <FontAwesomeIcon icon={faRocket} />
          Let&apos;s Build Something Together
          <FontAwesomeIcon icon={faLink} className="opacity-70" />
        </a>
      </Reveal>

      <SectionDivider className="mt-12" />
    </Section>
  );
}
