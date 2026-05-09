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
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#030407] overflow-hidden">
      
      {/* 0. Organic Aurora Mesh (NEW) */}
      <motion.div 
        className="absolute inset-0 opacity-40 mix-blend-screen"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(107,60,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0,200,150,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 30%, rgba(107,60,255,0.1) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(0,200,150,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 30%, rgba(107,60,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0,200,150,0.1) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* 1. Deep Space Tech Grid (ENHANCED) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="absolute w-[200vw] h-[200vh] opacity-[0.25]" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(107,60,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(107,60,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            transform: "perspective(800px) rotateX(75deg) translateY(-100px) translateZ(-200px)",
            maskImage: "radial-gradient(ellipse at center, black 10%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 10%, transparent 70%)"
          }}
        />
      </div>
      
      {/* 2. Interactive Cursor Glow (EXISTING) */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-40 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(107,60,255,0.6) 0%, rgba(0,200,150,0.2) 50%, transparent 100%)",
        }}
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 150,
          mass: 0.5,
        }}
      />

      {/* 3. Floating Ambient Orbs (ENHANCED) */}
      <motion.div 
        className="absolute rounded-full"
        animate={{
          y: [0, -80, 0],
          x: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: "600px", height: "600px",
          background: "rgba(107,60,255,0.15)",
          top: "-20%", left: "-10%",
          filter: "blur(140px)",
        }}
      />
      
      <motion.div 
        className="absolute rounded-full"
        animate={{
          y: [0, 60, 0],
          x: [0, -60, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          width: "500px", height: "500px",
          background: "rgba(0,200,150,0.12)",
          bottom: "-20%", right: "-10%",
          filter: "blur(120px)",
        }}
      />

      {/* 4. ENHANCED: Cyberpunk 3D Hologram Globe */}
      <div 
        className="absolute top-1/2 left-[80%] md:left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] mix-blend-screen pointer-events-none flex items-center justify-center opacity-40 md:opacity-80" 
        style={{ perspective: "1500px" }}
      >
        <motion.div 
          className="w-[450px] h-[450px] relative"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {/* Latitudes (Green) with Glowing Nodes */}
          {[...Array(6)].map((_, i) => (
            <div 
              key={`lat-${i}`}
              className="absolute inset-0 rounded-full border-[1.5px] border-[#00C896] shadow-[0_0_20px_rgba(0,200,150,0.6)] opacity-70"
              style={{ transform: `rotateX(${i * (180 / 6)}deg)` }}
            >
              <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white] -translate-x-1/2 -translate-y-1/2" />
            </div>
          ))}
          {/* Longitudes (Purple) */}
          {[...Array(6)].map((_, i) => (
            <div 
              key={`lng-${i}`}
              className="absolute inset-0 rounded-full border-[1.5px] border-[#6B3CFF] shadow-[0_0_20px_rgba(107,60,255,0.6)] opacity-70"
              style={{ transform: `rotateY(${i * (180 / 6)}deg)` }}
            >
              <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white] -translate-x-1/2 -translate-y-1/2" />
            </div>
          ))}
          
          {/* Pulsing Core Energy */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-gradient-to-br from-[#6B3CFF] to-[#00C896] blur-[60px] rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Orbiting Data Rings (Faster, Thicker) */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full border-[3px] border-dotted border-[#F5A623] opacity-50"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateZ: 360, rotateX: [65, 85, 65], rotateY: [15, -15, 15] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[950px] h-[950px] rounded-full border-[2px] border-dashed border-[#00C896] opacity-30 shadow-[0_0_30px_rgba(0,200,150,0.2)]"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateZ: -360, rotateX: [75, 55, 75], rotateY: [-25, 25, -25] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* 5. NEW: Floating Glass 3D Cards / Elements */}
      <motion.div 
        className="absolute top-[20%] left-[10%] w-[140px] h-[180px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] rounded-2xl backdrop-blur-md p-4 flex flex-col justify-between shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ y: [0, -40, 0], rotateX: [10, -10, 10], rotateY: [15, -15, 15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex justify-between items-start">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6B3CFF] to-[#00C896] shadow-[0_0_15px_rgba(0,200,150,0.5)]" />
          <span className="text-[10px] font-mono text-[#00C896]">LOCKED</span>
        </div>
        <div className="space-y-2">
          <div className="w-full h-2 bg-[rgba(255,255,255,0.1)] rounded-full" />
          <div className="w-2/3 h-2 bg-[rgba(255,255,255,0.1)] rounded-full" />
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-[25%] right-[15%] w-[160px] h-[80px] bg-[rgba(255,255,255,0.02)] border border-[#F5A623] rounded-2xl backdrop-blur-md p-4 flex items-center gap-3 shadow-[0_0_30px_rgba(245,166,35,0.1)]"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ y: [0, 30, 0], rotateX: [-15, 15, -15], rotateY: [-20, 20, -20] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="w-10 h-10 rounded-xl bg-[rgba(245,166,35,0.2)] flex items-center justify-center text-lg">⚖️</div>
        <div>
          <div className="w-16 h-2 bg-[rgba(255,255,255,0.2)] rounded-full mb-2" />
          <div className="w-10 h-2 bg-[rgba(255,255,255,0.1)] rounded-full" />
        </div>
      </motion.div>

      {/* 6. Floating Geometric Particles (EXISTING, slightly dimmed) */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2 + "px",
            height: Math.random() * 4 + 2 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            background: "rgba(255,255,255,0.4)",
            boxShadow: "0 0 10px rgba(255,255,255,0.8)"
          }}
          animate={{
            y: [0, Math.random() * -200 - 100],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}
