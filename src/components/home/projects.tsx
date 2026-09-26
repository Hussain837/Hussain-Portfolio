import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import SectionDivider from "@/components/common/SectionDivider";
import TechChip from "@/components/common/TechChip";
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
        rest=" Projects"
        description="A showcase of my recent work and personal projects"
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project, index) => (
          <a
            key={project.id}
            href={project.url || "#"}
            target={project.url ? "_blank" : undefined}
            rel={project.url ? "noopener noreferrer" : undefined}
            className={`card-surface group relative animate-fadeIn overflow-hidden p-5 sm:p-6 ${
              !project.url ? "cursor-default" : ""
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Project Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p
                  className={`text-sm font-medium ${project.iconColor} mt-0.5`}
                >
                  {project.subtitle}
                </p>
              </div>
              {project.url && (
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all group-hover:scale-110 flex-shrink-0 ml-3">
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-white/60 group-hover:text-white text-sm transition-colors"
                  />
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
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
          </a>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="mt-12 sm:mt-16 text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold transition-all duration-300 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105 active:scale-95"
        >
          <FontAwesomeIcon icon={faRocket} />
          Let&apos;s Build Something Together
          <FontAwesomeIcon icon={faLink} className="opacity-70" />
        </a>
      </div>

      <SectionDivider className="mt-12" />
    </Section>
  );
}
