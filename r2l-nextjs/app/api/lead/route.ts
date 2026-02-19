import { NextRequest, NextResponse } from "next/server";

interface LeadData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  availability: string;
  goal: string;
  timestamp?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: LeadData = await req.json();

    // Validate required fields
    const required: (keyof LeadData)[] = [
      "name",
      "email",
      "phone",
      "experience",
      "availability",
      "goal",
    ];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const lead: LeadData = {
      ...body,
      timestamp: new Date().toISOString(),
    };

    // ── Log to server console (always) ──
    console.log("[R2L Lead]", JSON.stringify(lead, null, 2));

    // ── Google Sheets Webhook ──
    const sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (sheetsUrl) {
      try {
        await fetch(sheetsUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
        });
      } catch (err) {
        console.error("[R2L] Google Sheets webhook error:", err);
      }
    }

    // ── Resend Email Notification ──
    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.NOTIFY_EMAIL;
    if (resendKey && notifyEmail) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "leads@refuse2losefit.com",
            to: notifyEmail,
            subject: `New Coaching Application — ${lead.name}`,
            html: `
              <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#060A12;color:#fff;padding:40px;border:1px solid #0B1F4D;">
                <h1 style="color:#1E4FFF;font-size:28px;margin-bottom:24px;">New Application Received</h1>
                <table style="width:100%;border-collapse:collapse;">
                  <tr><td style="padding:12px 0;border-bottom:1px solid #0B1F4D;color:#A9B1C1;width:140px;">Name</td><td style="padding:12px 0;border-bottom:1px solid #0B1F4D;">${lead.name}</td></tr>
                  <tr><td style="padding:12px 0;border-bottom:1px solid #0B1F4D;color:#A9B1C1;">Email</td><td style="padding:12px 0;border-bottom:1px solid #0B1F4D;">${lead.email}</td></tr>
                  <tr><td style="padding:12px 0;border-bottom:1px solid #0B1F4D;color:#A9B1C1;">Phone</td><td style="padding:12px 0;border-bottom:1px solid #0B1F4D;">${lead.phone}</td></tr>
                  <tr><td style="padding:12px 0;border-bottom:1px solid #0B1F4D;color:#A9B1C1;">Experience</td><td style="padding:12px 0;border-bottom:1px solid #0B1F4D;">${lead.experience}</td></tr>
                  <tr><td style="padding:12px 0;border-bottom:1px solid #0B1F4D;color:#A9B1C1;">Availability</td><td style="padding:12px 0;border-bottom:1px solid #0B1F4D;">${lead.availability}</td></tr>
                  <tr><td style="padding:12px 0;color:#A9B1C1;vertical-align:top;">Goal</td><td style="padding:12px 0;">${lead.goal}</td></tr>
                </table>
                <p style="margin-top:24px;color:#A9B1C1;font-size:12px;">Submitted: ${lead.timestamp}</p>
              </div>
            `,
          }),
        });
      } catch (err) {
        console.error("[R2L] Resend email error:", err);
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[R2L] Lead API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
