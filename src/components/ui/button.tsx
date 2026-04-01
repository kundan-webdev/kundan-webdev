"use client";

import { useRef } from "react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "group/button relative inline-flex shrink-0 items-center justify-center",
    "rounded-lg border border-transparent bg-clip-padding",
    "text-sm font-medium whitespace-nowrap",
    "transition-all outline-none select-none",
    "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
    "active:translate-y-px",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default:
          "text-white bg-button-gradient shadow-[0_10px_30px_rgba(232,80,2,0.35)]",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-muted hover:text-foreground",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 px-3 text-xs gap-1.5",
        default: "h-9 px-4 gap-2",
        lg: "h-11 px-6 text-base gap-2",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & {
    magnetic?: boolean;
  };

function Button({
  className,
  variant,
  size,
  children,
  magnetic = false,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);

  const isTouchDevice =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  const handleMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!magnetic || isTouchDevice) return;

    const el = ref.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const nx = (x / rect.width - 0.5) * 2;
    const ny = (y / rect.height - 0.5) * 2;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      el.style.transform = `translate(${nx * 6}px, ${ny * 6}px) scale(1.04)`;
      inner.style.transform = `translate(${nx * 10}px, ${ny * 10}px)`;
    });
  };

  const handleLeave = () => {
    if (!magnetic) return;

    const el = ref.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    el.style.transition = "transform 0.35s cubic-bezier(.22,1,.36,1)";
    inner.style.transition = "transform 0.45s cubic-bezier(.22,1,.36,1)";

    el.style.transform = "translate(0,0) scale(1)";
    inner.style.transform = "translate(0,0)";

    setTimeout(() => {
      el.style.transition = "";
      inner.style.transition = "";
    }, 400);
  };

  return (
    <ButtonPrimitive
      ref={ref}
      data-slot="button"
      onPointerMove={magnetic ? handleMove : undefined}
      onPointerLeave={magnetic ? handleLeave : undefined}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <span ref={innerRef} className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </ButtonPrimitive>
  );
}

export { Button, buttonVariants };
export type { ButtonProps };