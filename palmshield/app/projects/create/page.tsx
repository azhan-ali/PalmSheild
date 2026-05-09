"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import toast from "react-hot-toast";

export default function CreateProjectPage() {
  const { connected, publicKey } = useWallet();
  const { setVisible } = useWalletModal();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "Development",
    totalBudget: "",
    deadline: "",
    description: "",
  });

  const [milestones, setMilestones] = useState([
    { title: "Milestone 1", amount: "", description: "" }
  ]);

  const addMilestone = () => {
    setMilestones([...milestones, { title: `Milestone ${milestones.length + 1}`, amount: "", description: "" }]);
  };

  const updateMilestone = (index: number, field: string, value: string) => {
    const newMilestones = [...milestones];
    newMilestones[index] = { ...newMilestones[index], [field]: value };
    setMilestones(newMilestones);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!connected || !publicKey) {
      setVisible(true);
      return;
    }

    setLoading(true);
    try {
      // Create project via API
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          clientWallet: publicKey.toBase58(),
          totalBudget: parseFloat(formData.totalBudget),
          category: formData.category,
          deadline: formData.deadline ? new Date(formData.deadline).toISOString() : new Date().toISOString(),
          milestones: milestones.map(m => ({
            title: m.title,
            description: m.description,
            amount: parseFloat(m.amount)
          }))
        })
      });

      if (res.ok) {
        await res.json();
        toast.success("Project Created & Funds Locked!");
        router.push("/dashboard"); // Redirect to dashboard
      } else {
        const errData = await res.json();
        toast.error(`Failed to create: ${errData.error || "Unknown error"}`);
      }
    } catch (err: any) {
      toast.error(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <div className="mb-8">
        <Badge variant="pill" className="mb-4">Client Portal</Badge>
        <h1 className="text-3xl font-bold font-sans tracking-[-1px]">Create New Escrow</h1>
        <p className="text-text-secondary mt-2">Define your project scope, milestones, and lock funds securely.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Details */}
        <Card>
          <h2 className="text-xl font-bold mb-6">1. Project Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-text-secondary font-medium">Project Title</label>
              <input 
                required
                className="palm-input w-full" 
                placeholder="e.g. Build Web3 Landing Page" 
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-text-secondary font-medium">Category</label>
              <select 
                className="palm-input w-full bg-[#080B14]"
                value={formData.category}
                onChange={e => setFormData({...formData, category: e.target.value})}
              >
                <option>Development</option>
                <option>Design</option>
                <option>Marketing</option>
                <option>Smart Contracts</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-text-secondary font-medium">Total Budget (PUSD)</label>
              <input 
                required
                type="number"
                className="palm-input w-full" 
                placeholder="500" 
                value={formData.totalBudget}
                onChange={e => setFormData({...formData, totalBudget: e.target.value})}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-text-secondary font-medium">Deadline</label>
              <input 
                required
                type="date"
                className="palm-input w-full [color-scheme:dark]" 
                value={formData.deadline}
                onChange={e => setFormData({...formData, deadline: e.target.value})}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[13px] text-text-secondary font-medium">Description</label>
            <textarea 
              required
              rows={4}
              className="palm-input w-full resize-none" 
              placeholder="Describe the work required..."
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
            />
          </div>
        </Card>

        {/* Milestones */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">2. Milestones</h2>
            <Button type="button" variant="secondary" size="sm" onClick={addMilestone}>+ Add Milestone</Button>
          </div>
          
          <div className="space-y-4">
            {milestones.map((m, i) => (
              <div key={i} className="p-4 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-xl flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="flex-grow flex flex-col gap-2">
                    <label className="text-[11px] text-text-muted uppercase tracking-wider font-mono">Milestone Title</label>
                    <input 
                      required
                      className="palm-input w-full py-2" 
                      value={m.title}
                      onChange={e => updateMilestone(i, "title", e.target.value)}
                    />
                  </div>
                  <div className="w-[120px] flex flex-col gap-2">
                    <label className="text-[11px] text-text-muted uppercase tracking-wider font-mono">Amount (PUSD)</label>
                    <input 
                      required
                      type="number"
                      className="palm-input w-full py-2" 
                      value={m.amount}
                      onChange={e => updateMilestone(i, "amount", e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <input 
                    required
                    className="palm-input w-full py-2" 
                    placeholder="Deliverables required..."
                    value={m.description}
                    onChange={e => updateMilestone(i, "description", e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Submit */}
        <div className="flex justify-end pt-4">
          <Button type="submit" size="lg" disabled={loading}>
            {loading ? "Processing..." : connected ? "Create & Lock Funds" : "Connect Wallet to Create"}
          </Button>
        </div>
      </form>
    </div>
  );
}
