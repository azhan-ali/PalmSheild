"use client";

import React, { useEffect, useState } from "react";
import { calculateEarnedYield, KAMINO_ESTIMATED_APY } from "@/lib/kamino/yield";
import { Badge } from "@/components/ui/badge";

interface YieldDisplayProps {
  principalAmount: number;
  lockedAt: Date | string;
}

export function YieldDisplay({ principalAmount, lockedAt }: YieldDisplayProps) {
  const [earned, setEarned] = useState<number>(0);

  useEffect(() => {
    // Update yield every 100ms for that cool real-time ticking effect
    const lockedTimestamp = new Date(lockedAt).getTime();
    
    const interval = setInterval(() => {
      const yieldAmount = calculateEarnedYield(principalAmount, lockedTimestamp);
      setEarned(yieldAmount);
    }, 100);

    return () => clearInterval(interval);
  }, [principalAmount, lockedAt]);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-mono font-bold text-[#00C896]">
          +{earned.toFixed(8)} PUSD
        </span>
        <Badge variant="locked" className="px-2 py-0.5 text-[10px]">Live Yield</Badge>
      </div>
      <span className="text-[11px] text-text-muted font-mono uppercase tracking-wider">
        Powered by Kamino ({KAMINO_ESTIMATED_APY}% APY)
      </span>
    </div>
  );
}
