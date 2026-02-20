import { NextRequest, NextResponse } from "next/server";

const messages: Record<string, unknown>[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const message = {
      ...body,
      receivedAt: new Date().toISOString(),
      id: `msg_${Date.now()}`,
    };

    messages.push(message);

    console.log("📬 New contact message:", JSON.stringify(message, null, 2));

    return NextResponse.json({ success: true, message: "Message received. We'll respond within 24 hours." }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
