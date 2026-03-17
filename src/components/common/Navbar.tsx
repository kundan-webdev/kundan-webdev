"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { label: "work", href: "#projects" },
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
];

const allLinks = [
  { label: "home", href: "#" },
  { label: "work", href: "#projects" },
  { label: "backend", href: "#projects", filter: "backend" },
  { label: "design", href: "#projects", filter: "design" },
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (window.scrollY > 40) setMobileOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openPalette = () =>
    window.dispatchEvent(new CustomEvent("openCommandPalette"));

  const handleFilterLink = (filter?: string) => {
    if (filter) {
      window.dispatchEvent(
        new CustomEvent("setProjectFilter", { detail: { filter } }),
      );
    }
    setMobileOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] w-full">
        <motion.div
          initial={false}
          animate={
            scrolled
              ? {
                  backgroundColor: "rgba(8,8,8,0.95)",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                }
              : {
                  backgroundColor: "rgba(8,8,8,0)",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }
          }
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
            WebkitBackdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
          }}
          className="w-full relative"
        >
          {/* ── Nav content ── */}
          <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-24 flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="font-black tracking-tight text-white text-lg hover:text-white/70 transition-colors"
            >
              .kundan
            </a>

            {/* Desktop Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13px] font-medium text-white/50 hover:text-white px-4 py-2 rounded-full hover:bg-white/[0.05] transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: ⌘K + Hire Me */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={openPalette}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/[0.08] hover:border-orange-500/40 text-white/25 hover:text-orange-500 text-[11px] font-mono transition-all duration-200"
                title="Command palette (⌘K)"
              >
                <Search size={10} />
                <span>⌘K</span>
              </button>
              <a
                href="#contact"
                className="px-5 py-2 rounded-full bg-white text-black text-[13px] font-semibold hover:bg-white/90 transition-all duration-200"
              >
                hire me
              </a>
            </div>

            {/* Mobile burger */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-white/[0.08] text-white/60 hover:text-white hover:border-white/20 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>

          {/* ── Border bottom / Progress bar ──
              When not scrolled: subtle static border
              When scrolled: progress bar replaces border
          ── */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px]">
            {/* Static border — visible only when NOT scrolled */}
            <motion.div
              className="absolute inset-0 bg-white/[0]"
              animate={{ opacity: scrolled ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />

            {/* Progress bar — visible only when scrolled */}
            <AnimatePresence>
              {scrolled && (
                <motion.div
                  className="absolute inset-0 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Track */}
                  <div className="absolute inset-0 bg-white/[0.05]" />
                  {/* Fill */}
                  <motion.div
                    className="absolute top-0 left-0 bottom-0 origin-left"
                    style={{
                      scaleX,
                      right: 0,
                      background:
                        "linear-gradient(90deg, #000000 0%, #C10801 40%, #F16001 85%, #D9C3AB 100%)",
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mx-4 mt-2 rounded-2xl overflow-hidden"
              style={{
                backgroundColor: "rgba(12,12,12,0.98)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
              }}
            >
              <div className="p-3 grid grid-cols-2 gap-1">
                {allLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => handleFilterLink(link.filter)}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-white/50 hover:text-white hover:bg-white/[0.05] transition-colors"
                  >
                    {link.label}
                    {link.filter && (
                      <span className="text-[10px] text-orange-500 font-bold ml-auto">
                        {link.filter}
                      </span>
                    )}
                  </a>
                ))}
              </div>
              <div className="border-t border-white/[0.05] px-3 py-2">
                <button
                  onClick={() => {
                    openPalette();
                    setMobileOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white/30 hover:text-orange-500 hover:bg-orange-500/5 transition-colors"
                >
                  <Search size={13} />
                  <span>command palette</span>
                  <kbd className="ml-auto text-[10px] border border-white/[0.08] rounded px-1.5 py-0.5 font-mono">
                    ⌘K
                  </kbd>
                </button>
              </div>
              <div className="px-3 pb-3">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors"
                >
                  hire me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
