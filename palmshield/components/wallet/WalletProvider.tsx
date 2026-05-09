"use client";

import React, { FC, useMemo } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { NEXT_PUBLIC_SOLANA_NETWORK, NEXT_PUBLIC_SOLANA_RPC_URL } from "@/constants";

require("@solana/wallet-adapter-react-ui/styles.css");

export const AppWalletProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const network = NEXT_PUBLIC_SOLANA_NETWORK as WalletAdapterNetwork;
  const endpoint = useMemo(() => NEXT_PUBLIC_SOLANA_RPC_URL || clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({ network }),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
