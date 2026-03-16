import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, organization, investmentInterest, message } =
      await req.json();

    // Validate required fields
    if (!name || !email || !investmentInterest) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Maine Padel <info@padelmaine.com>",
      to: [process.env.CONTACT_EMAIL || "william@padelmaine.com"],
      replyTo: email,
      subject: `New Inquiry — ${name}${organization ? ` (${organization})` : ""}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a2e1a; border-bottom: 2px solid #1a2e1a; padding-bottom: 12px;">
            New Contact Inquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 140px;">Name</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Email</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${email}" style="color: #1a2e1a;">${email}</a>
              </td>
            </tr>
            ${
              organization
                ? `<tr>
              <td style="padding: 8px 0; color: #666;">Organization</td>
              <td style="padding: 8px 0;">${organization}</td>
            </tr>`
                : ""
            }
            <tr>
              <td style="padding: 8px 0; color: #666;">Investment Interest</td>
              <td style="padding: 8px 0; font-weight: 600;">${investmentInterest}</td>
            </tr>
          </table>
          ${
            message
              ? `<div style="margin-top: 20px; padding: 16px; background: #f5f0e8; border-radius: 8px;">
              <p style="color: #666; margin: 0 0 8px 0; font-size: 13px;">Message</p>
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>`
              : ""
          }
          <p style="margin-top: 24px; color: #999; font-size: 12px;">
            Sent from the Maine Padel at the Downs website
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
