"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FounderBanner = () => {
  return (
    <section className="container-content my-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative w-full p-10 md:p-14 rounded-xl border border-[#3a1800] bg-[#0c0800] overflow-hidden group"
      >
        {/* Glow Effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 blur-[100px] rounded-full pointer-events-none transition-opacity duration-500 group-hover:opacity-75 opacity-40"></div>
        
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 leading-[120%]">
            I didn't just learn to code — I built a community around it.
          </h2>
          
          <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
            DevXClub is a developer community I founded in 2023. Currently building v2 — AI code review, roadmaps, job board, and a studio arm. Co-founded with a backend/AI engineer. 100+ members.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://devxclub.com" target="_blank" rel="noopener noreferrer">
              <Button className="w-full sm:w-auto px-8 py-6 text-base font-medium">Visit devxclub.com</Button>
            </a>
            <a href="https://github.com/devxclub" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full sm:w-auto px-8 py-6 text-base font-medium border-white/20 hover:bg-white/10 hover:text-white">See on GitHub</Button>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FounderBanner;
