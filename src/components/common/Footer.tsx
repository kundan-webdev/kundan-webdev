"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

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
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const socials = [
    { icon: Github,    href: "https://github.com/kundan-webdev",        label: "GitHub"    },
    { icon: Linkedin,  href: "https://linkedin.com/in/kundan-webdev",    label: "LinkedIn"  },
    { icon: Instagram, href: "https://instagram.com/kundan_webdev",      label: "Instagram" },
  ];

  return (
    <footer className="border-t border-white/[0.06]">
      {/* ── Big CTA row — Nitro .say hello style ── */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-24 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-20"
        >
          <div>
            {/* Dot label */}
            <span className="text-sm text-white/40 font-medium mb-6 block">
              <span className="text-orange-500 font-bold">.</span>say hello
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-[-0.04em] leading-[1.0] max-w-xl">
              Open for new<br />opportunities
            </h2>
          </div>

          {/* Right side */}
          <div className="flex flex-col gap-4 md:items-end">
            <p className="text-white/30 text-sm max-w-xs md:text-right leading-relaxed">
              Full-Stack Internships · Frontend Roles · Freelance UI/UX · Collabs
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:kundan.webdev@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-colors"
              >
                Email Me
                <ArrowUpRight size={13} />
              </a>
              <a
                href="https://linkedin.com/in/kundan-webdev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-white/20 text-white/60 hover:text-white text-sm font-semibold transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          {/* Left — time */}
          <div>
            <p className="text-[11px] text-white/20 uppercase tracking-widest mb-1">
              Local Time · Varanasi, India
            </p>
            <p className="text-white/50 text-sm font-medium font-mono">
              {localTime} IST
            </p>
          </div>


          {/* Right — socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;