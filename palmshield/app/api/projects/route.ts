import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const projects = await prisma.project.findMany({
      where: { status: "OPEN" },
      orderBy: { createdAt: "desc" },
      include: { milestones: true },
    });
    return NextResponse.json(projects);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, description, clientWallet, totalBudget, category, deadline, milestones } = body;

    const project = await prisma.project.create({
      data: {
        title,
        description,
        clientWallet,
        totalBudget,
        platformFee: totalBudget * 0.005,
        category,
        deadline: new Date(deadline),
        milestones: {
          create: milestones.map((m: any, index: number) => ({
            title: m.title,
            description: m.description,
            amount: m.amount,
            order: index + 1,
          })),
        },
      },
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
