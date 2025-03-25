import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Log that we're starting the request
    console.log('Processing contact form submission...');

    const { name, email, message } = await request.json();

    // Log the form data (be careful with sensitive data in production)
    console.log('Form data received:', { name, email });

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    if (!name || !email || !message) {
      console.error('Missing required fields:', { name: !!name, email: !!email, message: !!message });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    try {
      console.log('Attempting to send email...');
      const data = await resend.emails.send({
        from: `${name} <onboarding@resend.dev>`, // Note: We need to use a verified domain
        to: ["taha.khan8899@gmail.com"],
        subject: `New Contact Form Submission from ${name}`,
        text: `
Name: ${name}
Email: ${email}

Message:
${message}
        `,
        html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, "<br>")}</p>
        `,
      });
      console.log('Email sent successfully:', data);
      return NextResponse.json(data);
    } catch (emailError: any) {
      console.error('Error sending email:', emailError);
      console.error('Error details:', emailError.message, emailError.response?.body);
      return NextResponse.json(
        { error: "Failed to send email", details: emailError.message },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('General error:', error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
} 