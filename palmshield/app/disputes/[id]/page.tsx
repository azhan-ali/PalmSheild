"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function DisputeDetailsPage() {
  const { id } = useParams();
  const [dispute, setDispute] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, fetch from `/api/disputes/${id}`
    setTimeout(() => {
      setDispute({
        id,
        projectTitle: "Build Web3 Landing Page",
        milestoneTitle: "Milestone 1",
        amount: 500,
        raisedBy: "client",
        reason: "Freelancer did not follow the Figma design system provided and stopped responding.",
        status: "VOTING",
        votingDeadline: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
        clientEvidence: "ipfs://...",
        freelancerEvidence: "ipfs://..."
      });
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) return <div className="text-center py-20 animate-pulse">Loading Dispute Data...</div>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <Badge variant="disputed" className="mb-4">Dispute Resolution</Badge>
          <h1 className="text-3xl font-bold font-sans tracking-[-1px] mb-2">{dispute.projectTitle}</h1>
          <p className="text-text-secondary">Milestone: {dispute.milestoneTitle} ({dispute.amount} PUSD)</p>
        </div>
        <div className="text-right">
          <p className="text-[11px] text-text-muted uppercase tracking-wider mb-1">Time Remaining</p>
          <p className="text-xl font-bold font-mono text-[#F5A623]">23h 45m</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-[rgba(226,75,74,0.3)] bg-[rgba(226,75,74,0.05)]">
          <h2 className="text-lg font-bold mb-4 text-[#F09595]">Client's Claim</h2>
          <p className="text-sm text-[rgba(240,238,230,0.8)] mb-6">{dispute.reason}</p>
          <Button variant="secondary" size="sm" className="w-full">View Client Evidence (IPFS)</Button>
        </Card>
        
        <Card className="border-[rgba(107,60,255,0.3)] bg-[rgba(107,60,255,0.05)]">
          <h2 className="text-lg font-bold mb-4 text-[#A98EFF]">Freelancer's Defense</h2>
          <p className="text-sm text-[rgba(240,238,230,0.8)] mb-6">"I delivered everything exactly according to specs. The client asked for out-of-scope changes."</p>
          <Button variant="secondary" size="sm" className="w-full">View Freelancer Work (IPFS)</Button>
        </Card>
      </div>

      <Card className="text-center py-10">
        <h2 className="text-2xl font-bold mb-2">Arbitrator Voting panel</h2>
        <p className="text-text-secondary mb-8 max-w-lg mx-auto">
          Review the evidence above. Stake PUSD and cast your vote. Correct votes earn yield + platform fees. Incorrect votes get slashed.
        </p>
        <div className="flex justify-center gap-6">
          <Button className="bg-[#E24B4A] text-white shadow-[0_0_20px_rgba(226,75,74,0.3)] hover:brightness-110">
            Vote for Client
          </Button>
          <Button className="bg-[#6B3CFF] text-white shadow-[0_0_20px_rgba(107,60,255,0.3)] hover:brightness-110">
            Vote for Freelancer
          </Button>
        </div>
      </Card>
    </div>
  );
}
