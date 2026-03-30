"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const reels = [
  { title: "Building DevXClub v2 - Week 1" },
  { title: "My MERN Stack Journey" },
  { title: "From BCA Student to Founder" },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const BuildInPublic = () => {
  return (
    <section id="building" className="py-16 md:py-24">
      <motion.div
        className="mx-auto max-w-[1136px] px-4 sm:px-6 lg:px-0"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div variants={item} className="mb-12">
          <span className="mb-4 block text-sm font-medium text-[var(--text-muted)]">
            <span className="text-[var(--brand-primary)]">.</span>building in public
          </span>
          <h2 className="text-2xl font-bold text-[var(--text-primary)] sm:text-3xl md:text-4xl">
            Building in Public
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            I document the messy middle as much as the polished end result — projects, learnings, setbacks, and what shipping actually feels like.
          </p>
        </motion.div>

        <motion.div variants={container} className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
          {reels.map((reel) => (
            <motion.div key={reel.title} variants={item}>
              <Link
                href="https://instagram.com/kundan_webdev"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex aspect-square items-center justify-center rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 text-center transition-all hover:border-[var(--border-strong)]"
              >
                <div>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg-elevated)] text-[var(--brand-primary)]">
                    <ArrowUpRight size={18} />
                  </div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">{reel.title}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={item}>
          <Link
            href="https://instagram.com/kundan_webdev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white"
          >
            Follow @kundan_webdev <ArrowUpRight size={14} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BuildInPublic;

