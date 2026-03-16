import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Maine Padel <info@padelmaine.com>",
      to: [process.env.CONTACT_EMAIL || "william@padelmaine.com"],
      replyTo: email,
      subject: `🎾 New Priority Access Signup — ${name}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a2e1a; border-bottom: 2px solid #1a2e1a; padding-bottom: 12px;">
            New Priority Access Signup
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 100px;">Name</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Email</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${email}" style="color: #1a2e1a;">${email}</a>
              </td>
            </tr>
          </table>
          <p style="margin-top: 24px; color: #999; font-size: 12px;">
            Submitted via the Priority Access form on the Maine Padel website
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Priority access signup error:", error);
    return NextResponse.json(
      { error: "Failed to submit" },
      { status: 500 }
    );
  }
}
