"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { YieldDisplay } from "@/components/ui/YieldDisplay";
import toast from "react-hot-toast";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const { connected, publicKey } = useWallet();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/${id}`);
        if (res.ok) {
          const data = await res.json();
          setProject(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProject();
  }, [id]);

  const handleAcceptProject = async () => {
    if (!connected || !publicKey) return toast.error("Please connect wallet first");
    
    // Call API to accept project
    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: "ACTIVE",
          freelancerWallet: publicKey.toBase58()
        })
      });
      if (res.ok) {
        await res.json();
        setProject({ ...project, status: "ACTIVE", freelancerWallet: publicKey.toBase58() });
        toast.success("Project Accepted Successfully!");
      } else {
        const errData = await res.json();
        toast.error(errData.error || "Failed to accept project");
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "An error occurred");
    }
  };

  if (loading) {
    return <div className="text-center py-20 text-text-secondary animate-pulse">Loading Escrow Contract...</div>;
  }

  if (!project) {
    return <div className="text-center py-20 text-red-500">Project not found</div>;
  }

  const isClient = connected && publicKey?.toBase58() === project.clientWallet;
  const isFreelancer = connected && publicKey?.toBase58() === project.freelancerWallet;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Badge variant={project.status === "OPEN" ? "locked" : project.status === "ACTIVE" ? "pending" : "pill"}>
            Status: {project.status}
          </Badge>
          <span className="text-[12px] text-text-muted font-mono">{project.category}</span>
        </div>
        <h1 className="text-4xl font-bold font-sans tracking-[-1px] mb-4">{project.title}</h1>
        <p className="text-text-secondary leading-relaxed">{project.description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="flex flex-col justify-center items-center py-6 relative overflow-hidden">
          <span className="text-[11px] text-text-secondary uppercase tracking-wider mb-2">Total Budget</span>
          <span className="text-2xl font-bold font-mono text-white mb-2">{project.totalBudget} PUSD</span>
          
          {/* Yield Display Overlay */}
          {project.status === "ACTIVE" && (
            <div className="mt-2 pt-2 border-t border-[rgba(255,255,255,0.05)] w-full text-center">
               <YieldDisplay principalAmount={project.totalBudget} lockedAt={project.updatedAt} />
            </div>
          )}
        </Card>
        <Card className="flex flex-col justify-center items-center py-6">
          <span className="text-[11px] text-text-secondary uppercase tracking-wider mb-2">Client</span>
          <span className="text-sm font-bold font-mono">
            {project.clientWallet.slice(0, 6)}...{project.clientWallet.slice(-4)}
          </span>
        </Card>
        <Card className="flex flex-col justify-center items-center py-6">
          <span className="text-[11px] text-text-secondary uppercase tracking-wider mb-2">Freelancer</span>
          <span className="text-sm font-bold font-mono">
            {project.freelancerWallet ? `${project.freelancerWallet.slice(0, 6)}...${project.freelancerWallet.slice(-4)}` : "Awaiting..."}
          </span>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-6">Milestones</h2>
      <div className="space-y-4 mb-12">
        {project.milestones?.map((m: any, idx: number) => (
          <Card key={m.id} className={`p-6 flex flex-col md:flex-row gap-6 md:items-center justify-between ${m.status === 'APPROVED' ? 'opacity-50' : ''}`}>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center text-[12px] font-mono">{idx + 1}</span>
                <h3 className="font-bold text-lg">{m.title}</h3>
                <Badge variant={m.status === "PENDING" ? "locked" : m.status === "SUBMITTED" ? "pending" : "pill"}>
                  {m.status}
                </Badge>
              </div>
              <p className="text-sm text-text-secondary mb-2">{m.description}</p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="text-[11px] text-text-muted uppercase tracking-wider font-mono">Amount</div>
                <div className="font-bold text-[#00C896] font-mono">{m.amount} PUSD</div>
              </div>
              
              {isFreelancer && m.status === "PENDING" && project.status === "ACTIVE" && (
                <Button size="sm" variant="secondary">Submit Work</Button>
              )}
              {isClient && m.status === "SUBMITTED" && (
                <Button size="sm" className="bg-[#00C896] text-black">Approve & Release</Button>
              )}
            </div>
          </Card>
        ))}
      </div>

      {project.status === "OPEN" && !isClient && (
        <div className="fixed bottom-0 left-0 right-0 p-6 bg-[rgba(8,11,20,0.9)] backdrop-blur-md border-t border-border-default flex justify-center z-50">
          <Button size="lg" className="w-full max-w-md text-lg" onClick={handleAcceptProject}>
            Accept Project & Start Work
          </Button>
        </div>
      )}
    </div>
  );
}
