"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
  type Variants,
} from "framer-motion";

import { SocialLinks } from "@/components/molecules";

const paragraphs = [
  "I'm a final-year BCA student from Varanasi who got obsessed with building things for the web. What started with HTML and CSS turned into a full-stack rabbit hole — React, Next.js, Node.js, MongoDB, Figma, and shipping real interfaces that feel intentional.",
  "I founded DevXClub, a developer community platform built for coders by coders. The current version is a full-stack product with auth, resources, roadmap ideas, jobs, and a stronger product direction shaped by what student developers actually need.",
  "Alongside DevXClub, I'm doing a MERN stack internship at Solvimate and continuing client-facing UI/UX work. I learn best by making things real, documenting the process, and improving the next build with what the last one taught me.",
];

const stats = [
  { value: "2+", label: "Years Coding" },
  { value: "10+", label: "Projects Shipped" },
  { value: "1", label: "Product Founded" },
  { value: "145", label: "GitHub Contributions" },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const RevealWord = ({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) => {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const y = useTransform(progress, [start, end], [8, 0]);

  return (
    <motion.span style={{ opacity, y }} className="mr-[0.28em] inline-block will-change-transform">
      {word}
    </motion.span>
  );
};

const RevealParagraph = ({ text, index }: { text: string; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const words = text.split(" ");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.2"],
  });

  return (
    <div ref={ref} className="border-b border-[var(--border-default)] py-10 last:border-0 md:py-14">
      <span className="mb-4 block text-[11px] font-mono tracking-[0.24em] text-[var(--brand-primary)]/60">
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className="flex flex-wrap gap-y-1 text-lg font-medium leading-[1.7] text-[var(--text-primary)] md:text-[1.35rem]">
        {words.map((word, wordIndex) => {
          const band = 1 / words.length;
          const wordStart = wordIndex * band;
          const wordEnd = wordStart + band * 1.3;
          return (
            <RevealWord
              key={`${word}-${wordIndex}`}
              word={word}
              progress={scrollYProgress}
              start={Math.min(wordStart, 0.9)}
              end={Math.min(wordEnd, 1)}
            />
          );
        })}
      </p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <motion.div
        className="mx-auto max-w-[1136px] px-4 sm:px-6 lg:px-0"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div variants={itemVariants} className="mb-12">
          <span className="mb-4 block text-sm font-medium text-[var(--text-muted)]">
            <span className="text-[var(--brand-primary)]">.</span>about
          </span>
          <h2 className="text-2xl font-bold text-[var(--text-primary)] sm:text-3xl md:text-4xl">
            Who I Am
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          <div className="min-w-0 flex-1">
            {paragraphs.map((text, index) => (
              <RevealParagraph key={index} text={text} index={index} />
            ))}
          </div>

          <motion.aside variants={itemVariants} className="w-full shrink-0 lg:w-[280px] lg:sticky lg:top-28">
            <div className="space-y-8 rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 sm:p-6">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-[var(--text-primary)]">{stat.value}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[var(--text-faint)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-[var(--border-default)] pt-6">
                <p className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[var(--text-faint)]">
                  Find me on
                </p>
                <SocialLinks className="flex-col items-start gap-3" include={["github", "linkedin", "instagram", "devxclub"]} />
              </div>
              <div className="border-t border-[var(--border-default)] pt-6 text-sm text-[var(--text-secondary)]">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                Available for new opportunities
              </div>
            </div>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

