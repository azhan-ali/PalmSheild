import type { Metadata } from "next";
import localFont from "next/font/local";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { AppWalletProvider } from "@/components/wallet/WalletProvider";
import { Navbar } from "@/components/layout/Navbar";
import { AnimatedBackground } from "@/components/layout/AnimatedBackground";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Toaster } from "react-hot-toast";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono" });

export const metadata: Metadata = {
  title: "PalmShield | Decentralized Freelance Escrow",
  description: "Secure, non-custodial, yield-bearing smart contract escrow for Web3 freelancers and clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body
        className="font-sans bg-background-primary text-text-primary antialiased min-h-screen flex flex-col relative overflow-x-hidden"
      >
        <Toaster position="bottom-right" toastOptions={{ style: { background: '#111', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' } }} />
        <CustomCursor />
        <AppWalletProvider>
          <AnimatedBackground />
          <Navbar />
          <main className="relative z-10 flex-grow">
            {children}
          </main>
        </AppWalletProvider>
      </body>
    </html>
  );
}
