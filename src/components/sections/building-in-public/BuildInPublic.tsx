"use client";

import { motion } from "framer-motion";

const reels = [
  { title: "Building DevXClub v2 — Week 1", image: null },
  { title: "My MERN Stack Journey", image: null },
  { title: "From BCA Student to Founder", image: null },
];

const BuildInPublic = () => {
  return (
    <section className="container-content py-20 md:py-28" id="building">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3 block">BUILDING IN PUBLIC</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Building in Public</h2>
        <p className="text-[#777] max-w-2xl text-lg">
          I document my dev journey every week — projects, learnings, failures, and wins. No filters, just real progress. Follow along on Instagram @kundan_webdev
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {reels.map((reel, i) => (
          <motion.a
            key={i}
            href="https://instagram.com/kundan_webdev"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group aspect-square bg-[#0f0f0f] border border-[#1c1c1c] rounded-xl flex items-center justify-center hover:border-[#2a2a2a] transition-all duration-300 relative overflow-hidden"
          >
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-[#1c1c1c] mx-auto mb-4 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#777]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white/60 text-sm font-medium">{reel.title}</p>
            </div>
            <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        ))}
      </div>

      <motion.a
        href="https://instagram.com/kundan_webdev"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="inline-flex px-8 py-4 bg-[#ea580c] text-white rounded-full font-medium hover:bg-orange-600 transition-colors"
      >
        Follow @kundan_webdev
      </motion.a>
    </section>
  );
};

export default BuildInPublic;
