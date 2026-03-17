"use client";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "FRONTEND",
    color: "text-orange-500 border-orange-500/20 bg-orange-500/10",
    tags: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "HTML5", "CSS3/SCSS", "JavaScript ES6+", "shadcn/ui"]
  },
  {
    category: "BACKEND",
    color: "text-blue-500 border-blue-500/20 bg-blue-500/10",
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Auth", "REST API Design", "Cloudinary", "Multer", "express-validator", "bcryptjs"]
  },
  {
    category: "DESIGN",
    color: "text-purple-500 border-purple-500/20 bg-purple-500/10",
    tags: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Design Systems", "Component Design"]
  },
  {
    category: "TOOLS",
    color: "text-green-500 border-green-500/20 bg-green-500/10",
    tags: ["Git/GitHub", "Turborepo", "npm Workspaces", "Vercel", "Render", "Postman", "VS Code"]
  }
];

const Skills = () => {
  return (
    <section className="container-content py-20 md:py-28" id="skills">
      <div className="mb-10">
        <span className="text-sm text-white/40 font-medium mb-4 block">
          <span className="text-orange-500 font-bold">.</span>skills
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-[-0.04em] leading-[1.0]">
          My Toolkit
        </h2>
        <p className="text-[#777] max-w-2xl text-lg mt-4">
          Things I build with daily, things I&apos;m growing in, and tools I use to design and ship.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {skillsData.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-8 rounded-xl bg-[#0f0f0f] border border-[#1c1c1c] hover:border-[#2a2a2a] transition-all duration-300"
          >
            <h3 className={`text-sm font-bold tracking-widest mb-6 ${group.color.split(" ")[0]}`}>
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.tags.map((tag, j) => (
                <span key={j} className={`px-4 py-2 rounded-full text-sm font-medium border ${group.color}`}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
