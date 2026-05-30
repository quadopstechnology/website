import { NextResponse } from "next/server";
import { sendEmail } from "@/src/service/mailService";
import { env } from "@/src/config/env";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, email, name } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email address is required." },
        { status: 400 }
      );
    }

    const companyEmail = env.companyEmail;
    if (!companyEmail) {
      return NextResponse.json(
        { success: false, message: "Company receiver email is not configured." },
        { status: 500 }
      );
    }

    if (type === "planner") {
      const { selectedServices, projectSize, timeline, estimatedEffort, teamAllocation } = body;

      // 1. Send Blueprint notification to QuadOps Team
      const teamHtml = `
        <div style="font-family: sans-serif; max-width: 600px; color: #1c1b20; line-height: 1.6;">
          <h2 style="color: #494bd6; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Project Blueprint Configured</h2>
          <p>A client has calculated and submitted a project estimate using the interactive planner:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr style="background: #f7f2fa;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Client Email</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Capabilities Required</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${(selectedServices || []).join(", ")}</td>
            </tr>
            <tr style="background: #f7f2fa;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Scope & Complexity</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${projectSize}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Timeline Mode</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${timeline}</td>
            </tr>
            <tr style="background: #f7f2fa;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Estimated Effort</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${estimatedEffort}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Team Allocation</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${teamAllocation}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 13px; color: #666;">This request was generated dynamically from the QuadOps Website Planner.</p>
        </div>
      `;

      await sendEmail({
        to: companyEmail,
        subject: `[Project Planner] New Blueprint from ${email}`,
        html: teamHtml,
        replyTo: email,
      });

      // 2. Send confirmation to the client
      const clientHtml = `
        <div style="font-family: sans-serif; max-width: 600px; color: #1c1b20; line-height: 1.6; border: 1px solid #e0ddf5; padding: 25px; border-radius: 12px; background-color: #fdf8ff;">
          <h2 style="color: #494bd6; margin-top: 0;">Your Project Blueprint is Locked In!</h2>
          <p>Hello,</p>
          <p>Thank you for using the interactive project planner on the QuadOps website. We have successfully received your configuration details and locked in your blueprint:</p>
          
          <div style="background: #efecff; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
              <li><strong>Services:</strong> ${(selectedServices || []).join(", ")}</li>
              <li><strong>Complexity:</strong> ${projectSize}</li>
              <li><strong>Timeline:</strong> ${timeline}</li>
              <li><strong>Effort Mode:</strong> ${estimatedEffort}</li>
              <li><strong>Assigned Resources:</strong> ${teamAllocation}</li>
            </ul>
          </div>
          
          <p>One of our team members will analyze your requirements and reach out to you within 24 hours to schedule a deep-dive call.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #616175; margin-bottom: 0;">
            <strong>QuadOps</strong><br />
            Mohali, Punjab, India<br />
            <a href="mailto:${companyEmail}" style="color: #494bd6; text-decoration: none;">${companyEmail}</a>
          </p>
        </div>
      `;

      await sendEmail({
        to: email,
        subject: "Your QuadOps Project Blueprint",
        html: clientHtml,
      });

    } else {
      // General Contact Form Inquiry
      const { projectType, brief } = body;

      // 1. Send Inquiry notification to QuadOps Team
      const teamHtml = `
        <div style="font-family: sans-serif; max-width: 600px; color: #1c1b20; line-height: 1.6;">
          <h2 style="color: #494bd6; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Contact Inquiry Received</h2>
          <p>A user has sent a request through the website contact form:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr style="background: #f7f2fa;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Client Name</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${name || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Client Email</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr style="background: #f7f2fa;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Project Type</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${projectType || "N/A"}</td>
            </tr>
          </table>
          <h3 style="margin-top: 20px; color: #1c1b20;">Project Brief:</h3>
          <div style="background: #f7f2fa; padding: 15px; border-radius: 8px; border-left: 4px solid #494bd6; white-space: pre-wrap;">${brief || "No brief provided."}</div>
        </div>
      `;

      await sendEmail({
        to: companyEmail,
        subject: `[Contact Form] New Inquiry from ${name || email}`,
        html: teamHtml,
        replyTo: email,
      });

      // 2. Send Auto-confirmation to Client
      const clientHtml = `
        <div style="font-family: sans-serif; max-width: 600px; color: #1c1b20; line-height: 1.6; border: 1px solid #e0ddf5; padding: 25px; border-radius: 12px; background-color: #fdf8ff;">
          <h2 style="color: #494bd6; margin-top: 0;">Thanks for reaching out, ${name || "there"}!</h2>
          <p>We have successfully received your inquiry regarding <strong>${projectType || "your project"}</strong>.</p>
          <p>Our specialists will review your requirements and get back to you with initial feedback and proposed next steps within 24 hours.</p>
          
          <div style="background: #efecff; padding: 15px; border-radius: 8px; margin: 15px 0; font-size: 13px;">
            <strong>Your Submitted Brief:</strong><br />
            <p style="margin: 5px 0 0 0; font-style: italic; color: #48464c;">"${brief}"</p>
          </div>

          <p>Let's build something amazing together!</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #616175; margin-bottom: 0;">
            <strong>QuadOps Team</strong><br />
            Mohali, Punjab, India<br />
            <a href="mailto:${companyEmail}" style="color: #494bd6; text-decoration: none;">${companyEmail}</a>
          </p>
        </div>
      `;

      await sendEmail({
        to: email,
        subject: "We received your request - QuadOps Team",
        html: clientHtml,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully.",
    });
  } catch (error) {
    console.error("Mail service error:", error);
    const msg = error instanceof Error ? error.message : "Failed to send emails.";
    return NextResponse.json(
      { success: false, message: msg },
      { status: 500 }
    );
  }
}
