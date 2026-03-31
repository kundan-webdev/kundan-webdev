import Image from "next/image";

import { ProjectMeta } from "@/components/molecules";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const disableImageOptimization = process.env.NODE_ENV === "development";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] transition-all duration-300 hover:border-[var(--border-strong)]",
        className,
      )}
    >
      <div className="relative overflow-hidden border-b border-[var(--border-default)]">
        <Image
          src={project.image}
          alt={project.title}
          width={1600}
          height={1000}
          unoptimized={disableImageOptimization}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
          quality={70}
          className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-4 sm:p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] sm:text-xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)]">
              {project.shortDesc}
            </p>
          </div>
          <span className="rounded-full border border-[var(--border-default)] px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-[var(--brand-primary)]">
            {project.label}
          </span>
        </div>
        <ProjectMeta stack={project.stack} />
      </div>
    </article>
  );
};

export default ProjectCard;

