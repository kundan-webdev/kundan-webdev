import type { CSSProperties } from "react";

import Image, { type StaticImageData } from "next/image";

import DP from "@/../public/assets/DPv2.png";
import { cn } from "@/lib/utils";

interface AvatarProps {
  src?: string | StaticImageData;
  height?: number;
  width?: number;
  bgColor?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
}

export function Avatar({
  src = DP,
  height = 96,
  width = 160,
  bgColor = "bg-button-gradient",
  alt = "Profile avatar of Kundan",
  className,
  priority = false,
}: AvatarProps) {
  return (
    <div
      className={cn(
        "relative flex h-[var(--avatar-height)] w-[var(--avatar-width)] items-end justify-center overflow-hidden rounded-full",
        bgColor,
        className,
      )}
      style={
        {
          "--avatar-height": `${height}px`,
          "--avatar-width": `${width}px`,
        } as CSSProperties
      }
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-full w-auto object-contain"
      />
    </div>
  );
}

export default Avatar;

