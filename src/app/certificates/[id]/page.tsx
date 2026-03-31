import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import CertificateActionLinks from "@/components/sections/certificates/CertificateActionLinks";
import CertificateNavigation from "@/components/sections/certificates/CertificateNavigation";
import { certificates } from "@/data/certificates";

const disableImageOptimization = process.env.NODE_ENV === "development";

interface CertificatePageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return certificates.map((certificate) => ({ id: certificate.id }));
}

export async function generateMetadata({ params }: CertificatePageProps) {
  const { id } = await params;
  const certificate = certificates.find((entry) => entry.id === id);

  if (!certificate) return {};

  return {
    title: `${certificate.title} - Kundan`,
    description: certificate.summary,
  };
}

export default async function CertificatePage({ params }: CertificatePageProps) {
  const { id } = await params;
  const certificateIndex = certificates.findIndex((entry) => entry.id === id);
  const certificate = certificateIndex >= 0 ? certificates[certificateIndex] : undefined;

  if (!certificate) notFound();

  const previousCertificate =
    certificateIndex > 0 ? certificates[certificateIndex - 1] : null;
  const nextCertificate =
    certificateIndex < certificates.length - 1 ? certificates[certificateIndex + 1] : null;

  return (
    <main className="min-h-screen bg-[var(--bg-base)]">
      <div className="mx-auto max-w-[1136px] px-4 pb-4 pt-24 sm:px-6 lg:px-0">
        <Link
          href="/#certificates"
          className="group inline-flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          Back to certificates
        </Link>
      </div>

      <div className="mx-auto mb-10 max-w-[1136px] px-4 sm:px-6 lg:px-0">
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-default)]">
          {certificate.image ? (
            <Image
              src={certificate.image}
              alt={certificate.title}
              width={1600}
              height={1000}
              priority
              unoptimized={disableImageOptimization}
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) calc(100vw - 3rem), 1136px"
              quality={70}
              className="h-auto w-full"
            />
          ) : (
            <div className="flex min-h-[320px] items-center justify-center bg-[var(--bg-elevated)] text-[var(--text-faint)]">
              Certificate
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto grid max-w-[1136px] grid-cols-1 gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-[1fr_300px] lg:px-0">
        <div>
          <div className="mb-6">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand-primary)]">
              {certificate.issuer}
            </span>
            <h1 className="mt-1 text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
              {certificate.title}
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              {certificate.summary}
            </p>
          </div>

          <div id="what-i-learned" className="scroll-mt-28">
            <h2 className="mb-4 text-base font-semibold text-[var(--text-primary)]">
              What I Learned
            </h2>
            <ul className="space-y-3">
              {certificate.learned.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[var(--text-secondary)]"
                >
                  <span className="mt-0.5 text-[var(--brand-primary)]">&rarr;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-6">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Skills covered
            </p>
            <div className="flex flex-wrap gap-2">
              {certificate.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[var(--border-default)] bg-[var(--bg-elevated)] px-3 py-1 text-xs text-[var(--text-secondary)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Issued
            </p>
            <p className="text-sm text-[var(--text-secondary)]">{certificate.issuedDate}</p>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Certificate actions
            </p>
            <CertificateActionLinks certificate={certificate} direction="column" />
          </div>
        </aside>
      </div>

      <div className="mx-auto max-w-[1136px] px-4 pb-24 sm:px-6 lg:px-0">
        <CertificateNavigation
          previousCertificate={previousCertificate}
          nextCertificate={nextCertificate}
        />
      </div>
    </main>
  );
}
