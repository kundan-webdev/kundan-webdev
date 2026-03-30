"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const container: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const FounderBanner = () => {
  return (
    <section className="py-16 md:py-24">
      <motion.div
        className="mx-auto max-w-[1136px] px-4 sm:px-6 lg:px-0"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-orange-500/20 bg-[color:rgba(15,10,3,0.92)] p-6 sm:p-8 md:p-10">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-orange-500/15 blur-[90px]" />
          <div className="relative z-10 max-w-3xl">
            <span className="mb-4 block text-sm font-medium text-orange-300/80">
              Founder note
            </span>
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              I didn&apos;t just learn to code — I built a community around it.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-orange-100/75 sm:text-base">
              DevXClub is the product and community I founded to help Indian CS students learn by building. I&apos;m currently pushing the next version forward with a stronger full-stack foundation, AI-assisted ideas, and a clearer product direction.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="https://devxclub.com" target="_blank" rel="noopener noreferrer">
                <Button className="min-h-[44px] rounded-full px-6 py-3 text-sm font-semibold">
                  Visit devxclub.com <ArrowUpRight size={14} />
                </Button>
              </Link>
              <Link href="#projects">
                <Button
                  variant="outline"
                  className="min-h-[44px] rounded-full border-white/15 px-6 py-3 text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-white"
                >
                  See project work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FounderBanner;

