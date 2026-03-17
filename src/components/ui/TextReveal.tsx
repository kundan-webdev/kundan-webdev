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

      // Phase 1 — Reveal: words come in as you scroll into this paragraph
      gsap.fromTo(
        words,
        {
          opacity: 0.08,
          filter: "blur(6px)",
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.04,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",    // start revealing when paragraph enters view
            end: "top 30%",      // fully revealed when paragraph is upper third
            scrub: 1.2,
          },
        }
      );

      // Phase 2 — Dim: words fade out as you scroll past this paragraph
      gsap.fromTo(
        words,
        {
          opacity: 1,
          filter: "blur(0px)",
        },
        {
          opacity: 0.08,
          filter: "blur(4px)",
          stagger: 0.02,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "bottom 60%",  // start dimming when bottom of paragraph passes mid
            end: "bottom 20%",    // fully dimmed when scrolled past
            scrub: 1.2,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  const words = children.split(" ");

  return (
    <div
      ref={container}
      className={cn("relative py-8 md:py-10", className)}
    >
      <p className="flex flex-wrap leading-[1.75]">
        {words.map((word, i) => (
          <span
            key={i}
            className="word-reveal inline-block mr-[0.3em] will-change-[opacity,filter]"
            style={{ opacity: 0.08 }}
          >
            {word}
          </span>
        ))}
      </p>
    </div>
  );
};