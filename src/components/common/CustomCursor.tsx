"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring config for the trailing orb — higher damping = smoother lag
  const springX = useSpring(cursorX, { stiffness: 120, damping: 18, mass: 0.8 });
  const springY = useSpring(cursorY, { stiffness: 120, damping: 18, mass: 0.8 });

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const addHoverListeners = () => {
      const interactives = document.querySelectorAll(
        "a, button, [data-cursor], input, textarea, label, [role='button']"
      );
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // Re-scan for interactive elements periodically (handles dynamic content)
    addHoverListeners();
    const interval = setInterval(addHoverListeners, 2000);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      clearInterval(interval);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Trailing glow orb */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full mix-blend-screen"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: clicked ? 28 : hovered ? 52 : 36,
          height: clicked ? 28 : hovered ? 52 : 36,
          backgroundColor: hovered
            ? "rgba(249, 115, 22, 0.35)"
            : "rgba(255, 255, 255, 0.15)",
          boxShadow: hovered
            ? "0 0 30px 10px rgba(249,115,22,0.3), 0 0 60px 20px rgba(249,115,22,0.12)"
            : "0 0 20px 6px rgba(255,255,255,0.12), 0 0 40px 12px rgba(255,255,255,0.05)",
          scale: clicked ? 0.85 : 1,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 22 }}
      />

      {/* Precise dot — follows cursor exactly */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-white"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovered ? 5 : 4,
          height: hovered ? 5 : 4,
          opacity: hovered ? 0.6 : 1,
          backgroundColor: hovered ? "rgb(249,115,22)" : "rgb(255,255,255)",
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;
