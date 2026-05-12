"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  // Smooth spring follow
  const springConfig = { damping: 28, stiffness: 500, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide native cursor globally — but NOT inside the wallet modal
    // so that modal buttons remain clickable
    const style = document.createElement("style");
    style.innerHTML = `
      *:not(.wallet-adapter-modal-wrapper):not(.wallet-adapter-modal-wrapper *):not(.wallet-adapter-modal-overlay) {
        cursor: none !important;
      }
      .wallet-adapter-modal-wrapper,
      .wallet-adapter-modal-wrapper *,
      .wallet-adapter-modal-overlay {
        cursor: default !important;
      }
    `;
    document.head.appendChild(style);

    let trailId = 0;
    let lastTrail = 0;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Spawn trail particles every ~40ms
      const now = Date.now();
      if (now - lastTrail > 40) {
        lastTrail = now;
        const id = trailId++;
        setTrail((prev) => [...prev.slice(-8), { x: e.clientX, y: e.clientY, id }]);
      }
    };

    const handleOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setIsHovering(
        !!(t.tagName === "A" || t.tagName === "BUTTON" || t.closest("a") || t.closest("button") || t.closest(".palm-card"))
      );
    };

    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* ── Sparkle Trail ── */}
      {trail.map((p, i) => {
        const age = trail.length - 1 - i; // 0 = newest
        const opacity = (1 - age / trail.length) * 0.55;
        const size = isHovering ? 5 - age * 0.4 : 3 - age * 0.25;
        return (
          <motion.div
            key={p.id}
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9995]"
            style={{
              width: Math.max(size, 1),
              height: Math.max(size, 1),
              x: p.x,
              y: p.y,
              translateX: "-50%",
              translateY: "-50%",
              opacity,
              backgroundColor: isHovering ? "#F5A623" : "#6B3CFF",
              boxShadow: isHovering
                ? `0 0 6px rgba(245,166,35,${opacity})`
                : `0 0 6px rgba(107,60,255,${opacity})`,
            }}
            initial={{ scale: 1, opacity }}
            animate={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        );
      })}

      {/* ── Outer Orbit Ring ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isClicking ? 28 : isHovering ? 52 : 38,
          height: isClicking ? 28 : isHovering ? 52 : 38,
          borderColor: isHovering ? "rgba(245,166,35,0.7)" : "rgba(107,60,255,0.55)",
          boxShadow: isHovering
            ? "0 0 18px rgba(245,166,35,0.4), 0 0 6px rgba(245,166,35,0.6)"
            : "0 0 14px rgba(107,60,255,0.35), 0 0 5px rgba(107,60,255,0.5)",
          rotate: isHovering ? 360 : 0,
        }}
        transition={{ type: "spring", stiffness: 280, damping: 22, rotate: { duration: 0.6, ease: "easeInOut" } }}
      >
        {/* Dashed orbit ring */}
        <motion.div
          className="w-full h-full rounded-full"
          style={{
            border: isHovering ? "1.5px dashed rgba(245,166,35,0.7)" : "1.5px dashed rgba(107,60,255,0.55)",
            boxShadow: isHovering
              ? "0 0 18px rgba(245,166,35,0.4)"
              : "0 0 14px rgba(107,60,255,0.35)",
          }}
          animate={{ rotate: isHovering ? [0, 360] : 0 }}
          transition={{ duration: 1.4, repeat: isHovering ? Infinity : 0, ease: "linear" }}
        />
      </motion.div>

      {/* ── Core Cursor Icon ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] select-none flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          fontSize: isHovering ? "18px" : "15px",
          lineHeight: 1,
          filter: isHovering
            ? "drop-shadow(0 0 8px rgba(245,166,35,0.9)) drop-shadow(0 0 16px rgba(245,166,35,0.5))"
            : "drop-shadow(0 0 8px rgba(107,60,255,0.9)) drop-shadow(0 0 16px rgba(107,60,255,0.5))",
        }}
        animate={{
          scale: isClicking ? 0.7 : 1,
          rotateY: isHovering ? [0, 360] : 0,
        }}
        transition={{
          scale: { type: "spring", stiffness: 600, damping: 20 },
          rotateY: { duration: 0.5, ease: "easeInOut" },
        }}
      >
        {/* Shield when normal, Coin when hovering a link/button */}
        {isHovering ? "💰" : "🛡️"}
      </motion.div>
    </>
  );
}
