use anchor_lang::prelude::*;
use crate::state::*;
use crate::errors::EscrowError;

#[derive(Accounts)]
pub struct AcceptProject<'info> {
    #[account(mut)]
    pub freelancer: Signer<'info>,

    #[account(
        mut,
        constraint = escrow_account.status == EscrowStatus::Open @ EscrowError::NotOpen
    )]
    pub escrow_account: Account<'info, EscrowAccount>,
}

pub fn handler(ctx: Context<AcceptProject>) -> Result<()> {
    let escrow = &mut ctx.accounts.escrow_account;
    
    // Set freelancer and mark as active
    escrow.freelancer = *ctx.accounts.freelancer.key;
    escrow.status = EscrowStatus::Active;
    escrow.current_milestone = 1;

    Ok(())
}
