"use client";

import { motion, type Variants } from "framer-motion";

import { Avatar } from "@/components/atoms";
import { AvailabilityBadge, CTAGroup, SubInfoRow } from "@/components/molecules";
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
      className="mx-auto max-w-[1136px] px-4 pb-16 pt-24 sm:px-6 md:pb-24 md:pt-32 lg:px-0"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="mb-8 md:mb-10">
        <AvailabilityBadge />
      </motion.div>

      <div className="mb-6 md:mb-8">
        <motion.div
          variants={item}
          className="flex flex-wrap items-center gap-2 text-[clamp(2.4rem,7vw,6rem)] font-bold leading-[1.05] tracking-[-0.04em] text-[var(--text-primary)] md:gap-3"
        >
          <span>Hey, I&apos;m</span>
          <motion.span variants={avatarSpring} className="inline-block">
            <Avatar
              width={90}
              height={55}
              className="md:h-[65px] md:w-[110px]"
              priority
            />
          </motion.span>
          <span>Kundan</span>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-1 flex flex-wrap items-baseline gap-2 text-[clamp(1.8rem,5vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.04em] md:gap-3"
        >
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
            className="bg-clip-text text-transparent bg-[linear-gradient(-145deg,#FF923C_0%,#E66123_40%,#FB3800_100%)] font-bold"
          />
        </motion.div>

        <motion.div variants={item} className="mt-4 md:mt-5">
          <p className="text-sm font-medium tracking-wide text-[var(--text-muted)] md:text-base">
            Full-Stack Developer · MERN · Next.js · TypeScript
          </p>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--text-secondary)] md:text-[1.05rem]">
            I turn ideas into production-ready products — from database schema
            to pixel-perfect UI. Currently building{" "}
            <span className="text-[var(--brand-secondary)]">DevXClub</span>,
            a developer community for 1000+ Indian CS students.
          </p>
          <p className="mt-2 text-xs text-[var(--text-faint)] md:mt-3 md:text-sm">
            India-based · Open to remote &amp; hybrid roles
          </p>
        </motion.div>
      </div>

      <motion.div variants={item} className="mb-8 md:mb-10">
        <SubInfoRow />
      </motion.div>

      <motion.div variants={item}>
        <CTAGroup />
      </motion.div>
    </motion.div>
  );
}

