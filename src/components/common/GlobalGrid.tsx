"use client";
import { InteractiveGridPattern } from "@/components/ui/InteractiveGridPattern";
import { cn } from "@/lib/utils";

export function GlobalGrid() {
  return (
    // NO pointer-events-none here — that's what was killing hover
    // z-0 keeps it behind content
    // Content above uses z-10 so it sits on top visually
    <div className="fixed inset-0 z-0 overflow-hidden">
      <InteractiveGridPattern
        width={50}
        height={50}
        squares={[40, 40]}
        className={cn(
          "[mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,white,transparent)]"
        )}
        squaresClassName="stroke-white/[0.04]"
      />
    </div>
  );
}