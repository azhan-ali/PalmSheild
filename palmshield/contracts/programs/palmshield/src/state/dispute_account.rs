use anchor_lang::prelude::*;

#[account]
pub struct DisputeAccount {
    pub escrow: Pubkey,
    pub raised_by: Pubkey,
    pub arbitrator_1: Pubkey,
    pub arbitrator_2: Pubkey,
    pub arbitrator_3: Pubkey,
    pub vote_1: Option<bool>, // true = freelancer wins
    pub vote_2: Option<bool>,
    pub vote_3: Option<bool>,
    pub voting_deadline: i64,
    pub resolved: bool,
    pub bump: u8,
}

impl DisputeAccount {
    pub const LEN: usize = 8 + 32 + 32 + 32 + 32 + 32 + 2 + 2 + 2 + 8 + 1 + 1;
}
