use anchor_lang::prelude::*;

#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq, Eq)]
pub enum MilestoneStatus {
    Pending,
    InProgress,
    Submitted,
    Approved,
    Rejected,
    AutoReleased,
    Disputed,
}

#[account]
pub struct MilestoneAccount {
    pub escrow: Pubkey,
    pub amount: u64,
    pub status: MilestoneStatus,
    pub submitted_at: i64,
    pub auto_release_at: i64,
    pub bump: u8,
}

impl MilestoneAccount {
    pub const LEN: usize = 8 + 32 + 8 + 1 + 8 + 8 + 1;
}
