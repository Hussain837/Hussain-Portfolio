import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import SectionDivider from "@/components/common/SectionDivider";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { skillCategories, totalTechnologies } from "@/data/portfolio";


export default function SkillsSection({ id }: { id: string }) {
  return (
    <Section id={id}>
      <SectionHeading
        highlight="Tech"
        rest="Stack"
        description="A comprehensive overview of my technical expertise across different domains"
      />

        {/* Skills Grid - categories stagger in, then chips cascade within each
            category so the eye reads top-down rather than all at once. */}
        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
          stagger={0.07}
        >
          {skillCategories.map((category) => (
            <StaggerItem
              key={category.id}
              variant="technical"
              className="card-surface group p-5 sm:p-6"
            >
              {/* Category Header */}
              <div className="p-4 sm:p-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <FontAwesomeIcon 
                      icon={category.icon} 
                      className={`${category.iconColor} text-lg`}
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm sm:text-base">
                      {category.name}
                    </h3>
                    <p className="text-slate-400 text-xs">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills List */}
              <div className="p-4 sm:p-5">
                <Stagger className="flex flex-wrap gap-2" stagger={0.028}>
                  {category.skills.map((skill) => (
                    <StaggerItem
                      key={skill.name}
                      className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.04] px-3 py-1.5 transition-colors duration-300 hover:border-white/10 hover:bg-white/[0.07]"
                    >
                      <div className="relative w-5 h-5 flex-shrink-0">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          fill
                          sizes="20px"
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs font-medium text-white/80 transition-colors group-hover/skill:text-white sm:text-sm">
                        {skill.name}
                      </span>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Stats Footer */}
        <Reveal
          variant="calm"
          className="mt-12 flex flex-wrap justify-center gap-6 sm:mt-16 sm:gap-8 md:gap-12"
        >
          <div className="text-center">
            <p className="text-2xl font-bold text-white sm:text-3xl">
              {skillCategories.length}
            </p>
            <p className="text-xs text-slate-400 sm:text-sm">Skill Categories</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white sm:text-3xl">
              {totalTechnologies}
            </p>
            <p className="text-xs text-slate-400 sm:text-sm">Total Technologies</p>
          </div>
          <div className="text-center">
            <div className="flex items-center gap-2 justify-center">
              <span className="text-2xl sm:text-3xl font-bold text-white">✦</span>
            </div>
            <p className="text-xs text-slate-400 sm:text-sm">Full Stack</p>
          </div>
        </Reveal>

        <SectionDivider className="mt-12" />
    </Section>
  );
}