"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      });
      setLocalTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-[#1c1c1c] bg-[#080808]">
      <div className="container-content py-20" id="contact">
        {/* Main heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3 block">CONTACT</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-[#777] mb-2">
            Open to: Full-Stack Internships · Frontend Roles · Freelance UI/UX · Collabs
          </p>
          <p className="text-[#555] text-sm">I typically reply within 24 hours.</p>
        </motion.div>

        {/* Contact Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="mailto:kundan.webdev@gmail.com"
            className="px-6 py-3 md:px-8 md:py-4 bg-[#ea580c] text-white rounded-full font-medium text-sm md:text-base hover:bg-orange-600 transition-colors"
          >
            kundan.webdev@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/kundan-webdev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 md:px-8 md:py-4 bg-[#0f0f0f] text-white rounded-full font-medium text-sm md:text-base border border-[#1c1c1c] hover:border-[#2a2a2a] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            className="px-6 py-3 md:px-8 md:py-4 bg-[#0f0f0f] text-white rounded-full font-medium text-sm md:text-base border border-[#1c1c1c] hover:border-[#2a2a2a] transition-colors"
          >
            Book a Call
          </a>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-[#1c1c1c] mb-12" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative">
          {/* Local Time */}
          <div>
            <p className="text-[#555] text-sm mb-1">LOCAL TIME</p>
            <p className="text-white text-lg font-medium">{localTime} IST</p>
          </div>

          {/* Built With */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:block text-[#555] text-sm font-medium">
            Built with Next.js · Deployed on Vercel
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/kundan-webdev" target="_blank" rel="noopener noreferrer" className="text-[#777] hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/kundan-webdev" target="_blank" rel="noopener noreferrer" className="text-[#777] hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://instagram.com/kundan_webdev" target="_blank" rel="noopener noreferrer" className="text-[#777] hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#777] hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 text-center md:hidden block text-[#555] text-sm font-medium">
          Built with Next.js · Deployed on Vercel
        </div>
      </div>
    </footer>
  );
};

export default Footer;