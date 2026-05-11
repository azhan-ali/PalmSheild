"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stats = [
  { value: "$0.01", label: "Avg Tx Fee", color: "#6B3CFF" },
  { value: "~10%", label: "Yield APY", color: "#00C896" },
  { value: "< 1s", label: "Settlement", color: "#F5A623" },
  { value: "0.5%", label: "Platform Fee", color: "#6B3CFF" },
];

const steps = [
  { icon: "🔐", title: "Lock Funds", desc: "Client locks PUSD into a non-custodial smart contract vault. Funds immediately start earning yield via Kamino Finance.", color: "#6B3CFF" },
  { icon: "⚡", title: "Submit Work", desc: "Freelancer delivers milestone-by-milestone. Each submission starts a 7-day auto-release timer — no ghosting.", color: "#00C896" },
  { icon: "💎", title: "Get Paid", desc: "Client approves → PUSD released instantly. Both parties earn a permanent on-chain Reputation NFT.", color: "#F5A623" },
];

const features = [
  { icon: "🛡️", title: "Non-Custodial Escrow", desc: "Your funds live in a Solana smart contract. No company, no middleman, no freeze risk.", bg: "rgba(107,60,255,0.08)", border: "rgba(107,60,255,0.2)" },
  { icon: "📈", title: "Yield-Bearing Vaults", desc: "Locked PUSD earns ~10% APY on Kamino Finance. Your money works while you work.", bg: "rgba(0,200,150,0.08)", border: "rgba(0,200,150,0.2)", highlight: true },
  { icon: "⚖️", title: "Decentralized Disputes", desc: "Community arbitrators stake PUSD to vote. Honest voters earn rewards. Bad actors get slashed.", bg: "rgba(245,166,35,0.08)", border: "rgba(245,166,35,0.2)" },
  { icon: "🏆", title: "Reputation NFTs", desc: "Every completed milestone mints an un-fakeable, permanent NFT as proof of trust and skill.", bg: "rgba(107,60,255,0.08)", border: "rgba(107,60,255,0.2)" },
  { icon: "🌍", title: "Censorship Resistant", desc: "Powered by PUSD stablecoin. No government or corporation can freeze your hard-earned funds.", bg: "rgba(0,200,150,0.08)", border: "rgba(0,200,150,0.2)" },
  { icon: "⏰", title: "Auto-Release Timers", desc: "7 days after submission, funds auto-release to the freelancer. No more client ghosting.", bg: "rgba(245,166,35,0.08)", border: "rgba(245,166,35,0.2)" },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      
      {/* ═══ HERO ═══ */}
      <section className="relative flex flex-col items-center text-center pt-28 pb-32 md:pt-36 md:pb-40 max-w-[900px] px-6 w-full">
        {/* Decorative hero glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-[radial-gradient(ellipse_at_center,rgba(107,60,255,0.12)_0%,transparent_60%)] -z-10" />
        
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <Badge variant="pill" showLiveDot className="mb-8 border-[rgba(0,200,150,0.3)] bg-[rgba(0,200,150,0.06)] text-[#00C896] shadow-[0_0_25px_rgba(0,200,150,0.15)] backdrop-blur-sm">
            Live on Solana Devnet
          </Badge>
        </motion.div>
        
        <motion.h1 
          className="text-[56px] sm:text-[72px] md:text-[88px] font-extrabold tracking-[-3px] leading-[0.95] mb-8"
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
        >
          <span className="block text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.05)]">Trustless Work.</span>
          <span className="block grad-text mt-1">Guaranteed Pay.</span>
        </motion.h1>
        
        <motion.p 
          className="text-[17px] sm:text-[19px] text-[rgba(240,238,230,0.6)] leading-[1.7] max-w-[560px] mb-14"
          variants={fadeUp} initial="hidden" animate="visible" custom={2}
        >
          The first decentralized, yield-bearing escrow for Web3 freelancers. Lock PUSD, earn interest while you work, get paid with zero trust required.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-5"
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
        >
          <Button href="/projects/create" size="lg" className="h-[52px] px-10 text-[16px] shadow-[0_0_35px_rgba(107,60,255,0.35)] hover:shadow-[0_0_50px_rgba(107,60,255,0.5)] transition-all duration-300">
            Lock Funds Now →
          </Button>
          <Button href="/projects/browse" variant="secondary" size="lg" className="h-[52px] px-10 text-[16px] border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] transition-all duration-300">
            Find Web3 Gigs
          </Button>
        </motion.div>
      </section>

      {/* ═══ STATS STRIP ═══ */}
      <motion.section 
        className="w-full border-y border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.015)] backdrop-blur-sm py-10 mb-28"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              className="flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <span className="font-mono text-[28px] font-bold mb-1" style={{ color: stat.color }}>{stat.value}</span>
              <span className="text-[11px] text-text-muted tracking-[1px] uppercase">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="max-w-5xl mx-auto px-6 w-full mb-32">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <Badge variant="pill" className="mb-6">How it works</Badge>
          <h2 className="text-[36px] sm:text-[44px] font-bold tracking-[-1.5px]">Three Steps to <span className="grad-text">Trustless Payments</span></h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[40px] left-[18%] right-[18%] h-[1px] bg-gradient-to-r from-transparent via-[rgba(107,60,255,0.3)] to-transparent z-0" />
          
          {steps.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="flex flex-col items-center text-center relative z-10"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
            >
              <div 
                className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center mb-6 text-[28px] border shadow-lg"
                style={{ 
                  background: `${item.color}15`, 
                  borderColor: `${item.color}30`,
                  boxShadow: `0 0 30px ${item.color}15`
                }}
              >
                {item.icon}
              </div>
              <span className="text-[11px] font-mono text-text-muted uppercase tracking-[2px] mb-3">Step {idx + 1}</span>
              <h3 className="text-[20px] font-bold tracking-[-0.3px] mb-3">{item.title}</h3>
              <p className="text-[15px] text-text-secondary leading-[1.7] max-w-[280px]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="max-w-6xl mx-auto px-6 w-full mb-32">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <Badge variant="pill" className="mb-6">Platform Features</Badge>
          <h2 className="text-[36px] sm:text-[44px] font-bold tracking-[-1.5px]">Built for the <span className="grad-text">Future of Work</span></h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              className={`group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 overflow-hidden ${f.highlight ? 'ring-1 ring-[rgba(0,200,150,0.2)]' : ''}`}
              style={{ background: f.bg, borderColor: f.border }}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-[22px] border"
                style={{ background: f.bg, borderColor: f.border }}
              >
                {f.icon}
              </div>
              <h3 className="text-[16px] font-bold tracking-[-0.2px] mb-2 text-white">{f.title}</h3>
              <p className="text-[14px] text-text-secondary leading-[1.7]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <motion.section 
        className="w-full max-w-5xl mx-auto px-6 mb-24"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      >
        <div className="relative rounded-3xl border border-[rgba(107,60,255,0.2)] bg-[rgba(107,60,255,0.04)] p-12 md:p-16 text-center overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6B3CFF] to-transparent opacity-60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(107,60,255,0.08)_0%,transparent_70%)]" />
          
          <h2 className="text-[32px] sm:text-[40px] font-bold tracking-[-1.5px] mb-4 relative z-10">
            Ready to Work <span className="grad-text">Without Fear?</span>
          </h2>
          <p className="text-text-secondary text-[16px] max-w-[500px] mx-auto mb-10 relative z-10">
            Join the next generation of freelancers and clients who trust code, not corporations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative z-10">
            <Button href="/projects/create" size="lg" className="h-[52px] px-10 text-[16px] shadow-[0_0_35px_rgba(107,60,255,0.35)]">
              Start Building →
            </Button>
            <Button href="/projects/browse" variant="secondary" size="lg" className="h-[52px] px-10 text-[16px]">
              Explore Projects
            </Button>
          </div>
        </div>
      </motion.section>

      {/* ═══ FOOTER ═══ */}
      <footer className="w-full border-t border-[rgba(255,255,255,0.06)] bg-[rgba(0,0,0,0.3)] py-12 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-lg">🛡️</span>
            <span className="font-bold text-[15px]">PalmShield</span>
            <span className="text-text-muted text-[13px] ml-2">Built on Solana</span>
          </div>
          <div className="flex items-center gap-8 text-[13px] text-text-muted">
            <Link href="/projects/browse" className="hover:text-white transition-colors">Browse</Link>
            <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
            <Link href="/projects/create" className="hover:text-white transition-colors">Create</Link>
          </div>
          <span className="text-[12px] text-text-muted">© 2026 PalmShield. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
