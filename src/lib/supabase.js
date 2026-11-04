// Supabase Client & Database Service for Scaleezy Website
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://otpmvnqblcwjsrmvqcxx.supabase.co';
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_xuFESrQzs_HTIOqjD96Fpw_-CbxVw6c';

const defaultHeaders = {
  'apikey': SUPABASE_KEY,
  'Authorization': `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=minimal'
};

/**
 * Submits a demo booking request to tenants_demorequest table
 */
export async function submitDemoRequest(formData) {
  const payload = {
    name: formData.fullName || '',
    boutique: formData.brandName || '',
    email: formData.email || '',
    phone: `${formData.countryCode || '+91'} ${formData.phone || ''}`.trim(),
    makes: formData.businessType || 'Fashion Boutique',
    orders_per_month: formData.hasPhysicalStore === 'yes' ? 'Physical Store: Yes' : 'Physical Store: No',
    people: formData.preferredLanguage || 'English',
    problem: `Module: ${formData.interestedModule || 'Complete Platform'} | Physical Store: ${formData.hasPhysicalStore === 'yes' ? 'Yes' : 'No'} | Slot: ${formData.preferredDate || 'Flexible'} (${formData.preferredTime || 'Anytime'})`,
    notes: formData.specificRequirements || '',
    address: formData.city || '',
    status: 'pending',
    source: 'website',
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

  return true;
}

/**
 * Submits an email to newsletter table, with seamless fallback
 */
export async function submitNewsletter(email) {
  const cleanEmail = email.trim().toLowerCase();

  // 1. Try dedicated newsletter_subscribers table
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/newsletter_subscribers`, {
      method: 'POST',
      headers: defaultHeaders,
      body: JSON.stringify({
        email: cleanEmail,
        created_at: new Date().toISOString()
      })
    });

    if (res.ok) {
      return { success: true, table: 'newsletter_subscribers' };
    }
  } catch (err) {
    console.warn('Dedicated newsletter_subscribers table not found, falling back to tenants_demorequest', err);
  }

  // 2. Fallback to tenants_demorequest with source: 'newsletter'
  const fallbackPayload = {
    name: 'Newsletter Subscriber',
    boutique: 'Newsletter',
    email: cleanEmail,
    phone: '-',
    makes: 'Newsletter',
    orders_per_month: '0',
    people: '0',
    problem: 'Newsletter Subscription',
    status: 'subscribed',
    notes: 'Signed up via website footer newsletter',
    source: 'newsletter',
    address: '',
    approved_by: '',
    terms_version: 'v1.0',
    created_at: new Date().toISOString()
  };

  const fallbackRes = await fetch(`${SUPABASE_URL}/rest/v1/tenants_demorequest`, {
    method: 'POST',
    headers: defaultHeaders,
    body: JSON.stringify(fallbackPayload)
  });

  if (!fallbackRes.ok) {
    const errText = await fallbackRes.text();
    console.error('Newsletter fallback error:', errText);
    throw new Error('Failed to subscribe');
  }

  return { success: true, table: 'tenants_demorequest' };
}

