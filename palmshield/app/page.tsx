import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center w-full pb-20 animate-in fade-in slide-in-from-bottom-2 duration-300">
      
      {/* Premium Hero Section */}
      <section className="relative flex flex-col items-center text-center mt-32 mb-24 max-w-[800px] px-6">
        
        {/* Decorative background glow for the hero text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-[rgba(107,60,255,0.15)] via-transparent to-[rgba(0,200,150,0.15)] blur-[80px] -z-10" />

        <Badge variant="pill" showLiveDot className="mb-8 border-[rgba(0,200,150,0.3)] bg-[rgba(0,200,150,0.05)] text-[#00C896] shadow-[0_0_20px_rgba(0,200,150,0.2)]">
          PalmShield is Live on Solana Devnet
        </Badge>
        
        <h1 className="text-[64px] md:text-[80px] font-extrabold tracking-[-2px] leading-[1.05] mb-8 drop-shadow-2xl">
          <span className="block text-white">Trustless Work.</span>
          <span className="block grad-text pb-2">Guaranteed Pay.</span>
        </h1>
        
        <p className="text-[18px] md:text-[20px] text-[rgba(240,238,230,0.7)] leading-[1.6] max-w-[600px] mb-12 font-medium">
          The first decentralized, yield-bearing escrow platform. Lock PUSD, earn interest while you work, and eliminate the middleman completely.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
          <Button asChild size="lg" className="h-14 px-8 text-lg shadow-[0_0_30px_rgba(107,60,255,0.4)] hover:shadow-[0_0_40px_rgba(107,60,255,0.6)] transition-shadow">
            <Link href="/projects/create">Lock Funds Now</Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="h-14 px-8 text-lg border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.05)]">
            <Link href="/projects/browse">Find Web3 Gigs</Link>
          </Button>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="w-full border-y border-border-default bg-[rgba(255,255,255,0.01)] py-8 mb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border-default">
          <div className="flex flex-col items-center justify-center">
            <span className="font-mono text-[22px] font-bold grad-text mb-1">$0.01</span>
            <span className="text-[11px] text-text-muted tracking-[0.3px] uppercase">Avg Tx Fee</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-mono text-[22px] font-bold grad-text mb-1">~10%</span>
            <span className="text-[11px] text-text-muted tracking-[0.3px] uppercase">Earned Yield</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-mono text-[22px] font-bold grad-text mb-1">&lt; 1s</span>
            <span className="text-[11px] text-text-muted tracking-[0.3px] uppercase">Settlement</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-mono text-[22px] font-bold grad-text mb-1">0.5%</span>
            <span className="text-[11px] text-text-muted tracking-[0.3px] uppercase">Platform Fee</span>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 w-full mb-32">
        <h2 className="text-[32px] font-bold tracking-[-1px] text-center mb-16">How PalmShield Works</h2>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[18px] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-[rgba(255,255,255,0.1)] z-0" />
          
          {[
            { step: "1", title: "Lock Funds", desc: "Client locks PUSD in the non-custodial smart contract vault. It immediately starts earning yield." },
            { step: "2", title: "Submit Work", desc: "Freelancer completes milestones and submits work. A 7-day auto-release timer guarantees payment." },
            { step: "3", title: "Get Paid", desc: "Client approves work. PUSD is released to the freelancer, and both parties receive a Reputation NFT." }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative z-10">
              <div className="w-[36px] h-[36px] rounded-full border border-[rgba(107,60,255,0.4)] bg-background-primary text-[#A98EFF] font-mono text-[14px] flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(107,60,255,0.15)]">
                {item.step}
              </div>
              <h3 className="text-[15px] font-semibold tracking-[-0.2px] mb-3">{item.title}</h3>
              <p className="text-[15px] text-text-secondary leading-[1.65] px-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-6 w-full">
        <h2 className="text-[32px] font-bold tracking-[-1px] text-center mb-16">Platform Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <div className="w-10 h-10 rounded-[10px] bg-[rgba(107,60,255,0.15)] flex items-center justify-center mb-5">
              <span className="text-xl">🔒</span>
            </div>
            <h3 className="text-[15px] font-semibold tracking-[-0.2px] mb-2">Non-Custodial Escrow</h3>
            <p className="text-[15px] text-text-secondary leading-[1.65]">
              Funds are locked in a smart contract. No central company can hold your money hostage.
            </p>
          </Card>
          <Card active>
            <div className="w-10 h-10 rounded-[10px] bg-[rgba(0,200,150,0.15)] flex items-center justify-center mb-5">
              <span className="text-xl">💰</span>
            </div>
            <h3 className="text-[15px] font-semibold tracking-[-0.2px] mb-2">Yield-Bearing</h3>
            <p className="text-[15px] text-text-secondary leading-[1.65]">
              Locked PUSD earns interest on Kamino Finance. Both client and freelancer get paid while waiting.
            </p>
          </Card>
          <Card>
            <div className="w-10 h-10 rounded-[10px] bg-[rgba(245,166,35,0.15)] flex items-center justify-center mb-5">
              <span className="text-xl">⚖️</span>
            </div>
            <h3 className="text-[15px] font-semibold tracking-[-0.2px] mb-2">Decentralized Dispute</h3>
            <p className="text-[15px] text-text-secondary leading-[1.65]">
              Random community arbitrators vote on disputes. Honest voters are rewarded, bad actors are slashed.
            </p>
          </Card>
          <Card>
            <div className="w-10 h-10 rounded-[10px] bg-[rgba(107,60,255,0.15)] flex items-center justify-center mb-5">
              <span className="text-xl">🏆</span>
            </div>
            <h3 className="text-[15px] font-semibold tracking-[-0.2px] mb-2">Reputation NFTs</h3>
            <p className="text-[15px] text-text-secondary leading-[1.65]">
              Completed milestones mint un-fakeable, permanent NFTs as proof of your work and trust score.
            </p>
          </Card>
          <Card>
            <div className="w-10 h-10 rounded-[10px] bg-[rgba(0,200,150,0.15)] flex items-center justify-center mb-5">
              <span className="text-xl">🌍</span>
            </div>
            <h3 className="text-[15px] font-semibold tracking-[-0.2px] mb-2">Censorship Resistant</h3>
            <p className="text-[15px] text-text-secondary leading-[1.65]">
              Powered by PUSD. No government or corporation can freeze or confiscate your hard-earned funds.
            </p>
          </Card>
          <Card>
            <div className="w-10 h-10 rounded-[10px] bg-[rgba(245,166,35,0.15)] flex items-center justify-center mb-5">
              <span className="text-xl">⏰</span>
            </div>
            <h3 className="text-[15px] font-semibold tracking-[-0.2px] mb-2">Auto-Release Timers</h3>
            <p className="text-[15px] text-text-secondary leading-[1.65]">
              7 days after work submission, funds automatically release to the freelancer if the client ghosts.
            </p>
          </Card>
        </div>
      </section>

    </div>
  );
}
