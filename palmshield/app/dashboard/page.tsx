"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useWallet } from "@solana/wallet-adapter-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export default function DashboardPage() {
  const { connected, publicKey } = useWallet();
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app we'd fetch projects filtered by wallet address
    // For verification, we fetch all open projects
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (err: any) {
        console.error(err);
        toast.error("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (!connected) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="text-text-secondary mb-6">Please connect your wallet to view your dashboard.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <div className="flex justify-between items-end mb-10">
        <div>
          <Badge variant="pill" className="mb-4">Overview</Badge>
          <h1 className="text-3xl font-bold font-sans tracking-[-1px]">Your Dashboard</h1>
        </div>
        <Button asChild>
          <Link href="/projects/create">Create New Project</Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="flex flex-col justify-center items-center py-8">
          <span className="text-[13px] text-text-secondary uppercase tracking-wider mb-2">Total Locked (PUSD)</span>
          <span className="text-4xl font-bold font-mono grad-text">$0.00</span>
        </Card>
        <Card className="flex flex-col justify-center items-center py-8">
          <span className="text-[13px] text-text-secondary uppercase tracking-wider mb-2">Active Projects</span>
          <span className="text-4xl font-bold font-mono text-white">{projects.length}</span>
        </Card>
        <Card className="flex flex-col justify-center items-center py-8">
          <span className="text-[13px] text-text-secondary uppercase tracking-wider mb-2">Earned Yield</span>
          <span className="text-4xl font-bold font-mono text-[#00C896]">+$0.00</span>
        </Card>
      </div>

      <h2 className="text-xl font-bold mb-6">Recent Projects</h2>
      
      {loading ? (
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-24 bg-[rgba(255,255,255,0.03)] rounded-xl"></div>
          ))}
        </div>
      ) : projects.length === 0 ? (
        <Card className="text-center py-12">
          <p className="text-text-secondary mb-4">You don't have any active projects yet.</p>
          <Button asChild variant="secondary">
            <Link href="/projects/browse">Browse Open Projects</Link>
          </Button>
        </Card>
      ) : (
        <div className="grid gap-4">
          {projects.map((project: any) => (
            <Card key={project.id} className="flex items-center justify-between p-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <Badge variant={project.status === "OPEN" ? "locked" : "pending"}>
                    {project.status}
                  </Badge>
                </div>
                <div className="text-sm text-text-secondary flex gap-4 font-mono">
                  <span>Budget: {project.totalBudget} PUSD</span>
                  <span>•</span>
                  <span>{project.milestones?.length || 0} Milestones</span>
                </div>
              </div>
              <Button variant="secondary" asChild>
                <Link href={`/projects/${project.id}`}>View Details</Link>
              </Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
