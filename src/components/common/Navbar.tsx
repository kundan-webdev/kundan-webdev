"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";

import { useActiveSection } from "@/hooks/useActiveSection";
import { Button } from "@/components/ui/button";
import { AnimatedThemeToggler } from "@/components/ui/AnimatedThemeToggler";

const navLinks = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
];
const navSectionIds = navLinks.map((link) => link.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(navSectionIds);
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

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[var(--nav-bg)] backdrop-blur-md"
            : "bg-transparent"
        } relative`}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1136px] items-center justify-between px-4 sm:px-6 lg:px-0">
          <Link href="/" className="text-sm font-semibold text-[var(--text-primary)]">
            <span className="text-[var(--brand-primary)]">.</span>kundan
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "text-[var(--brand-primary)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <AnimatedThemeToggler />
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

          <div className="flex items-center gap-2 md:hidden">
            <AnimatedThemeToggler />
            <button
              onClick={() => setOpen((current) => !current)}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--bg-overlay)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
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
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col bg-[var(--bg-base)] px-6 pt-20"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "location" : undefined}
                    className={`border-b border-[var(--border-default)] py-3 text-2xl font-semibold transition-colors ${
                      isActive
                        ? "text-[var(--brand-primary)]"
                        : "text-[var(--text-primary)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8"
              onClick={() => setOpen(false)}
            >
              <Button className="w-full rounded-full bg-primary text-white">
                Download Resume <ArrowUpRight size={14} />
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

