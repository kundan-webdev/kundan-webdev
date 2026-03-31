import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

interface NavigationCertificate {
  id: string;
  title: string;
}

interface CertificateNavigationProps {
  previousCertificate: NavigationCertificate | null;
  nextCertificate: NavigationCertificate | null;
}

export default function CertificateNavigation({
  previousCertificate,
  nextCertificate,
}: CertificateNavigationProps) {
  if (!previousCertificate && !nextCertificate) return null;

  return (
    <div className="mt-12 border-t border-[var(--border-default)] pt-8">
      <div className="mx-auto flex max-w-[840px] flex-wrap justify-center gap-4">
        {previousCertificate ? (
          <Link
            href={`/certificates/${previousCertificate.id}`}
            className="group flex min-h-[104px] w-full max-w-sm flex-col items-center justify-center rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 text-center transition-colors hover:border-[var(--border-strong)]"
          >
            <span className="mb-2 inline-flex w-full items-center justify-center gap-2 text-center text-xs uppercase tracking-[0.2em] text-[var(--text-faint)]">
              <ArrowLeft size={12} />
              Previous
            </span>
            <p className="max-w-[18ch] text-center text-base font-semibold text-[var(--text-primary)]">
              {previousCertificate.title}
            </p>
          </Link>
        ) : null}

        {nextCertificate ? (
          <Link
            href={`/certificates/${nextCertificate.id}`}
            className="group flex min-h-[104px] w-full max-w-sm flex-col items-center justify-center rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 text-center transition-colors hover:border-[var(--border-strong)]"
          >
            <span className="mb-2 inline-flex w-full items-center justify-center gap-2 text-center text-xs uppercase tracking-[0.2em] text-[var(--text-faint)]">
              Next
              <ArrowRight size={12} />
            </span>
            <p className="max-w-[18ch] text-center text-base font-semibold text-[var(--text-primary)]">
              {nextCertificate.title}
            </p>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
