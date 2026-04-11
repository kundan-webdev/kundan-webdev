export type ExperienceType =
  | "internship"
  | "freelance"
  | "founder"
  | "full-time";

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  type: ExperienceType;
  description: string[];
  stack: string[];
  current: boolean;
  location: string;
}

export const experiences: Experience[] = [
  {
    id: "solvimate",
    role: "Full Stack Developer Intern",
    company: "Solvimate",
    period: "Oct 2025 - Apr 2026",
    type: "internship",
    description: [
      "Developed and shipped production-ready features in a MERN stack environment (React, Node.js, Express, MongoDB).",
      "Integrated frontend components with REST APIs using Axios, improving data handling and UI responsiveness.",
      "Designed scalable component architecture and optimized folder structure for maintainability.",
      "Collaborated with backend developers to define API contracts, request/response schemas, and authentication flows.",
    ],
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "REST APIs",
      "Axios",
      "JWT",
    ],
    current: true,
    location: "Remote",
  },

  {
    id: "freelance-design",
    role: "UI/UX Designer",
    company: "Freelance",
    period: "2024 - Present",
    type: "freelance",
    description: [
      "Designed user-centric interfaces including landing pages, dashboards, and onboarding flows for multiple client projects.",
      "Delivered developer-ready Figma designs with reusable components, spacing systems, and design consistency.",
      "Improved usability and visual hierarchy through wireframing, prototyping, and iterative design feedback.",
    ],
    stack: ["Figma", "UI/UX Design", "Prototyping", "Design Systems"],
    current: true,
    location: "Remote",
  },
];