"use client";

import { motion, type Variants } from "framer-motion";

import { SkillTag } from "@/components/molecules";

const skillsData = [
  {
    category: "Frontend",
    accent: "text-[var(--brand-primary)]",
    tags: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "HTML5",
      "CSS3/SCSS",
      "JavaScript ES6+",
      "shadcn/ui",
    ],
  },
  {
    category: "Backend",
    accent: "text-sky-500",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Auth",
      "REST API Design",
      "Cloudinary",
      "Multer",
      "Zod",
      "bcryptjs",
    ],
  },
  {
    category: "Design",
    accent: "text-fuchsia-500",
    tags: [
      "Figma",
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Component Design",
    ],
  },
  {
    category: "Tools",
    accent: "text-emerald-500",
    tags: [
      "Git/GitHub",
      "Turborepo",
      "npm Workspaces",
      "Vercel",
      "Render",
      "Postman",
      "VS Code",
    ],
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24">
      <motion.div
        className="mx-auto max-w-[1136px] px-4 sm:px-6 lg:px-0"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div variants={item} className="mb-12">
          <span className="mb-4 block text-sm font-medium text-[var(--text-muted)]">
            <span className="text-[var(--brand-primary)]">.</span>skills
          </span>
          <h2 className="text-2xl font-bold text-[var(--text-primary)] sm:text-3xl md:text-4xl">
            My Toolkit
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            Things I build with daily, things I&apos;m growing in, and the tools I rely on to design, ship, and iterate.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6" variants={container}>
          {skillsData.map((group) => (
            <motion.article
              key={group.category}
              variants={item}
              className="rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 sm:p-6"
            >
              <h3 className={`mb-6 text-sm font-bold uppercase tracking-[0.24em] ${group.accent}`}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {group.tags.map((tag) => (
                  <SkillTag key={tag} label={tag} />
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;

