use anchor_lang::prelude::*;

pub mod errors;
pub mod instructions;
pub mod state;

use instructions::*;

declare_id!("11111111111111111111111111111111"); // Replace with actual program ID upon deployment

#[program]
pub mod palmshield {
    use super::*;

    pub fn create_escrow(
        ctx: Context<CreateEscrow>,
        total_amount: u64,
        platform_fee: u64,
        milestone_count: u8,
    ) -> Result<()> {
        instructions::create_escrow::handler(ctx, total_amount, platform_fee, milestone_count)
    }

    pub fn accept_project(ctx: Context<AcceptProject>) -> Result<()> {
        instructions::accept_project::handler(ctx)
    }

    // Additional instructions (submit_milestone, approve_milestone, auto_release, dispute)
    // would be wired up here in a production environment following the exact same pattern.
}
