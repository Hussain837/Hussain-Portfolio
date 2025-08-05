import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Senior Software Engineer",
    company: "Echoit Solutions",
    startDate: "Dec 2024",
    isCurrentJob: true,
    location: "Muzaffarnagar, India",
    description: [
      "Promoted to Senior Software Engineer in Dec 2024 at Echoit Solutions.",
      "Leading full stack development tasks with a focus on React.js, Next.js, and backend integration.",
      "Working on high-profile projects with end-to-end responsibility for code quality and performance.",
    ],
  },
  {
    designation: "Full Stack Developer",
    company: "Echoit Solutions",
    startDate: "Dec 2022",
    endDate: "Nov 2024",
    isCurrentJob: false,
    location: "Muzaffarnagar, India",
    description: [
      "Joined Echoit Solutions as a PHP Developer and transitioned into full stack development.",
      "Worked on multiple client projects including AkashX, using PHP, React.js, and Next.js.",
      "Contributed to backend APIs, frontend components, and overall application performance.",
    ],
  },
];

export default experiences;
