"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { SocialLinks } from "@/components/molecules";
import { Button } from "@/components/ui/button";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const Footer = () => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const update = () => {
      setLocalTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        }),
      );
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="border-t border-[var(--border-default)]">
      <motion.div
        className="container-content"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div
          variants={item}
          className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="mb-6 block text-sm font-medium text-[var(--text-muted)]">
              <span className="text-[var(--brand-primary)]">.</span>say hello
            </span>
            <h2 className="max-w-xl text-4xl font-bold leading-none text-[var(--text-primary)] sm:text-5xl md:text-6xl">
              Open to Frontend
              <br />
              / Full-Stack Roles
            </h2>
          </div>

          <div className="flex max-w-sm flex-col gap-4 md:items-end">
            <p className="text-sm leading-relaxed text-[var(--text-secondary)] md:text-right">
              React · Next.js · TypeScript · Building scalable web apps
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="min-h-[44px] rounded px-5 py-2.5 text-sm font-semibold">
                  View Resume <ArrowUpRight size={13} />
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/kundan-webdev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="min-h-[44px] rounded border-[var(--border-default)] px-5 py-2.5 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  LinkedIn <ArrowUpRight size={13} />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col gap-6 border-t border-[var(--border-default)] pt-8 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="mb-1 text-[11px] uppercase tracking-[0.24em] text-[var(--text-faint)]">
              Local Time · Varanasi, India
            </p>
            <p className="font-mono text-sm font-medium text-[var(--text-secondary)]">
              {localTime} IST
            </p>
          </div>
          <SocialLinks iconOnly include={["github", "linkedin", "instagram", "twitter"]} />
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;

