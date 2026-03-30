export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  credentialUrl?: string;
  image?: string;
  skills?: string[];
}

export const certificates: Certificate[] = [
  {
    id: "javascript-algorithms-and-data-structures",
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    issuedDate: "Nov 2023",
    credentialUrl: "https://freecodecamp.org/",
    image: "/projects/001.png",
    skills: ["JavaScript", "Algorithms", "Data Structures"],
  },
  {
    id: "professional-scrum-master-i",
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    issuedDate: "Oct 2023",
    credentialUrl: "https://scrum.org/",
    image: "/projects/004.png",
    skills: ["Scrum", "Agile"],
  },
  {
    id: "react-the-complete-guide",
    title: "React - The Complete Guide",
    issuer: "Udemy",
    issuedDate: "Jan 2024",
    image: "/projects/005.png",
    skills: ["React", "Hooks", "Redux"],
  },
];
