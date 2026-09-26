import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import SectionDivider from "@/components/common/SectionDivider";
import StatCard from "@/components/common/StatCard";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
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
        rest="Experience"
        description="My professional journey and achievements in the tech industry"
      />

      {/* Metrics Grid */}
      <Stagger
        className="mb-10 grid grid-cols-2 gap-4 sm:mb-12 sm:gap-6 sm:grid-cols-4"
        stagger={0.06}
      >
        {experienceMetrics.map((metric) => (
          <StaggerItem key={metric.id}>
            <StatCard
              label={metric.label}
              value={metric.value}
              icon={metric.icon}
            />
          </StaggerItem>
        ))}
      </Stagger>

      {/* Experience Cards - each role drifts in from the left, so the list reads
          like a career history unfolding rather than a stack of boxes. */}
      <Stagger className="space-y-6" stagger={0.12}>
        {experiences.map((exp) => (
          <StaggerItem key={exp.id} variant="timeline" className="card-surface overflow-hidden">
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
                    <h4 className=" text-xl text-white sm:text-2xl">
                      {exp.title}
                    </h4>
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
                        <span className="mono text-[0.8125rem] tracking-tight text-slate-300">
                          {exp.period}
                        </span>
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
              <Stagger className="grid gap-3 sm:grid-cols-2" stagger={0.05}>
                {exp.achievements.map((achievement) => (
                  <StaggerItem
                    key={achievement}
                    className="group/achievement flex items-start gap-3 rounded-xl bg-white/[0.03] p-3 transition-colors duration-300 hover:bg-white/[0.06]"
                  >
                    <FontAwesomeIcon
                      icon={achievementIconFor(achievement)}
                      aria-hidden="true"
                      className="mt-0.5 flex-shrink-0 text-sm text-indigo-400 transition-transform group-hover/achievement:scale-110"
                    />
                    <span className="text-sm leading-relaxed text-slate-300">
                      {achievement}
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <SectionDivider className="mt-12" />
    </Section>
  );
}
