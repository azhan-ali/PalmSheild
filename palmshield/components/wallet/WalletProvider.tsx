"use client";

import React, { FC, useMemo, useCallback } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork, WalletError } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { SolflareWalletAdapter } from "@solana/wallet-adapter-solflare";
import { clusterApiUrl } from "@solana/web3.js";
import { NEXT_PUBLIC_SOLANA_NETWORK, NEXT_PUBLIC_SOLANA_RPC_URL } from "@/constants";
import toast from "react-hot-toast";

import "@solana/wallet-adapter-react-ui/styles.css";

export const AppWalletProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const network = NEXT_PUBLIC_SOLANA_NETWORK as WalletAdapterNetwork;
  const endpoint = useMemo(
    () => NEXT_PUBLIC_SOLANA_RPC_URL || clusterApiUrl(network),
    [network]
  );

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
    ],
    []
  );

  const onError = useCallback((error: WalletError) => {
    // WalletNotReadyError = wallet extension not installed
    if (error.name === "WalletNotReadyError") {
      toast.error("Wallet not found. Please install Phantom or Solflare.", { id: "wallet-not-found" });
    } else if (error.name === "WalletConnectionError") {
      toast.error("Connection rejected. Please try again.", { id: "wallet-conn-err" });
    } else {
      console.error("[Wallet Error]", error.name, error.message);
    }
  }, []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect onError={onError}>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
