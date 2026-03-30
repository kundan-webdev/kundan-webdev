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
    role: "Frontend Developer Intern",
    company: "Solvimate",
    period: "2025 - Present",
    type: "internship",
    description: [
      "Leading frontend implementation for real product features in a MERN environment.",
      "Integrating React components with Express APIs and shaping clean UI flows from design files.",
      "Helping make architectural decisions around folder structure, reusable components, and data flow.",
    ],
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "REST APIs",
      "Axios",
    ],
    current: true,
    location: "Remote / Varanasi",
  },
  {
    id: "devxclub",
    role: "Founder & Frontend Lead",
    company: "DevXClub",
    companyUrl: "https://devxclub.com",
    period: "2023 - Present",
    type: "founder",
    description: [
      "Founded and continue to lead DevXClub as a full-stack community product for student developers.",
      "Architected the frontend and product structure for DevXClub v2 across community, resources, jobs, and AI-assisted ideas.",
      "Coordinated delivery, roadmap direction, and collaboration patterns while continuing to ship the core product.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Tailwind CSS",
      "Framer Motion",
      "Turborepo",
    ],
    current: true,
    location: "Varanasi, India",
  },
  {
    id: "freelance-design",
    role: "UI/UX Designer",
    company: "Freelance",
    period: "2023 - Present",
    type: "freelance",
    description: [
      "Designed landing pages, onboarding flows, and dashboard screens for clients and collaborators.",
      "Delivered developer-ready Figma files with component logic, spacing consistency, and visual direction.",
      "Balanced usability, polish, and implementation realism across small but high-touch projects.",
    ],
    stack: ["Figma", "UI/UX Design", "Prototyping", "Design Systems"],
    current: true,
    location: "Remote",
  },
];
