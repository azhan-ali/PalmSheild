"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProfilePage() {
  const { wallet } = useParams();
  const [nfts, setNfts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // In a real app, you would fetch this from the API or directly from the blockchain
  useEffect(() => {
    // Simulating fetching NFTs from DB or Helius RPC
    setTimeout(() => {
      setNfts([
        { id: 1, type: "FREELANCER_MILESTONE", title: "Build Web3 Landing Page", amount: 500, date: "2026-04-15" },
        { id: 2, type: "FREELANCER_MILESTONE", title: "Smart Contract Audit", amount: 1200, date: "2026-03-22" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <div className="mb-12 flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-purple to-[#00C896] mb-4 flex items-center justify-center p-1">
          <div className="w-full h-full bg-background-primary rounded-full flex items-center justify-center">
            <span className="text-3xl">👾</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold font-mono mb-2">
          {wallet ? `${(wallet as string).slice(0,6)}...${(wallet as string).slice(-4)}` : "Unknown Wallet"}
        </h1>
        <Badge variant="pill">PalmShield Verified</Badge>
      </div>

      <h2 className="text-2xl font-bold mb-6">On-Chain Reputation (NFTs)</h2>
      
      {loading ? (
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i => <div key={i} className="h-64 bg-[rgba(255,255,255,0.03)] rounded-2xl animate-pulse" />)}
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {nfts.map((nft) => (
            <Card key={nft.id} className="flex flex-col items-center text-center p-8 group hover:shadow-[0_0_30px_rgba(107,60,255,0.2)]">
              <div className="w-20 h-20 mb-6 rounded-2xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">🏆</span>
              </div>
              <Badge variant="pending" className="mb-4 text-[10px]">{nft.type.replace('_', ' ')}</Badge>
              <h3 className="font-bold mb-2 line-clamp-1">{nft.title}</h3>
              <p className="text-[#00C896] font-mono font-bold text-lg">{nft.amount} PUSD</p>
              <p className="text-xs text-text-muted mt-4">{nft.date}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
