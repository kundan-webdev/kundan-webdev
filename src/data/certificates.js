// Each cert needs its OWN image — no shared variables
export const certificates = [
  {
    id: 1,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "Nov 2023",
    credentialId: "fcc-js-algo-2023",
    image: "/certs/freecodecamp-js.png", // ← unique image per cert
    link: "https://freecodecamp.org/...",
    tags: ["JavaScript", "Algorithms", "Data Structures"],
    verified: true
  },
  {
    id: 2,
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "Oct 2023",
    credentialId: "PSM-I-2023",
    image: "/certs/scrumorg-psm1.png",
    link: "https://scrum.org/...",
    tags: ["Scrum", "Agile"],
    verified: true
  },
  {
    id: 3,
    title: "React – The Complete Guide 2024",
    issuer: "Udemy",
    date: "Jan 2024",
    credentialId: "UC-a1b2c3d4e5",
    image: "/certs/udemy-react.png",
    tags: ["React", "Hooks", "Redux"],
    verified: true
  }
]