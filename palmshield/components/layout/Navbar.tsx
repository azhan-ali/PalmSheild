"use client";

import React from "react";
import Link from "next/link";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

export function Navbar() {
  const { connected, publicKey, disconnect } = useWallet();
  const { setVisible } = useWalletModal();

  const handleConnect = () => {
    if (connected) {
      disconnect();
    } else {
      setVisible(true);
    }
  };

  return (
    <nav className="sticky top-0 z-50 h-[64px] bg-[rgba(8,11,20,0.8)] backdrop-blur-[20px] border-b border-border-default flex items-center justify-between px-6">
      <Link href="/" className="flex items-center gap-2">
        <span className="text-xl">🛡️</span>
        <span className="font-sans font-bold text-[18px] text-text-primary">PalmShield</span>
      </Link>
      
      <div className="flex items-center gap-6">
        <Link href="/projects/browse" className="text-[13px] text-text-secondary hover:text-text-primary transition-colors">
          Browse Projects
        </Link>
        <Link href="/dashboard" className="text-[13px] text-text-secondary hover:text-text-primary transition-colors">
          Dashboard
        </Link>
        
        <button 
          onClick={handleConnect}
          className="bg-gradient-to-br from-accent-purple to-[#4A20E0] rounded-[8px] px-[18px] py-[8px] font-sans font-medium text-[13px] text-white shadow-[0_0_20px_rgba(107,60,255,0.25)] hover:brightness-110 hover:-translate-y-[1px] active:translate-y-0 transition-all flex items-center gap-2"
        >
          {connected && publicKey ? (
            <>
              <div className="w-[6px] h-[6px] rounded-full bg-accent-green" />
              <span className="font-mono">{publicKey.toBase58().slice(0, 4)}...{publicKey.toBase58().slice(-4)}</span>
              <span className="opacity-70 ml-1">| 0 PUSD</span>
            </>
          ) : (
            "Connect Wallet"
          )}
        </button>
      </div>
    </nav>
  );
}
