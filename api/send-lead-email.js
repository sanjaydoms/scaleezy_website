export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY;
  const NOTIFY_EMAIL = process.env.NOTIFICATION_EMAIL || 'domsgloballlp@gmail.com';
  // Use verified sender domain or Resend's default onboarding sender
  const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Scaleezy Leads <onboarding@resend.dev>';

  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return res.status(500).json({ error: 'RESEND_API_KEY not configured in environment' });
  }

  try {
    const {
      fullName = 'Not provided',
      brandName = 'Not provided',
      email = 'Not provided',
      phone = 'Not provided',
      businessType = 'Fashion Boutique',
      interestedModule = 'Complete Platform',
      hasPhysicalStore = 'Not specified',
      city = 'Not specified',
      specificRequirements = 'None',
      source = 'website'
    } = req.body || {};

    // Format phone for clean WhatsApp click-to-chat
    const cleanPhoneDigits = phone.replace(/[^0-9]/g, '');
    const whatsappUrl = cleanPhoneDigits ? `https://wa.me/${cleanPhoneDigits}` : null;

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Scaleezy Lead</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F8F9FA; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1E293B;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #F8F9FA; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" max-width="600" style="max-width: 600px; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #E2E8F0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #0A2F1D; padding: 28px 32px; text-align: left;">
              <span style="display: inline-block; background-color: #B8D432; color: #0A2F1D; font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; padding: 4px 10px; rounded: 4px; border-radius: 20px; margin-bottom: 8px;">
                NEW INBOUND LEAD
              </span>
              <h1 style="color: #FFFFFF; margin: 8px 0 0 0; font-size: 22px; font-weight: 700; letter-spacing: -0.5px;">
                ${brandName !== 'Not provided' ? brandName : fullName}
              </h1>
              <p style="color: rgba(255,255,255,0.75); margin: 4px 0 0 0; font-size: 14px;">
                Requested: <strong style="color: #B8D432;">${interestedModule}</strong>
              </p>
            </td>
          </tr>

          <!-- Core Details Table -->
          <tr>
            <td style="padding: 32px;">
              <h2 style="font-size: 13px; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px 0;">
                Lead Information
              </h2>

              <table width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 12px 0; color: #64748B; font-size: 14px; width: 38%;">Contact Name</td>
                  <td style="padding: 12px 0; color: #0F172A; font-size: 14px; font-weight: 600;">${fullName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 12px 0; color: #64748B; font-size: 14px;">Store / Brand</td>
                  <td style="padding: 12px 0; color: #0F172A; font-size: 14px; font-weight: 600;">${brandName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 12px 0; color: #64748B; font-size: 14px;">Email</td>
                  <td style="padding: 12px 0; font-size: 14px; font-weight: 600;">
                    <a href="mailto:${email}" style="color: #0A2F1D; text-decoration: underline;">${email}</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 12px 0; color: #64748B; font-size: 14px;">Phone Number</td>
                  <td style="padding: 12px 0; font-size: 14px; font-weight: 600;">
                    <a href="tel:${phone}" style="color: #0F172A; text-decoration: none;">${phone}</a>
                    ${whatsappUrl ? `<span style="margin-left: 8px;"><a href="${whatsappUrl}" target="_blank" style="background-color: #25D366; color: #FFFFFF; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 12px; text-decoration: none;">WhatsApp ↗</a></span>` : ''}
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 12px 0; color: #64748B; font-size: 14px;">Interested Module</td>
                  <td style="padding: 12px 0; color: #0A2F1D; font-size: 14px; font-weight: 700;">
                    <span style="background-color: #E6F4EA; color: #0A2F1D; padding: 4px 10px; border-radius: 6px; display: inline-block;">
                      ${interestedModule}
                    </span>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 12px 0; color: #64748B; font-size: 14px;">Physical Store?</td>
                  <td style="padding: 12px 0; color: #0F172A; font-size: 14px; font-weight: 600;">${hasPhysicalStore}</td>
                </tr>
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 12px 0; color: #64748B; font-size: 14px;">Business Type</td>
                  <td style="padding: 12px 0; color: #0F172A; font-size: 14px; font-weight: 500;">${businessType}</td>
                </tr>
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 12px 0; color: #64748B; font-size: 14px;">City / Location</td>
                  <td style="padding: 12px 0; color: #0F172A; font-size: 14px; font-weight: 500;">${city}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #64748B; font-size: 14px;">Submission Source</td>
                  <td style="padding: 12px 0; color: #64748B; font-size: 13px; font-mono font-weight: 500;">${source}</td>
                </tr>
              </table>

              <!-- Specific Requirements Block -->
              ${specificRequirements && specificRequirements !== 'None' ? `
              <div style="margin-top: 24px; padding: 16px; background-color: #F8FAFC; border-radius: 10px; border-left: 4px solid #0A2F1D;">
                <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.5px;">Notes / Specific Requirements:</p>
                <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #1E293B;">${specificRequirements}</p>
              </div>
              ` : ''}

              <!-- Action Callouts -->
              <div style="margin-top: 32px; text-align: center; border-top: 1px solid #E2E8F0; padding-top: 24px;">
                ${whatsappUrl ? `
                <a href="${whatsappUrl}" target="_blank" style="display: inline-block; background-color: #25D366; color: #FFFFFF; font-weight: 700; font-size: 14px; padding: 12px 24px; border-radius: 24px; text-decoration: none; margin-right: 10px;">
                  Message on WhatsApp
                </a>
                ` : ''}
                <a href="mailto:${email}?subject=${encodeURIComponent('Welcome to Scaleezy — Demo & Walkthrough')}" style="display: inline-block; background-color: #0A2F1D; color: #FFFFFF; font-weight: 700; font-size: 14px; padding: 12px 24px; border-radius: 24px; text-decoration: none;">
                  Reply via Email
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #F8FAFC; padding: 18px 32px; text-align: center; border-top: 1px solid #E2E8F0;">
              <p style="margin: 0; font-size: 12px; color: #94A3B8;">
                Scaleezy Lead Notification Service • Sent at ${new Date().toUTCString()}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [NOTIFY_EMAIL],
        reply_to: email && email.includes('@') ? email : undefined,
        subject: `🎯 New Scaleezy Lead: ${brandName !== 'Not provided' ? brandName : fullName} (${interestedModule})`,
        html: emailHtml
      })
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error('Resend API returned error:', resendData);
      return res.status(resendResponse.status).json({ error: resendData });
    }

    return res.status(200).json({ success: true, id: resendData.id });
  } catch (error) {
    console.error('Failed to send lead email:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}

