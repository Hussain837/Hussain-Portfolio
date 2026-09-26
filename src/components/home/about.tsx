import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import SectionDivider from "@/components/common/SectionDivider";
import StatCard from "@/components/common/StatCard";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { aboutStats, aboutParagraphs, expertise } from "@/data/content";

export default function AboutSection({ id }: { id: string }) {
  return (
    <Section id={id}>
      <SectionHeading highlight="About" rest="Me" />

      {/* Main Content Grid */}
      <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Text Content - 3 columns */}
          <Stagger className="space-y-4 sm:space-y-5 md:space-y-6 lg:col-span-3" stagger={0.09}>
            {aboutParagraphs.map((paragraph) => (
              <StaggerItem
                key={paragraph.id}
                className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 sm:p-8 ${paragraph.borderHover}`}
              >
                <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  {paragraph.before}
                  <span className={`${paragraph.highlightColor} font-semibold`}>
                    {paragraph.highlight}
                  </span>
                  {paragraph.after}
                </p>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Side Content - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Grid */}
            <Stagger className="grid grid-cols-2 gap-3 sm:gap-4" stagger={0.06}>
              {aboutStats.map((stat) => (
                <StaggerItem key={stat.id}>
                  <StatCard
                    label={stat.label}
                    value={stat.value}
                    icon={stat.icon}
                  />
                </StaggerItem>
              ))}
            </Stagger>

            {/* Expertise Cards */}
            <Stagger className="space-y-3" stagger={0.07}>
              {expertise.map((item) => (
                <StaggerItem
                  key={item.title}
                  className="card-surface group p-4 sm:p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <FontAwesomeIcon 
                        icon={item.icon} 
                        className="text-indigo-400 text-sm sm:text-base group-hover:text-indigo-300 transition-colors" 
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm sm:text-base">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>

        <SectionDivider className="mt-12 sm:mt-16" />
    </Section>
  );
}