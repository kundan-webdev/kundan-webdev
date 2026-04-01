"use client";

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

interface CTAItem {
  href: string;
  label: string;
  ariaLabel: string;
  variant?: "default" | "outline";
  external?: boolean;
  accentClassName: string;
  icon?: React.ReactNode;
  magnetic?: boolean; // 👈 control interaction
}

export function CTAGroup({
  projectsHref = "#projects",
  contactHref = "#contact",
  resumeHref = "/resume.pdf",
  className,
}: CTAGroupProps) {
  const items: CTAItem[] = [
    {
      href: projectsHref,
      label: "View Work",
      ariaLabel: "View my projects",
      variant: "default",
      magnetic: true, // ✅ ONLY primary CTA gets magnetic
      accentClassName:
        "bg-white text-black shadow-[0_14px_40px_rgba(255,255,255,0.16)] hover:bg-white/90",
    },
    {
      href: contactHref,
      label: "Contact Me",
      ariaLabel: "Contact me",
      variant: "outline",
      accentClassName:
        "border-orange-500/30 bg-transparent text-orange-400 hover:border-orange-500/60 hover:bg-orange-500/5",
    },
    {
      href: resumeHref,
      label: "Resume",
      ariaLabel: "Open resume",
      variant: "outline",
      external: true,
      accentClassName:
        "border-[var(--border-default)] bg-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]",
      icon: (
        <ArrowUpRight
          size={13}
          className="transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
        />
      ),
    },
  ];

  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center",
        className
      )}
    >
      {items.map((item) => (
        <Button
          key={item.label}
          magnetic={item.magnetic} // ✅ controlled usage
          render={
            <Link
              href={item.href}
              aria-label={item.ariaLabel}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            />
          }
          nativeButton={false}
          variant={item.variant}
          className={cn(
            "group/cta min-h-12 w-full justify-center rounded-full px-6 py-3 text-sm font-semibold sm:w-auto sm:min-w-[148px]",
            item.accentClassName
          )}
        >
          <span>{item.label}</span>
          {item.icon ?? null}
        </Button>
      ))}
    </div>
  );
}

export default CTAGroup;