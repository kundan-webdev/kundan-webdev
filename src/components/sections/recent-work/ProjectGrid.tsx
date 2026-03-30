"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

import { Badge } from "@/components/atoms";
import type { Project } from "@/data/projects";

import ProjectCard from "./ProjectCard";

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
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const ProjectGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <motion.div
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={item} className="h-full">
          <Link href={`/projects/${project.id}`} className="block h-full">
            <ProjectCard project={project} className="h-full" />
            <div className="mt-3 flex items-center justify-between gap-3">
              <Badge text={project.status === "live" ? "Live" : project.status === "wip" ? "In progress" : "Archived"} />
              <span className="text-xs text-[var(--text-faint)]">{project.year}</span>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectGrid;

