"use client";

import { useEffect, useRef, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

const WIDTH = 100;
const HEIGHT =50;
const BASELINE = 20;
const POINTS = 10; // number of control points
const MAX_BEND = 14;

export function Divider({ className }: DividerProps) {
  const pathRef = useRef<SVGPathElement>(null);

  const pointsRef = useRef(
    Array.from({ length: POINTS }, (_, i) => ({
      x: (i / (POINTS - 1)) * WIDTH,
      y: BASELINE,
      vy: 0,
    }))
  );

  const pointerRef = useRef({ x: WIDTH / 2, y: BASELINE, active: false });

  const draw = () => {
    const pts = pointsRef.current;

    let d = `M ${pts[0].x} ${pts[0].y}`;

    for (let i = 1; i < pts.length - 1; i++) {
      const xc = (pts[i].x + pts[i + 1].x) / 2;
      const yc = (pts[i].y + pts[i + 1].y) / 2;
      d += ` Q ${pts[i].x} ${pts[i].y} ${xc} ${yc}`;
    }

    const last = pts[pts.length - 1];
    d += ` T ${last.x} ${last.y}`;

    pathRef.current?.setAttribute("d", d);
  };

  useEffect(() => {
    let raf: number;

    const update = () => {
      const pts = pointsRef.current;
      const pointer = pointerRef.current;

      pts.forEach((p) => {
        // distance from cursor
        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (pointer.active) {
          // force field (inverse distance)
          const force = Math.max(0, 1 - dist / 40);

          // apply vertical pull
          p.vy += (pointer.y - BASELINE) * force * 0.08;
        }

        // spring back to baseline
        const spring = (BASELINE - p.y) * 0.06;

        p.vy += spring;

        // damping
        p.vy *= 0.88;

        // apply velocity
        p.y += p.vy;

        // clamp
        const maxY = BASELINE + MAX_BEND;
        const minY = BASELINE - MAX_BEND;
        p.y = Math.max(minY, Math.min(maxY, p.y));
      });

      draw();
      raf = requestAnimationFrame(update);
    };

    update();

    return () => cancelAnimationFrame(raf);
  }, []);

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * WIDTH;
    const y = ((e.clientY - rect.top) / rect.height) * HEIGHT;

    pointerRef.current.x = x;
    pointerRef.current.y = y;
    pointerRef.current.active = true;
  };

  const handlePointerLeave = () => {
    pointerRef.current.active = false;
  };

  return (
    <div
      className={cn(
        "relative h-10 w-full select-none touch-pan-y",
        className
      )}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <svg
        className="h-full w-full"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="none"
      >
        {/* Base line */}
        <path
          d={`M 0 ${BASELINE} L ${WIDTH} ${BASELINE}`}
          stroke="var(--border-default)"
          strokeWidth="1"
          fill="none"
        />

        {/* Spline */}
        <path
          ref={pathRef}
          stroke="var(--brand-primary)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default Divider;