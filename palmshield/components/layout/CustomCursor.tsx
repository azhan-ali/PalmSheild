"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  // Custom cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring animation for smooth trailing
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    // Add cursor styles to all interactive elements
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      * { cursor: none !important; }
    `;
    document.head.appendChild(styleElement);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.palm-card');
        
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.body.style.cursor = 'auto';
      document.head.removeChild(styleElement);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  // Main dot size
  const dotSize = isClicking ? 6 : isHovering ? 4 : 8;
  
  // Outer ring size
  const ringSize = isClicking ? 24 : isHovering ? 48 : 32;

  return (
    <>
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center mix-blend-screen"
        style={{
          width: ringSize,
          height: ringSize,
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          border: isHovering ? "1px solid rgba(0, 200, 150, 0.8)" : "1px solid rgba(107, 60, 255, 0.4)",
          backgroundColor: isHovering ? "rgba(0, 200, 150, 0.05)" : "transparent",
          boxShadow: isHovering ? "0 0 15px rgba(0, 200, 150, 0.4)" : "0 0 10px rgba(107, 60, 255, 0.2)",
        }}
        animate={{
          width: ringSize,
          height: ringSize,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[10000]"
        style={{
          width: dotSize,
          height: dotSize,
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: isHovering ? "#00C896" : "#6B3CFF",
          boxShadow: isHovering ? "0 0 8px #00C896" : "0 0 8px #6B3CFF",
        }}
        animate={{
          width: dotSize,
          height: dotSize,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
      />
    </>
  );
}
