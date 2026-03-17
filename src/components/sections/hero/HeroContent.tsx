"use client";
import { TypingAnimation } from "@/components/ui/TypingAnimation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Avatar from "@/components/micro/Avatar";
import { AnimatedShinyText } from "@/components/ui/AnimatedShinyText";


const titles = [
  "no-code websites",
  "full-stack products",
  "software interfaces",
  "developer tools",
  "UI/UX systems",
];

const HeroContent = () => {
  return (
    <motion.div
      className="max-w-[1136px] pt-16 pb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* ── Dot label + availability ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="flex items-center gap-3 mb-10"
      >
        {/* <span className="text-sm text-white/40 font-medium tracking-wide">
          <span className="text-orange-500 font-bold">.</span>kundan
        </span>
        <span className="w-px h-3 bg-white/10" /> */}
        <div className="rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all">
          <AnimatedShinyText className="inline-flex items-center px-3 py-1 text-xs font-medium text-white/50">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 animate-pulse" />
            available for new projects
          </AnimatedShinyText>
        </div>
      </motion.div>

      {/* ── Main headline ── */}
      <div className="mb-8">
        {/* Line 1 — Hey I'm + Avatar + Kundan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[clamp(2.8rem,7vw,6rem)] font-bold text-white leading-[1.05] tracking-[-0.04em] flex flex-wrap items-center gap-3"
        >
          <span>Hey, I'm</span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, type: "spring", stiffness: 180, damping: 14 }}
            className="inline-block"
          >
            <Avatar width={110} height={65} />
          </motion.span>
          <span>Kundan</span>
        </motion.div>

        {/* Line 2 — "I build" + TypingAnimation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[clamp(2.4rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.04em] mt-1 flex flex-wrap items-baseline gap-3"
        >
          <span className="text-white/30">I build</span>
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
      </div>

      {/* ── Sub info row ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.5 }}
        className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-10 text-sm text-white/40"
      >
        <span className="flex items-center gap-1.5">
          <span className="text-orange-500">→</span>
          Founder, DevXClub
        </span>
        <span className="w-px h-3 bg-white/10 hidden sm:block" />
        <span className="flex items-center gap-1.5">
          <span className="text-orange-500">→</span>
          Frontend Intern, Solvimate
        </span>
        <span className="w-px h-3 bg-white/10 hidden sm:block" />
        <span className="flex items-center gap-1.5">
          <span className="text-orange-500">→</span>
          Final-year BCA, Varanasi
        </span>
      </motion.div>

      {/* ── CTAs ── */}
      <motion.div
        className="flex flex-wrap gap-3"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <a href="#projects">
          <Button className="px-7 py-5 rounded-full text-sm font-semibold bg-white text-black hover:bg-white/90 transition-all">
            View Work
          </Button>
        </a>
        <a href="/kundan-resume-mar2026.pdf" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="px-7 py-5 rounded-full text-sm font-semibold bg-transparent border-white/15 text-white/70 hover:bg-white/5 hover:text-white transition-all"
          >
            Resume ↗
          </Button>
        </a>
        <a href="#contact">
          <Button
            variant="outline"
            className="px-7 py-5 rounded-full text-sm font-semibold bg-transparent border-orange-500/30 text-orange-400 hover:bg-orange-500/5 hover:border-orange-500/60 transition-all"
          >
            Hire Me
          </Button>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;