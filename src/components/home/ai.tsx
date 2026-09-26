import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import SectionDivider from "@/components/common/SectionDivider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowRight,
  faBolt,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { aiCapabilities, workflowSteps, aiStack } from "@/data/content";

export default function AISection({ id }: { id: string }) {
  return (
    <Section id={id}>
      <SectionHeading
        highlight="AI"
        rest=" Engineering"
        description="Building intelligent applications around LLMs, not training foundation models."
      />

        {/* AI Workflow - Desktop Version */}
        <div className="hidden lg:block mb-12">
          <div className="card-surface p-6 sm:p-8">
            <div className="flex items-center justify-between gap-2">
              {workflowSteps.map((step, index) => (
                <div key={step.label} className="flex flex-col items-center flex-1">
                  <div className="card-surface group flex aspect-square w-full max-w-[120px] flex-col items-center justify-center p-3 text-center">
                    <FontAwesomeIcon 
                      icon={step.icon} 
                      className="text-indigo-400 text-2xl sm:text-3xl mb-2 group-hover:text-indigo-300 transition-colors" 
                    />
                    <span className="text-white text-xs sm:text-sm font-medium text-center leading-tight">
                      {step.label}
                    </span>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="flex items-center mt-2">
                      <FontAwesomeIcon 
                        icon={faArrowDown} 
                        className="text-indigo-500/50 text-lg animate-bounce" 
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Workflow - Mobile Version */}
        <div className="lg:hidden mb-10">
          <div className="card-surface p-4">
            <div className="flex flex-col items-center gap-1">
              {workflowSteps.map((step, index) => (
                <div key={step.label} className="w-full">
                  <div className="card-surface group flex w-full items-center gap-3 p-3">
                    <FontAwesomeIcon 
                      icon={step.icon} 
                      className="text-indigo-400 text-lg group-hover:text-indigo-300 transition-colors" 
                    />
                    <span className="text-white text-sm font-medium">
                      {step.label}
                    </span>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="flex justify-center my-1">
                      <FontAwesomeIcon 
                        icon={faArrowDown} 
                        className="text-indigo-500/30 text-sm" 
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {aiCapabilities.map((item, index) => (
            <div
              key={item.title}
              className={`card-surface group animate-fadeIn p-5 sm:p-6`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <FontAwesomeIcon 
                    icon={item.icon} 
                    className={`${item.iconColor} text-lg sm:text-xl`} 
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-base sm:text-lg mb-1">
                    {item.title}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Highlight */}
        <div className="card-surface mt-10 p-5 sm:mt-12 sm:p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center">
                <FontAwesomeIcon icon={faBolt} className="text-indigo-400 text-lg" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm sm:text-base">AI Tech Stack</h4>
                <p className="text-slate-400 text-xs sm:text-sm">Tools & frameworks I work with</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {aiStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:bg-white/[0.09]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105 active:scale-95"
          >
            <FontAwesomeIcon icon={faRocket} />
            Explore AI Projects
            <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      <SectionDivider className="mt-12" />
    </Section>
  );
}