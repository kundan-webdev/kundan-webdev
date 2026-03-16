"use client";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";

const About = () => {
  return (
    <section className="container-content py-20 md:py-28" id="about">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3 block">ABOUT ME</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white">Who I Am</h2>
      </motion.div>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TextReveal className="text-[18px] max-w-[713px]">
            I'm a final-year BCA student from Varanasi who got obsessed with building things for the web. What started with HTML and CSS turned into a full-stack rabbit hole — React, Next.js, Node.js, MongoDB, Figma, you name it. I learn by shipping.
          </TextReveal>

          <p className="text-white text-[18px] max-w-[713px] mt-6 leading-relaxed">
            I founded DevXClub — a developer community platform, built 
            for coders by coders. Currently in v2: a full-stack monorepo with 
            auth, AI code review, resources, roadmaps, and a jobs board. I 
            built it with a co-founder and lead all frontend + architecture 
            decisions.
          </p>

          <p className="text-white text-[18px] max-w-[713px] mt-6 leading-relaxed">
            Alongside DevXClub, I'm doing a MERN stack internship at 
            Solvimate, leading frontend development. I also take Figma UI/UX 
            work for clients. I document everything publicly — projects, 
            failures, wins — on Instagram as @kundan_webdev. Currently open 
            to full-stack internships and junior roles.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 gap-4 self-start"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { value: "2+", label: "Years Coding" },
            { value: "10+", label: "Projects Shipped" },
            { value: "1", label: "Product Founded" },
            { value: "145", label: "GitHub Contributions" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#0f0f0f] border border-[#1c1c1c] rounded-xl p-6 text-center">
              <p className="text-2xl md:text-3xl font-bold text-orange-500 mb-1">{stat.value}</p>
              <p className="text-[#777] text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
