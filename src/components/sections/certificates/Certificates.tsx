"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

import { certificates } from "@/data/certificates";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const cardClassName =
  "group block overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)]";

const Certificates = () => {
  return (
    <section id="certificates" className="py-16 md:py-24">
      <motion.div
        className="mx-auto max-w-[1136px] px-4 sm:px-6 lg:px-0"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div variants={item} className="mb-12">
          <span className="mb-4 block text-sm font-medium text-[var(--text-muted)]">
            <span className="text-[var(--brand-primary)]">.</span>certificates
          </span>
          <h2 className="text-2xl font-bold text-[var(--text-primary)] sm:text-3xl md:text-4xl">
            Certifications
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            Professional certifications that reinforce my fundamentals and the way I learn by shipping.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4"
        >
          {certificates.map((certificate) => (
            <motion.div key={certificate.id} variants={item}>
              {certificate.credentialUrl ? (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClassName}
                >
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-[var(--border-default)]">
                    {certificate.image ? (
                      <Image
                        src={certificate.image}
                        alt={certificate.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-[var(--bg-elevated)] text-[var(--text-faint)]">
                        Certificate
                      </div>
                    )}
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="text-sm font-semibold leading-snug text-[var(--text-primary)]">
                      {certificate.title}
                    </h3>
                    <p className="mt-2 text-xs text-[var(--brand-primary)]">{certificate.issuer}</p>
                    <p className="mt-1 text-[11px] text-[var(--text-faint)]">{certificate.issuedDate}</p>
                  </div>
                </a>
              ) : (
                <div className={cardClassName}>
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-[var(--border-default)]">
                    {certificate.image ? (
                      <Image
                        src={certificate.image}
                        alt={certificate.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-[var(--bg-elevated)] text-[var(--text-faint)]">
                        Certificate
                      </div>
                    )}
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="text-sm font-semibold leading-snug text-[var(--text-primary)]">
                      {certificate.title}
                    </h3>
                    <p className="mt-2 text-xs text-[var(--brand-primary)]">{certificate.issuer}</p>
                    <p className="mt-1 text-[11px] text-[var(--text-faint)]">{certificate.issuedDate}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Certificates;

