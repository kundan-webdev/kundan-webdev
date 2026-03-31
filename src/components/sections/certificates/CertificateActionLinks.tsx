import { BookOpenText, ExternalLink } from "lucide-react";

import type { Certificate } from "@/data/certificates";
import { cn } from "@/lib/utils";

type ActionCertificate = Pick<Certificate, "credentialUrl">;

interface CertificateActionLinksProps {
  certificate: ActionCertificate;
  learnHref?: string;
  direction?: "row" | "column";
}

const baseClasses =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors";

function ActionItem({
  href,
  label,
  icon,
  active,
  emphasis = false,
  external = false,
}: {
  href?: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
  emphasis?: boolean;
  external?: boolean;
}) {
  const classes = cn(
    baseClasses,
    emphasis
      ? active
        ? "border-transparent bg-primary text-white hover:opacity-90"
        : "border-[var(--border-default)] bg-[var(--bg-elevated)] text-[var(--text-faint)] opacity-70"
      : active
        ? "border-[var(--border-default)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
        : "border-[var(--border-default)] text-[var(--text-faint)] opacity-70",
  );

  if (href && active) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {label} {icon}
      </a>
    );
  }

  return (
    <span aria-disabled="true" className={classes}>
      {label} {icon}
    </span>
  );
}

export default function CertificateActionLinks({
  certificate,
  learnHref = "#what-i-learned",
  direction = "row",
}: CertificateActionLinksProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2",
        direction === "column" && "flex-col items-stretch",
      )}
    >
      <ActionItem
        href={learnHref}
        label="What I Learned"
        icon={<BookOpenText size={14} />}
        active
        emphasis
      />
      <ActionItem
        href={certificate.credentialUrl}
        label="Verify"
        icon={<ExternalLink size={14} />}
        active={Boolean(certificate.credentialUrl)}
        external
      />
    </div>
  );
}
