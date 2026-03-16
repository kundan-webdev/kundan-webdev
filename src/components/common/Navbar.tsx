"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedThemeToggler } from "@/components/ui/AnimatedThemeToggler";
import { Menu, X, Search } from "lucide-react";

// Top navbar — only the 4 most important links
const topLinks = [
  { label: "Work",    href: "#projects" },
  { label: "About",   href: "#about"    },
  { label: "Skills",  href: "#skills"   },
  { label: "Contact", href: "#contact"  },
];

// Mobile menu — all links
const allLinks = [
  { label: "Home",    href: "#"         },
  { label: "Work",    href: "#projects" },
  { label: "Backend", href: "#projects", filter: "backend" },
  { label: "Design",  href: "#projects", filter: "design"  },
  { label: "About",   href: "#about"    },
  { label: "Skills",  href: "#skills"   },
  { label: "Contact", href: "#contact"  },
];

const ease = { duration: 0.4, ease: [0.22, 1, 0.36, 1] } as const;

const Navbar = () => {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      if (window.scrollY > 80) setMobileOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openPalette = () =>
    window.dispatchEvent(new CustomEvent("openCommandPalette"));

  const handleFilterLink = (filter?: string) => {
    if (filter) {
      window.dispatchEvent(
        new CustomEvent("setProjectFilter", { detail: { filter } })
      );
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed z-[100] left-0 right-0 mx-auto flex flex-col items-center pointer-events-none w-full transition-all duration-500 ${
        scrolled ? "bottom-6 top-auto" : "top-4 bottom-auto"
      }`}
    >
      <motion.nav
        initial={false}
        transition={ease}
        animate={
          scrolled
            ? {
                // Scrolled — compact bottom pill, no links
                width: "max-content",
                borderRadius: "50px",
                padding: "6px 8px",
                backgroundColor: "var(--nav-bg)",
                boxShadow: "var(--nav-shadow)",
                border: "1px solid var(--nav-border)",
              }
            : {
                // Top — full width bar with links
                width: "90%",
                maxWidth: "1280px",
                borderRadius: "20px",
                padding: "10px 12px 10px 22px",
                backgroundColor: "var(--nav-glass-bg)",
                boxShadow:
                  "0 7.5px 30px rgba(0,0,0,0.045), inset 0 1px 1px rgba(255,255,255,0.3)",
                border: "1px solid var(--nav-glass-border)",
              }
        }
        style={{
          backdropFilter: "blur(24px) brightness(1.04) contrast(1.07)",
          WebkitBackdropFilter: "blur(24px) brightness(1.04) contrast(1.07)",
          willChange: "width, border-radius, padding",
        }}
        className="pointer-events-auto flex items-center gap-2 relative overflow-hidden"
      >
        {/* Glow — top state only */}
        {!scrolled && (
          <div
            className="absolute inset-0 pointer-events-none rounded-[inherit]"
            style={{
              background:
                "linear-gradient(45deg,rgba(255,255,255,0.18) 0%,transparent 50%,rgba(0,0,0,0.08) 100%)",
              mixBlendMode: "overlay",
            }}
          />
        )}

        {/* ── Logo ── */}
        <motion.a
          href="#"
          transition={ease}
          animate={{ fontSize: scrolled ? "13px" : "18px" }}
          className="font-black tracking-tight text-black dark:text-white shrink-0 z-10"
        >
          {scrolled ? "KK" : "KUNDAN KUMAR"}
        </motion.a>

        {/* ── TOP STATE: nav links ── */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="hidden md:flex items-center gap-1 ml-2 z-10"
            >
              {topLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13px] font-medium text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/8 px-3.5 py-2 rounded-full transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Spacer — pushes right items to end on top state */}
        {!scrolled && <div className="flex-1" />}

        {/* ── RIGHT ITEMS ── */}
        <div className="flex items-center gap-1.5 z-10">

          {/* ⌘K — always visible on desktop */}
          <button
            onClick={openPalette}
            title="Command palette (⌘K)"
            className={`hidden md:flex items-center gap-1.5 rounded-lg border transition-all duration-200
              border-black/10 dark:border-white/10
              hover:border-orange-500/50 hover:text-orange-500
              text-black/40 dark:text-white/30
              ${scrolled ? "px-2.5 py-1.5 text-[11px]" : "px-2 py-1.5 text-[11px]"}
              font-mono`}
          >
            <Search size={10} />
            <span>⌘K</span>
          </button>

          {/* Theme toggle — always */}
          <AnimatedThemeToggler />

          {/* Hire Me — always */}
          <motion.a
            href="#contact"
            transition={ease}
            animate={{
              padding: scrolled ? "7px 14px" : "8px 20px",
              fontSize: scrolled ? "12px" : "13px",
            }}
            className="relative inline-flex items-center justify-center font-semibold rounded-full overflow-hidden whitespace-nowrap transition-all duration-200 hover:brightness-110"
          >
            <span
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(50% 100% at 50% 100%,rgba(190,190,190,0.28) 0%,rgba(190,190,190,0) 100%), var(--cta-bg, #F7F3EC)",
              }}
            />
            <span className="relative z-10 text-black dark:text-white">
              Hire Me
            </span>
          </motion.a>

          {/* Mobile burger — top state only */}
          {!scrolled && (
            <button
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          )}
        </div>
      </motion.nav>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {mobileOpen && !scrolled && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[72px] w-[90%] max-w-[1280px] pointer-events-auto z-[90] rounded-2xl overflow-hidden"
            style={{
              backgroundColor: "var(--nav-bg)",
              backdropFilter: "blur(24px)",
              border: "1px solid var(--nav-border)",
              boxShadow: "var(--nav-shadow)",
            }}
          >
            <div className="p-3 grid grid-cols-2 gap-1">
              {allLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleFilterLink(link.filter)}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/8 transition-colors"
                >
                  {link.label}
                  {link.filter && (
                    <span className="text-[10px] text-orange-500 font-semibold ml-auto">
                      {link.filter}
                    </span>
                  )}
                </a>
              ))}
            </div>

            {/* Mobile ⌘K row */}
            <div className="border-t border-black/5 dark:border-white/5 px-3 py-2">
              <button
                onClick={() => { openPalette(); setMobileOpen(false); }}
                className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-black/50 dark:text-white/40 hover:text-orange-500 hover:bg-orange-500/5 transition-colors"
              >
                <Search size={13} />
                <span>Search / Command Palette</span>
                <kbd className="ml-auto text-[10px] border border-black/10 dark:border-white/10 rounded px-1.5 font-mono">⌘K</kbd>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;