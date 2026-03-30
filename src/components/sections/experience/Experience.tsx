"use client";

import { motion, type Variants } from "framer-motion";

import { experiences } from "@/data/experience";

import ExperienceItem from "./ExperienceItem";

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

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24">
      <motion.div
        className="mx-auto max-w-[1136px] px-4 sm:px-6 lg:px-0"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div
          variants={item}
          className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="mb-4 block text-sm font-medium text-[var(--text-muted)]">
              <span className="text-[var(--brand-primary)]">.</span>journey
            </span>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] sm:text-3xl md:text-4xl">
              Experience
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[var(--text-secondary)] md:text-right">
            Real roles, real products, and the kind of ownership that sharpens both product sense and engineering craft.
          </p>
        </motion.div>

        <motion.div variants={container} className="space-y-0">
          {experiences.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;

