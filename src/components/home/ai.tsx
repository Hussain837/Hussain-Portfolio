import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import SectionDivider from "@/components/common/SectionDivider";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
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
        rest="Engineering"
        description="Building intelligent applications around LLMs, not training foundation models."
      />

      {/* AI Workflow - Desktop. The blur-resolving reveal is the most cinematic
          entrance on the page, used once so it still feels special. */}
      <Reveal variant="cinematic" className="mb-12 hidden lg:block">
        <div className="card-surface p-6 sm:p-8">
          <Stagger className="flex items-center justify-between gap-2" stagger={0.09}>
            {workflowSteps.map((step, index) => (
              <StaggerItem
                key={step.id}
                className="flex flex-1 flex-col items-center"
              >
                <div className="card-surface group flex aspect-square w-full max-w-[120px] flex-col items-center justify-center p-3 text-center">
                  <FontAwesomeIcon
                    icon={step.icon}
                    aria-hidden="true"
                    className="mb-2 text-2xl text-indigo-400 transition-colors group-hover:text-indigo-300 sm:text-3xl"
                  />
                  <span className="text-center text-xs font-medium leading-tight text-white sm:text-sm">
                    {step.label}
                  </span>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="mt-2 flex items-center">
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      aria-hidden="true"
                      className="animate-bounce text-lg text-indigo-500/50"
                    />
                  </div>
                )}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Reveal>

      {/* AI Workflow - Mobile. Same content, vertical, and revealed more
          gently because the vertical stack is much taller. */}
      <Reveal variant="soft" className="mb-10 lg:hidden">
        <div className="card-surface p-4">
          <Stagger className="flex flex-col items-center gap-1" stagger={0.06}>
            {workflowSteps.map((step, index) => (
              <StaggerItem key={step.id} className="w-full">
                <div className="card-surface group flex w-full items-center gap-3 p-3">
                  <FontAwesomeIcon
                    icon={step.icon}
                    aria-hidden="true"
                    className="text-lg text-indigo-400 transition-colors group-hover:text-indigo-300"
                  />
                  <span className="text-sm font-medium text-white">
                    {step.label}
                  </span>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="my-1 flex justify-center">
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      aria-hidden="true"
                      className="text-sm text-indigo-500/30"
                    />
                  </div>
                )}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Reveal>

      {/* AI Capabilities Grid */}
      <Stagger
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        stagger={0.08}
      >
        {aiCapabilities.map((item) => (
          <StaggerItem
            key={item.id}
            variant="cinematic"
            className="card-surface group p-5 sm:p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 transition-colors group-hover:bg-white/20 sm:h-12 sm:w-12">
                <FontAwesomeIcon
                  icon={item.icon}
                  aria-hidden="true"
                  className={`${item.iconColor} text-lg sm:text-xl`}
                />
              </div>
              <div className="flex-1">
                <h4 className="mb-1 text-base font-semibold text-white sm:text-lg">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Tech Stack Highlight */}
      <Reveal variant="soft" className="mt-10 sm:mt-12">
        <div className="card-surface p-5 sm:p-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10">
                <FontAwesomeIcon
                  icon={faBolt}
                  aria-hidden="true"
                  className="text-lg text-indigo-300"
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white sm:text-base">
                  AI Tech Stack
                </h4>
                <p className="text-xs text-slate-400 sm:text-sm">
                  Tools &amp; frameworks I work with
                </p>
              </div>
            </div>
            <Stagger className="flex flex-wrap gap-2" stagger={0.04}>
              {aiStack.map((tech) => (
                <StaggerItem
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.08]"
                >
                  {tech}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Reveal>

      {/* CTA - a 2px lift rather than the previous 5% scale, which felt
          cartoonish next to the calmer card motion. */}
      <Reveal variant="calm" className="mt-10 text-center sm:mt-12">
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-500 hover:to-purple-500 hover:shadow-indigo-600/50 active:translate-y-0 sm:px-8 sm:py-4"
        >
          <FontAwesomeIcon icon={faRocket} aria-hidden="true" />
          Explore AI Projects
          <FontAwesomeIcon
            icon={faArrowRight}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </Reveal>

      <SectionDivider className="mt-12" />
    </Section>
  );
}
