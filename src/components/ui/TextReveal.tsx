"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
}

export const TextReveal = ({ children, className = "" }: TextRevealProps) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = container.current?.querySelectorAll(".word-reveal");
      if (!words || words.length === 0) return;

      gsap.fromTo(
        words,
        { opacity: 0.1, y: 15, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.05,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 85%",
            end: "bottom 40%",
            scrub: 1.5,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  const words = children.split(" ");

  return (
    <div ref={container} className={cn("relative", className)}>
      <p className="flex flex-wrap leading-relaxed">
        {words.map((word, i) => (
          <span
            key={i}
            className="word-reveal inline-block mr-[0.25em] will-change-[opacity,transform,filter]"
          >
            {word}
          </span>
        ))}
      </p>
    </div>
  );
};
