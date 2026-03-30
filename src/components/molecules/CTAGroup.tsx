import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAGroupProps {
  projectsHref?: string;
  contactHref?: string;
  resumeHref?: string;
  className?: string;
}

export function CTAGroup({
  projectsHref = "#projects",
  contactHref = "#contact",
  resumeHref = "/resume.pdf",
  className,
}: CTAGroupProps) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <Link href={projectsHref} aria-label="View my projects">
        <Button className="min-h-[44px] rounded-full bg-white px-7 py-5 text-sm font-semibold text-black hover:bg-white/90">
          View Work
        </Button>
      </Link>
      <Link href={contactHref} aria-label="Contact me">
        <Button
          variant="outline"
          className="min-h-[44px] rounded-full border-orange-500/30 bg-transparent px-7 py-5 text-sm font-semibold text-orange-400 hover:border-orange-500/60 hover:bg-orange-500/5"
        >
          Contact Me
        </Button>
      </Link>
      <Link
        href={resumeHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open resume"
      >
        <Button
          variant="outline"
          className="min-h-[44px] rounded-full border-[var(--border-default)] bg-transparent px-7 py-5 text-sm font-semibold text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
        >
          Resume <ArrowUpRight size={13} />
        </Button>
      </Link>
    </div>
  );
}

export default CTAGroup;

