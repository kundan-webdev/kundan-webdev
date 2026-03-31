import { ArrowLeft, ArrowRight } from "lucide-react";

import ProjectRouteLink from "./ProjectRouteLink";

interface NavigationProject {
  id: string;
  title: string;
}

interface ProjectNavigationProps {
  previousProject: NavigationProject | null;
  nextProject: NavigationProject | null;
}

export default function ProjectNavigation({
  previousProject,
  nextProject,
}: ProjectNavigationProps) {
  if (!previousProject && !nextProject) return null;

  return (
    <div className="mt-12 border-t border-[var(--border-default)] pt-8">
      <div className="mx-auto flex max-w-[840px] flex-wrap justify-center gap-4">
        {previousProject ? (
          <ProjectRouteLink
            href={`/projects/${previousProject.id}`}
            className="group flex min-h-[104px] w-full max-w-sm flex-col items-center justify-center rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 text-center transition-colors hover:border-[var(--border-strong)]"
          >
            <span className="mb-2 inline-flex w-full items-center justify-center gap-2 text-center text-xs uppercase tracking-[0.2em] text-[var(--text-faint)]">
              <ArrowLeft size={12} />
              Previous
            </span>
            <p className="max-w-[18ch] text-center text-base font-semibold text-[var(--text-primary)]">
              {previousProject.title}
            </p>
          </ProjectRouteLink>
        ) : null}

        {nextProject ? (
          <ProjectRouteLink
            href={`/projects/${nextProject.id}`}
            className="group flex min-h-[104px] w-full max-w-sm flex-col items-center justify-center rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 text-center transition-colors hover:border-[var(--border-strong)]"
          >
            <span className="mb-2 inline-flex w-full items-center justify-center gap-2 text-center text-xs uppercase tracking-[0.2em] text-[var(--text-faint)]">
              Next
              <ArrowRight size={12} />
            </span>
            <p className="max-w-[18ch] text-center text-base font-semibold text-[var(--text-primary)]">
              {nextProject.title}
            </p>
          </ProjectRouteLink>
        ) : null}
      </div>
    </div>
  );
}
