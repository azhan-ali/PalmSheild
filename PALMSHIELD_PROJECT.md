# 🛡️ PalmShield — Complete Project Blueprint
### Decentralized Freelance Escrow Platform on Solana using PUSD

---

## 📌 Project Overview

**Project Name:** PalmShield  
**Tagline:** *"Get Paid. Stay Protected. No Middleman."*  
**Blockchain:** Solana  
**Stablecoin:** PUSD (Palm USD — Non-Freezable, USD-pegged SPL Token)  
**Frontend:** Next.js 14 (App Router) + TypeScript + Tailwind CSS  
**Smart Contracts:** Anchor Framework (Rust)  
**Database:** PostgreSQL via Prisma ORM  
**Storage:** IPFS via web3.storage (for dispute evidence)  
**NFT Standard:** Metaplex (Reputation NFTs)  
**DeFi Integration:** Kamino Finance (yield on locked PUSD)

---

## 🎯 Problem Statement

The global freelance market is worth **$1.5 Trillion** but is broken by three core problems:

1. **Trust Gap** — Clients fear paying upfront. Freelancers fear working without payment guarantee.
2. **Censorship Risk** — USDC, USDT can be frozen by Circle/Tether. A Pakistani developer's $2000 USDC can be frozen overnight due to sanctions. With PUSD — this is impossible.
3. **High Fees + Middlemen** — Upwork/Fiverr charge 10–20% commission. Payments go through their servers, not yours.

**Current solutions fail because:**
- Upwork/Fiverr = centralized, high fees, funds can be frozen or withheld
- Regular crypto escrow = complex UX, no dispute resolution, no reputation system
- Banks/PayPal = slow, expensive, jurisdiction-blocked

---

## 💡 Solution — PalmShield

PalmShield is a **non-custodial, decentralized escrow platform** where:

- Client locks PUSD in a **Smart Contract** (not a company's bank account)
- Freelancer receives payment **only when milestones are approved**
- If dispute happens — **community arbitrators** decide fairly, on-chain
- Locked PUSD **generates yield** via DeFi — both parties earn while waiting
- Every completed milestone mints a **Reputation NFT** — permanent, uncensorable portfolio
- **PUSD ensures** no government, no company, no platform can ever freeze funds

---

## 🏗️ Tech Stack

```
Frontend:        Next.js 14 (App Router, TypeScript, Tailwind CSS)
UI Components:   shadcn/ui
State Mgmt:      Zustand
Wallet:          @solana/wallet-adapter-react (Phantom, Backpack, Solflare)
Blockchain:      Solana Mainnet / Devnet for testing
Smart Contracts: Anchor Framework (Rust)
Token:           PUSD (SPL Token — Palm USD)
Database:        PostgreSQL + Prisma ORM
ORM:             Prisma
NFT:             Metaplex UMI
DeFi Yield:      Kamino Finance SDK
File Storage:    IPFS via web3.storage
Deployment:      Vercel (frontend) + Solana Mainnet (contracts)
```

---

## 📁 Complete Folder Structure

```
palmshield/
│
├── app/                                  # Next.js App Router
│   ├── layout.tsx                        # Root layout with wallet provider
│   ├── page.tsx                          # Landing page
│   ├── globals.css                       # Global styles
│   │
│   ├── (auth)/
│   │   └── connect/
│   │       └── page.tsx                  # Wallet connection page
│   │
│   ├── dashboard/
│   │   ├── page.tsx                      # Main dashboard (role-based)
│   │   ├── client/
│   │   │   └── page.tsx                  # Client dashboard
│   │   └── freelancer/
│   │       └── page.tsx                  # Freelancer dashboard
│   │
│   ├── projects/
│   │   ├── create/
│   │   │   └── page.tsx                  # Create new project (client only)
│   │   ├── browse/
│   │   │   └── page.tsx                  # Browse funded projects (freelancer)
│   │   └── [id]/
│   │       ├── page.tsx                  # Project detail page
│   │       └── milestone/
│   │           └── [milestoneId]/
│   │               └── page.tsx          # Milestone detail page
│   │
│   ├── dispute/
│   │   └── [id]/
│   │       └── page.tsx                  # Dispute resolution page
│   │
│   ├── profile/
│   │   └── [wallet]/
│   │       └── page.tsx                  # Public profile + NFT portfolio
│   │
│   └── api/
│       ├── projects/
│       │   ├── route.ts                  # GET all, POST create
│       │   └── [id]/
│       │       └── route.ts              # GET one, PUT update, DELETE
│       ├── milestones/
│       │   ├── route.ts
│       │   └── [id]/
│       │       └── route.ts
│       ├── disputes/
│       │   ├── route.ts
│       │   └── [id]/
│       │       └── route.ts
│       ├── arbitrators/
│       │   └── route.ts
│       └── nfts/
│           └── [wallet]/
│               └── route.ts
│
├── components/
│   ├── ui/                               # shadcn/ui base components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── badge.tsx
│   │   ├── progress.tsx
│   │   └── toast.tsx
│   │
│   ├── layout/
│   │   ├── Navbar.tsx                    # Top navigation
│   │   ├── Sidebar.tsx                   # Dashboard sidebar
│   │   └── Footer.tsx
│   │
│   ├── wallet/
│   │   ├── WalletProvider.tsx            # Solana wallet adapter setup
│   │   ├── ConnectButton.tsx             # Connect wallet button
│   │   └── WalletBalance.tsx             # Show PUSD balance
│   │
│   ├── escrow/
│   │   ├── EscrowCard.tsx                # Project card with escrow status
│   │   ├── EscrowStatus.tsx              # Lock/unlock visualization
│   │   ├── FundedBadge.tsx               # "Funds Locked ✅" badge
│   │   └── YieldDisplay.tsx              # Show earned yield in real-time
│   │
│   ├── milestone/
│   │   ├── MilestoneList.tsx             # All milestones with status
│   │   ├── MilestoneCard.tsx             # Individual milestone card
│   │   ├── MilestoneForm.tsx             # Create/edit milestone form
│   │   ├── SubmitWork.tsx                # Freelancer submit work UI
│   │   ├── ApproveReject.tsx             # Client approve/reject UI
│   │   └── AutoReleaseTimer.tsx          # Countdown to auto-release
│   │
│   ├── dispute/
│   │   ├── DisputeForm.tsx               # Raise dispute form
│   │   ├── EvidenceUpload.tsx            # Upload evidence to IPFS
│   │   ├── ArbitratorPanel.tsx           # Voting panel for arbitrators
│   │   ├── VoteDisplay.tsx               # Show live vote count
│   │   └── DisputeResult.tsx             # Final decision display
│   │
│   ├── nft/
│   │   ├── NFTCard.tsx                   # Individual reputation NFT card
│   │   ├── NFTGallery.tsx                # Full NFT portfolio view
│   │   └── NFTVerify.tsx                 # On-chain verification badge
│   │
│   └── landing/
│       ├── Hero.tsx                      # Hero section
│       ├── Features.tsx                  # 7 features section
│       ├── HowItWorks.tsx                # 3-step how it works
│       ├── Stats.tsx                     # Platform statistics
│       └── CTASection.tsx                # Call to action
│
├── contracts/                            # Solana Smart Contracts
│   ├── Anchor.toml
│   ├── Cargo.toml
│   └── programs/
│       └── palmshield/
│           ├── Cargo.toml
│           └── src/
│               ├── lib.rs                # Main program entry
│               ├── instructions/
│               │   ├── create_escrow.rs
│               │   ├── accept_project.rs
│               │   ├── submit_milestone.rs
│               │   ├── approve_milestone.rs
│               │   ├── reject_milestone.rs
│               │   ├── auto_release.rs
│               │   ├── raise_dispute.rs
│               │   ├── submit_evidence.rs
│               │   ├── vote_dispute.rs
│               │   ├── resolve_dispute.rs
│               │   └── mint_reputation_nft.rs
│               ├── state/
│               │   ├── escrow_account.rs
│               │   ├── milestone_account.rs
│               │   ├── dispute_account.rs
│               │   └── arbitrator_account.rs
│               └── errors.rs
│   └── tests/
│       └── palmshield.ts                 # Anchor tests
│
├── lib/
│   ├── solana/
│   │   ├── connection.ts                 # Solana RPC connection
│   │   ├── transactions.ts               # Transaction helpers
│   │   └── constants.ts                  # Program IDs, PUSD address
│   ├── anchor/
│   │   ├── client.ts                     # Anchor program client
│   │   ├── idl.ts                        # Program IDL
│   │   └── instructions.ts               # All instruction calls
│   ├── pusd/
│   │   ├── token.ts                      # PUSD token operations
│   │   ├── balance.ts                    # Balance fetching
│   │   └── transfer.ts                   # Transfer helpers
│   ├── kamino/
│   │   ├── yield.ts                      # Kamino yield integration
│   │   └── calculator.ts                 # Yield calculation
│   ├── ipfs/
│   │   └── upload.ts                     # Evidence upload to IPFS
│   └── metaplex/
│       └── nft.ts                        # NFT minting via Metaplex
│
├── prisma/
│   ├── schema.prisma                     # Full database schema
│   └── migrations/
│
├── hooks/
│   ├── useWallet.ts                      # Wallet state hook
│   ├── usePUSDBalance.ts                 # PUSD balance hook
│   ├── useEscrow.ts                      # Escrow operations hook
│   ├── useMilestone.ts                   # Milestone operations hook
│   ├── useDispute.ts                     # Dispute operations hook
│   └── useYield.ts                       # Yield tracking hook
│
├── types/
│   ├── project.ts
│   ├── milestone.ts
│   ├── dispute.ts
│   └── nft.ts
│
├── constants/
│   └── index.ts                          # PUSD address, program ID, etc.
│
└── public/
    ├── logo.svg
    └── icons/
```

---

## 🗄️ Database Schema (Prisma)

```prisma
model Project {
  id                String      @id @default(cuid())
  title             String
  description       String
  clientWallet      String
  freelancerWallet  String?
  totalBudget       Float                         // in PUSD
  platformFee       Float                         // 0.5% of totalBudget
  contractAddress   String?                       // Solana PDA address
  escrowTxSignature String?
  status            ProjectStatus @default(OPEN)
  category          String
  deadline          DateTime
  createdAt         DateTime    @default(now())
  updatedAt         DateTime    @updatedAt
  milestones        Milestone[]
  dispute           Dispute?
  nfts              ReputationNFT[]
}

enum ProjectStatus {
  OPEN          // Created, PUSD locked, no freelancer yet
  ACTIVE        // Freelancer accepted, work in progress
  COMPLETED     // All milestones done
  DISPUTED      // Dispute raised
  CANCELLED     // Cancelled by client (before acceptance)
}

model Milestone {
  id              String          @id @default(cuid())
  projectId       String
  project         Project         @relation(fields: [projectId], references: [id])
  title           String
  description     String
  amount          Float           // PUSD amount
  order           Int             // Milestone sequence number
  status          MilestoneStatus @default(PENDING)
  submittedAt     DateTime?
  approvedAt      DateTime?
  autoReleaseAt   DateTime?       // 7 days after submission
  submissionNote  String?
  rejectionReason String?
  txSignature     String?         // Release transaction signature
  createdAt       DateTime        @default(now())
}

enum MilestoneStatus {
  PENDING       // Not started
  IN_PROGRESS   // Freelancer working
  SUBMITTED     // Freelancer submitted, awaiting client review
  APPROVED      // Client approved, PUSD released
  REJECTED      // Client rejected, revision needed
  AUTO_RELEASED // Auto-released after 7 day timeout
  DISPUTED      // Under dispute
}

model Dispute {
  id              String        @id @default(cuid())
  projectId       String        @unique
  project         Project       @relation(fields: [projectId], references: [id])
  milestoneId     String
  raisedBy        String        // wallet address
  raisedAgainst   String        // wallet address
  reason          String
  clientEvidence  String?       // IPFS CID
  freelancerEvidence String?    // IPFS CID
  status          DisputeStatus @default(OPEN)
  result          String?       // "CLIENT_WIN" | "FREELANCER_WIN"
  resolvedAt      DateTime?
  votingDeadline  DateTime
  createdAt       DateTime      @default(now())
  votes           ArbitratorVote[]
}

enum DisputeStatus {
  OPEN          // Dispute raised, evidence being collected
  VOTING        // Arbitrators voting
  RESOLVED      // Decision made, payout done
}

model ArbitratorVote {
  id              String    @id @default(cuid())
  disputeId       String
  dispute         Dispute   @relation(fields: [disputeId], references: [id])
  arbitratorWallet String
  vote            String    // "CLIENT" | "FREELANCER"
  reason          String?
  stakeAmount     Float     // PUSD staked
  rewarded        Boolean   @default(false)
  slashed         Boolean   @default(false)
  createdAt       DateTime  @default(now())
}

model ReputationNFT {
  id            String    @id @default(cuid())
  wallet        String    // NFT owner (freelancer or client)
  mintAddress   String    // Solana NFT mint address
  projectId     String
  project       Project   @relation(fields: [projectId], references: [id])
  type          String    // "FREELANCER_MILESTONE" | "CLIENT_TRUSTED"
  milestoneTitle String?
  amountPUSD    Float
  rating        Int       // 1–5 stars
  txSignature   String
  createdAt     DateTime  @default(now())
}

model Arbitrator {
  id            String    @id @default(cuid())
  wallet        String    @unique
  stakedAmount  Float     // PUSD staked to become arbitrator
  totalVotes    Int       @default(0)
  correctVotes  Int       @default(0)
  reputation    Float     @default(0)
  isActive      Boolean   @default(true)
  createdAt     DateTime  @default(now())
}
```

---

## ⛓️ Smart Contract Architecture

### Program Accounts (PDAs)

```rust
// EscrowAccount — main project vault
pub struct EscrowAccount {
    pub client: Pubkey,
    pub freelancer: Pubkey,
    pub total_amount: u64,          // lamports of PUSD
    pub platform_fee: u64,
    pub milestone_count: u8,
    pub current_milestone: u8,
    pub status: EscrowStatus,
    pub created_at: i64,
    pub bump: u8,
}

// MilestoneAccount — per milestone state
pub struct MilestoneAccount {
    pub escrow: Pubkey,
    pub amount: u64,
    pub status: MilestoneStatus,
    pub submitted_at: i64,
    pub auto_release_at: i64,       // submitted_at + 7 days
    pub bump: u8,
}

// DisputeAccount — arbitration state
pub struct DisputeAccount {
    pub escrow: Pubkey,
    pub raised_by: Pubkey,
    pub arbitrator_1: Pubkey,
    pub arbitrator_2: Pubkey,
    pub arbitrator_3: Pubkey,
    pub vote_1: Option<bool>,       // true = freelancer wins
    pub vote_2: Option<bool>,
    pub vote_3: Option<bool>,
    pub voting_deadline: i64,
    pub resolved: bool,
    pub bump: u8,
}
```

### Instructions

```
1. create_escrow        → Client creates project + locks PUSD into PDA vault
2. accept_project       → Freelancer accepts the job, contract becomes ACTIVE
3. submit_milestone     → Freelancer marks milestone as submitted
4. approve_milestone    → Client approves → PUSD released to freelancer
5. reject_milestone     → Client rejects with reason → back to IN_PROGRESS
6. auto_release         → Anyone can call after 7 days → PUSD auto-released
7. raise_dispute        → Either party raises dispute on current milestone
8. assign_arbitrators   → System randomly picks 3 arbitrators from staker pool
9. vote_dispute         → Each arbitrator submits their vote
10. resolve_dispute     → After 3 votes or deadline → majority wins → payout
11. cancel_escrow       → Client cancels before freelancer accepts → full refund
12. mint_reputation_nft → Mints NFT after milestone approval
```

---

## 🌊 Complete User Flows

### Flow 1 — Client Creates Project

```
1. Client connects Phantom wallet
2. Fills project form:
   - Title, description, category
   - Total budget in PUSD
   - Number of milestones
   - Per milestone: title, amount, deadline
3. Reviews project summary + fee breakdown:
   - Total: 500 PUSD
   - Platform fee (0.5%): 2.5 PUSD
   - Net to freelancer: 497.5 PUSD
4. Clicks "Create & Lock Funds"
5. Phantom popup appears → client approves PUSD transfer
6. Transaction sent to Solana:
   - 500 PUSD moves from client wallet to Escrow PDA
7. Project status: OPEN ✅ (visible to freelancers)
8. Client sees dashboard: "Funds Locked 🔒 — Awaiting Freelancer"
```

### Flow 2 — Freelancer Discovers & Accepts

```
1. Freelancer connects wallet
2. Goes to Browse Projects
3. Filters: "Funded Only ✅" (most important filter)
   - This guarantees PUSD is already locked in contract
4. Sees project card:
   - Title, budget, milestone count
   - Client reputation NFT score
   - "Funds Verified On-Chain ✅" badge
5. Clicks project → reads full description
6. Clicks "Submit Proposal" or "Accept Directly"
7. Signs acceptance transaction (free, just account setup)
8. Project status: ACTIVE
9. Milestone 1 auto-starts
```

### Flow 3 — Milestone Execution

```
MILESTONE CYCLE:

Freelancer does work
    ↓
Clicks "Submit Milestone 1"
    ↓
Writes submission note + uploads work preview
    ↓
Status: SUBMITTED | Auto-release timer starts (7 days)
    ↓
Client receives notification
    ↓
Client reviews work:

    → APPROVE:
        Client clicks "Approve"
        Signs transaction
        150 PUSD released instantly to freelancer wallet
        Reputation NFT minted for both parties
        Milestone 2 starts automatically
        
    → REVISION:
        Client clicks "Request Revision"
        Writes specific feedback
        Freelancer notified
        Back to IN_PROGRESS
        Freelancer resubmits
        
    → IGNORED (7 days):
        Auto-release fires automatically
        PUSD released to freelancer
        No client action needed
        Contract handles it autonomously
```

### Flow 4 — Dispute Resolution

```
Either party raises dispute on current milestone:

Freelancer clicks "Raise Dispute"
    ↓
Writes dispute reason
    ↓
Both parties have 24 hours to upload evidence:
    - Screenshots
    - Chat history
    - Work files
    (All stored on IPFS)
    ↓
System randomly selects 3 Arbitrators
(from pool of PUSD stakers — minimum 50 PUSD staked)
    ↓
Arbitrators review evidence
48-hour voting window
    ↓
Each arbitrator votes: CLIENT or FREELANCER
    ↓
RESULT (majority 2/3 wins):

    → 2/3 Freelancer wins:
        Disputed PUSD released to freelancer
        Honest arbitrators get reward
        Dishonest arbitrator stake slashed 10%
        
    → 2/3 Client wins:
        PUSD refunded to client
        Honest arbitrators get reward
        Dishonest arbitrator stake slashed 10%
```

### Flow 5 — Yield Generation (Background)

```
Project Created → 500 PUSD locked in escrow
    ↓
PalmShield automatically deposits into Kamino Finance
    ↓
Earns ~8–12% APY while locked
    ↓
After 30 days:
    Yield earned: ~$13 PUSD
    ↓
Project completes:
    Freelancer gets: work payment + 60% of yield ($7.80)
    Client gets: 40% of yield refunded ($5.20)
    Platform keeps: 0.5% fee only
    ↓
Both parties earn even while escrow is locked 🎉
```

### Flow 6 — Reputation NFT

```
Milestone approved
    ↓
Smart contract auto-calls mint_reputation_nft
    ↓
NFT minted with metadata:
    {
        name: "PalmShield Milestone: UI Design",
        type: "FREELANCER_MILESTONE",
        project: "E-commerce Website",
        amount: "150 PUSD",
        rating: 5,
        client: "Rahul.sol",
        date: "2024-01-15",
        txSignature: "5xKj..."
    }
    ↓
NFT appears in freelancer's profile
    ↓
Verifiable on Solana Explorer by anyone
    ↓
50 milestones = 50 NFTs = Unstealable, Uncensorable Portfolio
```

---

## 🔧 Key Features — Full Detail

### Feature 1 — Non-Custodial Vault 🔒
- PUSD goes directly from client wallet to a **Program Derived Address (PDA)**
- PDA is controlled by smart contract logic only — not by PalmShield company
- Even if PalmShield shuts down, funds can still be released via contract
- Transparent — anyone can verify locked amount on Solana Explorer

### Feature 2 — Milestone-Based Payments 📊
- Project divided into up to 10 milestones
- Each milestone has its own PUSD amount, description, deadline
- Partial payments happen after each approval
- Client never loses all money at once; freelancer never works without guarantee

### Feature 3 — Yield-Bearing Escrow 💰
- Locked PUSD is deployed into Kamino Finance (Solana's top yield protocol)
- Generates ~8–12% APY passively
- Yield split on project completion: 60% freelancer, 40% client
- Platform earns only 0.5% fee — not from yield
- **World's first yield-bearing freelance escrow**

### Feature 4 — Auto-Release Timer ⏰
- After freelancer submits milestone, 7-day countdown starts on-chain
- If client doesn't approve or reject within 7 days → PUSD auto-releases
- Prevents clients from ghosting or holding funds hostage
- Timer is visible to both parties in real-time

### Feature 5 — On-Chain Dispute Resolution ⚖️
- 3 randomly selected arbitrators from staker pool
- Arbitrators must stake minimum 50 PUSD to participate (skin in the game)
- Evidence stored on IPFS (censorship-resistant)
- 48-hour voting window
- Honest voters earn rewards; dishonest voters get stake slashed
- Fully transparent — all votes on-chain

### Feature 6 — Reputation NFT 🏆
- Auto-minted after every approved milestone
- Contains: project name, amount, rating, date, client wallet — all on-chain
- Freelancer builds portable, permanent portfolio
- No platform can delete or alter it
- Clients also receive "Trusted Client" NFT for on-time approvals

### Feature 7 — Censorship-Resistant (PUSD) 🌍
- PUSD has NO freeze function, NO blacklist, NO pause mechanism
- Compliance handled only at mint/redeem layer
- Once in escrow — no government, no company, no court order can freeze it
- Critical for cross-border freelancers in restricted regions

---

## 💻 Pages & UI

### Page 1 — Landing Page (`/`)
- Hero: Tagline + animated escrow visualization
- Stats bar: $0.01 fees | 0 freeze risk | <1s settlement | 0.5% only
- "How It Works": 3 steps — Lock → Work → Get Paid
- Features grid: 7 features with icons
- Target users section: Freelancers + Clients + DAOs
- CTA: "Connect Wallet & Start"
- Footer with links

### Page 2 — Connect Wallet (`/connect`)
- Wallet options: Phantom, Backpack, Solflare
- After connect: auto-redirect to dashboard

### Page 3 — Dashboard (`/dashboard`)
- Role detection: Client view OR Freelancer view based on wallet activity
- Client view: Active projects, total locked PUSD, yield earned
- Freelancer view: Active projects, pending milestones, total earned, NFTs

### Page 4 — Create Project (`/projects/create`) — Client Only
- Multi-step form:
  - Step 1: Project basics (title, category, description)
  - Step 2: Budget + milestone builder (drag & drop)
  - Step 3: Preview + PUSD balance check
  - Step 4: Confirm + sign transaction
- Live fee calculator
- PUSD balance checker (shows if insufficient funds)

### Page 5 — Browse Projects (`/projects/browse`) — Freelancer
- Filter bar: Category, budget range, deadline, "Funded Only ✅"
- Project cards with: title, budget, milestones, client score, time posted
- "Funded" badge = PUSD verified locked on-chain
- Proposal modal with cover letter field

### Page 6 — Project Detail (`/projects/[id]`)
- Project header: title, status, parties involved
- PUSD locked amount + yield earned (live)
- Milestone progress bar
- Current milestone panel:
  - Freelancer: Upload work + submit button
  - Client: Approve / Reject / Raise Dispute buttons
- Auto-release countdown timer
- Full activity log (on-chain history)

### Page 7 — Dispute Page (`/dispute/[id]`)
- Dispute reason display
- Evidence upload panel (both parties)
- IPFS upload progress
- Arbitrator assignment display (3 wallets, anonymized)
- Voting countdown timer
- Live vote tally: Client [X] vs Freelancer [X]
- Result banner when decided

### Page 8 — Profile Page (`/profile/[wallet]`)
- Wallet address (truncated + copyable)
- Stats: Total projects, total PUSD earned, success rate, avg rating
- NFT gallery: All reputation NFTs as cards
- Each NFT: Project name, amount, date, rating stars, "Verify On-Chain" button
- Shareable link for portfolio

---

## 🔌 API Routes

```
GET    /api/projects              → List all open projects
POST   /api/projects              → Create project (saves metadata to DB)
GET    /api/projects/:id          → Get project + milestones
PUT    /api/projects/:id          → Update project status
DELETE /api/projects/:id          → Cancel project

GET    /api/milestones/:id        → Get milestone detail
PUT    /api/milestones/:id        → Update milestone status

POST   /api/disputes              → Create dispute record
GET    /api/disputes/:id          → Get dispute + votes
POST   /api/disputes/:id/vote     → Submit arbitrator vote

GET    /api/nfts/:wallet          → Get all NFTs for wallet
POST   /api/nfts                  → Record new NFT mint

GET    /api/arbitrators           → Get active arbitrators pool
POST   /api/arbitrators           → Register as arbitrator
```

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "next": "14.x",
    "react": "18.x",
    "typescript": "5.x",
    "tailwindcss": "3.x",
    "@solana/web3.js": "^1.95.0",
    "@solana/wallet-adapter-react": "^0.15.35",
    "@solana/wallet-adapter-wallets": "^0.19.32",
    "@solana/spl-token": "^0.4.6",
    "@coral-xyz/anchor": "^0.30.1",
    "@metaplex-foundation/umi": "^0.9.2",
    "@metaplex-foundation/mpl-token-metadata": "^3.2.1",
    "zustand": "^4.5.0",
    "@prisma/client": "^5.16.0",
    "prisma": "^5.16.0",
    "shadcn-ui": "latest",
    "web3.storage": "^4.5.5",
    "lucide-react": "^0.400.0",
    "framer-motion": "^11.3.0",
    "recharts": "^2.12.0",
    "date-fns": "^3.6.0"
  }
}
```

---

## ⚙️ Environment Variables

```env
# Solana
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.devnet.solana.com
NEXT_PUBLIC_SOLANA_NETWORK=devnet
NEXT_PUBLIC_PALMSHIELD_PROGRAM_ID=<your_program_id>
NEXT_PUBLIC_PUSD_TOKEN_ADDRESS=<pusd_spl_token_address>

# Database
DATABASE_URL=postgresql://user:password@host:5432/palmshield

# IPFS
WEB3_STORAGE_TOKEN=<your_web3_storage_token>

# Platform
NEXT_PUBLIC_PLATFORM_FEE_PERCENT=0.5
NEXT_PUBLIC_PLATFORM_WALLET=<platform_fee_wallet>
NEXT_PUBLIC_AUTO_RELEASE_DAYS=7
NEXT_PUBLIC_ARBITRATOR_MIN_STAKE=50
NEXT_PUBLIC_VOTING_WINDOW_HOURS=48
```

---

## 🚀 Build Phases

### Phase 1 — Project Setup (Day 1–2)
- Initialize Next.js 14 project with TypeScript + Tailwind
- Install all dependencies
- Setup Solana wallet adapter
- Setup Prisma + PostgreSQL
- Create folder structure
- Setup constants (PUSD address, program ID placeholders)

### Phase 2 — Smart Contracts (Day 2–4)
- Initialize Anchor project inside `/contracts`
- Build EscrowAccount, MilestoneAccount, DisputeAccount state
- Write all 12 instructions
- Write unit tests
- Deploy to Solana Devnet
- Generate IDL + copy to frontend `/lib/anchor/idl.ts`

### Phase 3 — Frontend Pages (Day 4–7)
- Build Landing Page
- Build Connect Wallet page
- Build Dashboard (client + freelancer views)
- Build Create Project form
- Build Browse Projects page
- Build Project Detail page
- Build Dispute page
- Build Profile + NFT gallery page

### Phase 4 — Blockchain Integration (Day 7–9)
- Connect all frontend buttons to Anchor instructions
- PUSD balance display
- Transaction signing flows
- Real-time on-chain data fetching
- Kamino Finance yield integration

### Phase 5 — Dispute + NFT Systems (Day 9–11)
- IPFS evidence upload
- Arbitrator assignment logic
- Voting system
- Metaplex NFT minting on milestone approval

### Phase 6 — Testing (Day 11–12)
- Smart contract tests (all 12 instructions)
- API endpoint tests
- Frontend E2E tests
- Full flow test on Devnet

### Phase 7 — Deploy + Demo (Day 12–14)
- Deploy contracts to Devnet (mainnet-ready)
- Deploy frontend to Vercel
- Record demo video (5 min)
- Build 12-slide pitch deck
- Submit to Colosseum (Frontier Hackathon)

---

## 🏆 Hackathon Judging Alignment

| Criteria | Weight | How PalmShield Wins |
|---|---|---|
| Technical Execution | 35% | Anchor smart contracts + Kamino yield + Metaplex NFT + IPFS — full stack on Solana |
| Product & Use Case | 30% | $1.5T freelance market, real censorship problem, cross-border use case |
| Innovation | 15% | World's first yield-bearing freelance escrow — no competitor does this |
| Traction | 10% | Waitlist + pilot freelancers + Superteam India community interest |
| Team | 10% | Clear execution roadmap + shipped prototype |

---

## 🎯 Competitive Advantage

| Feature | Upwork | Fiverr | USDC Escrow | PalmShield |
|---|---|---|---|---|
| Funds frozen? | ✅ Yes | ✅ Yes | ✅ Yes | ❌ Never |
| Fees | 20% | 20% | 1–3% | 0.5% |
| Yield on locked funds | ❌ | ❌ | ❌ | ✅ Yes |
| Decentralized | ❌ | ❌ | Partial | ✅ Full |
| Reputation portable | ❌ | ❌ | ❌ | ✅ NFT |
| Dispute resolution | Centralized | Centralized | None | ✅ On-chain |
| Settlement speed | Days | Days | Minutes | <1 second |

---

## 📣 Target Users

**Primary:** Cross-border freelancers (developers, designers, writers) in Pakistan, India, Nigeria, Philippines, Iran — regions with high payment freeze risk

**Secondary:** Web3 DAOs and companies paying global contractors

**Tertiary:** Enterprise clients needing transparent payment audit trails

---

*Built for Palm USD x Superteam UAE — Solana Builders Hackathon*  
*Powered by PUSD — The Non-Freezable Stablecoin*
