import { IProjectItem, ProjectType, RepoType } from "@/types";
 
const projects: IProjectItem[] = [
  {
    id: "akashx-nextjs",
    title: "AkashX",
    description:
      "Modern web app built using Next.js and Strapi. Focused on performance optimization, SEO, and dynamic content rendering.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Private,
    projectType: ProjectType.Professional,
url: "https://akashx.ai/home",
    tags: ["Next.js", "Strapi", "REST APIs", "JavaScript", "CSS/SCSS"],
  },
  {
    id: "metafox-platform",
    title: "MetaFox Platform",
    description:
      "Social networking platform built with Laravel and MetaFox. Worked on new modules, APIs, and performance enhancements.",
    icon: "/skills/laravel.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Professional,
url: "https://foxapp.echoit.in",
    tags: ["Laravel", "MetaFox", "React.js", "PHP", "API"],
  },
  {
    id: "shemasey-app",
    title: "Shemasey (Android App)",
    description:
      "Cross-platform mobile app using React Native and Supabase backend. Handled APIs, UI, and real-time data integration.",
    icon: "/skills/react.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Professional,
    tags: ["React Native", "Next.js", "Supabase", "API", "UI"],
  },
  {
    id: "luxury-projects",
    title: "Luxury Projects",
    description:
      "Full-stack platform with custom API integration and authentication. Managed both frontend and backend.",
    icon: "/skills/laravel.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Professional,
url: "https://luxuryprojects.io/",
    tags: ["Laravel", "MySQL", "REST APIs", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "global-climate-registry",
    title: "Global Climate Registry",
    description:
      "Carbon credits tracking system using Zend Framework. Focused on API development and performance optimization.",
    icon: "/skills/php.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Professional,
url: "http://platform.gcc.eco/organization/gcr",
    tags: ["Zend", "PHP", "JavaScript", "REST APIs"],
  },
  {
    id: "mycityconnected",
    title: "MyCityConnected",
    description:
      "Community-driven platform built using SocialEngine. Developed features like wallet, UI enhancements, and payment integration.",
    icon: "/skills/php.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Professional,
url: "https://mycityconnected.us/",
    tags: ["PHP", "SocialEngine", "JavaScript", "UI", "Wallet"],
  },
  {
    id: "craftslane",
    title: "Craftslane (OpenCart)",
    description:
      "E-commerce platform built using OpenCart. Handled both frontend UI improvements and backend store functions.",
    icon: "/skills/opencart.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Professional,
url: "https://www.craftslane.com/",
    tags: ["OpenCart", "PHP", "jQuery", "E-commerce", "UI"],
  },
  {
    id: "giftblooms",
    title: "GiftBlooms",
    description:
      "Global gift delivery system using OpenCart. Focused on backend support, shipping logic, and UI components.",
    icon: "/skills/opencart.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Professional,
url: "https://www.giftblooms.com/",
    tags: ["OpenCart", "PHP", "JavaScript", "jQuery", "Delivery"],
  },
  {
    id: "tonydolci",
    title: "TonyDolci (Bakery Platform)",
    description:
      "Bakery and delivery platform built using CodeIgniter. Developed product management and delivery modules.",
    icon: "/skills/php.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Professional,
url: "https://tonydolci.online/",
    tags: ["PHP", "CodeIgniter", "jQuery", "Delivery", "UI"],
  },
  {
    id: "alipura-palace",
    title: "Alipura Palace Hotel",
    description:
      "Customized WordPress theme and plugins for a mobile-friendly design. Focused on performance and branding.",
    icon: "/skills/wordpress.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Professional,
url: "https://alipurapalace.com/",
    tags: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
  },
];
 
export default projects;