"use client";

import {
  Globe,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

import { socials, type SocialPlatform } from "@/data/socials";
import { cn } from "@/lib/utils";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  devxclub: Globe,
  email: Mail,
};

interface SocialLinksProps {
  className?: string;
  iconOnly?: boolean;
  include?: SocialPlatform[];
}

export function SocialLinks({
  className,
  iconOnly = false,
  include,
}: SocialLinksProps) {
  const items = include
    ? socials.filter((social) => include.includes(social.id))
    : socials.filter((social) => social.id !== "email");

  return (
    <div
      className={cn(
        iconOnly ? "flex items-center gap-3" : "flex flex-wrap items-center gap-4",
        className,
      )}
    >
      {items.map((social) => {
        const Icon = iconMap[social.id];

        return (
          <a
            key={social.id}
            href={social.url}
            target={social.url.startsWith("mailto:") ? undefined : "_blank"}
            rel={social.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            aria-label={social.label}
            className={cn(
              iconOnly
                ? "flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[var(--border-default)] text-[var(--text-muted)] transition-all hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                : "inline-flex min-h-[44px] items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]",
            )}
          >
            <Icon size={iconOnly ? 16 : 15} />
            {!iconOnly && <span>{social.label}</span>}
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;

