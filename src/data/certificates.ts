export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  credentialUrl?: string;
  image?: string;
  skills: string[];
  summary: string;
  learned: string[];
}

export const certificates: Certificate[] = [
  {
    id: "javascript-algorithms-and-data-structures",
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    issuedDate: "Nov 2023",
    credentialUrl:
      "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/",
    image: "/certificates/anthropic_01.webp",
    skills: ["JavaScript", "Algorithms", "Data Structures", "Problem Solving"],
    summary: "Strengthened my JavaScript fundamentals, problem solving, and core logic thinking.",
    learned: [
      "Writing cleaner JavaScript with better control over arrays and objects.",
      "Breaking problems into smaller algorithmic steps before coding.",
      "Choosing more useful data structures for real product workflows.",
    ],
  },
  {
    id: "professional-scrum-master-i",
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    issuedDate: "Oct 2023",
    credentialUrl: "https://www.scrum.org/professional-scrum-certifications/professional-scrum-master-assessments",
    image: "/certificates/anthropic_02.webp",
    skills: ["Scrum", "Agile", "Team Collaboration", "Delivery"],
    summary: "Improved how I think about delivery, collaboration, and structured iteration.",
    learned: [
      "Thinking in sprint-sized outcomes instead of vague task lists.",
      "Running work with clearer priorities and feedback loops.",
      "Balancing execution speed with team clarity and accountability.",
    ],
  },
  {
    id: "react-the-complete-guide",
    title: "React - The Complete Guide",
    issuer: "Udemy",
    issuedDate: "Jan 2024",
    credentialUrl: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    image: "/certificates/anthropic_03.webp",
    skills: ["React", "Hooks", "Component Architecture", "State Management"],
    summary: "Made my React work more structured, scalable, and easier to reason about.",
    learned: [
      "Designing components with clearer responsibilities.",
      "Using hooks more intentionally for state and side effects.",
      "Thinking about React UI in a more scalable way.",
    ],
  },
  {
    id: "ai-prompt-engineering-workflows",
    title: "AI Prompt Engineering Workflows",
    issuer: "Anthropic",
    issuedDate: "Feb 2026",
    credentialUrl: "https://www.anthropic.com/learn",
    image: "/certificates/anthropic_04.webp",
    skills: ["Prompt Engineering", "AI Workflows", "Evaluation", "AI UX"],
    summary: "Helped me think more clearly about prompt design, evaluation, and useful AI flows.",
    learned: [
      "Structuring prompts around clear context and output shape.",
      "Evaluating AI output with clearer quality checks.",
      "Designing AI features around real workflows, not novelty.",
    ],
  },
];
