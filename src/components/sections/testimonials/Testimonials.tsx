"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  return (
    <section className="container-content py-20 md:py-28" id="testimonials">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="text-sm text-white/40 font-medium mb-4 block">
          <span className="text-orange-500 font-bold">.</span>testimonials
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-[-0.04em] leading-[1.0] mb-4">What People Say</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t: any, i: number) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-[#0f0f0f] border border-[#1c1c1c] rounded-xl p-8 hover:border-[#2a2a2a] transition-all duration-300"
          >
            {/* Quote mark */}
            <span className="text-4xl text-orange-500 font-serif leading-none block mb-4">&ldquo;</span>
            
            <p className="text-white/70 text-base leading-relaxed mb-8 min-h-[60px]">
              {t.quote}
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1c1c1c] flex items-center justify-center text-white/60 text-sm font-bold">
                {t.initials}
              </div>
              <div>
                <p className="text-white text-sm font-medium">{t.name}</p>
                <p className="text-[#777] text-xs">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
