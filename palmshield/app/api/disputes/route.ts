import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { projectId, milestoneId, raisedBy, raisedAgainst, reason, evidenceCid } = body;

    const dispute = await prisma.dispute.create({
      data: {
        projectId,
        milestoneId,
        raisedBy,
        raisedAgainst,
        reason,
        clientEvidence: raisedBy === "client" ? evidenceCid : undefined,
        freelancerEvidence: raisedBy === "freelancer" ? evidenceCid : undefined,
        votingDeadline: new Date(Date.now() + 48 * 60 * 60 * 1000), // +48 hours
        status: "OPEN",
      },
    });

    await prisma.project.update({
      where: { id: projectId },
      data: { status: "DISPUTED" },
    });

    await prisma.milestone.update({
      where: { id: milestoneId },
      data: { status: "DISPUTED" },
    });

    return NextResponse.json(dispute, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
