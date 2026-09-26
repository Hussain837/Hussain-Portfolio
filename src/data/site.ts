import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/** A social profile rendered as an icon + label link. */
export interface SocialLink {
  name: string;
  url: string;
  icon: IconDefinition;
  text: string;
}

/**
 * Single source of truth for identity, contact details, social profiles and
 * navigation. Every other data module and component reads from here.
 */
export const site = {
  name: "Hussain Zaidi",
  shortName: "Hussain",
  role: "Full-Stack Developer & AI Engineer",
  location: "Remote / India",
  email: "mo.zaidi837@gmail.com",
  phone: "+91 79062 82945",
  phoneHref: "tel:+917906282945",
  resumeUrl: "/Hussain_Zaidi_Resume.docx",
  paymentUrl: "https://rzp.io/l/Hussain-project-payment",
  profileImage: "/profile.jpeg",
  siteUrl: "https://hussain-portfolio-nine.vercel.app/",
} as const;

export const seo = {
  title: `${site.name} | ${site.role}`,
  description:
    "Python Full-Stack Developer with 4 years of experience building scalable web applications, AI-powered products, analytics platforms, and real-time systems using React, Next.js, Node.js, Python, FastAPI, and LLM technologies.",
  shortDescription: `${site.name} is a proficient Software Engineer and Full Stack Developer from India, skilled in front-end and back-end development using modern tech stacks.`,
  keywords: [
    site.name,
    "Hussain-zaidi",
    "zaidi Hussain",
    "founder of nixlab",
    "nixlab founder",
    "full stack developer",
    "python developer",
    "indian developer",
    "Hussain github",
  ],
} as const;

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://www.github.com/Hussain837",
    icon: faGithub,
    text: "Hussain",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hussain-zaidi-7b6902240",
    icon: faLinkedin,
    text: "Hussain",
  },
  {
    name: "Telegram",
    url: "http://t.me/Hussainzaidi837",
    icon: faTelegram,
    text: "Hussain",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/hussainzaidi__?igsh=MWt5dXNoaGZzcXRwMw==",
    icon: faInstagram,
    text: "Hussain",
  },
  {
    name: "Twitter",
    url: "#",
    icon: faXTwitter,
    text: "Hussain07",
  },
  {
    name: "Email",
    url: `mailto:${site.email}`,
    icon: faEnvelope,
    text: site.email,
  },
];

export const contactChannels = [
  {
    id: "email",
    icon: faEnvelope,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    external: true,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    id: "phone",
    icon: faPhone,
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
    external: false,
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    iconColor: "text-green-400",
  },
  {
    id: "location",
    icon: faLocationDot,
    label: "Location",
    value: site.location,
    href: "#contact",
    external: false,
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-400",
  },
];

export const contactIntro = {
  heading: "Let's Build Something",
  description:
    "Have a project or opportunity? Let's connect and create something amazing together.",
  ctaPrefix: "Ready to start your next project?",
  ctaEmphasis: "Let's talk!",
  icon: faPaperPlane,
} as const;

export type ContactChannel = (typeof contactChannels)[number];
