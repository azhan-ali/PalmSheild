use anchor_lang::prelude::*;

#[account]
pub struct ArbitratorAccount {
    pub wallet: Pubkey,
    pub staked_amount: u64,
    pub total_votes: u32,
    pub correct_votes: u32,
    pub is_active: bool,
    pub bump: u8,
}

impl ArbitratorAccount {
    pub const LEN: usize = 8 + 32 + 8 + 4 + 4 + 1 + 1;
}
