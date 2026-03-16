"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Avatar from "@/components/micro/Avatar";
import { TextAnimate } from "@/components/ui/TextAnimate";
import { AnimatedShinyText } from "@/components/ui/AnimatedShinyText";

const titles = [
  "Frontend Developer",
  "MERN Stack Developer",
  "UI/UX Designer",
  "DevXClub Founder",
  "Full-Stack Developer",
];

const HeroContent = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((state) => (state + 1) % titles.length),
      3000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      className="max-w-[1136px] pt-10 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* MAIN HEADING */}
      <h1 className="text-[3rem] md:text-[4.5rem] font-medium leading-[110%] flex flex-wrap items-center gap-4">
        <TextAnimate animation="blurInUp" by="word" delay={0.1}>
          Hi, I’m
        </TextAnimate>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        >
          <Avatar width={100} height={62} />
        </motion.div>
        <TextAnimate animation="blurInUp" by="word" delay={0.5}>
          Kundan Kumar!
        </TextAnimate>
      </h1>

      <motion.div
        className="text-[2.5rem] md:text-[4rem] font-medium flex-wrap flex items-center leading-[110%] md:gap-4 mt-2 h-[3rem] md:h-[4rem] overflow-hidden"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        I’m a
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-clip-text text-transparent bg-[linear-gradient(-145deg,#FF923C_0%,#E66123_36%,#FB3800_100%)] h-full block ml-3 md:ml-0"
          >
            {titles[index]}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="mt-8 flex items-baseline gap-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="group rounded-full border border-white/10 bg-white/5 transition-all ease-in hover:bg-white/10">
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-2 transition ease-out hover:text-white hover:duration-300 text-sm font-medium">
            <span>🟢 Open to Work · Frontend · Full-Stack MERN · UI/UX</span>
          </AnimatedShinyText>
        </div>
      </motion.div>

      {/* CTA + DESCRIPTION */}
      <div className="mt-12 md:mt-16 flex items-start flex-col gap-6">
        <TextAnimate
          animation="slideUp"
          by="line"
          delay={1.2}
          className="max-w-[600px] text-lg md:text-xl text-white/70 leading-relaxed"
        >
          {`Building real products and shipping them. Founder of DevXClub.\nFinal-year BCA from Varanasi. Leading frontend at DevXClub v2 +\nMERN dev at Solvimate. Open to full-stack roles.`}
        </TextAnimate>

        <motion.div
          className="flex gap-4 md:gap-6 mt-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <Button className="px-8 py-6 rounded-full text-base">Resume</Button>
          <a href="#projects">
            <Button
              variant="outline"
              className="px-8 py-6 rounded-full text-base bg-transparent border-white/20 hover:bg-white/10"
            >
              View Projects
            </Button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
