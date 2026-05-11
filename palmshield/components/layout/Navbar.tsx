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
    <nav className="sticky top-0 z-50 h-[60px] bg-[rgba(3,4,8,0.7)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)] flex items-center justify-between px-6 md:px-10">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 group">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6B3CFF] to-[#00C896] flex items-center justify-center shadow-[0_0_15px_rgba(107,60,255,0.3)] group-hover:shadow-[0_0_25px_rgba(107,60,255,0.5)] transition-shadow">
          <span className="text-white text-sm font-bold">PS</span>
        </div>
        <span className="font-bold text-[17px] text-white tracking-[-0.5px]">PalmShield</span>
      </Link>
      
      {/* Navigation Links */}
      <div className="hidden sm:flex items-center gap-1">
        <Link href="/projects/browse" className="px-4 py-2 text-[13px] text-[rgba(240,238,230,0.5)] hover:text-white hover:bg-[rgba(255,255,255,0.04)] rounded-lg transition-all duration-200">
          Browse
        </Link>
        <Link href="/dashboard" className="px-4 py-2 text-[13px] text-[rgba(240,238,230,0.5)] hover:text-white hover:bg-[rgba(255,255,255,0.04)] rounded-lg transition-all duration-200">
          Dashboard
        </Link>
        <Link href="/projects/create" className="px-4 py-2 text-[13px] text-[rgba(240,238,230,0.5)] hover:text-white hover:bg-[rgba(255,255,255,0.04)] rounded-lg transition-all duration-200">
          Create
        </Link>
      </div>

      {/* Wallet Button */}
      <button 
        onClick={handleConnect}
        className="h-9 bg-gradient-to-r from-[#6B3CFF] to-[#4A20E0] rounded-lg px-5 font-medium text-[13px] text-white shadow-[0_0_20px_rgba(107,60,255,0.25)] hover:shadow-[0_0_30px_rgba(107,60,255,0.4)] hover:brightness-110 active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
      >
        {connected && publicKey ? (
          <>
            <div className="w-[6px] h-[6px] rounded-full bg-[#00C896] shadow-[0_0_8px_rgba(0,200,150,0.6)]" />
            <span className="font-mono text-[12px]">{publicKey.toBase58().slice(0, 4)}...{publicKey.toBase58().slice(-4)}</span>
          </>
        ) : (
          "Connect Wallet"
        )}
      </button>
    </nav>
  );
}
