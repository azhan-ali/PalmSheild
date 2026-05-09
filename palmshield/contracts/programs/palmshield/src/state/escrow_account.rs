use anchor_lang::prelude::*;

#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq, Eq)]
pub enum EscrowStatus {
    Open,
    Active,
    Completed,
    Disputed,
    Cancelled,
}

#[account]
pub struct EscrowAccount {
    pub client: Pubkey,
    pub freelancer: Pubkey,
    pub total_amount: u64,
    pub platform_fee: u64,
    pub milestone_count: u8,
    pub current_milestone: u8,
    pub status: EscrowStatus,
    pub created_at: i64,
    pub bump: u8,
}

impl EscrowAccount {
    pub const LEN: usize = 8 + 32 + 32 + 8 + 8 + 1 + 1 + 1 + 8 + 1;
}
