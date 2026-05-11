"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#030408] overflow-hidden">
      
      {/* 0. Slow Aurora Nebula */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 30%, rgba(107,60,255,0.18) 0%, transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(0,200,150,0.12) 0%, transparent 55%)",
            "radial-gradient(ellipse at 70% 20%, rgba(107,60,255,0.12) 0%, transparent 55%), radial-gradient(ellipse at 30% 80%, rgba(0,200,150,0.18) 0%, transparent 55%)",
            "radial-gradient(ellipse at 20% 30%, rgba(107,60,255,0.18) 0%, transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(0,200,150,0.12) 0%, transparent 55%)",
          ]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* 1. Perspective Grid Floor */}
      <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
        <div 
          className="absolute w-[250vw] h-[120vh] opacity-[0.12]" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(107,60,255,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(107,60,255,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            transform: "perspective(600px) rotateX(75deg)",
            transformOrigin: "bottom center",
            maskImage: "linear-gradient(to top, black 0%, transparent 60%)",
            WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 60%)"
          }}
        />
      </div>
      
      {/* 2. Mouse-tracking Glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-30 blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(107,60,255,0.5) 0%, rgba(0,200,150,0.15) 50%, transparent 100%)",
        }}
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 120,
          mass: 0.8,
        }}
      />

      {/* 3. Ambient Orbs */}
      <motion.div 
        className="absolute rounded-full"
        animate={{ y: [0, -60, 0], x: [0, 40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        style={{ width: "500px", height: "500px", background: "rgba(107,60,255,0.12)", top: "-15%", left: "-8%", filter: "blur(130px)" }}
      />
      <motion.div 
        className="absolute rounded-full"
        animate={{ y: [0, 50, 0], x: [0, -50, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{ width: "400px", height: "400px", background: "rgba(0,200,150,0.10)", bottom: "-15%", right: "-8%", filter: "blur(110px)" }}
      />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* 4. THE CYBERPUNK HOLOGRAM GLOBE — Full 3D Rotation      */}
      {/* ═══════════════════════════════════════════════════════ */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] pointer-events-none flex items-center justify-center opacity-[0.35]" 
        style={{ perspective: "1600px" }}
      >
        {/* Spinning Globe Sphere */}
        <motion.div 
          className="w-[480px] h-[480px] relative"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        >
          {/* Latitudes (Green Rings) — with glowing intersection nodes */}
          {[...Array(8)].map((_, i) => (
            <div 
              key={`lat-${i}`}
              className="absolute inset-0 rounded-full"
              style={{ 
                transform: `rotateX(${i * (180 / 8)}deg)`,
                border: `1.5px solid rgba(0,200,150,${0.35 + (i % 3) * 0.15})`,
                boxShadow: `0 0 12px rgba(0,200,150,0.3), inset 0 0 12px rgba(0,200,150,0.05)`,
              }}
            >
              {/* Node dot at top of each ring */}
              <div className="absolute top-0 left-1/2 w-[4px] h-[4px] bg-[#00C896] rounded-full shadow-[0_0_10px_#00C896,0_0_20px_#00C896] -translate-x-1/2 -translate-y-1/2" />
              {/* Node dot at bottom */}
              <div className="absolute bottom-0 left-1/2 w-[3px] h-[3px] bg-[#00C896] rounded-full shadow-[0_0_8px_#00C896] -translate-x-1/2 translate-y-1/2" />
            </div>
          ))}

          {/* Longitudes (Purple Rings) — with glowing intersection nodes */}
          {[...Array(8)].map((_, i) => (
            <div 
              key={`lng-${i}`}
              className="absolute inset-0 rounded-full"
              style={{ 
                transform: `rotateY(${i * (180 / 8)}deg)`,
                border: `1.5px solid rgba(107,60,255,${0.35 + (i % 3) * 0.15})`,
                boxShadow: `0 0 12px rgba(107,60,255,0.3), inset 0 0 12px rgba(107,60,255,0.05)`,
              }}
            >
              <div className="absolute top-1/2 left-0 w-[4px] h-[4px] bg-[#6B3CFF] rounded-full shadow-[0_0_10px_#6B3CFF,0_0_20px_#6B3CFF] -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute top-1/2 right-0 w-[3px] h-[3px] bg-[#6B3CFF] rounded-full shadow-[0_0_8px_#6B3CFF] translate-x-1/2 -translate-y-1/2" />
            </div>
          ))}
          
          {/* Pulsing Energy Core */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(107,60,255,0.6) 0%, rgba(0,200,150,0.3) 40%, transparent 70%)" }}
            animate={{ scale: [1, 1.6, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* ── Orbiting Ring 1: Amber, fast, tilted ── */}
        <motion.div
          className="absolute w-[750px] h-[750px] rounded-full"
          style={{ 
            transformStyle: "preserve-3d",
            border: "2px dashed rgba(245,166,35,0.45)",
            boxShadow: "0 0 20px rgba(245,166,35,0.1)",
          }}
          animate={{ rotateZ: 360, rotateX: [60, 80, 60], rotateY: [10, -10, 10] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          {/* Orbiting particle on ring 1 */}
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[8px] h-[8px] rounded-full bg-[#F5A623] shadow-[0_0_12px_#F5A623,0_0_30px_rgba(245,166,35,0.5)]"
          />
        </motion.div>

        {/* ── Orbiting Ring 2: Green, slow, opposite tilt ── */}
        <motion.div
          className="absolute w-[900px] h-[900px] rounded-full"
          style={{ 
            transformStyle: "preserve-3d",
            border: "1.5px dashed rgba(0,200,150,0.3)",
            boxShadow: "0 0 25px rgba(0,200,150,0.08)",
          }}
          animate={{ rotateZ: -360, rotateX: [70, 50, 70], rotateY: [-20, 20, -20] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-[#00C896] shadow-[0_0_10px_#00C896,0_0_25px_rgba(0,200,150,0.5)]"
          />
        </motion.div>

        {/* ── Orbiting Ring 3: Purple, medium speed, steep tilt ── */}
        <motion.div
          className="absolute w-[620px] h-[620px] rounded-full"
          style={{ 
            transformStyle: "preserve-3d",
            border: "1px solid rgba(107,60,255,0.25)",
            boxShadow: "0 0 15px rgba(107,60,255,0.08)",
          }}
          animate={{ rotateZ: 360, rotateX: [80, 60, 80], rotateY: [30, -30, 30] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          <motion.div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[5px] h-[5px] rounded-full bg-[#A98EFF] shadow-[0_0_8px_#A98EFF,0_0_20px_rgba(107,60,255,0.4)]"
          />
        </motion.div>
      </div>

      {/* 5. Tiny floating star particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            width: `${1 + Math.random() * 2.5}px`,
            height: `${1 + Math.random() * 2.5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: "0 0 6px rgba(255,255,255,0.6)"
          }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [0, -(60 + Math.random() * 140)],
          }}
          transition={{
            duration: 8 + Math.random() * 12,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 8,
          }}
        />
      ))}
    </div>
  );
}
