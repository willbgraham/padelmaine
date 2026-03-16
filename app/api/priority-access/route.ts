import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const audienceId = process.env.RESEND_AUDIENCE_ID || "";

export async function POST(req: NextRequest) {
  try {
    const { name, email, showOnList } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Add contact to Resend audience (stores first name + signup date)
    if (audienceId) {
      await resend.contacts.create({
        audienceId,
        email,
        firstName: name,
        unsubscribed: !showOnList, // use unsubscribed=false to mark "show on list"
      });
    }

    // Send notification email
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
            <tr>
              <td style="padding: 8px 0; color: #666;">Show on list</td>
              <td style="padding: 8px 0;">${showOnList ? "Yes" : "No"}</td>
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

export async function GET() {
  try {
    if (!audienceId) {
      return NextResponse.json({ signups: [] });
    }

    const response = await resend.contacts.list({ audienceId });

    // Filter to only contacts who opted in (unsubscribed=false) and have a firstName
    const signups = (response.data?.data || [])
      .filter((contact) => !contact.unsubscribed && contact.first_name)
      .map((contact) => ({
        name: contact.first_name,
        date: contact.created_at,
      }))
      .sort(
        (a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      );

    return NextResponse.json({ signups });
  } catch (error) {
    console.error("Priority access list error:", error);
    return NextResponse.json({ signups: [] });
  }
}
