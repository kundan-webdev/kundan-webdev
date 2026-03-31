"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import Image from "next/image";

import { ProjectMeta } from "@/components/molecules";
import { projects, type ProjectCategory } from "@/data/projects";

import ProjectActionLinks from "./ProjectActionLinks";
import ProjectRouteLink from "./ProjectRouteLink";

const disableImageOptimization = process.env.NODE_ENV === "development";

const filters: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "design", label: "Design" },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const RecentWork = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredProjects = projects.filter((project) => project.categories.includes(activeFilter));
  const featuredProject = filteredProjects.find((project) => project.featured) ?? null;
  const restProjects = filteredProjects.filter((project) => project.id !== featuredProject?.id);

  return (
    <section id="projects" className="py-16 md:py-24">
      <motion.div
        className="mx-auto max-w-[1136px] px-4 sm:px-6 lg:px-0"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div
          variants={itemVariants}
          className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="mb-4 block text-sm font-medium text-[var(--text-muted)]">
              <span className="text-[var(--brand-primary)]">.</span>work
            </span>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] sm:text-3xl md:text-4xl">
              Selected Projects
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[var(--text-secondary)] md:text-right">
            Full-stack products, backend APIs, frontend builds, and UI/UX work that reflects how I like to ship.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8 flex flex-wrap gap-2 md:gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`min-h-[44px] rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "border border-[var(--border-default)] text-[var(--text-muted)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={sectionVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
          >
            {featuredProject && (
              <motion.div variants={itemVariants} className="mb-6">
                <article className="group overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] transition-all duration-300 hover:border-[var(--border-strong)]">
                  <ProjectRouteLink href={`/projects/${featuredProject.id}`} className="block">
                    <div className="relative overflow-hidden">
                      <Image
                        src={featuredProject.image}
                        alt={featuredProject.title}
                        width={1600}
                        height={900}
                        unoptimized={disableImageOptimization}
                        sizes="(max-width: 640px) 100vw, (max-width: 1200px) calc(100vw - 3rem), 1136px"
                        quality={70}
                        className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(8,8,8,0)_0%,rgba(8,8,8,0.08)_36%,var(--bg-surface)_100%)] sm:h-36" />
                    </div>
                  </ProjectRouteLink>
                  <div className="relative z-10 -mt-8 flex flex-col gap-5 bg-[linear-gradient(180deg,rgba(12,12,12,0)_0%,rgba(12,12,12,0.72)_18%,var(--bg-surface)_42%,var(--bg-surface)_100%)] p-4 pt-10 sm:-mt-10 sm:p-6 sm:pt-12 md:flex-row md:items-end md:justify-between">
                    <div>
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-primary)]">
                        Featured
                      </span>
                      <ProjectRouteLink href={`/projects/${featuredProject.id}`} className="inline-block">
                        <h3 className="text-2xl font-semibold text-[var(--text-primary)] transition-colors hover:text-[var(--brand-primary)] md:text-3xl">
                          {featuredProject.title}
                        </h3>
                      </ProjectRouteLink>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                        {featuredProject.shortDesc}
                      </p>
                      <ProjectMeta stack={featuredProject.stack} className="mt-4" />
                    </div>
                    <ProjectActionLinks
                      project={featuredProject}
                      detailHref={`/projects/${featuredProject.id}`}
                    />
                  </div>
                </article>
              </motion.div>
            )}

            <div>
              {restProjects.length > 0 && <div className="border-t border-[var(--border-default)]" />}
              {restProjects.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <article className="group border-b border-[var(--border-default)] py-5 transition-all hover:px-1">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="min-w-0">
                        <div className="flex items-center gap-3">
                          <span className="w-10 shrink-0 text-xs text-[var(--text-faint)]">
                            {project.year}
                          </span>
                          <ProjectRouteLink href={`/projects/${project.id}`} className="inline-block">
                            <h3 className="text-lg font-semibold text-[var(--text-primary)] transition-colors hover:text-[var(--brand-primary)]">
                              {project.title}
                            </h3>
                          </ProjectRouteLink>
                        </div>
                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)] sm:pl-[3.25rem] md:pl-0">
                          {project.shortDesc}
                        </p>
                      </div>
                      <div className="flex flex-col items-start gap-3 md:items-end">
                        <span className="hidden text-xs font-medium uppercase tracking-wide text-[var(--text-muted)] sm:block">
                          {project.label}
                        </span>
                        <ProjectActionLinks
                          project={project}
                          detailHref={`/projects/${project.id}`}
                          compact
                        />
                      </div>
                    </div>
                  </article>
                </motion.div>
              ))}

              {restProjects.length === 0 && !featuredProject && (
                <motion.div variants={itemVariants} className="py-16 text-center text-[var(--text-muted)]">
                  No projects in this category yet.
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default RecentWork;
