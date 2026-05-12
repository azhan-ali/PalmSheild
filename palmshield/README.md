<div align="center">

<br/>

<img src="https://img.shields.io/badge/-%F0%9F%9B%A1%EF%B8%8F%20PALMSHIELD-6B3CFF?style=for-the-badge&labelColor=030408&color=6B3CFF" height="40"/>

# Trustless Work. Guaranteed Pay.

**The Web3 freelance platform where your money works as hard as you do.**  
*Lock funds. Earn yield. Get paid. No trust required.*

<br/>

[![Solana](https://img.shields.io/badge/Solana-Devnet_Live-9945FF?style=flat-square&logo=solana&logoColor=white)](https://solana.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Anchor](https://img.shields.io/badge/Anchor-Rust_Smart_Contracts-E45229?style=flat-square)](https://anchor-lang.com)
[![Prisma](https://img.shields.io/badge/Prisma-PostgreSQL-2D3748?style=flat-square&logo=prisma)](https://prisma.io)
[![License](https://img.shields.io/badge/License-MIT-00C896?style=flat-square)](LICENSE)

<br/>

</div>

---

## 🤯 The Problem

Every freelancer has been there. You deliver the work. The client ghosts you. Your money is gone.

Every client has been there too. You pay upfront. The freelancer disappears. No recourse. No refund.

The traditional freelance economy is **built on blind trust** — and blind trust fails every single day.

---

## 🛡️ The Solution

**PalmShield** makes payment disputes *mathematically impossible*.

Client funds are locked inside a **Solana smart contract** the moment a project is created. Not on our servers. Not in a company bank account. In **code**. Code that:

- ✅ **Releases payment** the moment a client approves delivered work
- ⏰ **Auto-releases in 7 days** if the client goes silent — no more ghosting
- ⚖️ **Escalates to decentralized arbitration** if either party raises a dispute
- 📈 **Earns ~10% APY yield** on idle funds via Kamino Finance while waiting
- 🏆 **Mints a permanent on-chain Reputation NFT** after every completed milestone

Zero middlemen. Zero custodians. Zero trust required.

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🔐 Non-Custodial Escrow
Funds locked inside a Solana Program Derived Address (PDA). Not even PalmShield can touch your money.

</td>
<td width="50%">

### 📈 Yield-Bearing Vaults
Your locked PUSD earns ~10% APY via Kamino Finance. Money works while you work.

</td>
</tr>
<tr>
<td width="50%">

### ⚖️ Decentralized Disputes
Staked community arbitrators vote within 48 hours. No admins. No bias. Honest voters earn rewards, bad actors get slashed.

</td>
<td width="50%">

### 🏆 Reputation NFTs
Every approved milestone mints an unfakeable, permanent on-chain badge. Your track record lives on the blockchain — forever.

</td>
</tr>
<tr>
<td width="50%">

### ⏰ 7-Day Auto-Release
Submit work → timer starts. Client doesn't respond in 7 days → you get paid automatically.

</td>
<td width="50%">

### 🌍 Censorship Resistant
Built on PUSD stablecoin. No bank, government, or company can freeze your earnings.

</td>
</tr>
</table>

---

## 🚀 Getting Started

### Prerequisites

- [Node.js 18+](https://nodejs.org)
- [Phantom Wallet](https://phantom.app) (browser extension, set to **Devnet**)

### Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/azhan-ali/PalmSheild.git
cd PalmSheild/palmshield

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# (Fill in your DATABASE_URL and Solana config)

# 4. Set up the database
npx prisma db push

# 5. Start the dev server
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** and connect your Phantom wallet.

---

## 🔑 Environment Variables

Create a `.env` file in the `palmshield/` directory:

```env
# Solana
NEXT_PUBLIC_SOLANA_NETWORK=devnet
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.devnet.solana.com
NEXT_PUBLIC_PALMSHIELD_PROGRAM_ID=your_program_id
NEXT_PUBLIC_PUSD_TOKEN_ADDRESS=your_pusd_address

# Database (Supabase / Neon / Vercel Postgres)
DATABASE_URL=postgresql://user:password@host:5432/database

# Platform
NEXT_PUBLIC_PLATFORM_FEE_PERCENT=0.5
NEXT_PUBLIC_AUTO_RELEASE_DAYS=7
NEXT_PUBLIC_ARBITRATOR_MIN_STAKE=50
NEXT_PUBLIC_VOTING_WINDOW_HOURS=48

# IPFS (dispute evidence)
WEB3_STORAGE_TOKEN=your_web3_storage_token
```

---

## 💻 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Next.js 14 (App Router) + TypeScript |
| **Styling** | Tailwind CSS + Custom Cyberpunk Design System |
| **Animations** | Framer Motion — 3D globe, aurora, particle stars |
| **Blockchain** | Solana Web3.js + Anchor Framework (Rust) |
| **Wallets** | Phantom + Solflare via `@solana/wallet-adapter` |
| **Database** | PostgreSQL + Prisma ORM |
| **NFTs** | Metaplex UMI + Token Metadata |
| **Storage** | Web3.Storage (IPFS) for dispute evidence |

---

## 🔄 How It Works

```
  CLIENT                  SMART CONTRACT                 FREELANCER
    │                           │                              │
    │──── Create + Lock PUSD ──►│ ← Funds locked in PDA vault │
    │                           │   Yield farming begins  ─────┘
    │                           │                              │
    │                           │◄──── Accept Project ─────────│
    │                           │                              │
    │                           │◄──── Submit Work ────────────│
    │                           │      7-day timer starts      │
    │                           │                              │
    │──── Approve ─────────────►│──── Release PUSD ───────────►│
    │                           │                              │
    │      [If ghosted]         │──── Auto-Release day 7 ─────►│
    │                           │                              │
    │      [If disputed]        │──── 48hr arbitration ────────│
    │                           │                              │
    │◄────────────── Reputation NFT minted for both parties ───►│
```

---

## 🤝 Contributing

1. Fork the repo
2. Create your branch: `git checkout -b feature/your-idea`
3. Commit your changes: `git commit -m 'feat: add cool feature'`
4. Push to the branch: `git push origin feature/your-idea`
5. Open a Pull Request

---

## 📄 License

MIT © 2026 PalmShield

---

<div align="center">

*"Trust the code. Not the corporation."*

**Built with ❤️ on Solana**

⭐ Star this repo if PalmShield is the future of freelancing you believe in!

</div>
