"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

const filters = ["all", "frontend", "backend", "design"];

// Badge color map
const badgeColorMap: Record<string, string> = {
  orange: "text-orange-400",
  blue:   "text-blue-400",
  purple: "text-purple-400",
  green:  "text-green-400",
};

// ── Nitro-style editorial project row ──────────────────────
const ProjectRow = ({ p, index }: { p: any; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Link href={`/projects/${p.id}`}>
        <div
          className="group flex items-center justify-between py-5 border-b border-white/[0.06] cursor-pointer transition-all duration-300 hover:px-2"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Left — year + title */}
          <div className="flex items-center gap-6 min-w-0">
            <span className="text-xs text-white/25 font-medium w-8 shrink-0">
              {p.year || "2025"}
            </span>
            <div className="min-w-0">
              <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-orange-400 transition-colors truncate">
                {p.title}
              </h3>
              {p.description && (
                <p className="text-xs text-white/35 mt-0.5 line-clamp-1 max-w-md hidden md:block">
                  {p.description}
                </p>
              )}
            </div>
          </div>

          {/* Right — category + arrow */}
          <div className="flex items-center gap-4 shrink-0 ml-4">
            {/* Tags — hidden on mobile */}
            <div className="hidden lg:flex gap-2">
              {p.tags?.slice(0, 3).map((tag: string, i: number) => (
                <span
                  key={i}
                  className="text-[11px] text-white/25 bg-white/[0.04] px-2 py-0.5 rounded-full border border-white/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Badge — category */}
            <span className={`text-xs font-medium hidden sm:block ${badgeColorMap[p.badge_color] || "text-white/40"}`}>
              {p.badge}
            </span>

            {/* Arrow */}
            <motion.div
              animate={{ x: hovered ? 2 : 0, opacity: hovered ? 1 : 0.3 }}
              transition={{ duration: 0.2 }}
              className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-500/40 group-hover:bg-orange-500/5 transition-colors"
            >
              <ArrowUpRight size={13} className="text-white/60 group-hover:text-orange-400 transition-colors" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

// ── Featured card — large, spans full width ─────────────────
const FeaturedCard = ({ p }: { p: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-4"
  >
    <div
      className="group relative rounded-2xl border border-orange-500/20 bg-[#0c0800] overflow-hidden hover:border-orange-500/40 transition-all duration-500 cursor-pointer"
      onClick={() => window.location.href = `/projects/${p.id}`}
    >
      {/* Image */}
      {p.image && (
        <div className="w-full h-56 md:h-72 overflow-hidden">
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
          />
        </div>
      )}

      <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span className="text-xs text-orange-500/60 font-medium mb-2 block">
            <span className="text-orange-500">.</span>featured
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors">
            {p.title}
          </h3>
          <p className="text-white/50 text-sm mt-2 max-w-lg leading-relaxed">
            {p.description}
          </p>
        </div>

        {/* Links — stop propagation so card click doesn't fire */}
        <div className="flex gap-3 shrink-0">
          {p.links?.live && p.links.live !== "#" && (
            <a
              href={p.links.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold transition-colors"
            >
              Live ↗
            </a>
          )}
          {p.links?.github && p.links.github !== "#" && (
            <a
              href={p.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 hover:border-white/20 text-white/60 hover:text-white text-xs font-semibold transition-colors"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

// ── Main Section ────────────────────────────────────────────
const RecentWork = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.filter) {
        setActiveFilter(detail.filter);
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    window.addEventListener("setProjectFilter", handler);
    return () => window.removeEventListener("setProjectFilter", handler);
  }, []);

  const featured = projects.find((p: any) => p.featured);
  const rest = projects.filter((p: any) =>
    !p.featured && p.type.includes(activeFilter)
  );
  const filteredFeatured = featured && featured.type.includes(activeFilter) ? featured : null;

  return (
    <section className="container-content" id="projects">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div>
          {/* Nitro dot label */}
          <span className="text-sm text-white/40 font-medium mb-4 block">
            <span className="text-orange-500 font-bold">.</span>work
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-[-0.04em] leading-[1.0]">
            Selected<br />Projects
          </h2>
        </div>

        <p className="text-white/40 text-sm max-w-xs leading-relaxed md:text-right">
          Full-stack products, backend APIs, frontend builds, and UI/UX design — all shipped, no tutorials.
        </p>
      </motion.div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all capitalize ${
              activeFilter === f
                ? "bg-orange-500 text-white"
                : "text-white/40 border border-white/[0.08] hover:border-white/20 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Featured card */}
      <AnimatePresence>
        {filteredFeatured && <FeaturedCard key="featured" p={filteredFeatured} />}
      </AnimatePresence>

      {/* Editorial rows — all non-featured projects */}
      <div className="mt-2">
        {/* Border top */}
        {rest.length > 0 && (
          <div className="border-t border-white/[0.06]" />
        )}
        <AnimatePresence mode="popLayout">
          {rest.map((p: any, i: number) => (
            <ProjectRow key={p.id} p={p} index={i} />
          ))}
        </AnimatePresence>

        {rest.length === 0 && !filteredFeatured && (
          <div className="text-center py-20 text-white/20">
            <p className="text-base">No projects in this category yet.</p>
          </div>
        )}
      </div>

      {/* View all link — Nitro style */}
      {activeFilter === "all" && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#contact"
            className="flex items-center gap-2 text-sm text-white/30 hover:text-white transition-colors group"
          >
            <span>Want to work together?</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      )}
    </section>
  );
};

export default RecentWork;