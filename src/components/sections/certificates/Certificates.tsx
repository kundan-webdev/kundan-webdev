"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Marquee } from "@/components/ui/Marquee";
import { certificates } from "@/data/certificates";

const disableImageOptimization = process.env.NODE_ENV === "development";

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

const marqueeRows = [certificates, [...certificates].reverse()];

const imageCardClassName =
  "group relative block w-[280px] shrink-0 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] transition-all duration-300 hover:border-[var(--border-strong)] sm:w-[320px] lg:w-[360px]";

const Certificates = () => {
  const [isPaused, setIsPaused] = useState(false);

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
            A rolling wall of certificates, courses, and learning milestones that
            shaped how I build products today.
          </p>
        </motion.div>

        <motion.div variants={item} className="space-y-4">
          {marqueeRows.map((row, rowIndex) => (
            <Marquee
              key={rowIndex}
              reverse={rowIndex === 0}
              repeat={3}
              className={`py-1 [--gap:1rem] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${
                rowIndex === 0 ? "[--duration:26s]" : "[--duration:34s]"
              } ${isPaused ? "[&>div]:[animation-play-state:paused]" : ""}`}
            >
              {row.map((certificate) => (
                <Link
                  key={`${rowIndex}-${certificate.id}`}
                  href={`/certificates/${certificate.id}`}
                  aria-label={`Open ${certificate.title} certificate`}
                  className={imageCardClassName}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  onFocus={() => setIsPaused(true)}
                  onBlur={() => setIsPaused(false)}
                >
                  {certificate.image ? (
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      width={1400}
                      height={1000}
                      unoptimized={disableImageOptimization}
                      sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
                      quality={70}
                      className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex min-h-[220px] items-center justify-center bg-[var(--bg-elevated)] text-[var(--text-faint)]">
                      Certificate
                    </div>
                  )}
                </Link>
              ))}
            </Marquee>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Certificates;
