"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  squares?: [number, number];
  className?: string;
  squaresClassName?: string;
}

export function InteractiveGridPattern({
  width = 50,
  height = 50,
  squares = [30, 16],
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {
  const [cols, rows] = squares;
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);

  return (
    <svg
      width={width * cols}
      height={height * rows}
      className={cn("absolute inset-0 h-full w-full", className)}
      {...props}
    >
      {Array.from({ length: cols * rows }).map((_, index) => {
        const x = (index % cols) * width;
        const y = Math.floor(index / cols) * height;
        const isHovered = hoveredSquare === index;

        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={width}
            height={height}
            className={cn("stroke-white/[0.06]", squaresClassName)}
            style={{
              // "transparent" kills pointer events on SVG — use rgba(0,0,0,0) instead
              fill: isHovered
                ? "rgba(249,115,22,0.15)"
                : "rgba(0,0,0,0)",
              transition: isHovered ? "fill 0.05s ease" : "fill 1.2s ease",
            }}
            onMouseEnter={() => setHoveredSquare(index)}
            onMouseLeave={() => setHoveredSquare(null)}
          />
        );
      })}
    </svg>
  );
}