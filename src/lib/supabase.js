// Supabase Client & Database Service for Scaleezy Website
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://otpmvnqblcwjsrmvqcxx.supabase.co';
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_xuFESrQzs_HTIOqjD96Fpw_-CbxVw6c';

const defaultHeaders = {
  'apikey': SUPABASE_KEY,
  'Authorization': `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=minimal'
};

function normalizeModuleSlug(modName = '') {
  const clean = (modName || '').toLowerCase().trim();
  if (clean.includes('inventory')) return 'inventory';
  if (clean.includes('crm') || clean.includes('customer')) return 'crm';
  if (clean.includes('boutique') || clean.includes('pos') || clean.includes('billing')) return 'boutique';
  if (clean.includes('tryon') || clean.includes('try-on') || clean.includes('virtual')) return 'tryon2buy';
  if (clean.includes('market')) return 'marketing';
  if (clean.includes('analytic')) return 'analytics';
  if (clean.includes('finance')) return 'finance';
  if (clean.includes('logistic')) return 'logistics';
  return 'all_modules';
}

/**
 * Submits a demo booking request or access request to tenants_demorequest table
 * Differentiates module in source and notes so dedicated superadmins can filter by module
 * @param {Object} formData - Form field data
 * @param {string} source - 'book_a_demo' | 'request_access' | 'website'
 */
export async function submitDemoRequest(formData, source = 'book_a_demo') {
  const selectedModule = formData.interestedModule || 'Complete Scaleezy Platform';
  const moduleSlug = normalizeModuleSlug(selectedModule);
  const sourceTag = source === 'request_access' ? `request_access:${moduleSlug}` : moduleSlug;

  const payload = {
    name: formData.fullName || '',
    boutique: formData.brandName || '',
    email: formData.email || '',
    phone: `${formData.countryCode || '+91'} ${formData.phone || ''}`.trim(),
    makes: formData.businessType || 'Fashion Boutique',
    orders_per_month: formData.hasPhysicalStore === 'yes' ? 'Physical Store: Yes' : 'Physical Store: No',
    people: formData.preferredLanguage || 'English',
    problem: `Module: ${selectedModule} | Physical Store: ${formData.hasPhysicalStore === 'yes' ? 'Yes' : 'No'}`,
    notes: formData.specificRequirements
      ? `[Module: ${selectedModule}] ${formData.specificRequirements}`.trim()
      : `[Module: ${selectedModule}]`,
    address: formData.city || '',
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


