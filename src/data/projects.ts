export type ProjectStatus = "live" | "wip" | "archived";
export type ProjectCategory = "all" | "frontend" | "backend" | "design";

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  docsUrl?: string;
  figmaUrl?: string;
  image: string;
  featured: boolean;
  status: ProjectStatus;
  completedDate?: string;
  highlights?: string[];
  categories: ProjectCategory[];
  label: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: "devxclub-v2",
    title: "DevXClub v2",
    shortDesc: "AI-powered developer community for 1000+ Indian CS students.",
    longDesc:
      "DevXClub v2 is the flagship product I am building for Indian computer science students who want a practical place to learn, ship, and grow together. It is a full-stack monorepo that combines community, resources, product thinking, and an AI-assisted roadmap into one experience.\n\nI led the frontend architecture, product direction, and the overall system design for the platform. The result is a production-ready foundation with authentication, profile flows, dashboard experiences, upload pipelines, and a roadmap for AI code review and jobs.",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Tailwind CSS",
      "Framer Motion",
      "Turborepo",
      "JWT Auth",
    ],
    liveUrl: "https://devxclub.com",
    image: "/projects/001.png",
    featured: true,
    status: "live",
    completedDate: "Jan 2025",
    highlights: [
      "Built as a Turborepo monorepo with a dedicated web app, API layer, and shared TypeScript packages.",
      "Implemented JWT authentication, protected dashboards, and profile workflows for community members.",
      "Added resource publishing with Cloudinary uploads, CDN delivery, and scalable MongoDB storage.",
    ],
    categories: ["all", "frontend", "backend"],
    label: "Featured",
    year: "2025",
  },
  {
    id: "devxclub-public-api",
    title: "DevXClub Public REST API",
    shortDesc: "Documented REST API for auth, resources, and developer workflows.",
    longDesc:
      "The DevXClub Public API was built to expose the platform with clean, real-world backend patterns. I focused on input validation, consistent response shapes, route organization, and production-minded guardrails like error handling and rate limiting.\n\nIt demonstrates the backend depth behind the DevXClub ecosystem and makes the product easier to extend with mobile clients, internal tools, and future public integrations.",
    stack: [
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "REST API",
      "Zod",
      "Rate Limiting",
      "Render",
    ],
    image: "/projects/002.png",
    featured: false,
    status: "live",
    completedDate: "Feb 2025",
    highlights: [
      "Created versioned API routes with consistent error handling and validation layers.",
      "Added rate limiting and auth flows for safer public-facing access.",
      "Documented endpoints for resources, users, and future platform integrations.",
    ],
    categories: ["all", "backend"],
    label: "Backend",
    year: "2025",
  },
  {
    id: "devxclub-jobs-api",
    title: "Job Board API",
    shortDesc: "Backend for jobs, search, role-based actions, and application flows.",
    longDesc:
      "This API powers the jobs pillar of DevXClub and focuses on backend fundamentals that matter in real products: permissions, filtering, discoverability, and structured data. It supports role-based access, job management, applications, and saved jobs for users.\n\nThe project pushed me deeper into API ergonomics, search indexing, and designing flows that are practical for both recruiters and student developers.",
    stack: [
      "Express.js",
      "MongoDB",
      "Role-Based Auth",
      "Pagination",
      "Search",
      "Zod Validation",
    ],
    image: "/projects/003.png",
    featured: false,
    status: "wip",
    completedDate: "Mar 2025",
    highlights: [
      "Implemented admin and user permissions for posting, saving, and applying to jobs.",
      "Added text search, filtering, and paginated responses for scalable listing discovery.",
      "Structured the service for future recruiter workflows and internal moderation tools.",
    ],
    categories: ["all", "backend"],
    label: "Backend",
    year: "2025",
  },
  {
    id: "solvimate-feature",
    title: "Solvimate Product Work",
    shortDesc: "Internship work focused on frontend architecture and API integration.",
    longDesc:
      "At Solvimate, I worked inside a real product environment where speed, clarity, and collaboration mattered. My role centered on frontend delivery: building components, integrating APIs, and shaping implementation details from Figma to production-ready UI.\n\nThe biggest value of this work was learning how to make strong engineering decisions inside a team setting while still keeping the interface polished, responsive, and shippable.",
    stack: ["React", "Node.js", "MongoDB", "Express.js", "Axios"],
    image: "/projects/004.png",
    featured: false,
    status: "live",
    completedDate: "2025",
    highlights: [
      "Led frontend delivery for feature work during a live internship environment.",
      "Integrated React views with backend APIs while aligning closely with the engineering team.",
      "Improved component structure and UI implementation quality from design handoff to release.",
    ],
    categories: ["all", "frontend", "backend"],
    label: "Internship",
    year: "2025",
  },
  {
    id: "client-ui-ux-design",
    title: "Client UI/UX Design",
    shortDesc: "A polished client-facing design system and landing page handoff.",
    longDesc:
      "This project was a design-focused engagement where I translated product requirements into a clean, implementation-ready interface system. The work included layout direction, interaction thinking, and polished screen design for a client use case.\n\nI approached it like product design rather than just visual design, making sure every screen could transition smoothly into development without ambiguity.",
    stack: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
    image: "/projects/005.png",
    featured: false,
    status: "live",
    completedDate: "2024",
    highlights: [
      "Created a reusable visual language with spacing, layout, and typography consistency.",
      "Designed landing and app-facing screens with developer-ready handoff details.",
      "Focused on clarity, usability, and implementation practicality across the flow.",
    ],
    categories: ["all", "design"],
    label: "Design",
    year: "2024",
  },
  {
    id: "the-damai",
    title: "The Damai",
    shortDesc: "Creative music-themed landing page with motion-led storytelling.",
    longDesc:
      "The Damai was a frontend playground focused on animation, layout rhythm, and a stronger visual point of view. I used it to practice motion sequencing, bold typography, and hover detail while keeping the experience responsive.\n\nProjects like this help me sharpen the design-engineering side of frontend work, where polish and perception matter just as much as code structure.",
    stack: ["HTML/CSS", "JavaScript", "GSAP"],
    image: "/projects/002.png",
    featured: false,
    status: "archived",
    completedDate: "2024",
    highlights: [
      "Built a custom-scroll visual experience with animation-led storytelling.",
      "Explored cursor treatment, motion timing, and strong type hierarchy.",
      "Kept the layout responsive while preserving the intended mood and pacing.",
    ],
    categories: ["all", "frontend"],
    label: "Frontend",
    year: "2024",
  },
  {
    id: "modern-studio",
    title: "Modern Studio",
    shortDesc: "Studio-style landing page focused on composition and motion polish.",
    longDesc:
      "Modern Studio is a concept site that let me experiment with component composition, visual hierarchy, and transitions in a calmer editorial format. It was built to feel presentable and product-like instead of looking like a throwaway practice build.\n\nThe project helped refine my intuition around spacing, interaction restraint, and how motion should support the content rather than distract from it.",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/projects/003.png",
    featured: false,
    status: "archived",
    completedDate: "2024",
    highlights: [
      "Composed reusable sections with a strong editorial layout rhythm.",
      "Used Framer Motion for subtle, structured transitions instead of one-off effects.",
      "Practiced building a visually consistent frontend without overdesigning it.",
    ],
    categories: ["all", "frontend"],
    label: "Frontend",
    year: "2024",
  },
];
