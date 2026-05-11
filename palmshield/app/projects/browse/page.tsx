"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function BrowseProjectsPage() {
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

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <Badge variant="pill" className="mb-5">Freelancer Portal</Badge>
        <h1 className="text-[40px] font-bold tracking-[-1.5px] mb-4">Find Work. <span className="grad-text">Stay Protected.</span></h1>
        <p className="text-text-secondary text-[16px] leading-relaxed">Browse open escrow projects. When you accept, funds are already locked in a smart contract.</p>
      </div>

      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="h-52 bg-[rgba(255,255,255,0.03)] rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : projects.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-text-secondary mb-4">No open projects found at the moment.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: any) => (
            <Card key={project.id} className="flex flex-col group">
              <div className="flex justify-between items-start mb-4">
                <Badge variant="locked">PUSD Locked</Badge>
                <span className="text-[12px] text-text-muted">{project.category}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{project.title}</h3>
              <p className="text-sm text-text-secondary mb-6 line-clamp-2 flex-grow">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[rgba(255,255,255,0.05)]">
                <div className="flex flex-col">
                  <span className="text-[11px] text-text-muted uppercase tracking-wider font-mono">Budget</span>
                  <span className="font-bold text-[#00C896] font-mono">{project.totalBudget} PUSD</span>
                </div>
                <Button variant="secondary" size="sm" href={`/projects/${project.id}`}>View →</Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
