"use client";

import { type PointerEvent, useEffect, useRef } from "react";
import { gsap } from "gsap";

import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

const VIEWBOX_WIDTH = 100;
const VIEWBOX_HEIGHT = 40;
const BASELINE_Y = 20;
const DEFAULT_CONTROL_X = VIEWBOX_WIDTH / 2;
const MIN_CONTROL_X = 18;
const MAX_CONTROL_X = 82;
const MAX_BEND = 14;

export function Divider({ className }: DividerProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const curveRef = useRef({ controlX: DEFAULT_CONTROL_X, bend: 0 });
  const reduceMotionRef = useRef(false);
  const controlXToRef = useRef<((value: number) => void) | null>(null);
  const bendToRef = useRef<((value: number) => void) | null>(null);

  const drawPath = () => {
    pathRef.current?.setAttribute(
      "d",
      `M 0 ${BASELINE_Y} Q ${curveRef.current.controlX} ${BASELINE_Y + curveRef.current.bend} ${VIEWBOX_WIDTH} ${BASELINE_Y}`,
    );
  };

  useEffect(() => {
    reduceMotionRef.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    drawPath();

    if (reduceMotionRef.current) {
      return () => {
        gsap.killTweensOf(curveRef.current);
      };
    }

    controlXToRef.current = gsap.quickTo(curveRef.current, "controlX", {
      duration: 0.22,
      ease: "power2.out",
      onUpdate: drawPath,
    });

    bendToRef.current = gsap.quickTo(curveRef.current, "bend", {
      duration: 0.3,
      ease: "power3.out",
      onUpdate: drawPath,
    });

    return () => {
      gsap.killTweensOf(curveRef.current);
    };
  }, []);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotionRef.current || !controlXToRef.current || !bendToRef.current) {
      return;
    }

    const { currentTarget, clientX, clientY } = event;
    const rect = currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const normalizedX = ((clientX - rect.left) / rect.width) * VIEWBOX_WIDTH;
    const normalizedY = (clientY - rect.top) / rect.height;
    const nextControlX = Math.min(MAX_CONTROL_X, Math.max(MIN_CONTROL_X, normalizedX));
    const nextBend = (normalizedY - 0.5) * (MAX_BEND * 2);

    controlXToRef.current(nextControlX);
    bendToRef.current(nextBend);
  };

  const handlePointerLeave = () => {
    gsap.to(curveRef.current, {
      controlX: DEFAULT_CONTROL_X,
      bend: 0,
      duration: 1,
      ease: "elastic.out(1, 0.2)",
      overwrite: true,
      onUpdate: drawPath,
    });
  };

  return (
    <div
      className={cn("group relative h-10 w-full touch-pan-y select-none", className)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <svg
        className="h-full w-full overflow-visible"
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d={`M 0 ${BASELINE_Y} L ${VIEWBOX_WIDTH} ${BASELINE_Y}`}
          fill="none"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          style={{ stroke: "var(--border-default)" }}
        />
        <path
          ref={pathRef}
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ stroke: "var(--brand-primary)" }}
        />
      </svg>
    </div>
  );
}

export default Divider;
