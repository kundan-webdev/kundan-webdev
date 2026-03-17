"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";

/* ------------------ WORD ------------------ */
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
    <motion.span
      style={{ opacity, y }}
      className="inline-block mr-[0.28em] will-change-transform"
    >
      {word}
    </motion.span>
  );
};

/* ------------------ PARAGRAPH ------------------ */
const RevealParagraph = ({
  text,
  index,
}: {
  text: string;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.2"], // FIXED
  });

  return (
    <div
      ref={ref}
      className="py-14 md:py-20 border-b border-white/[0.05] last:border-0"
    >
      {/* index */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-[11px] text-orange-500/40 font-mono mb-5 block tracking-[0.2em]"
      >
        {String(index + 1).padStart(2, "0")}
      </motion.span>

      {/* text */}
      <p className="flex flex-wrap gap-y-1 text-[1.2rem] md:text-[1.45rem] font-medium text-white leading-[1.7] tracking-[-0.01em]">
        {words.map((word, i) => {
          const band = 1 / words.length; // FIXED
          const wordStart = i * band;
          const wordEnd = wordStart + band * 1.3;

          return (
            <RevealWord
              key={`${word}-${i}`} // FIXED
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

/* ------------------ STAT ------------------ */
const StatCard = ({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <p className="text-4xl md:text-5xl font-black text-white tracking-[-0.04em] leading-none mb-1.5">
      {value}
    </p>
    <p className="text-white/25 text-[11px] font-medium uppercase tracking-widest">
      {label}
    </p>
  </motion.div>
);

/* ------------------ DATA ------------------ */
const paragraphs = [
  "I'm a final-year BCA student from Varanasi who got obsessed with building things for the web. What started with HTML and CSS turned into a full-stack rabbit hole — React, Next.js, Node.js, MongoDB, Figma, you name it. I learn by shipping.",
  "I founded DevXClub — a developer community platform, built for coders by coders. Currently in v2: a full-stack monorepo with auth, AI code review, resources, roadmaps, and a jobs board. I built it with a co-founder and lead all frontend + architecture decisions.",
  "Alongside DevXClub, I'm doing a MERN stack internship at Solvimate, leading frontend development. I also take Figma UI/UX work for clients. I document everything publicly — projects, failures, wins — on Instagram as @kundan_webdev. Currently open to full-stack internships and junior roles.",
];

const stats = [
  { value: "2+", label: "Years Coding" },
  { value: "10+", label: "Projects Shipped" },
  { value: "1", label: "Product Founded" },
  { value: "145", label: "GitHub Contributions" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/kundan-webdev" },
  { label: "LinkedIn", href: "https://linkedin.com/in/kundan-webdev" },
  { label: "Instagram", href: "https://instagram.com/kundan_webdev" },
  { label: "DevXClub", href: "https://devxclub.com" },
];

/* ------------------ MAIN ------------------ */
const About = () => {
  return (
    <section id="about" className="relative">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-24">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-24 pb-16"
        >
          <span className="text-sm text-white/40 font-medium mb-5 block">
            <span className="text-orange-500 font-bold">.</span>about
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-[-0.04em] leading-[1.0]">
            Who I Am
          </h2>
        </motion.div>

        {/* LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-28 pb-24 items-start">
          
          {/* LEFT */}
          <div className="flex-1 min-w-0">
            {paragraphs.map((text, i) => (
              <RevealParagraph key={i} text={text} index={i} />
            ))}
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="lg:w-[260px] w-full shrink-0 lg:sticky lg:top-28 self-start">
            <div className="space-y-10">

              {/* STATS */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                {stats.map((s, i) => (
                  <StatCard
                    key={i}
                    value={s.value}
                    label={s.label}
                    delay={i * 0.08}
                  />
                ))}
              </div>

              <div className="h-px bg-white/[0.06]" />

              {/* SOCIALS */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-4">
                  Find me on
                </p>

                <div className="space-y-2">
                  {socials.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-1.5 text-sm text-white/40 hover:text-white transition-colors group"
                    >
                      <span>{label}</span>
                      <span className="text-white/15 group-hover:text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-xs">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </motion.div>

              <div className="h-px bg-white/[0.06]" />

              {/* AVAILABILITY */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
                <span className="text-xs text-white/30">
                  Available for new opportunities
                </span>
              </motion.div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;