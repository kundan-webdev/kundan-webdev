import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

import ProjectRouteLink from "./ProjectRouteLink";

type ActionProject = Pick<Project, "githubUrl" | "liveUrl">;

interface ProjectActionLinksProps {
  project: ActionProject;
  detailHref?: string;
  showPreview?: boolean;
  direction?: "row" | "column";
  compact?: boolean;
}

const baseClasses =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors";

function ActionItem({
  href,
  label,
  icon,
  active,
  emphasis = false,
}: {
  href?: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
  emphasis?: boolean;
}) {
  const classes = cn(
    baseClasses,
    emphasis
      ? active
        ? "border-transparent bg-primary text-white hover:opacity-90"
        : "border-[var(--border-default)] bg-[var(--bg-elevated)] text-[var(--text-faint)] opacity-70"
      : active
        ? "border-[var(--border-default)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
        : "border-[var(--border-default)] text-[var(--text-faint)] opacity-70",
  );

  if (href && active) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {label} {icon}
      </a>
    );
  }

  return (
    <span aria-disabled="true" className={classes}>
      {label} {icon}
    </span>
  );
}

export default function ProjectActionLinks({
  project,
  detailHref,
  showPreview = true,
  direction = "row",
  compact = false,
}: ProjectActionLinksProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2",
        direction === "column" && "flex-col items-stretch",
        compact && direction === "row" && "md:justify-end",
      )}
    >
      <ActionItem
        href={project.liveUrl}
        label="Live Preview"
        icon={<ExternalLink size={14} />}
        active={Boolean(project.liveUrl)}
        emphasis
      />
      <ActionItem
        href={project.githubUrl}
        label="GitHub"
        icon={<Github size={14} />}
        active={Boolean(project.githubUrl)}
      />
      {showPreview && detailHref ? (
        <ProjectRouteLink
          href={detailHref}
          className={cn(
            baseClasses,
            "border-[var(--border-default)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]",
          )}
        >
          Preview <ArrowUpRight size={14} />
        </ProjectRouteLink>
      ) : null}
    </div>
  );
}
