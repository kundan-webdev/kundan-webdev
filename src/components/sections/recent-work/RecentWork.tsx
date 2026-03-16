"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";

const filters = ["all", "frontend", "backend", "design"];

const badgeColorMap: Record<string, string> = {
  orange: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  blue:   "bg-blue-500/10 text-blue-400 border-blue-500/30",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  green:  "bg-green-500/10 text-green-400 border-green-500/30",
};

const borderColorMap: Record<string, string> = {
  orange: "border-orange-500/30",
  blue:   "border-blue-500/30",
  purple: "border-purple-500/30",
  green:  "border-[#1c1c1c]",
};

const RecentWork = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Listen to navbar Backend/Design link clicks
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.filter) {
        setActiveFilter(detail.filter);
        // Scroll to section smoothly
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    window.addEventListener("setProjectFilter", handler);
    return () => window.removeEventListener("setProjectFilter", handler);
  }, []);

  const filteredProjects = projects.filter((p: any) =>
    p.type.includes(activeFilter)
  );

  return (
    <section className="container-content py-20 md:py-28" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3 block">
          WORK
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Recent Work
        </h2>
        <p className="text-[#777] text-base max-w-xl">
          A mix of full-stack products, backend APIs, frontend builds, and
          UI/UX design work — all real projects, no tutorials.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all capitalize ${
              activeFilter === f
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                : "bg-transparent text-[#777] border border-[#1c1c1c] hover:border-[#2a2a2a] hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p: any) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`${p.featured ? "md:col-span-2 lg:col-span-3" : ""}`}
            >
              <Link href={`/projects/${p.id}`} className="block group h-full">
                <div
                  className={`bg-[#0f0f0f] rounded-xl border ${
                    p.featured
                      ? "border-orange-500/30"
                      : borderColorMap[p.badge_color] || "border-[#1c1c1c]"
                  } p-6 h-full hover:border-[#2a2a2a] transition-all duration-300 hover:scale-[1.01]`}
                >
                  {/* Image */}
                  {p.image && (
                    <div className="w-full h-48 rounded-lg overflow-hidden mb-5 bg-[#080808]">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Badge */}
                  {p.badge && (
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                          badgeColorMap[p.badge_color] || badgeColorMap.blue
                        }`}
                      >
                        {p.badge}
                      </span>
                      {p.featured && (
                        <span className="text-[10px] text-orange-400/60 font-medium tracking-wider uppercase">
                          Flagship Project
                        </span>
                      )}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {p.title}
                  </h3>

                  {/* Description */}
                  {p.description && (
                    <p className="text-[#777] text-sm mb-5 leading-relaxed line-clamp-3">
                      {p.description}
                    </p>
                  )}

                  {/* Tags */}
                  {p.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tags.slice(0, 5).map((tag: string, i: number) => (
                        <span
                          key={i}
                          className="text-xs bg-white/5 px-2.5 py-1 rounded-md text-white/50 border border-[#1c1c1c]"
                        >
                          {tag}
                        </span>
                      ))}
                      {p.tags.length > 5 && (
                        <span className="text-xs text-[#555] px-2 py-1">
                          +{p.tags.length - 5}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Links */}
                  {p.links && (
                    <div className="flex gap-4 text-sm pt-4 border-t border-[#1c1c1c]">
                      {p.links.live && (
                        <a
                          href={p.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-orange-500 font-medium hover:text-orange-400 transition-colors"
                        >
                          Live ↗
                        </a>
                      )}
                      {p.links.github && (
                        <a
                          href={p.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-orange-500 font-medium hover:text-orange-400 transition-colors"
                        >
                          GitHub ↗
                        </a>
                      )}
                      {p.links.docs && (
                        <a
                          href={p.links.docs}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-orange-500 font-medium hover:text-orange-400 transition-colors"
                        >
                          Docs ↗
                        </a>
                      )}
                      {p.links.figma && (
                        <a
                          href={p.links.figma}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-orange-500 font-medium hover:text-orange-400 transition-colors"
                        >
                          Figma ↗
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-[#555]">
          <p className="text-lg">No projects in this category yet.</p>
          <p className="text-sm mt-2">Coming soon — check back later.</p>
        </div>
      )}
    </section>
  );
};

export default RecentWork;