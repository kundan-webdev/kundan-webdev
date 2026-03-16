"use client";
import { useEffect, useRef, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const morphTime = 1.2;
const cooldownTime = 0.6;
const texts = ["Kundan Kumar", "Web Developer", "Web Designer", "MERN Stack Developer"];

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const textIndexRef = useRef(0);
  const morphRef = useRef(0);
  const cooldownRef = useRef(0);
  const timeRef = useRef(Date.now());
  const rafRef = useRef<number | null>(null);

  const setStyles = useCallback((fraction: number) => {
    const t1 = text1Ref.current;
    const t2 = text2Ref.current;
    if (!t1 || !t2) return;

    t2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    t2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    const inv = 1 - fraction;
    t1.style.filter = `blur(${Math.min(8 / inv - 8, 100)}px)`;
    t1.style.opacity = `${Math.pow(inv, 0.4) * 100}%`;

    t1.textContent = texts[textIndexRef.current % texts.length];
    t2.textContent = texts[(textIndexRef.current + 1) % texts.length];
  }, []);

  const doMorph = useCallback(() => {
    morphRef.current -= cooldownRef.current;
    cooldownRef.current = 0;

    let fraction = morphRef.current / morphTime;
    if (fraction > 1) {
      cooldownRef.current = cooldownTime;
      fraction = 1;
    }
    setStyles(fraction);
    if (fraction === 1) textIndexRef.current++;
  }, [setStyles]);

  const doCooldown = useCallback(() => {
    morphRef.current = 0;
    const t1 = text1Ref.current;
    const t2 = text2Ref.current;
    if (t1 && t2) {
      t2.style.filter = "none";
      t2.style.opacity = "100%";
      t1.style.filter = "none";
      t1.style.opacity = "0%";
    }
  }, []);

  useEffect(() => {
    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      const now = Date.now();
      const dt = (now - timeRef.current) / 1000;
      timeRef.current = now;
      cooldownRef.current -= dt;
      if (cooldownRef.current <= 0) doMorph();
      else doCooldown();
    };

    rafRef.current = requestAnimationFrame(animate);

    // Auto-dismiss after texts.length * (morphTime + cooldownTime) + small buffer
    const dismissTime = texts.length * (morphTime + cooldownTime) * 1000;
    const timer = setTimeout(() => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setVisible(false);
    }, dismissTime);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearTimeout(timer);
    };
  }, [doMorph, doCooldown]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[99999] bg-black flex items-center justify-center"
          exit={{ y: "-100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* SVG blur-morph filter */}
          <svg className="fixed w-0 h-0" aria-hidden>
            <defs>
              <filter id="morph-threshold">
                <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 255 -140"
                />
              </filter>
            </defs>
          </svg>

          {/* Morphing text */}
          <div
            className="relative w-full max-w-2xl h-24 text-center"
            style={{ filter: "url(#morph-threshold) blur(0.5px)" }}
          >
            <span
              ref={text1Ref}
              className="absolute inset-x-0 top-0 font-bold text-white"
              style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", lineHeight: 1 }}
            />
            <span
              ref={text2Ref}
              className="absolute inset-x-0 top-0 font-bold text-white"
              style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", lineHeight: 1 }}
            />
          </div>

          {/* Subtle progress line */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 h-[2px] bg-orange-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: texts.length * (morphTime + cooldownTime) * 0.9, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
