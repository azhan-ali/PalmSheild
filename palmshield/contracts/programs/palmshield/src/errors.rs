use anchor_lang::prelude::*;

#[error_code]
pub enum EscrowError {
    #[msg("Escrow is not in open status.")]
    NotOpen,
    #[msg("Escrow is not active.")]
    NotActive,
    #[msg("Milestone is not pending.")]
    MilestoneNotPending,
    #[msg("Milestone is not submitted.")]
    MilestoneNotSubmitted,
    #[msg("Auto-release timer has not expired yet.")]
    TimerNotExpired,
    #[msg("You are not authorized to perform this action.")]
    Unauthorized,
    #[msg("Invalid milestone index.")]
    InvalidMilestone,
    #[msg("Invalid arbitrator.")]
    InvalidArbitrator,
    #[msg("Dispute is already resolved.")]
    DisputeResolved,
    #[msg("Voting deadline has passed.")]
    VotingDeadlinePassed,
}
