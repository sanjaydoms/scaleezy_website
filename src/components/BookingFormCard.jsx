import React, { useState, useId } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock } from 'lucide-react';

export default function BookingFormCard({
  title = 'Book a Demo',
  subtitle = 'Fill in the form below to book a tailored walkthrough session',
  showHeader = true,
  className = ''
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    brandName: '',
    countryCode: '+91',
    phone: '',
    preferredLanguage: 'English',
    interestedModule: 'Complete Scaleezy Platform',
    hasPhysicalStore: 'yes',
    businessType: 'Fashion Boutique',
    city: '',
    preferredDate: '',
    preferredTime: 'Afternoon (2:00 PM – 5:00 PM)',
    specificRequirements: ''
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const uid = useId();
  const [today] = useState(() => new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10));

  // id, name and error wiring shared by every field so labels and errors are announced
  const fieldProps = (name) => {
    const hasError = Boolean(touched[name] && errors[name]);
    return {
      id: `${uid}-${name}`,
      name,
      'aria-invalid': hasError || undefined,
      'aria-describedby': hasError ? `${uid}-${name}-error` : undefined
    };
  };

  const countryCodes = [
    { code: '+91', label: '🇮🇳 India (+91)' },
    { code: '+1', label: '🇺🇸 USA (+1)' },
    { code: '+44', label: '🇬🇧 UK (+44)' },
    { code: '+971', label: '🇦🇪 UAE (+971)' },
    { code: '+65', label: '🇸🇬 Singapore (+65)' },
    { code: '+61', label: '🇦🇺 Australia (+61)' },
    { code: '+1', label: '🇨🇦 Canada (+1)' }
  ];

  const modulesList = [
    'Complete Scaleezy Platform',
    'Inventory & Stock Management',
    'Omnichannel POS & Billing',
    'Design & Sourcing (Tech Packs)',
    'Production & Batch Tracking',
    'AI Virtual Try-On Studio',
    'B2B Wholesale Portal',
    'Margin & Sales Analytics'
  ];

  const businessTypes = [
    'Fashion Boutique',
    'Saree & Ethnic Wear Store',
    'Bridal & Couture Studio',
    'Fashion Brand / D2C Label',
    'Multi-store Apparel Chain',
    'Garment Manufacturer / Factory',
    'Wholesaler / Textile Distributor',
    'Online Store / Social Commerce',
    'Other'
  ];

  const timeSlots = [
    'Morning (10:00 AM – 1:00 PM)',
    'Afternoon (2:00 PM – 5:00 PM)',
    'Evening (5:00 PM – 8:00 PM)',
    'Immediate / As Soon As Possible'
  ];

  const languages = ['English', 'Hindi', 'Tamil', 'Telugu', 'Kannada', 'Gujarati', 'Marathi'];

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.brandName.trim()) newErrors.brandName = 'Store or brand name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validate()[name] || '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({
      fullName: true,
      email: true,
      brandName: true,
      phone: true
    });

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstInvalid = ['fullName', 'email', 'brandName', 'phone'].find(name => validationErrors[name]);
      e.currentTarget.elements.namedItem(firstInvalid)?.focus();
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Never report success unless the request actually reached the lead endpoint
      const apiEndpoint = import.meta.env?.VITE_ACCESS_REQUEST_API;
      if (!apiEndpoint) throw new Error('VITE_ACCESS_REQUEST_API is not set');
      const res = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Demo request not sent:', err);
      setErrors({ general: "We couldn't send your request just now. Please try again in a few minutes." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      brandName: '',
      countryCode: '+91',
      phone: '',
      preferredLanguage: 'English',
      interestedModule: 'Complete Scaleezy Platform',
      hasPhysicalStore: 'yes',
      businessType: 'Fashion Boutique',
      city: '',
      preferredDate: '',
      preferredTime: 'Afternoon (2:00 PM – 5:00 PM)',
      specificRequirements: ''
    });
    setTouched({});
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className={`bg-[var(--color-paper)] text-[var(--color-primary)] text-left ${className}`}>
      
      {/* Dark Card Header */}
      {showHeader && (
        <div className="bg-[var(--color-primary)] text-[var(--color-paper)] p-7 sm:p-9 relative">
          
          <div className="relative z-10">
            <h3 className="t-lead mb-2">
              {title}
            </h3>
            <p className="t-small">
              {subtitle}
            </p>
          </div>
        </div>
      )}

      {/* Form Body or Confirmation State */}
      <div className="p-6 sm:p-9 md:p-11">
        {isSubmitted ? (
          /* Success Confirmation State */
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-8 text-center"
          >
            <div className="w-16 h-16 bg-[var(--color-accent)] text-[var(--color-primary)] flex items-center justify-center mx-auto mb-6 text-2xl font-medium">
              ✓
            </div>

            <h3 className="t-lead mb-3">
              Demo request received
            </h3>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal max-w-md mx-auto mb-8">
              Thank you, <span className="font-semibold text-[var(--color-primary)]">{formData.fullName}</span>. Our team will contact you at <span className="font-semibold text-[var(--color-primary)]">{formData.email}</span> to confirm a time for your walkthrough.
            </p>

            <div className="bg-[var(--color-stone)] p-5 mb-8 text-left t-small space-y-2.5 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-black/60">Brand:</span>
                <span className="font-semibold text-[var(--color-primary)]">{formData.brandName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/60">Phone:</span>
                <span className="font-semibold text-[var(--color-primary)]">{formData.countryCode} {formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/60">Selected Module:</span>
                <span className="font-semibold text-[var(--color-primary)]">{formData.interestedModule}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/60">Preferred Slot:</span>
                <span className="font-semibold text-[var(--color-primary)]">{formData.preferredTime}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleReset}
                className="btn btn-dark"
              >
                <span>Send Another Request</span>
              </button>
            </div>
          </motion.div>
        ) : (
          /* Live Booking Form */
          <form onSubmit={handleSubmit} noValidate className="space-y-5 sm:space-y-6">
            
            {/* General Error Alert */}
            {errors.general && (
              <div role="alert" className="p-3.5 bg-[var(--color-maroon)] text-[var(--color-paper)] t-small">
                {errors.general}
              </div>
            )}

            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-1.5">
                <label htmlFor={`${uid}-fullName`} className="t-small font-medium flex items-center justify-between">
                  <span>Name <span className="text-[#9B1C2C]">*</span></span>
                </label>
                <input
                  type="text"
                  {...fieldProps('fullName')}
                  autoComplete="name"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your name"
                  className={`w-full h-12 px-3.5 t-body border bg-white transition-colors outline-none ${
                    touched.fullName && errors.fullName
                      ? 'border-[#9B1C2C] focus:ring-2 focus:ring-[#9B1C2C]/20'
                      : 'border-black/20 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15'
                  }`}
                />
                {touched.fullName && errors.fullName && (
                  <p id={`${uid}-fullName-error`} className="t-small text-[#9B1C2C] font-medium">{errors.fullName}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor={`${uid}-email`} className="t-small font-medium flex items-center justify-between">
                  <span>Email <span className="text-[#9B1C2C]">*</span></span>
                </label>
                <input
                  type="email"
                  {...fieldProps('email')}
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="you@yourbusiness.com"
                  className={`w-full h-12 px-3.5 t-body border bg-white transition-colors outline-none ${
                    touched.email && errors.email
                      ? 'border-[#9B1C2C] focus:ring-2 focus:ring-[#9B1C2C]/20'
                      : 'border-black/20 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15'
                  }`}
                />
                {touched.email && errors.email && (
                  <p id={`${uid}-email-error`} className="t-small text-[#9B1C2C] font-medium">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Row 2: Brand / Company Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-1.5">
                <label htmlFor={`${uid}-brandName`} className="t-small font-medium flex items-center justify-between">
                  <span>Brand / Company Name <span className="text-[#9B1C2C]">*</span></span>
                </label>
                <input
                  type="text"
                  {...fieldProps('brandName')}
                  autoComplete="organization"
                  value={formData.brandName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your boutique or brand name"
                  className={`w-full h-12 px-3.5 t-body border bg-white transition-colors outline-none ${
                    touched.brandName && errors.brandName
                      ? 'border-[#9B1C2C] focus:ring-2 focus:ring-[#9B1C2C]/20'
                      : 'border-black/20 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15'
                  }`}
                />
                {touched.brandName && errors.brandName && (
                  <p id={`${uid}-brandName-error`} className="t-small text-[#9B1C2C] font-medium">{errors.brandName}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor={`${uid}-phone`} className="t-small font-medium flex items-center justify-between">
                  <span>Phone Number <span className="text-[#9B1C2C]">*</span></span>
                </label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    aria-label="Country code"
                    autoComplete="tel-country-code"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="h-12 px-2.5 t-small border border-black/20 bg-white focus:border-[var(--color-primary)] outline-none cursor-pointer shrink-0"
                  >
                    {countryCodes.map(c => (
                      <option key={c.label} value={c.code}>{c.label}</option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    {...fieldProps('phone')}
                  autoComplete="tel-national"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="98765 43210"
                    className={`w-full h-12 px-3.5 t-body border bg-white transition-colors outline-none ${
                      touched.phone && errors.phone
                        ? 'border-[#9B1C2C] focus:ring-2 focus:ring-[#9B1C2C]/20'
                        : 'border-black/20 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15'
                    }`}
                  />
                </div>
                {touched.phone && errors.phone && (
                  <p id={`${uid}-phone-error`} className="t-small text-[#9B1C2C] font-medium">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Row 3: Language & Interested Module */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-1.5">
                <label htmlFor={`${uid}-preferredLanguage`} className="t-small font-medium">
                  Choose Language <span className="text-[#9B1C2C]">*</span>
                </label>
                <select
                  {...fieldProps('preferredLanguage')}
                  value={formData.preferredLanguage}
                  onChange={handleChange}
                  className="w-full h-12 px-3.5 t-body border border-black/20 bg-white focus:border-[var(--color-primary)] outline-none cursor-pointer"
                >
                  {languages.map(lang => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor={`${uid}-interestedModule`} className="t-small font-medium">
                  I'm Interested In <span className="text-[#9B1C2C]">*</span>
                </label>
                <select
                  {...fieldProps('interestedModule')}
                  value={formData.interestedModule}
                  onChange={handleChange}
                  className="w-full h-12 px-3.5 t-body border border-black/20 bg-white focus:border-[var(--color-primary)] outline-none cursor-pointer"
                >
                  {modulesList.map(mod => (
                    <option key={mod} value={mod}>{mod}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4: Physical Retail Store Toggle & Business Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-1.5">
                <span id={`${uid}-hasPhysicalStore`} className="block t-small font-medium">
                  Do you have a physical store? <span className="text-[#9B1C2C]">*</span>
                </span>
                <div role="group" aria-labelledby={`${uid}-hasPhysicalStore`} className="grid grid-cols-2 gap-2 h-12">
                  <button
                    type="button"
                    aria-pressed={formData.hasPhysicalStore === 'yes'}
                    onClick={() => setFormData(prev => ({ ...prev, hasPhysicalStore: 'yes' }))}
                    className={`t-small font-medium transition-colors border cursor-pointer ${
                      formData.hasPhysicalStore === 'yes'
                        ? 'bg-[var(--color-primary)] text-[var(--color-accent)] border-[var(--color-primary)]'
                        : 'bg-white text-[var(--color-primary)] border-black/20 hover:bg-[var(--color-stone)]'
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    aria-pressed={formData.hasPhysicalStore === 'no'}
                    onClick={() => setFormData(prev => ({ ...prev, hasPhysicalStore: 'no' }))}
                    className={`t-small font-medium transition-colors border cursor-pointer ${
                      formData.hasPhysicalStore === 'no'
                        ? 'bg-[var(--color-primary)] text-[var(--color-accent)] border-[var(--color-primary)]'
                        : 'bg-white text-[var(--color-primary)] border-black/20 hover:bg-[var(--color-stone)]'
                    }`}
                  >
                    No (Online Only)
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor={`${uid}-businessType`} className="t-small font-medium">
                  Business Type <span className="text-[#9B1C2C]">*</span>
                </label>
                <select
                  {...fieldProps('businessType')}
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full h-12 px-3.5 t-body border border-black/20 bg-white focus:border-[var(--color-primary)] outline-none cursor-pointer"
                >
                  {businessTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 5: City / Location */}
            <div className="space-y-1.5">
              <label htmlFor={`${uid}-city`} className="t-small font-medium">
                City / Location
              </label>
              <input
                type="text"
                {...fieldProps('city')}
                  autoComplete="address-level2"
                value={formData.city}
                onChange={handleChange}
                placeholder="e.g. Mumbai, New York, London, Bangalore"
                className="w-full h-12 px-3.5 t-body border border-black/20 bg-white focus:border-[var(--color-primary)] outline-none transition-all"
              />
            </div>

            {/* Row 6: Preferred Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-1.5">
                <label htmlFor={`${uid}-preferredDate`} className="t-small font-medium">
                  Preferred Date
                </label>
                <input
                  type="date"
                  {...fieldProps('preferredDate')}
                  min={today}
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full h-12 px-3.5 t-body border border-black/20 bg-white focus:border-[var(--color-primary)] outline-none cursor-pointer"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor={`${uid}-preferredTime`} className="t-small font-medium">
                  Preferred Time
                </label>
                <select
                  {...fieldProps('preferredTime')}
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full h-12 px-3.5 t-body border border-black/20 bg-white focus:border-[var(--color-primary)] outline-none cursor-pointer"
                >
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 7: Specific Requirements Textarea */}
            <div className="space-y-1.5">
              <label htmlFor={`${uid}-specificRequirements`} className="t-small font-medium">
                Anything specific you'd like to see?
              </label>
              <textarea
                {...fieldProps('specificRequirements')}
                value={formData.specificRequirements}
                onChange={handleChange}
                rows={3}
                placeholder="e.g. Barcode POS, multi-branch stock transfers, automated WhatsApp VIP lookbooks, factory tech packs..."
                className="w-full p-3.5 t-body border border-black/20 bg-white focus:border-[var(--color-primary)] outline-none transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-dark w-full justify-center disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending Request...</span>
                  </>
                ) : (
                  <>
                    <span>Book a Demo</span>
                    <ArrowRight size={17} />
                  </>
                )}
              </button>
            </div>

            {/* Security Assurance */}
            <p className="t-small pt-2 flex items-center gap-1.5">
              <Lock size={12} className="text-gray-500" />
              <span>Your data is strictly confidential. We will never share your contact details.</span>
            </p>

          </form>
        )}
      </div>
    </div>
  );
}
