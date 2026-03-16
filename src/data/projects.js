export const projects = [
  {
    id: 1,
    title: "DevXClub v2",
    type: ["all", "frontend", "backend"], // ← appears in multiple tabs
    badge: "Featured",
    badge_color: "orange",
    description: "A full-stack developer community platform — Turborepo monorepo with Next.js 15, Express.js, MongoDB, TypeScript, and Cloudinary. Auth system, Resources with file uploads, Dashboard, AI Code Review roadmap.",
    image: "/projects/devxclub.png",
    tags: ["Next.js 15", "TypeScript", "Express.js", "MongoDB", "Cloudinary", "Tailwind CSS", "Framer Motion", "Turborepo", "JWT Auth"],
    links: { live: "https://devxclub.com", github: "#" },
    featured: true
  },
  {
    id: 2,
    title: "DevXClub Public REST API",
    type: ["all", "backend"],
    badge: "Backend",
    badge_color: "blue",
    description: "A clean, documented REST API for the DevXClub platform — auth, resources, user profiles. Deployed on Render with Postman docs. Includes Zod validation, rate limiting, global error handling, API versioning.",
    image: "/projects/devxclub-api.png",
    tags: ["Express.js", "MongoDB", "JWT Auth", "REST API", "Zod", "Rate Limiting", "Render"],
    links: { live: "#", docs: "#", github: "#" }
  },
  {
    id: 3,
    title: "Job Board API — DevXClub Jobs",
    type: ["all", "backend"],
    badge: "Backend",
    badge_color: "blue",
    description: "Job listings REST API with role-based auth (admin posts jobs, users apply/save), full-text search, filters by stack/location/type, and pagination.",
    image: "/projects/jobboard-api.png",
    tags: ["Express.js", "MongoDB", "Role-Based Auth", "Pagination", "Zod Validation", "Render"],
    links: { live: "#", docs: "#", github: "#" }
  },
  {
    id: 4,
    title: "Solvimate — MERN Feature",
    type: ["all", "frontend", "backend"],
    badge: "Internship",
    badge_color: "blue",
    description: "Led frontend for [X feature] — built components and integrated with Express.js REST APIs.",
    image: "/projects/002.png",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    links: { github: "#" }
  },
  {
    id: 5,
    title: "Client UI/UX Design",
    type: ["all", "design"],
    badge: "Design",
    badge_color: "purple",
    description: "Designed landing page and app screens for a client. Delivered Figma screens with dev-ready handoff.",
    image: "/projects/003.png",
    tags: ["Figma", "UI/UX", "Prototyping"],
    links: { figma: "#" }
  },
  {
    id: 6,
    title: "The Damai",
    type: ["all", "frontend"],
    badge: "Frontend",
    badge_color: "green",
    description: "Music-themed landing page with GSAP scroll-triggered animations and a custom cursor.",
    image: "/projects/001.png",
    tags: ["HTML/CSS", "JavaScript", "GSAP"],
    links: { live: "#", github: "#" }
  },
  {
    id: 7,
    title: "Modern Studio",
    type: ["all", "frontend"],
    badge: "Frontend",
    badge_color: "green",
    description: "Add your one-line description here — what the brief was, what you built specifically.",
    image: "/dist/projects/004.png",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    links: { live: "#", github: "#" }
  }
]