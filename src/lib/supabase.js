// Supabase Client & Database Service for Scaleezy Website
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://zoqqmsrlpsrwvoqocgyy.supabase.co';
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_MIAzJUL3zEY8aV-Lqddjaw_W2TEe32c';

const defaultHeaders = {
  'apikey': SUPABASE_KEY,
  'Authorization': `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=minimal'
};

/**
 * Submits a demo booking request or access request to tenants_demorequest table
 * Differentiates module in source and notes so dedicated superadmins can filter by module
 * @param {Object} formData - Form field data
 * @param {string} source - 'book_a_demo' | 'request_access' | 'website'
 */
export async function submitDemoRequest(formData, source = 'request_access') {
  const selectedModule = formData.interestedModule || 'Complete Scaleezy Platform';
  // Source column in tenants_demorequest is VARCHAR(20); records where the lead came from
  // (book_a_demo | request_access | website). The module lives in problem/notes.
  const sourceTag = (source || 'request_access').slice(0, 20);
  const userNotes = (formData.notes || formData.specificRequirements || '').trim();

  const payload = {
    name: formData.fullName || '',
    boutique: formData.brandName || '',
    email: formData.email || '',
    phone: `${formData.countryCode || '+91'} ${formData.phone || ''}`.trim(),
    makes: 'Fashion Boutique',
    orders_per_month: 'Access Request',
    people: 'English',
    problem: `Module: ${selectedModule}`,
    notes: userNotes
      ? `[Module: ${selectedModule}] ${userNotes}`.trim()
      : `[Module: ${selectedModule}]`,
    address: '',
    status: 'pending',
    source: sourceTag,
    approved_by: '',
    terms_version: 'v1.0',
    created_at: new Date().toISOString()
  };

  const res = await fetch(`${SUPABASE_URL}/rest/v1/tenants_demorequest`, {
    method: 'POST',
    headers: defaultHeaders,
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('Supabase demo request error:', errorText);
    throw new Error(`Submission failed with status ${res.status}`);
  }

  // Trigger email notification to domsgloballlp@gmail.com via Resend (non-blocking)
  try {
    fetch('/api/send-lead-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: formData.fullName,
        brandName: formData.brandName,
        email: formData.email,
        phone: `${formData.countryCode || '+91'} ${formData.phone || ''}`.trim(),
        interestedModule: selectedModule,
        notes: userNotes,
        specificRequirements: userNotes,
        source: sourceTag
      })
    }).catch(err => {
      console.warn('Resend notification non-blocking warning:', err);
    });
  } catch (emailErr) {
    console.warn('Failed to dispatch lead email:', emailErr);
  }

  return true;
}

/**
 * Submits an email strictly to dedicated newsletter_subscribers table
 * Never falls back to tenants_demorequest so tables remain strictly separate
 * @param {string} email
 */
export async function submitNewsletter(email) {
  const cleanEmail = email.trim().toLowerCase();

  const res = await fetch(`${SUPABASE_URL}/rest/v1/newsletter_subscribers`, {
    method: 'POST',
    headers: defaultHeaders,
    body: JSON.stringify({
      email: cleanEmail,
      created_at: new Date().toISOString()
    })
  });

  // 409 Conflict means email already subscribed (unique constraint)
  if (res.status === 409) {
    return { success: true, message: 'You are already subscribed!' };
  }

  if (!res.ok) {
    const errText = await res.text();
    console.error('Newsletter submission error:', errText);
    throw new Error('Subscription failed. Please check table permissions.');
  }

  return { success: true, message: 'Thank you for subscribing!' };
}


