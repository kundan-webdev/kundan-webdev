import { Tag } from "@/components/atoms";
import { cn } from "@/lib/utils";

interface ProjectMetaProps {
  stack: string[];
  className?: string;
}

export function ProjectMeta({ stack, className }: ProjectMetaProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {stack.slice(0, 4).map((tech) => (
        <Tag key={tech}>{tech}</Tag>
      ))}
    </div>
  );
}

export default ProjectMeta;

