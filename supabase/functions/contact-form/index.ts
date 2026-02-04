import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  try {
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured');
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const resend = new Resend(resendApiKey);
    const body: ContactFormData = await req.json();
    const { name, email, company, message } = body;

    console.log('Contact form submission received:', { name, email, company: company || 'not provided' });

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      console.log('Validation failed: name is required');
      return new Response(
        JSON.stringify({ error: 'Name is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!email || typeof email !== 'string' || email.trim().length === 0) {
      console.log('Validation failed: email is required');
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      console.log('Validation failed: message is required');
      return new Response(
        JSON.stringify({ error: 'Message is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Length validation
    if (name.trim().length > 100) {
      console.log('Validation failed: name too long');
      return new Response(
        JSON.stringify({ error: 'Name must be less than 100 characters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (email.trim().length > 255) {
      console.log('Validation failed: email too long');
      return new Response(
        JSON.stringify({ error: 'Email must be less than 255 characters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (message.trim().length > 2000) {
      console.log('Validation failed: message too long');
      return new Response(
        JSON.stringify({ error: 'Message must be less than 2000 characters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (company && typeof company === 'string' && company.trim().length > 200) {
      console.log('Validation failed: company name too long');
      return new Response(
        JSON.stringify({ error: 'Company name must be less than 200 characters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      console.log('Validation failed: invalid email format');
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Sanitize inputs by trimming
    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company?.trim() || null,
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    };

    console.log('Contact form validated successfully:', { 
      name: sanitizedData.name, 
      email: sanitizedData.email,
      messageLength: sanitizedData.message.length 
    });

    // Send email notification to info@hotlistai.com
    const { error: emailError } = await resend.emails.send({
      from: 'Lyft Email Contact Form <onboarding@resend.dev>',
      to: ['info@hotlistai.com'],
      reply_to: sanitizedData.email,
      subject: `New Contact Form Submission from ${sanitizedData.name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #1a1a1a; font-size: 24px; margin-bottom: 24px;">New Contact Form Submission</h1>
          
          <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <p style="margin: 0 0 12px 0;"><strong>Name:</strong> ${sanitizedData.name}</p>
            <p style="margin: 0 0 12px 0;"><strong>Email:</strong> <a href="mailto:${sanitizedData.email}" style="color: #2563eb;">${sanitizedData.email}</a></p>
            ${sanitizedData.company ? `<p style="margin: 0 0 12px 0;"><strong>Company:</strong> ${sanitizedData.company}</p>` : ''}
            <p style="margin: 0;"><strong>Submitted:</strong> ${new Date(sanitizedData.submittedAt).toLocaleString()}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h2 style="color: #1a1a1a; font-size: 18px; margin-bottom: 12px;">Message:</h2>
            <p style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${sanitizedData.message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
          <p style="color: #6b7280; font-size: 14px;">This email was sent from the Lyft Email website contact form.</p>
        </div>
      `,
    });

    if (emailError) {
      console.error('Failed to send email:', emailError);
      return new Response(
        JSON.stringify({ error: 'Failed to send your message. Please try again.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Email sent successfully to info@hotlistai.com');

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Your message has been received. We will get back to you within 24 hours.' 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process your request. Please try again.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
