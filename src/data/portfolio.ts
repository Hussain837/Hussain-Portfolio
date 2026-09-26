import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCloud,
  faCode,
  faDatabase,
  faMobile,
  faServer,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

export interface SkillCategory {
  id: string;
  name: string;
  icon: IconDefinition;
  color: string;
  borderColor: string;
  iconColor: string;
  skills: { name: string; icon: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    icon: faCode,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
    skills: [
      { name: "Python", icon: "/skills/python.svg" },
      { name: "JavaScript", icon: "/skills/javascript.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "PHP", icon: "/skills/php.svg" },
      { name: "Dart", icon: "/skills/dart.svg" },
      { name: "C++", icon: "/skills/cpp.png" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend Development",
    icon: faCode,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400",
    skills: [
      { name: "React.js", icon: "/skills/react.svg" },
      { name: "Next.js", icon: "/skills/nextjs.png" },
      { name: "Redux", icon: "/skills/redux.svg" },
      { name: "HTML", icon: "/skills/html.svg" },
      { name: "CSS", icon: "/skills/css.svg" },
      { name: "SASS", icon: "/skills/sass.svg" },
      { name: "Flutter", icon: "/skills/flutter.svg" },
      { name: "GetX", icon: "/skills/getx.png" },
    ],
  },
  {
    id: "backend",
    name: "Backend Development",
    icon: faServer,
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    iconColor: "text-green-400",
    skills: [
      { name: "Node.js", icon: "/skills/nodejs.svg" },
      { name: "Express", icon: "/skills/express.svg" },
      { name: "FastAPI", icon: "/skills/FastAPI.svg" },
      { name: "Flask", icon: "/skills/Flask.svg" },
      { name: "Laravel", icon: "/skills/laravel.svg" },
      { name: "NestJS", icon: "/skills/nestjs.svg" },
      { name: "CodeIgniter", icon: "/skills/codeigniter.svg" },
      { name: "Zend", icon: "/skills/zend.svg" },
    ],
  },
  {
    id: "database",
    name: "Databases & Caching",
    icon: faDatabase,
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-400",
    skills: [
      { name: "PostgreSQL", icon: "/skills/postgresql.svg" },
      { name: "MySQL", icon: "/skills/mysql.svg" },
      { name: "MongoDB", icon: "/skills/mongodb.svg" },
      { name: "Redis", icon: "/skills/redis.svg" },
      { name: "SQLite", icon: "/skills/sqlite.svg" },
      { name: "Firebase", icon: "/skills/firebase.svg" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: faCloud,
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-400",
    skills: [
      { name: "Docker", icon: "/skills/docker.svg" },
      { name: "Kubernetes", icon: "/skills/kubernetes.svg" },
      { name: "AWS", icon: "/skills/aws.svg" },
      { name: "Terraform", icon: "/skills/terraform.svg" },
      { name: "Ubuntu", icon: "/skills/ubuntu.png" },
    ],
  },
  {
    id: "platforms",
    name: "Platforms & CMS",
    icon: faTools,
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30",
    iconColor: "text-pink-400",
    skills: [
      { name: "WordPress", icon: "/skills/wordpress.svg" },
      { name: "Shopify", icon: "/skills/shopify.svg" },
      { name: "OpenCart", icon: "/skills/opencart.svg" },
      { name: "MetaFox", icon: "/skills/metafox.png" },
      { name: "PHPFox", icon: "/skills/phpfox.png" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Others",
    icon: faMobile,
    color: "from-indigo-500/20 to-violet-500/20",
    borderColor: "border-indigo-500/30",
    iconColor: "text-indigo-400",
    skills: [
      { name: "Git", icon: "/skills/git.svg" },
      { name: "GitHub", icon: "/skills/github.svg" },
      { name: "Socket.IO", icon: "/skills/socket-io.png" },
    ],
  },
];

export const totalTechnologies = skillCategories.reduce(
  (total, category) => total + category.skills.length,
  0
);

/**
 * Maps a technology name to the icon shown on project cards. Technologies with
 * no dedicated brand asset are mapped to a representative icon; anything
 * absent from this map falls back to a generic code glyph in `TechChip`.
 */
export const techIconMap: Record<string, string> = {
  React: "/skills/react.svg",
  "Next.js": "/skills/nextjs.png",
  Flask: "/skills/Flask.svg",
  FastAPI: "/skills/FastAPI.svg",
  "Node.js": "/skills/nodejs.svg",
  PostgreSQL: "/skills/postgresql.svg",
  StarRocks: "/skills/postgresql.svg",
  "AI/LLM": "/skills/python.svg",
  "Tailwind CSS": "/skills/css.svg",
  LangChain: "/skills/python.svg",
  pgvector: "/skills/postgresql.svg",
  Docker: "/skills/docker.svg",
  "React Native": "/skills/react.svg",
  Supabase: "/skills/firebase.svg",
  Laravel: "/skills/laravel.svg",
  MetaFox: "/skills/metafox.png",
  JavaScript: "/skills/javascript.svg",
  PHP: "/skills/php.svg",
  API: "/skills/express.svg",
  "Zend Framework": "/skills/zend.svg",
  Blockchain: "/skills/nodejs.svg",
  CSS: "/skills/css.svg",
};

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  url?: string;
  color: string;
  borderColor: string;
  iconColor: string;
}

export const projects: Project[] = [
  {
    id: "akashx",
    title: "AkashX",
    subtitle: "AI-Powered Data Analysis Platform",
    description:
      "Natural-language analytics, automatic charts, anomaly visualization, and AI-generated insights built on Apache Superset with Flask/FastAPI and PostgreSQL/StarRocks.",
    tags: ["Flask", "FastAPI", "React", "PostgreSQL", "StarRocks", "AI/LLM"],
    url: "https://akashx.ai",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    id: "nexusmind",
    title: "NexusMind.ai",
    subtitle: "RAG-Based AI Knowledge Assistant",
    description:
      "Upload CSVs, spreadsheets, and documents; ask natural-language questions; get AI-generated reports, charts, and KPIs using LangChain, LangGraph, and pgvector.",
    tags: ["Next.js", "FastAPI", "Tailwind CSS", "LangChain", "pgvector", "Docker"],
    url: "https://nexusmind.echoit.in",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    id: "shemasey",
    title: "Shemeasy",
    subtitle: "Cross-Platform Android App",
    description:
      "React Native mobile app with real-time data management, dynamic APIs, and a mobile-first responsive UI powered by Node.js and Supabase.",
    tags: ["React Native", "Node.js", "Supabase"],
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    iconColor: "text-green-400",
  },
  {
    id: "beatbang",
    title: "BeatBang",
    subtitle: "Music Streaming & Sharing Platform",
    description:
      "Laravel and MetaFox-based platform with a custom music player, upload, streaming, and social sharing features.",
    tags: ["Laravel", "MetaFox", "React", "JavaScript"],
    url: "https://beatbang.io",
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-400",
  },
  {
    id: "metafox",
    title: "MetaFox",
    subtitle: "Social Networking Platform",
    description:
      "PHP/Laravel social networking platform with custom modules, API integrations, plugins, and scalability improvements.",
    tags: ["PHP", "Laravel", "MetaFox", "API"],
    url: "https://foxapp.echoit.in",
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30",
    iconColor: "text-pink-400",
  },
  {
    id: "impactx",
    title: "ImpactX",
    subtitle: "Global Climate Registry",
    description:
      "Zend Framework application for blockchain-based carbon credit tracking with frontend, backend, and API development.",
    tags: ["Zend Framework", "PHP", "API", "Blockchain"],
    url: "https://platform.gcr.eco",
    color: "from-indigo-500/20 to-violet-500/20",
    borderColor: "border-indigo-500/30",
    iconColor: "text-indigo-400",
  },
];

/** Icon path lookup for technology tags rendered on project cards. */
export const techIcons: Record<string, string> = {
  React: "/skills/react.svg",
  "React.js": "/skills/react.svg",
  "React Native": "/skills/react.svg",
  "Next.js": "/skills/nextjs.png",
  "Node.js": "/skills/nodejs.svg",
  JavaScript: "/skills/javascript.svg",
  TypeScript: "/skills/typescript.svg",
  Python: "/skills/python.svg",
  FastAPI: "/skills/FastAPI.svg",
  Flask: "/skills/Flask.svg",
  Laravel: "/skills/laravel.svg",
  MetaFox: "/skills/metafox.png",
  PHP: "/skills/php.svg",
  PostgreSQL: "/skills/postgresql.svg",
  StarRocks: "/skills/postgresql.svg",
  pgvector: "/skills/postgresql.svg",
  MySQL: "/skills/mysql.svg",
  MongoDB: "/skills/mongodb.svg",
  Redis: "/skills/redis.svg",
  Docker: "/skills/docker.svg",
  Kubernetes: "/skills/kubernetes.svg",
  Terraform: "/skills/terraform.svg",
  AWS: "/skills/aws.svg",
  Supabase: "/skills/firebase.svg",
  HTML: "/skills/html.svg",
  CSS: "/skills/css.svg",
  SASS: "/skills/sass.svg",
  "Zend Framework": "/skills/zend.svg",
  LangChain: "/skills/python.svg",
  "AI/LLM": "/skills/python.svg",
  API: "/skills/express.svg",
  Blockchain: "/skills/nodejs.svg",
  "Tailwind CSS": "/skills/css.svg",
};
