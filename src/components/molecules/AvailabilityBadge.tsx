"use client";

import { AnimatedShinyText } from "@/components/ui/AnimatedShinyText";
import { cn } from "@/lib/utils";

interface AvailabilityBadgeProps {
  label?: string;
  className?: string;
}

export function AvailabilityBadge({
  label = "Open to Software Developer roles",
  className,
}: AvailabilityBadgeProps) {
  return (
    <div
      className={cn(
        "w-fit rounded-full border border-[var(--border-default)] bg-[var(--bg-overlay)] transition-all hover:border-[var(--border-strong)] hover:bg-[var(--bg-elevated)]/80",
        className,
      )}
    >
      <AnimatedShinyText className="inline-flex items-center px-3 py-1 text-xs font-medium text-[var(--text-secondary)]">
        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
        {label}
      </AnimatedShinyText>
    </div>
  );
}

export default AvailabilityBadge;

