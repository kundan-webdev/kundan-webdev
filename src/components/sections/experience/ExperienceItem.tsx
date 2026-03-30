"use client";

import { motion, type Variants } from "framer-motion";

import type { Experience } from "@/data/experience";
import { Tag } from "@/components/atoms";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

interface ExperienceItemProps {
  experience: Experience;
}

const typeLabel: Record<Experience["type"], string> = {
  internship: "Internship",
  freelance: "Freelance",
  founder: "Founder",
  "full-time": "Full-time",
};

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <motion.article
      variants={itemVariants}
      className="border-b border-[var(--border-default)] py-8 first:border-t sm:py-10"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] sm:text-xl">
                {experience.role}
              </h3>
              <span className="text-sm text-[var(--brand-primary)]">
                {experience.company}
              </span>
            </div>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              {typeLabel[experience.type]} · {experience.location}
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            <span className="text-sm font-medium text-[var(--text-muted)]">
              {experience.period}
            </span>
            <span className="w-fit rounded-full border border-[var(--border-default)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--brand-primary)]">
              {experience.current ? "Current" : typeLabel[experience.type]}
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {experience.description.map((point) => (
            <div key={point} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              <span className="mt-1 text-[var(--brand-primary)]">?</span>
              <p>{point}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {experience.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ExperienceItem;

