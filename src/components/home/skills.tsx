import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import SectionDivider from "@/components/common/SectionDivider";
import { skillCategories, totalTechnologies } from "@/data/portfolio";


export default function SkillsSection({ id }: { id: string }) {
  return (
    <Section id={id}>
      <SectionHeading
        highlight="Tech"
        rest=" Stack"
        description="A comprehensive overview of my technical expertise across different domains"
      />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className={`card-surface group p-5 sm:p-6 animate-fadeIn`}
              style={{ animationDelay: `${index * 100}ms` }}
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
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
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
                      <span className="text-white/80 group-hover/skill:text-white text-xs sm:text-sm font-medium transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-white">{skillCategories.length}</p>
            <p className="text-xs sm:text-sm text-slate-400">Skill Categories</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-white">{totalTechnologies}</p>
            <p className="text-xs sm:text-sm text-slate-400">Total Technologies</p>
          </div>
          <div className="text-center">
            <div className="flex items-center gap-2 justify-center">
              <span className="text-2xl sm:text-3xl font-bold text-white">✦</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">Full Stack</p>
          </div>
        </div>

        <SectionDivider className="mt-12" />
    </Section>
  );
}