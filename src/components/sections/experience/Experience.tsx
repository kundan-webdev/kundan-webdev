"use client";

import ExperienceItem from "./ExperienceItem";
import { experiences } from "@/data/experience";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="container-content py-20 md:py-28" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3 block">EXPERIENCE</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">My Journey</h2>
        <p className="text-[#777] max-w-xl text-lg">
          Real roles, real impact. No filler.
        </p>
      </motion.div>

      <div className="relative">
        {experiences.map((item: any, index: number) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <ExperienceItem {...item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;