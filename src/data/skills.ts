import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/skills/javascript.svg",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Intermediate,
        icon: "/skills/typescript.svg",
      },
      {
        title: "PHP",
        level: SkillLevel.Expert,
        icon: "/skills/php.svg",
      },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: "/skills/nextjs.png",
      },
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "CSS",
        level: SkillLevel.Intermediate,
        icon: "/skills/css.svg",
      },
      // {
      //   title: "SASS",
      //   level: SkillLevel.Intermediate,
      //   icon: "/skills/sass.svg",
      // },
      {
        title: "Redux Toolkit",
        level: SkillLevel.Expert,
        icon: "/skills/redux.svg",
      },
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "Node.js",
        level: SkillLevel.Expert,
        icon: "/skills/nodejs.svg",
      },
      {
        title: "Express.js",
        level: SkillLevel.Expert,
        icon: "/skills/express.svg",
      },
      {
        title: "Laravel",
        level: SkillLevel.Expert,
        icon: "/skills/laravel.svg",
      },
      {
        title: "CodeIgniter",
        level: SkillLevel.Intermediate,
        icon: "/skills/codeigniter.svg",
      },
      {
        title: "Zend Framework",
        level: SkillLevel.Intermediate,
        icon: "/skills/zend.svg",
      },
      // {
      //   title: "Socket.io",
      //   level: SkillLevel.Intermediate,
      //   icon: "/skills/socket-io.png",
      // },
    ],
  },
  {
    title: "CMS & Frameworks",
    items: [
      {
        title: "OpenCart",
        level: SkillLevel.Intermediate,
        icon: "/skills/opencart.svg",
      },
      {
        title: "WordPress",
        level: SkillLevel.Intermediate,
        icon: "/skills/wordpress.svg",
      },
      {
        title: "Shopify",
        level: SkillLevel.Intermediate,
        icon: "/skills/shopify.svg",
      },
      {
        title: "PHPfox",
        level: SkillLevel.Intermediate,
        icon: "/skills/phpfox.png",
      },
      {
        title: "MetaFox",
        level: SkillLevel.Intermediate,
        icon: "/skills/metafox.png",
      },
    ],
  },
  {
    title: "Mobile App Development",
    items: [
      {
        title: "React Native",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
    ],
  },
  {
    title: "Database Management",
    items: [
      {
        title: "PostgreSQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/postgresql.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Beginner,
        icon: "/skills/mysql.svg",
      },
    ],
  },
  {
    title: "DevOps/VCS",
    items: [
      {
        title: "Docker",
        level: SkillLevel.Beginner,
        icon: "/skills/docker.png",
      },
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/skills/git.svg",
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "/skills/github.svg",
      },
    ],
  },
  {
    title: "Miscellaneous",
    items: [
      {
        title: "Ubuntu",
        level: SkillLevel.Intermediate,
        icon: "/skills/ubuntu.png",
      },
    ],
  },
  {
    title: "Nontechnical Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Skills",
        level: SkillLevel.Expert,
        icon: "/images/analytical-skills.png",
      },
    ],
  },
];

export default skills;
