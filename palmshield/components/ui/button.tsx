"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[10px] text-[14px] font-semibold transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none font-sans",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-br from-accent-purple to-[#4A20E0] text-white shadow-[0_0_24px_rgba(107,60,255,0.3)] hover:brightness-110 hover:-translate-y-[1px] active:translate-y-0 border-none",
        secondary:
          "bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-[rgba(240,238,230,0.7)] hover:bg-[rgba(255,255,255,0.09)] hover:-translate-y-[1px] active:translate-y-0",
        danger:
          "bg-[rgba(226,75,74,0.15)] border border-[rgba(226,75,74,0.3)] text-[#F09595] hover:bg-[rgba(226,75,74,0.2)] hover:-translate-y-[1px] active:translate-y-0",
      },
      size: {
        default: "px-[24px] py-[11px]",
        sm: "h-9 px-3",
        lg: "h-11 px-8 text-[15px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
