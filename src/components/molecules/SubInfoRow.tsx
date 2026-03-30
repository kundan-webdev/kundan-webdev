import { cn } from "@/lib/utils";

interface SubInfoItem {
  label: string;
}

interface SubInfoRowProps {
  items?: SubInfoItem[];
  className?: string;
}

const defaultItems: SubInfoItem[] = [
  { label: "Founder @ DevXClub" },
  { label: "Frontend Intern @ Solvimate" },
  { label: "BCA '25, Varanasi" },
];

export function SubInfoRow({
  items = defaultItems,
  className,
}: SubInfoRowProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--text-secondary)] md:gap-x-6",
        className,
      )}
    >
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-1.5">
          <span className="text-[var(--brand-primary)]">?</span>
          {item.label}
        </span>
      ))}
    </div>
  );
}

export default SubInfoRow;

