import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const project = await prisma.project.findUnique({
      where: { id: params.id },
      include: {
        milestones: { orderBy: { order: "asc" } },
        dispute: true,
        nfts: true,
      },
    });
    
    if (!project) return NextResponse.json({ error: "Project not found" }, { status: 404 });
    return NextResponse.json(project);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const { status, freelancerWallet, escrowTxSignature } = body;

    const project = await prisma.project.update({
      where: { id: params.id },
      data: {
        ...(status && { status }),
        ...(freelancerWallet && { freelancerWallet }),
        ...(escrowTxSignature && { escrowTxSignature }),
      },
    });

    return NextResponse.json(project);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
