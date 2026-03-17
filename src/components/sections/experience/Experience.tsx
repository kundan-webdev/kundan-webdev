"use client";

import { experiences } from "@/data/experience";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const badgeDot: Record<string, string> = {
  blue:   "bg-blue-400",
  orange: "bg-orange-400",
  purple: "bg-purple-400",
  green:  "bg-green-400",
};

const badgeText: Record<string, string> = {
  blue:   "text-blue-400",
  orange: "text-orange-400",
  purple: "text-purple-400",
  green:  "text-green-400",
};

const Experience = () => {
  return (
    <section className="container-content" id="experience">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div>
          <span className="text-sm text-white/40 font-medium mb-4 block">
            <span className="text-orange-500 font-bold">.</span>journey
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-[-0.04em] leading-[1.0]">
            Experience
          </h2>
        </div>
        <p className="text-white/30 text-sm max-w-xs md:text-right leading-relaxed">
          Real roles, real products, real impact.
        </p>
      </motion.div>

      {/* Experience items */}
      <div>
        {experiences.map((item: any, index: number) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group border-b border-white/[0.06] py-10 first:border-t first:border-white/[0.06]"
          >
            {/* Top row — role + duration */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                {/* Status dot */}
                <div className="mt-2 flex-shrink-0">
                  <span className={`w-2 h-2 rounded-full block ${badgeDot[item.badge_color] || "bg-orange-400"} ${item.duration.includes("Present") ? "animate-pulse" : ""}`} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight group-hover:text-orange-400 transition-colors">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-sm font-semibold ${badgeText[item.badge_color] || "text-orange-400"}`}>
                      {item.company}
                    </span>
                    <span className="text-white/20 text-xs">·</span>
                    <span className="text-white/30 text-xs">{item.type}</span>
                  </div>
                </div>
              </div>

              {/* Duration + badge */}
              <div className="flex items-center gap-3 md:flex-col md:items-end ml-6 md:ml-0">
                <span className="text-sm text-white/30 font-medium whitespace-nowrap">
                  {item.duration}
                </span>
                {item.type_badge && (
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${
                    item.badge_color === "orange" ? "border-orange-500/20 text-orange-400 bg-orange-500/5" :
                    item.badge_color === "blue"   ? "border-blue-500/20 text-blue-400 bg-blue-500/5" :
                    item.badge_color === "purple" ? "border-purple-500/20 text-purple-400 bg-purple-500/5" :
                    "border-green-500/20 text-green-400 bg-green-500/5"
                  }`}>
                    {item.type_badge}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-white/50 text-sm leading-relaxed mb-6 ml-6 max-w-2xl">
              {item.description}
            </p>

            {/* Bullets — collapsed, editorial */}
            {item.bullets && item.bullets.length > 0 && (
              <div className="ml-6 mb-6 space-y-2">
                {item.bullets.map((bullet: string, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-orange-500/50 text-xs mt-[3px] flex-shrink-0">→</span>
                    <p className="text-white/40 text-sm leading-relaxed">{bullet}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Tags + arrow */}
            <div className="flex items-center justify-between gap-4 ml-6">
              <div className="flex flex-wrap gap-2">
                {item.tags?.slice(0, 5).map((tag: string, i: number) => (
                  <span
                    key={i}
                    className="text-[11px] text-white/25 bg-white/[0.03] px-2.5 py-1 rounded-full border border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
                {item.tags?.length > 5 && (
                  <span className="text-[11px] text-white/20 px-2 py-1">
                    +{item.tags.length - 5}
                  </span>
                )}
              </div>

              <ArrowUpRight
                size={16}
                className="text-white/20 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;