"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center justify-center font-mono text-[11px] font-bold px-[10px] py-[4px] rounded-[6px] transition-colors gap-1.5",
  {
    variants: {
      variant: {
        locked: "bg-[rgba(0,200,150,0.12)] border border-[rgba(0,200,150,0.25)] text-[#00C896]",
        pending: "bg-[rgba(245,166,35,0.12)] border border-[rgba(245,166,35,0.25)] text-[#F5A623]",
        disputed: "bg-[rgba(226,75,74,0.12)] border border-[rgba(226,75,74,0.25)] text-[#F09595]",
        pill: "bg-[rgba(107,60,255,0.15)] border border-[rgba(107,60,255,0.3)] rounded-full text-[#A98EFF]",
      },
    },
    defaultVariants: {
      variant: "locked",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  showLiveDot?: boolean;
}

export function Badge({ className, variant, showLiveDot, children, ...props }: BadgeProps) {
  return (
    <div className={badgeVariants({ variant, className })} {...props}>
      {showLiveDot && (
        <span className="w-[6px] h-[6px] rounded-full bg-accent-green animate-live-dot" />
      )}
      {children}
    </div>
  );
}
