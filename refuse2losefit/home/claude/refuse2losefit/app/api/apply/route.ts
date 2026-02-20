import { NextRequest, NextResponse } from "next/server";

// In-memory store (replace with database/email service in production)
const applications: Record<string, unknown>[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Basic validation
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Basic spam check — honeypot / rate limiting placeholder
    const submission = {
      ...body,
      submittedAt: new Date().toISOString(),
      id: `app_${Date.now()}`,
    };

    applications.push(submission);

    // Log to console (replace with email service like Resend/SendGrid, or DB insert)
    console.log("📥 New coaching application:", JSON.stringify(submission, null, 2));

    // TODO: Send notification email to coach
    // TODO: Send confirmation email to applicant
    // TODO: Store in database (Supabase / PlanetScale / etc.)
    // TODO: Send to CRM webhook

    return NextResponse.json(
      { success: true, message: "Application received. We'll be in touch within 24 hours.", id: submission.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Application submission error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// GET route to list applications (protect this in production!)
export async function GET() {
  return NextResponse.json({ count: applications.length, applications });
}
