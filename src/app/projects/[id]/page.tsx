import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import ProjectActionLinks from "@/components/sections/recent-work/ProjectActionLinks";
import ProjectNavigation from "@/components/sections/recent-work/ProjectNavigation";
import { projects } from "@/data/projects";

const disableImageOptimization = process.env.NODE_ENV === "development";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((entry) => entry.id === id);

  if (!project) return {};

  return {
    title: `${project.title} - Kundan`,
    description: project.shortDesc,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const projectIndex = projects.findIndex((entry) => entry.id === id);
  const project = projectIndex >= 0 ? projects[projectIndex] : undefined;

  if (!project) notFound();

  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <main className="min-h-screen bg-[var(--bg-base)]">
      <div className="mx-auto max-w-[1136px] px-4 pb-4 pt-24 sm:px-6 lg:px-0">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          Back to projects
        </Link>
      </div>

      <div className="mx-auto mb-10 max-w-[1136px] px-4 sm:px-6 lg:px-0">
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-default)]">
          <Image
            src={project.image}
            alt={project.title}
            width={1600}
            height={900}
            priority
            unoptimized={disableImageOptimization}
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) calc(100vw - 3rem), 1136px"
            quality={70}
            className="h-auto w-full"
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-[1136px] grid-cols-1 gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-[1fr_300px] lg:px-0">
        <div>
          <div className="mb-6">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand-primary)]">
                {project.status === "live"
                  ? "Live"
                  : project.status === "wip"
                    ? "In progress"
                    : "Archived"}
              </span>
              <h1 className="mt-1 text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
                {project.title}
              </h1>
            </div>
          </div>

          <div className="space-y-5 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            {project.longDesc.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div className="mt-10">
              <h2 className="mb-4 text-base font-semibold text-[var(--text-primary)]">Key highlights</h2>
              <ul className="space-y-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <span className="mt-0.5 text-[var(--brand-primary)]">&rarr;</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        <aside className="space-y-6">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Tech stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--border-default)] bg-[var(--bg-elevated)] px-3 py-1 text-xs text-[var(--text-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.completedDate && (
            <div>
              <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
                Completed
              </p>
              <p className="text-sm text-[var(--text-secondary)]">{project.completedDate}</p>
            </div>
          )}

          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Project links
            </p>
            <ProjectActionLinks project={project} direction="column" showPreview={false} />
          </div>
        </aside>
      </div>

      <div className="mx-auto max-w-[1136px] px-4 pb-24 sm:px-6 lg:px-0">
        <ProjectNavigation
          previousProject={previousProject}
          nextProject={nextProject}
        />
      </div>
    </main>
  );
}

