import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBrain,
  faChartLine,
  faCheckCircle,
  faCloud,
  faCode,
  faDatabase,
  faRobot,
  faSearch,
  faServer,
  faTable,
  faBolt,
  faMessage,
  faUsers,
  faRocket,
  faMicrochip,
  faLayerGroup,
  faChartBar,
  faBuilding,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

/** Headline figures reused by the hero, about and experience sections. */
export const stats = {
  yearsExperience: "3+",
  projectsDelivered: "20+",
  performanceBoost: "35%",
  teamSize: "10+",
} as const;

export const heroHighlights = [
  {
    label: "Years Experience",
    value: stats.yearsExperience,
  },
  {
    label: "Projects Delivered",
    value: stats.projectsDelivered,
  },
  {
    label: "Client Satisfaction",
    value: "100%",
  },
] as const;

/** Technology pills shown under the hero headline. */
export const heroTechBadges = [
  { name: "Next.js", color: "from-blue-400/20 to-blue-600/20" },
  { name: "React", color: "from-cyan-400/20 to-cyan-600/20" },
  { name: "Node.js", color: "from-green-400/20 to-green-600/20" },
  { name: "Python", color: "from-yellow-400/20 to-yellow-600/20" },
  { name: "FastAPI", color: "from-teal-400/20 to-teal-600/20" },
  { name: "PostgreSQL", color: "from-indigo-400/20 to-indigo-600/20" },
  { name: "AI / LLM", color: "from-purple-400/20 to-purple-600/20" },
] as const;

export const aboutStats = [
  { id: "projects", label: "Projects Completed", value: stats.projectsDelivered, icon: faCode },
  { id: "years", label: "Years Experience", value: stats.yearsExperience, icon: faChartLine },
  { id: "team", label: "Team Size", value: stats.teamSize, icon: faUsers },
  { id: "performance", label: "Performance Boost", value: stats.performanceBoost, icon: faRocket },
] as const;

export const experienceMetrics = [
  { id: "performance", label: "Performance Boost", value: stats.performanceBoost, icon: faRocket },
  { id: "projects", label: "Projects Shipped", value: stats.projectsDelivered, icon: faCode },
  { id: "team", label: "Team Size", value: stats.teamSize, icon: faUsers },
  { id: "years", label: "Years Experience", value: stats.yearsExperience, icon: faCalendarAlt },
] as const;

/** A paragraph split around an emphasised fragment. */
export interface AboutParagraph {
  id: string;
  before: string;
  highlight: string;
  after: string;
  highlightColor: string;
  borderHover: string;
}

export const aboutParagraphs: AboutParagraph[] = [
  {
    id: "intro",
    before: "I am a ",
    highlight: "Python Full-Stack Developer",
    after: ` with ${stats.yearsExperience} years of experience building and scaling production web applications using React.js, Next.js, Node.js, and Python.`,
    highlightColor: "text-indigo-400",
    borderHover: "hover:border-indigo-500/30",
  },
  {
    id: "ai",
    before: "My experience spans ",
    highlight: "AI-powered applications",
    after:
      " using RAG, LangChain, LangGraph, pgvector, LLM-based SQL generation, and AI agents. I have built REST APIs, optimized PostgreSQL schemas, implemented Redis caching, and integrated WebSockets for real-time systems.",
    highlightColor: "text-purple-400",
    borderHover: "hover:border-purple-500/30",
  },
  {
    id: "performance",
    before: "I have improved backend performance by up to ",
    highlight: stats.performanceBoost,
    after:
      " through query optimization and Redis caching. I also develop custom Laravel and MetaFox modules, mentor junior developers, and collaborate with cross-functional teams.",
    highlightColor: "text-pink-400",
    borderHover: "hover:border-pink-500/30",
  },
];

export interface Expertise {
  id: string;
  title: string;
  description: string;
  icon: IconDefinition;
  color: string;
  borderColor: string;
}

export const expertise: Expertise[] = [
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description: "React.js, Next.js, Node.js, Python, FastAPI",
    icon: faServer,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    description: "RAG, LangChain, LangGraph, pgvector, LLM-based SQL generation",
    icon: faBrain,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
  },
  {
    id: "database",
    title: "Database & Caching",
    description: "PostgreSQL optimization, Redis caching, query optimization",
    icon: faDatabase,
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
  },
  {
    id: "realtime",
    title: "Real-Time Systems",
    description: "WebSockets, real-time applications, analytics platforms",
    icon: faCloud,
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-500/30",
  },
];

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  icon: IconDefinition;
  color: string;
  borderColor: string;
  achievements: string[];
  tags: string[];
}

export const experiences: WorkExperience[] = [
  {
    id: "echoit-senior",
    title: "Senior Software Engineer",
    company: "Echoit Solutions Pvt. Ltd.",
    period: "Dec 2024 – Present",
    location: "Remote",
    icon: faCode,
    color: "from-indigo-500/20 to-purple-500/20",
    borderColor: "border-indigo-500/30",
    achievements: [
      "Promoted to Senior Software Engineer in Dec 2024 at Echoit Solutions.",
      "Leading full stack development tasks with a focus on React.js, Next.js, and backend integration.",
      "Working on high-profile projects with end-to-end responsibility for code quality and performance.",
      "Mentoring junior developers and collaborating with cross-functional teams.",
    ],
    tags: ["React.js", "Next.js", "Node.js", "FastAPI", "PostgreSQL", "Redis"],
  },
  {
    id: "echoit-fullstack",
    title: "Full-Stack Developer",
    company: "Echoit Solutions Pvt. Ltd.",
    period: "Dec 2022 – Nov 2024",
    location: "Remote",
    icon: faServer,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    achievements: [
      "Joined Echoit Solutions as a PHP Developer and transitioned into full stack development.",
      "Worked on multiple client projects including AkashX, using PHP, React.js, and Next.js.",
      "Contributed to backend APIs, frontend components, and overall application performance.",
      "Developed custom Laravel and MetaFox modules and plugins.",
    ],
    tags: ["PHP", "Laravel", "React", "Next.js", "MySQL", "JavaScript"],
  },
];

/** Maps an achievement bullet to a thematic icon, keyed by keyword. */
const achievementIcons: { match: RegExp; icon: IconDefinition }[] = [
  { match: /api/i, icon: faServer },
  { match: /database|query|schema/i, icon: faDatabase },
  { match: /\bai\b|llm/i, icon: faBrain },
  { match: /real-time|websocket/i, icon: faBolt },
  { match: /mentor|team|collaborat/i, icon: faUsers },
];

export const achievementIconFor = (achievement: string): IconDefinition => {
  const match = achievementIcons.find((entry) => entry.match.test(achievement));
  return match ? match.icon : faCheckCircle;
};

export const companyIcon = faBuilding;

export interface AiCapability {
  id: string;
  title: string;
  description: string;
  icon: IconDefinition;
  color: string;
  borderColor: string;
  iconColor: string;
}

export const aiCapabilities: AiCapability[] = [
  {
    id: "rag",
    title: "RAG Pipelines",
    description:
      "Retrieval-augmented generation for document intelligence and knowledge assistants.",
    icon: faSearch,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    id: "agents",
    title: "AI Agents",
    description:
      "Autonomous agents that interact with APIs, databases, and external systems.",
    icon: faRobot,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    id: "nl2sql",
    title: "Natural Language to SQL",
    description: "LLM-based query generation over PostgreSQL and StarRocks schemas.",
    icon: faTable,
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    iconColor: "text-green-400",
  },
  {
    id: "vector",
    title: "Vector Search",
    description: "Similarity search using pgvector for semantic document retrieval.",
    icon: faLayerGroup,
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-400",
  },
  {
    id: "analytics",
    title: "AI Analytics",
    description:
      "Automated charts, anomaly detection, and written insights from data.",
    icon: faChartBar,
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30",
    iconColor: "text-pink-400",
  },
  {
    id: "llm",
    title: "LLM Integrations",
    description:
      "Multi-provider LLM support with custom prompt engineering and output parsing.",
    icon: faMicrochip,
    color: "from-indigo-500/20 to-violet-500/20",
    borderColor: "border-indigo-500/30",
    iconColor: "text-indigo-400",
  },
];

export interface WorkflowStep {
  id: string;
  label: string;
  icon: IconDefinition;
  color: string;
}

export const workflowSteps: WorkflowStep[] = [
  { id: "prompt", label: "User Prompt", icon: faMessage, color: "from-blue-500/20 to-cyan-500/20" },
  { id: "llm", label: "LLM Processing", icon: faBrain, color: "from-purple-500/20 to-pink-500/20" },
  { id: "agent", label: "RAG / AI Agent", icon: faRobot, color: "from-green-500/20 to-emerald-500/20" },
  { id: "langchain", label: "LangChain / LangGraph", icon: faCode, color: "from-orange-500/20 to-amber-500/20" },
  { id: "vector", label: "PostgreSQL / pgvector", icon: faDatabase, color: "from-red-500/20 to-rose-500/20" },
  { id: "report", label: "SQL / Analytics / Report", icon: faChartLine, color: "from-indigo-500/20 to-violet-500/20" },
];

export const aiStack = [
  "LangChain",
  "LangGraph",
  "pgvector",
  "OpenAI",
  "Claude",
  "Llama",
  "Hugging Face",
] as const;

export const education = {
  degree: "B.Tech in Computer Science",
  institution: "Abdul Kalam Technical University",
  year: "2023",
} as const;
