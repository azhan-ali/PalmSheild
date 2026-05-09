use anchor_lang::prelude::*;
use anchor_spl::token::{self, Token, TokenAccount, Transfer};

// 1. PROGRAM ID
declare_id!("11111111111111111111111111111111");

// 2. MAIN PROGRAM LOGIC
#[program]
pub mod palmshield {
    use super::*;

    pub fn create_escrow(
        ctx: Context<CreateEscrow>,
        total_amount: u64,
        platform_fee: u64,
        milestone_count: u8,
    ) -> Result<()> {
        // Transfer PUSD from Client to Vault
        let cpi_accounts = Transfer {
            from: ctx.accounts.client_token_account.to_account_info(),
            to: ctx.accounts.vault_account.to_account_info(),
            authority: ctx.accounts.client.to_account_info(),
        };
        let cpi_program = ctx.accounts.token_program.to_account_info();
        let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);
        token::transfer(cpi_ctx, total_amount)?;

        // Initialize Escrow State
        let escrow = &mut ctx.accounts.escrow_account;
        escrow.client = *ctx.accounts.client.key;
        escrow.freelancer = Pubkey::default(); 
        escrow.total_amount = total_amount;
        escrow.platform_fee = platform_fee;
        escrow.milestone_count = milestone_count;
        escrow.current_milestone = 0;
        escrow.status = EscrowStatus::Open;
        escrow.created_at = Clock::get()?.unix_timestamp;
        escrow.bump = ctx.bumps.escrow_account;

        Ok(())
    }

    pub fn accept_project(ctx: Context<AcceptProject>) -> Result<()> {
        let escrow = &mut ctx.accounts.escrow_account;
        escrow.freelancer = *ctx.accounts.freelancer.key;
        escrow.status = EscrowStatus::Active;
        escrow.current_milestone = 1;
        Ok(())
    }
}

// 3. INSTRUCTION CONTEXTS
#[derive(Accounts)]
#[instruction(total_amount: u64)]
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

// 4. STATE MODELS
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

// 5. ERRORS
#[error_code]
pub enum EscrowError {
    #[msg("Escrow is not in open status.")]
    NotOpen,
}
