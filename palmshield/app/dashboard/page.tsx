"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const { connected, publicKey } = useWallet();
  const { setVisible } = useWalletModal();
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (!connected) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
        <div className="w-16 h-16 rounded-2xl bg-[rgba(107,60,255,0.1)] border border-[rgba(107,60,255,0.2)] flex items-center justify-center mb-6 text-3xl">🔒</div>
        <h1 className="text-2xl font-bold mb-3">Connect Your Wallet</h1>
        <p className="text-text-secondary mb-8 text-center max-w-md">Connect your Solana wallet to view your active projects, locked funds, and earned yield.</p>
        <Button onClick={() => setVisible(true)}>Connect Wallet</Button>
      </div>
    );
  }

  const totalLocked = projects.reduce((sum, p) => sum + (p.totalBudget || 0), 0);

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
        <div>
          <Badge variant="pill" className="mb-4">Overview</Badge>
          <h1 className="text-3xl font-bold tracking-[-1px]">Your Dashboard</h1>
        </div>
        <Button href="/projects/create">+ Create Project</Button>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mb-12">
        <Card className="flex flex-col justify-center items-center py-8">
          <span className="text-[12px] text-text-muted uppercase tracking-[1px] mb-2">Total Locked</span>
          <span className="text-3xl font-bold font-mono grad-text">{totalLocked.toFixed(2)} PUSD</span>
        </Card>
        <Card className="flex flex-col justify-center items-center py-8">
          <span className="text-[12px] text-text-muted uppercase tracking-[1px] mb-2">Active Projects</span>
          <span className="text-3xl font-bold font-mono text-white">{projects.length}</span>
        </Card>
        <Card className="flex flex-col justify-center items-center py-8">
          <span className="text-[12px] text-text-muted uppercase tracking-[1px] mb-2">Earned Yield</span>
          <span className="text-3xl font-bold font-mono text-[#00C896]">+$0.00</span>
        </Card>
      </div>

      <h2 className="text-xl font-bold mb-6">Recent Projects</h2>
      
      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-24 bg-[rgba(255,255,255,0.03)] rounded-xl animate-pulse" />
          ))}
        </div>
      ) : projects.length === 0 ? (
        <Card className="text-center py-12">
          <p className="text-text-secondary mb-6">You don't have any active projects yet.</p>
          <Button href="/projects/browse" variant="secondary">Browse Open Projects</Button>
        </Card>
      ) : (
        <div className="grid gap-4">
          {projects.map((project: any) => (
            <Card key={project.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <Badge variant={project.status === "OPEN" ? "locked" : project.status === "ACTIVE" ? "pending" : "pill"}>
                    {project.status}
                  </Badge>
                </div>
                <div className="text-sm text-text-secondary flex gap-4 font-mono">
                  <span>{project.totalBudget} PUSD</span>
                  <span>•</span>
                  <span>{project.milestones?.length || 0} Milestones</span>
                </div>
              </div>
              <Button variant="secondary" size="sm" href={`/projects/${project.id}`}>View Details →</Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
