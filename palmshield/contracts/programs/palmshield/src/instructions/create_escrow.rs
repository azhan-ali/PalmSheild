use anchor_lang::prelude::*;
use anchor_spl::token::{self, Token, TokenAccount, Transfer};
use crate::state::*;

#[derive(Accounts)]
#[instruction(total_amount: u64, platform_fee: u64, milestone_count: u8)]
pub struct CreateEscrow<'info> {
    #[account(mut)]
    pub client: Signer<'info>,

    #[account(
        init,
        payer = client,
        space = EscrowAccount::LEN,
        seeds = [b"escrow", client.key().as_ref(), &total_amount.to_le_bytes()],
        bump
    )]
    pub escrow_account: Account<'info, EscrowAccount>,

    #[account(mut)]
    pub client_token_account: Account<'info, TokenAccount>,

    #[account(
        init,
        payer = client,
        seeds = [b"vault", escrow_account.key().as_ref()],
        bump,
        token::mint = mint,
        token::authority = escrow_account,
    )]
    pub vault_account: Account<'info, TokenAccount>,

    pub mint: Account<'info, anchor_spl::token::Mint>,
    pub token_program: Program<'info, Token>,
    pub system_program: Program<'info, System>,
    pub rent: Sysvar<'info, Rent>,
}

pub fn handler(
    ctx: Context<CreateEscrow>,
    total_amount: u64,
    platform_fee: u64,
    milestone_count: u8,
) -> Result<()> {
    // 1. Transfer PUSD from Client to Escrow Vault
    let cpi_accounts = Transfer {
        from: ctx.accounts.client_token_account.to_account_info(),
        to: ctx.accounts.vault_account.to_account_info(),
        authority: ctx.accounts.client.to_account_info(),
    };
    let cpi_program = ctx.accounts.token_program.to_account_info();
    let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);
    token::transfer(cpi_ctx, total_amount)?;

    // 2. Initialize Escrow State
    let escrow = &mut ctx.accounts.escrow_account;
    escrow.client = *ctx.accounts.client.key;
    escrow.freelancer = Pubkey::default(); // Will be set on accept
    escrow.total_amount = total_amount;
    escrow.platform_fee = platform_fee;
    escrow.milestone_count = milestone_count;
    escrow.current_milestone = 0;
    escrow.status = EscrowStatus::Open;
    escrow.created_at = Clock::get()?.unix_timestamp;
    escrow.bump = ctx.bumps.escrow_account;

    Ok(())
}
