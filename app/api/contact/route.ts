import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, workshopInterest, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would integrate with your email service
    // For example: SendGrid, Mailgun, Resend, etc.
    // This is a placeholder that logs the data
    console.log('Contact form submission:', {
      name,
      email,
      organization,
      workshopInterest,
      message,
    });

    // Example with a hypothetical email service:
    // await sendEmail({
    //   to: 'contact@susanmbrown.com',
    //   subject: `New Contact Form Submission from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Organization:</strong> ${organization || 'N/A'}</p>
    //     <p><strong>Workshop Interest:</strong> ${workshopInterest || 'N/A'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
