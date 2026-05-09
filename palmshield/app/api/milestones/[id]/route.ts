import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const { status, submissionNote, rejectionReason, txSignature } = body;

    const updateData: any = { status };
    if (status === "SUBMITTED") {
      updateData.submittedAt = new Date();
      updateData.autoReleaseAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // +7 days
      if (submissionNote) updateData.submissionNote = submissionNote;
    }
    if (status === "APPROVED" || status === "AUTO_RELEASED") {
      updateData.approvedAt = new Date();
      if (txSignature) updateData.txSignature = txSignature;
    }
    if (status === "REJECTED" && rejectionReason) {
      updateData.rejectionReason = rejectionReason;
    }

    const milestone = await prisma.milestone.update({
      where: { id: params.id },
      data: updateData,
    });

    // Check if this was the last milestone, and update project status
    if (status === "APPROVED" || status === "AUTO_RELEASED") {
      const allMilestones = await prisma.milestone.findMany({
        where: { projectId: milestone.projectId },
      });
      const allDone = allMilestones.every(
        (m) => m.status === "APPROVED" || m.status === "AUTO_RELEASED"
      );
      if (allDone) {
        await prisma.project.update({
          where: { id: milestone.projectId },
          data: { status: "COMPLETED" },
        });
      }
    }

    return NextResponse.json(milestone);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
