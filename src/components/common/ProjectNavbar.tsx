"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function ProjectNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--nav-bg)] backdrop-blur-md">
      <div className="relative">
        <div className="mx-auto flex h-16 w-full max-w-[1136px] items-center justify-between px-4 sm:px-6 lg:px-0">
          <Link href="/" className="text-sm font-semibold text-[var(--text-primary)]">
            <span className="text-[var(--brand-primary)]">.</span>kundan
          </Link>

          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="sm"
              className="min-h-[44px] rounded-full border-[var(--border-strong)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              Resume <ArrowUpRight size={11} />
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px">
          <motion.div
            className="absolute inset-0 bg-[var(--nav-border)]"
            animate={{ opacity: scrolled ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />

          <AnimatePresence>
            {scrolled && (
              <motion.div
                className="absolute inset-0 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-white/[0.05]" />
                <motion.div
                  className="absolute bottom-0 left-0 top-0 origin-left"
                  style={{
                    scaleX,
                    right: 0,
                    background: "var(--gradient-brand)",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
