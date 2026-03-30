import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return (
    <div className={cn("w-full", className)}>
      <hr className="border-[var(--border-default)]" />
    </div>
  );
}

export default Divider;

