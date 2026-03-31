"use client";

import { motion, type Variants } from "framer-motion";

import { Avatar } from "@/components/atoms";
import { AvailabilityBadge, CTAGroup } from "@/components/molecules";
import { TypingAnimation } from "@/components/ui/TypingAnimation";

const titles = [
  "full-stack products",
  "scalable systems",
  "pixel-perfect UIs",
  "things that ship",
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const avatarSpring: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 180, damping: 14 },
  },
};

export default function HeroContent() {
  return (
    <motion.div
      className="mx-auto max-w-[1136px] px-4 py-12 sm:px-6 md:py-20 lg:px-0"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="mb-8 md:mb-10">
        <AvailabilityBadge />
      </motion.div>

      <motion.div variants={item} className="max-w-full">
        <div className="flex flex-wrap items-center gap-2.5 text-[clamp(2rem,5.4vw,5.4rem)] font-bold leading-[0.98] tracking-[-0.05em] text-[var(--text-primary)] md:gap-4">
          <span>Hey, I&apos;m</span>
          <motion.span variants={avatarSpring} className="inline-block">
            <Avatar
              width={104}
              height={62}
              className="md:h-[74px] md:w-[128px]"
              priority
            />
          </motion.span>
          <span>Kundan</span>
        </div>

        <div className="mt-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1.5 text-[clamp(2rem,5.4vw,5.4rem)] font-bold leading-[1.02] tracking-[-0.05em] md:mt-2 md:gap-x-4">
          <span className="text-[var(--text-muted)]">I build</span>
          <TypingAnimation
            words={titles}
            loop
            typeSpeed={60}
            deleteSpeed={35}
            pauseDelay={1800}
            delay={800}
            startOnView={false}
            cursorStyle="line"
            className="min-h-[1.1em] bg-[linear-gradient(-145deg,#FF923C_0%,#E66123_40%,#FB3800_100%)] bg-clip-text font-bold text-transparent"
          />
        </div>
      </motion.div>

      <motion.div variants={item} className="mt-8 lg:mt-10">
        <div className="max-w-[640px]">
          <p className="text-sm font-medium tracking-[0.02em] text-[var(--text-muted)] md:text-base">
            Full-Stack Developer · MERN · Next.js · TypeScript
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            I turn ideas into production-ready products — from database schema
            to pixel-perfect UI. Currently building{" "}
            <span className="text-[var(--brand-secondary)]">DevXClub</span>,
            a developer community for 1000+ Indian CS students.
          </p>
          <p className="mt-4 text-sm text-[var(--text-faint)] md:text-base">
            India-based · Open to remote &amp; hybrid roles
          </p>
        </div>
      </motion.div>

      <motion.div variants={item} className="mt-8 md:mt-10">
        <CTAGroup />
      </motion.div>
    </motion.div>
  );
}
