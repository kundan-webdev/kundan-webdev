import { cn } from "@/lib/utils";

interface BadgeProps {
  text?: string;
  className?: string;
}

export function Badge({ text, className }: BadgeProps) {
  if (!text) return null;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-[var(--border-strong)] bg-[var(--bg-overlay)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-secondary)]",
        className,
      )}
    >
      <span className="h-2 w-2 rounded-full bg-[var(--brand-secondary)]" />
      {text}
    </span>
  );
}

export default Badge;

