<div align="center">

```
██████╗  █████╗ ██╗     ███╗   ███╗███████╗██╗  ██╗██╗███████╗██╗     ██████╗
██╔══██╗██╔══██╗██║     ████╗ ████║██╔════╝██║  ██║██║██╔════╝██║     ██╔══██╗
██████╔╝███████║██║     ██╔████╔██║███████╗███████║██║█████╗  ██║     ██║  ██║
██╔═══╝ ██╔══██║██║     ██║╚██╔╝██║╚════██║██╔══██║██║██╔══╝  ██║     ██║  ██║
██║     ██║  ██║███████╗██║ ╚═╝ ██║███████║██║  ██║██║███████╗███████╗██████╔╝
╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚═════╝
```

### **Trustless Work. Guaranteed Pay.**
*The first decentralized, yield-bearing freelance escrow on Solana*

<br/>

[![Solana](https://img.shields.io/badge/Solana-Devnet-9945FF?style=for-the-badge&logo=solana&logoColor=white)](https://solana.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![Anchor](https://img.shields.io/badge/Anchor-0.32-E45229?style=for-the-badge)](https://www.anchor-lang.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-00C896?style=for-the-badge)](LICENSE)

<br/>

> **🛡️ PalmShield** eliminates the biggest problem in Web3 freelancing — **getting scammed or ghosted** — by locking funds inside a non-custodial Solana smart contract vault that *automatically releases* payment when work is approved, or escalates to a decentralized arbitration panel if disputed.

</div>

---

## 🌟 Why PalmShield?

> *"The freelance economy loses **$50B+** annually to payment fraud, chargebacks, and ghosting. PalmShield makes it mathematically impossible."*

| The Old Way 😤 | The PalmShield Way 🛡️ |
|---|---|
| Client can ghost after delivery | Funds **pre-locked** in smart contract |
| Platform holds your money | **Non-custodial** — only code controls funds |
| Disputes take weeks, humans decide | **48-hour arbitration** by staked community |
| Money sits idle in escrow | Locked PUSD earns **~10% APY** (Kamino Finance) |
| Fake reviews, reputation gaming | **On-chain NFT** proof — unfakeable, permanent |
| 5–20% platform fees | Only **0.5% platform fee**, rest goes to you |

---

## ✨ Core Features

### 🔐 Non-Custodial Smart Contract Escrow
Client funds are locked into a Solana Program Derived Address (PDA). Zero custody by PalmShield — not even our own team can touch the funds. Pure code. Pure trust.

### 📈 Yield-Bearing Vaults
Idle capital is the enemy. While funds sit in escrow awaiting milestone completion, PalmShield routes them through **Kamino Finance** to earn ~10% APY. Both parties benefit from every second of waiting.

### ⚖️ Decentralized Dispute Resolution
When conflicts arise, a panel of staked arbitrators votes within a **48-hour window**. Correct voters earn a share of the 0.5% platform fee. Dishonest or lazy voters get slashed. No human admin needed.

### 🏆 Reputation NFTs (Soulbound-style)
Every approved milestone mints an on-chain **Reputation NFT** for both freelancer and client:
- 📜 Freelancer earns proof of skill, amount paid, and star rating
- 🤝 Client earns a "Trusted Payer" badge
- These NFTs live **forever** on Solana — no platform can revoke them

### ⏰ 7-Day Auto-Release Timer
Once a freelancer submits work, a 7-day countdown begins. If the client doesn't respond, funds **automatically release** to the freelancer. No more ghosting, no more chasing.

### 🌍 Censorship Resistant
Built on PUSD stablecoin. No bank, government, or corporation can freeze your earnings. If you deliver, you get paid. Period.

---

## 🖥️ Live Screenshots

<table>
  <tr>
    <td align="center"><strong>🏠 Landing Page</strong><br/><em>Hero, 3D globe, stats</em></td>
    <td align="center"><strong>🔍 Browse Projects</strong><br/><em>Live PUSD-locked listings</em></td>
  </tr>
  <tr>
    <td align="center"><strong>📝 Create Escrow</strong><br/><em>Milestone-based project form</em></td>
    <td align="center"><strong>📊 Dashboard</strong><br/><em>Wallet-gated overview</em></td>
  </tr>
</table>

---

## 🏗️ Tech Stack

```
┌─────────────────────────────────────────────────────────────────┐
│                        PALMSHIELD STACK                         │
├──────────────────┬──────────────────────────────────────────────┤
│  Frontend        │  Next.js 14 (App Router) + TypeScript        │
│  Styling         │  Tailwind CSS + Custom CSS (Cyberpunk Theme)  │
│  Animations      │  Framer Motion (3D Globe, micro-interactions) │
│  Blockchain      │  Solana Web3.js + Anchor Framework 0.32       │
│  Wallet          │  Phantom + Solflare (via @solana/wallet-adapter)│
│  Smart Contracts │  Rust + Anchor (Non-custodial PDA escrow)     │
│  Database        │  PostgreSQL via Supabase + Prisma ORM         │
│  State           │  Zustand + React Query                        │
│  Notifications   │  react-hot-toast                              │
│  NFTs            │  Metaplex Token Metadata + UMI                │
│  IPFS            │  Web3.Storage (dispute evidence)              │
└──────────────────┴──────────────────────────────────────────────┘
```

---

## 📂 Project Structure

```
palmshield/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # 🏠 Landing page (hero, stats, features)
│   ├── layout.tsx                # Root layout + wallet providers
│   ├── dashboard/page.tsx        # 📊 User dashboard (wallet-gated)
│   ├── projects/
│   │   ├── browse/page.tsx       # 🔍 Browse open escrow listings
│   │   ├── create/page.tsx       # 📝 Create new escrow + milestones
│   │   └── [id]/page.tsx         # 📄 Individual project detail
│   ├── disputes/[id]/            # ⚖️ Dispute resolution panel
│   ├── profile/[wallet]/         # 👤 User reputation profile
│   └── api/                      # Next.js API routes (REST layer)
│       ├── projects/route.ts     # GET/POST projects
│       ├── milestones/           # Milestone CRUD + auto-release
│       ├── disputes/             # Dispute creation + voting
│       ├── nfts/                 # Reputation NFT minting
│       └── arbitrators/          # Arbitrator staking/registration
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky nav + wallet connect button
│   │   ├── AnimatedBackground.tsx# 3D hologram globe + particle system
│   │   └── CustomCursor.tsx      # Cyberpunk glow cursor
│   ├── wallet/
│   │   └── WalletProvider.tsx    # Solana wallet context + error handling
│   ├── escrow/                   # Escrow interaction components
│   ├── milestone/                # Milestone management UI
│   ├── dispute/                  # Dispute filing + voting UI
│   ├── nft/                      # Reputation NFT display
│   └── ui/                       # Button, Card, Badge design system
│
├── contracts/                    # Solana Anchor Program (Rust)
│   ├── programs/palmshield/
│   │   └── src/
│   │       ├── lib.rs            # Program entrypoint
│   │       ├── instructions/     # create_escrow, accept_project, ...
│   │       ├── state/            # On-chain account structures
│   │       └── errors/           # Custom error codes
│   └── tests/                    # Anchor integration tests
│
├── prisma/
│   └── schema.prisma             # Full DB schema (Project, Milestone,
│                                 #   Dispute, ArbitratorVote, ReputationNFT)
├── constants/index.ts            # RPC endpoint, network, fees config
└── types/                        # Shared TypeScript types
```

---

## ⚡ Quick Start

### Prerequisites

| Tool | Version | Install |
|---|---|---|
| Node.js | ≥ 18.0 | [nodejs.org](https://nodejs.org) |
| npm | ≥ 9.0 | Bundled with Node |
| Phantom Wallet | Latest | [phantom.app](https://phantom.app) |
| Git | Any | [git-scm.com](https://git-scm.com) |

### 1. Clone & Install

```bash
git clone https://github.com/azhan-ali/palmshield.git
cd palmshield
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
```

Open `.env` and set these values:

```env
# ── Solana Network ──────────────────────────────────
NEXT_PUBLIC_SOLANA_NETWORK=devnet
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.devnet.solana.com

# ── Program IDs (after deployment) ──────────────────
NEXT_PUBLIC_PALMSHIELD_PROGRAM_ID=<your_program_id>
NEXT_PUBLIC_PUSD_TOKEN_ADDRESS=<pusd_spl_token_address>

# ── Platform Config ──────────────────────────────────
NEXT_PUBLIC_PLATFORM_FEE_PERCENT=0.5
NEXT_PUBLIC_AUTO_RELEASE_DAYS=7
NEXT_PUBLIC_ARBITRATOR_MIN_STAKE=50
NEXT_PUBLIC_VOTING_WINDOW_HOURS=48

# ── Database (Supabase PostgreSQL) ───────────────────
DATABASE_URL=postgresql://user:password@host:5432/database

# ── IPFS for Dispute Evidence ────────────────────────
WEB3_STORAGE_TOKEN=<your_web3_storage_token>
```

### 3. Set Up Database

```bash
npx prisma generate
npx prisma db push
```

### 4. Run Development Server

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** 🚀

---

## 🔄 How It Works — Full Flow

```
CLIENT                          SMART CONTRACT                    FREELANCER
  │                                    │                               │
  │── Create Project ─────────────────►│                               │
  │   (title, milestones, budget)      │                               │
  │                                    │                               │
  │── Lock PUSD ───────────────────────►│ ◄── Funds Locked in PDA      │
  │                                    │     Yield farming begins      │
  │                                    │                               │
  │                                    │◄── Accept Project ────────────│
  │                                    │    (Freelancer signs tx)      │
  │                                    │                               │
  │                                    │◄── Submit Milestone ──────────│
  │                                    │    (7-day timer starts)       │
  │                                    │                               │
  │◄── Review Notification             │                               │
  │                                    │                               │
  │── Approve ─────────────────────────►│── Release PUSD ──────────────►│
  │                                    │                               │
  │        [OR if ghosted]             │                               │
  │                                    │── Auto-Release (day 7) ───────►│
  │                                    │                               │
  │        [OR if disputed]            │                               │
  │◄────── 48-hr Arbitration ──────────►│──────────────────────────────►│
  │        Community votes             │                               │
  │                                    │                               │
  │◄─────── Reputation NFT minted ─────┤────── Reputation NFT minted ──►│
```

---

## 🗄️ Database Schema Overview

```
Project ──────────────────────────────────────────────────────────
  │  id, title, description, clientWallet, freelancerWallet
  │  totalBudget (PUSD), platformFee, contractAddress
  │  status: OPEN | ACTIVE | COMPLETED | DISPUTED | CANCELLED
  │
  ├── Milestone[] ───────────────────────────────────────────────
  │     amount, order, submittedAt, autoReleaseAt
  │     status: PENDING | IN_PROGRESS | SUBMITTED | APPROVED |
  │             REJECTED | AUTO_RELEASED | DISPUTED
  │
  ├── Dispute? ──────────────────────────────────────────────────
  │     raisedBy, raisedAgainst, reason
  │     clientEvidence (IPFS), freelancerEvidence (IPFS)
  │     votingDeadline, result: CLIENT_WIN | FREELANCER_WIN
  │     │
  │     └── ArbitratorVote[] ──────────────────────────────────
  │           arbitratorWallet, vote, stakeAmount
  │           rewarded | slashed
  │
  └── ReputationNFT[] ──────────────────────────────────────────
        wallet, mintAddress, type, milestoneTitle
        amountPUSD, rating (1-5★), txSignature
```

---

## 🦀 Smart Contract Architecture (Anchor / Rust)

```rust
// palmshield/programs/palmshield/src/lib.rs
#[program]
pub mod palmshield {
    // Lock PUSD into PDA vault, start yield farming
    pub fn create_escrow(ctx, total_amount, platform_fee, milestone_count) -> Result<()>

    // Freelancer accepts project, status → ACTIVE
    pub fn accept_project(ctx) -> Result<()>

    // Freelancer submits work, 7-day timer begins
    pub fn submit_milestone(ctx, submission_note) -> Result<()>

    // Client approves → PUSD released, NFT minted
    pub fn approve_milestone(ctx) -> Result<()>

    // 7 days elapsed, auto-release triggers
    pub fn auto_release(ctx) -> Result<()>

    // Either party raises dispute → arbitration panel
    pub fn raise_dispute(ctx, reason) -> Result<()>
}
```

**Accounts (PDAs):**
- `EscrowVault` — Holds all PUSD for the project
- `MilestoneAccount` — Per-milestone state + timer
- `DisputeAccount` — Evidence links + vote tallying
- `ArbitratorAccount` — Staked PUSD + voting history

---

## 🎨 UI/UX Design System

PalmShield features a **Cyberpunk Dark** aesthetic with:

| Element | Spec |
|---|---|
| **Primary Color** | `#6B3CFF` (Violet) |
| **Accent Color** | `#00C896` (Cyber Green) |
| **Warning Color** | `#F5A623` (Amber) |
| **Background** | `#030408` (Deep Space) |
| **Font** | Space Grotesk + Space Mono |
| **Animations** | Framer Motion (3D globe, aurora, particle stars) |
| **Cursor** | Custom glow cursor with cyberpunk trail |
| **Cards** | Glassmorphism + gradient border glow |

---

## 🔌 API Reference

All endpoints live under `/api/`:

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/projects` | List all open escrow projects |
| `POST` | `/api/projects` | Create new project + lock funds |
| `GET` | `/api/projects/[id]` | Get project detail + milestones |
| `PATCH` | `/api/projects/[id]` | Update project status |
| `POST` | `/api/milestones` | Submit/approve/reject milestone |
| `POST` | `/api/disputes` | Raise a dispute |
| `POST` | `/api/disputes/[id]/vote` | Cast arbitrator vote |
| `POST` | `/api/nfts` | Mint reputation NFT |
| `GET` | `/api/arbitrators` | List registered arbitrators |
| `POST` | `/api/arbitrators` | Register as arbitrator (stake PUSD) |

---

## 💼 Supported Wallets

| Wallet | Status | Install |
|---|---|---|
| 🟣 **Phantom** | ✅ Supported | [phantom.app](https://phantom.app) |
| 🟡 **Solflare** | ✅ Supported | [solflare.com](https://solflare.com) |
| More coming | 🔜 Soon | — |

> **New to Solana wallets?** Install [Phantom](https://phantom.app), switch to **Devnet** in Settings, and get free SOL from the [Solana faucet](https://faucet.solana.com).

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Add all `.env` variables in your Vercel project settings under **Settings → Environment Variables**.

### Deploy Solana Program (Anchor)

```bash
# Install Solana CLI + Anchor
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
cargo install --git https://github.com/coral-xyz/anchor avm

# Build & deploy to devnet
cd contracts
anchor build
anchor deploy --provider.cluster devnet

# Copy the program ID and update NEXT_PUBLIC_PALMSHIELD_PROGRAM_ID in .env
```

---

## 🧪 Testing

```bash
# Run Anchor smart contract tests
cd contracts
anchor test

# Test API endpoints
node test-api.js

# Run Solana Playground tests (see SOLANA_PLAYGROUND_TEST.rs)
```

---

## 🗺️ Roadmap

| Phase | Feature | Status |
|---|---|---|
| **Phase 1** | Core escrow (create, accept, submit, approve) | ✅ Done |
| **Phase 2** | Milestone system + 7-day auto-release | ✅ Done |
| **Phase 3** | Decentralized dispute + arbitration voting | ✅ Done |
| **Phase 4** | Reputation NFT minting (Metaplex) | ✅ Done |
| **Phase 5** | IPFS evidence upload for disputes | ✅ Done |
| **Phase 6** | Full UI — Landing, Browse, Create, Dashboard | ✅ Done |
| **Phase 7** | Kamino Finance yield integration (Mainnet) | 🔜 Next |
| **Phase 8** | Mobile app (React Native) | 🔜 Planned |
| **Phase 9** | DAO governance for platform params | 🔜 Planned |

---

## 🤝 Contributing

```bash
# Fork the repo, then:
git checkout -b feature/your-feature-name
git commit -m "feat: add your feature"
git push origin feature/your-feature-name
# Open a PR → we review within 48 hours
```

Please read our [Contributing Guide](CONTRIBUTING.md) and follow the [Code of Conduct](CODE_OF_CONDUCT.md).

---

## 🛡️ Security

- Smart contracts use Anchor's built-in account validation and constraint checks
- All PDAs use canonical bump seeds
- Platform fee is capped at 0.5% and enforced on-chain
- Dispute evidence stored on IPFS (immutable, decentralized)
- No private keys ever touch our servers

> Found a vulnerability? Email **security@palmshield.xyz** — we have a responsible disclosure program.

---

## 📄 License

MIT License © 2026 PalmShield

```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software, to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software — provided the above copyright notice and
this permission notice appear in all copies.
```

---

<div align="center">

**Built with ❤️ on Solana**

*"Trust the code. Not the corporation."*

[Website](https://palmshield.xyz) · [Twitter](https://twitter.com/palmshield) · [Discord](https://discord.gg/palmshield) · [Docs](https://docs.palmshield.xyz)

<br/>

⭐ **Star this repo** if PalmShield is the future of freelancing you believe in!

</div>
