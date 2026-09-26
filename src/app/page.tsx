import dynamic from "next/dynamic";

const PageBox = dynamic(() => import("@/components/core/PageBox"));
const HeroSection = dynamic(() => import("@/components/home/hero"));
const AboutSection = dynamic(() => import("@/components/home/about"));
const SkillsSection = dynamic(() => import("@/components/home/skills"));
const ExperienceSection = dynamic(() => import("@/components/home/experience"));
const ProjectsSection = dynamic(() => import("@/components/home/projects"));
const AISection = dynamic(() => import("@/components/home/ai"));
// const EducationSection = dynamic(() => import("@/components/home/education"));
const ContactSection = dynamic(() => import("@/components/home/contact"));

export default function Home() {
  return (
    <PageBox>
      <HeroSection id="hero" />
      <AboutSection id="about" />
      <SkillsSection id="skills" />
      <ExperienceSection id="experience" />
      <ProjectsSection id="projects" />
      <AISection id="ai" />
      {/* <EducationSection id="education" /> */}
      <ContactSection id="contact" />
    </PageBox>
  );
}
