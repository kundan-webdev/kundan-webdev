import { Tag } from "@/components/atoms";
import { cn } from "@/lib/utils";

interface SkillTagProps {
  label: string;
  className?: string;
}

export function SkillTag({ label, className }: SkillTagProps) {
  return <Tag className={cn("text-sm", className)}>{label}</Tag>;
}

export default SkillTag;

