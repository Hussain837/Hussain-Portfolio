import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import SectionDivider from "@/components/common/SectionDivider";
import StatCard from "@/components/common/StatCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  experienceMetrics,
  experiences,
  achievementIconFor,
  companyIcon,
} from "@/data/content";

export default function ExperienceSection({ id }: { id: string }) {
  return (
    <Section id={id}>
      <SectionHeading
        highlight="Work"
        rest=" Experience"
        description="My professional journey and achievements in the tech industry"
      />

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
        {experienceMetrics.map((metric) => (
          <StatCard
            key={metric.id}
            label={metric.label}
            value={metric.value}
            icon={metric.icon}
          />
        ))}
      </div>

      {/* Experience Cards */}
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="card-surface overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 sm:p-6 md:p-8 border-b border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon
                      icon={exp.icon}
                      aria-hidden="true"
                      className="text-indigo-400 text-xl sm:text-2xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <FontAwesomeIcon
                          icon={companyIcon}
                          aria-hidden="true"
                          className="text-indigo-400 text-xs"
                        />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <FontAwesomeIcon
                          icon={faCalendarAlt}
                          aria-hidden="true"
                          className="text-indigo-400 text-xs"
                        />
                        <span>{exp.period}</span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            aria-hidden="true"
                            className="text-indigo-400 text-xs"
                          />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/[0.05] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="p-5 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-3">
                {exp.achievements.map((achievement) => (
                  <div
                    key={achievement}
                    className="flex items-start gap-3 rounded-xl bg-white/[0.03] p-3 transition-colors duration-300 hover:bg-white/[0.06] group/achievement"
                  >
                    <FontAwesomeIcon
                      icon={achievementIconFor(achievement)}
                      aria-hidden="true"
                      className="text-indigo-400 text-sm mt-0.5 flex-shrink-0 group-hover/achievement:scale-110 transition-transform"
                    />
                    <span className="text-slate-300 text-sm leading-relaxed">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <SectionDivider className="mt-12" />
    </Section>
  );
}
