import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "kundan.webdev@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject} — from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;background:#0a0a0a;color:#e0e0e0;border-radius:12px;overflow:hidden;">
          <div style="background:#ea580c;padding:24px 28px;">
            <h2 style="margin:0;color:#fff;font-size:18px;font-weight:700;">New message from your portfolio</h2>
            <p style="margin:4px 0 0;color:rgba(255,255,255,0.7);font-size:13px;">kundan-webdev.vercel.app</p>
          </div>
          <div style="padding:28px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:8px 0;color:#777;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;width:80px;">Name</td>
                <td style="padding:8px 0;color:#fff;font-size:14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#777;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Email</td>
                <td style="padding:8px 0;font-size:14px;"><a href="mailto:${email}" style="color:#ea580c;text-decoration:none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#777;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Subject</td>
                <td style="padding:8px 0;color:#fff;font-size:14px;">${subject}</td>
              </tr>
            </table>
            <hr style="border:none;border-top:1px solid #1c1c1c;margin:20px 0;" />
            <p style="color:#777;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin:0 0 10px;">Message</p>
            <p style="color:#ccc;font-size:14px;line-height:1.7;white-space:pre-wrap;margin:0;background:#111;padding:16px;border-radius:8px;border:1px solid #1c1c1c;">${message}</p>
            <div style="margin-top:24px;">
              <a href="mailto:${email}?subject=Re: ${subject}" style="display:inline-block;background:#ea580c;color:#fff;padding:10px 22px;border-radius:50px;font-size:13px;font-weight:600;text-decoration:none;">Reply to ${name} →</a>
            </div>
          </div>
          <div style="padding:16px 28px;border-top:1px solid #1c1c1c;text-align:center;">
            <p style="color:#333;font-size:11px;margin:0;">Sent from <a href="https://kundan-webdev.vercel.app" style="color:#555;text-decoration:none;">kundan-webdev.vercel.app</a></p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}