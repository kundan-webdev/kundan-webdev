"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, Briefcase, User, Wrench, Mail, FileText,
  Globe, Github, Instagram, Server, Search
} from "lucide-react";

// ── Commands ───────────────────────────────────────────────
const commands = [
  {
    group: "Navigate",
    items: [
      { icon: Home,      label: "Go Home",         action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
      { icon: Briefcase, label: "View Projects",    action: () => scrollTo("#projects") },
      { icon: User,      label: "About Me",         action: () => scrollTo("#about")    },
      { icon: Wrench,    label: "Skills",           action: () => scrollTo("#skills")   },
      { icon: Server,    label: "Backend Projects", action: () => { scrollTo("#projects"); window.dispatchEvent(new CustomEvent("setProjectFilter", { detail: { filter: "backend" } })) } },
      { icon: Mail,      label: "Contact",          action: () => scrollTo("#contact")  },
    ],
  },
  {
    group: "Open",
    items: [
      { icon: FileText, label: "Download Resume",  action: () => window.open("/kundan-resume-mar2026.pdf", "_blank") },
      { icon: Globe,    label: "Visit DevXClub",   action: () => window.open("https://devxclub.com", "_blank")       },
      { icon: Github,   label: "View GitHub",      action: () => window.open("https://github.com/kundan-webdev", "_blank") },
      { icon: Instagram,label: "Instagram",        action: () => window.open("https://instagram.com/kundan_webdev", "_blank") },
    ],
  },
];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ── Component ──────────────────────────────────────────────
const CommandPalette = () => {
  const [open,    setOpen]    = useState(false);
  const [query,   setQuery]   = useState("");
  const [cursor,  setCursor]  = useState(0);

  // Flatten all items for keyboard nav
  const allItems = commands.flatMap((g) => g.items);

  const filtered = query.trim()
    ? allItems.filter((i) =>
        i.label.toLowerCase().includes(query.toLowerCase())
      )
    : null; // null = show grouped

  const displayItems = filtered ?? allItems;

  // Open/close listeners
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        setQuery("");
        setCursor(0);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onEvent = () => { setOpen(true); setQuery(""); setCursor(0); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("openCommandPalette", onEvent);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("openCommandPalette", onEvent);
    };
  }, []);

  // Arrow key navigation
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setCursor((c) => (c + 1) % displayItems.length);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setCursor((c) => (c - 1 + displayItems.length) % displayItems.length);
      }
      if (e.key === "Enter") {
        e.preventDefault();
        displayItems[cursor]?.action();
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, cursor, displayItems]);

  const runCommand = useCallback((action: () => void) => {
    action();
    setOpen(false);
    setQuery("");
    setCursor(0);
  }, []);

  // Render grouped or flat
  const renderItems = () => {
    if (filtered) {
      if (filtered.length === 0)
        return (
          <p className="text-center text-[#444] text-sm py-8">
            No results for "{query}"
          </p>
        );
      return filtered.map((item, i) => (
        <ItemRow
          key={item.label}
          item={item}
          active={cursor === i}
          onClick={() => runCommand(item.action)}
          onHover={() => setCursor(i)}
        />
      ));
    }

    let globalIdx = 0;
    return commands.map((group) => (
      <div key={group.group} className="mb-1">
        <p className="text-[10px] font-bold tracking-widest uppercase text-[#333] px-3 py-2">
          {group.group}
        </p>
        {group.items.map((item) => {
          const idx = globalIdx++;
          return (
            <ItemRow
              key={item.label}
              item={item}
              active={cursor === idx}
              onClick={() => runCommand(item.action)}
              onHover={() => setCursor(idx)}
            />
          );
        })}
      </div>
    ));
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[300] bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Palette */}
          <motion.div
            key="palette"
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[301] w-full max-w-[520px] mx-4"
          >
            <div className="bg-[#0f0f0f] border border-[#1c1c1c] rounded-2xl shadow-2xl overflow-hidden">
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#1c1c1c]">
                <Search size={15} className="text-[#444] flex-shrink-0" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setCursor(0); }}
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent text-white text-sm placeholder-[#333] outline-none"
                />
                <kbd className="text-[10px] text-[#333] border border-[#222] rounded px-1.5 py-0.5 font-mono">
                  ESC
                </kbd>
              </div>

              {/* Items */}
              <div className="max-h-[340px] overflow-y-auto p-2">
                {renderItems()}
              </div>

              {/* Footer hint */}
              <div className="border-t border-[#1c1c1c] px-4 py-2 flex items-center gap-4 text-[10px] text-[#333]">
                <span><kbd className="font-mono border border-[#222] rounded px-1">↑↓</kbd> navigate</span>
                <span><kbd className="font-mono border border-[#222] rounded px-1">↵</kbd> select</span>
                <span><kbd className="font-mono border border-[#222] rounded px-1">esc</kbd> close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// ── Item Row ───────────────────────────────────────────────
const ItemRow = ({
  item,
  active,
  onClick,
  onHover,
}: {
  item: { icon: React.ElementType; label: string; action: () => void };
  active: boolean;
  onClick: () => void;
  onHover: () => void;
}) => {
  const Icon = item.icon;
  return (
    <button
      onClick={onClick}
      onMouseEnter={onHover}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors text-left ${
        active
          ? "bg-orange-500/10 text-white border-l-2 border-orange-500"
          : "text-[#777] hover:bg-white/5 hover:text-white border-l-2 border-transparent"
      }`}
    >
      <Icon size={14} className={active ? "text-orange-400" : "text-[#444]"} />
      <span>{item.label}</span>
    </button>
  );
};

export default CommandPalette;