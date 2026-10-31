import React, { useState, useId } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock } from 'lucide-react';
import { BrandPatternAtelier } from './BrandPattern';

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
    <div className={`rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-black/10 bg-white text-left ${className}`}>
      
      {/* Dark Card Header */}
      {showHeader && (
        <div className="bg-[#0A2F1D] text-white p-7 sm:p-9 text-center relative overflow-hidden">
          <BrandPatternAtelier mode="dark" opacity={0.06} size={280} />
          
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 font-normal">
              {subtitle}
            </p>
          </div>

          {/* Accent hairline underline */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent" />
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
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-inner">
              ✓
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#14263D] tracking-tight mb-3">
              Demo request received
            </h3>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal max-w-md mx-auto mb-8">
              Thank you, <span className="font-semibold text-[#14263D]">{formData.fullName}</span>. Our team will contact you at <span className="font-semibold text-[#14263D]">{formData.email}</span> to confirm a time for your walkthrough.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mb-8 text-left text-xs sm:text-sm space-y-2.5 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-gray-600">Brand:</span>
                <span className="font-semibold text-[#14263D]">{formData.brandName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Phone:</span>
                <span className="font-semibold text-[#14263D]">{formData.countryCode} {formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Selected Module:</span>
                <span className="font-semibold text-[#14263D]">{formData.interestedModule}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Preferred Slot:</span>
                <span className="font-semibold text-[#14263D]">{formData.preferredTime}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-7 py-3 rounded-full font-medium text-sm hover:bg-gray-100 transition-all active:scale-98 cursor-pointer"
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
              <div role="alert" className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm rounded-xl">
                {errors.general}
              </div>
            )}

            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-1.5">
                <label htmlFor={`${uid}-fullName`} className="text-xs font-semibold text-[#14263D] uppercase tracking-wider flex items-center justify-between">
                  <span>Name <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  {...fieldProps('fullName')}
                  autoComplete="name"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your name"
                  className={`w-full h-11 px-3.5 text-sm rounded-xl border bg-white transition-all outline-none ${
                    touched.fullName && errors.fullName
                      ? 'border-red-500 focus:ring-2 focus:ring-red-100'
                      : 'border-gray-200 focus:border-[#0A2F1D] focus:ring-2 focus:ring-[#0A2F1D]/10'
                  }`}
                />
                {touched.fullName && errors.fullName && (
                  <p id={`${uid}-fullName-error`} className="text-xs text-red-600 font-medium">{errors.fullName}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor={`${uid}-email`} className="text-xs font-semibold text-[#14263D] uppercase tracking-wider flex items-center justify-between">
                  <span>Email <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="email"
                  {...fieldProps('email')}
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="you@yourbusiness.com"
                  className={`w-full h-11 px-3.5 text-sm rounded-xl border bg-white transition-all outline-none ${
                    touched.email && errors.email
                      ? 'border-red-500 focus:ring-2 focus:ring-red-100'
                      : 'border-gray-200 focus:border-[#0A2F1D] focus:ring-2 focus:ring-[#0A2F1D]/10'
                  }`}
                />
                {touched.email && errors.email && (
                  <p id={`${uid}-email-error`} className="text-xs text-red-600 font-medium">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Row 2: Brand / Company Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-1.5">
                <label htmlFor={`${uid}-brandName`} className="text-xs font-semibold text-[#14263D] uppercase tracking-wider flex items-center justify-between">
                  <span>Brand / Company Name <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  {...fieldProps('brandName')}
                  autoComplete="organization"
                  value={formData.brandName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your boutique or brand name"
                  className={`w-full h-11 px-3.5 text-sm rounded-xl border bg-white transition-all outline-none ${
                    touched.brandName && errors.brandName
                      ? 'border-red-500 focus:ring-2 focus:ring-red-100'
                      : 'border-gray-200 focus:border-[#0A2F1D] focus:ring-2 focus:ring-[#0A2F1D]/10'
                  }`}
                />
                {touched.brandName && errors.brandName && (
                  <p id={`${uid}-brandName-error`} className="text-xs text-red-600 font-medium">{errors.brandName}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor={`${uid}-phone`} className="text-xs font-semibold text-[#14263D] uppercase tracking-wider flex items-center justify-between">
                  <span>Phone Number <span className="text-red-500">*</span></span>
                </label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    aria-label="Country code"
                    autoComplete="tel-country-code"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="h-11 px-2.5 text-xs font-semibold rounded-xl border border-gray-200 bg-gray-50 focus:border-[#0A2F1D] outline-none cursor-pointer shrink-0"
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
                    className={`w-full h-11 px-3.5 text-sm rounded-xl border bg-white transition-all outline-none ${
                      touched.phone && errors.phone
                        ? 'border-red-500 focus:ring-2 focus:ring-red-100'
                        : 'border-gray-200 focus:border-[#0A2F1D] focus:ring-2 focus:ring-[#0A2F1D]/10'
                    }`}
                  />
                </div>
                {touched.phone && errors.phone && (
                  <p id={`${uid}-phone-error`} className="text-xs text-red-600 font-medium">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Row 3: Language & Interested Module */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-1.5">
                <label htmlFor={`${uid}-preferredLanguage`} className="text-xs font-semibold text-[#14263D] uppercase tracking-wider">
                  Choose Language <span className="text-red-500">*</span>
                </label>
                <select
                  {...fieldProps('preferredLanguage')}
                  value={formData.preferredLanguage}
                  onChange={handleChange}
                  className="w-full h-11 px-3.5 text-sm rounded-xl border border-gray-200 bg-white focus:border-[#0A2F1D] outline-none cursor-pointer"
                >
                  {languages.map(lang => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor={`${uid}-interestedModule`} className="text-xs font-semibold text-[#14263D] uppercase tracking-wider">
                  I'm Interested In <span className="text-red-500">*</span>
                </label>
                <select
                  {...fieldProps('interestedModule')}
                  value={formData.interestedModule}
                  onChange={handleChange}
                  className="w-full h-11 px-3.5 text-sm rounded-xl border border-gray-200 bg-white focus:border-[#0A2F1D] outline-none cursor-pointer"
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
                <span id={`${uid}-hasPhysicalStore`} className="block text-xs font-semibold text-[#14263D] uppercase tracking-wider">
                  Do you have a physical store? <span className="text-red-500">*</span>
                </span>
                <div role="group" aria-labelledby={`${uid}-hasPhysicalStore`} className="grid grid-cols-2 gap-2 h-11">
                  <button
                    type="button"
                    aria-pressed={formData.hasPhysicalStore === 'yes'}
                    onClick={() => setFormData(prev => ({ ...prev, hasPhysicalStore: 'yes' }))}
                    className={`rounded-xl text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                      formData.hasPhysicalStore === 'yes'
                        ? 'bg-[#0A2F1D] text-[var(--color-accent)] border-[#0A2F1D] shadow-sm'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    aria-pressed={formData.hasPhysicalStore === 'no'}
                    onClick={() => setFormData(prev => ({ ...prev, hasPhysicalStore: 'no' }))}
                    className={`rounded-xl text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                      formData.hasPhysicalStore === 'no'
                        ? 'bg-[#0A2F1D] text-[var(--color-accent)] border-[#0A2F1D] shadow-sm'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    No (Online Only)
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor={`${uid}-businessType`} className="text-xs font-semibold text-[#14263D] uppercase tracking-wider">
                  Business Type <span className="text-red-500">*</span>
                </label>
                <select
                  {...fieldProps('businessType')}
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full h-11 px-3.5 text-sm rounded-xl border border-gray-200 bg-white focus:border-[#0A2F1D] outline-none cursor-pointer"
                >
                  {businessTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 5: City / Location */}
            <div className="space-y-1.5">
              <label htmlFor={`${uid}-city`} className="text-xs font-semibold text-[#14263D] uppercase tracking-wider">
                City / Location
              </label>
              <input
                type="text"
                {...fieldProps('city')}
                  autoComplete="address-level2"
                value={formData.city}
                onChange={handleChange}
                placeholder="e.g. Mumbai, New York, London, Bangalore"
                className="w-full h-11 px-3.5 text-sm rounded-xl border border-gray-200 bg-white focus:border-[#0A2F1D] outline-none transition-all"
              />
            </div>

            {/* Row 6: Preferred Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-1.5">
                <label htmlFor={`${uid}-preferredDate`} className="text-xs font-semibold text-[#14263D] uppercase tracking-wider">
                  Preferred Date
                </label>
                <input
                  type="date"
                  {...fieldProps('preferredDate')}
                  min={today}
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full h-11 px-3.5 text-sm rounded-xl border border-gray-200 bg-white focus:border-[#0A2F1D] outline-none cursor-pointer"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor={`${uid}-preferredTime`} className="text-xs font-semibold text-[#14263D] uppercase tracking-wider">
                  Preferred Time
                </label>
                <select
                  {...fieldProps('preferredTime')}
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full h-11 px-3.5 text-sm rounded-xl border border-gray-200 bg-white focus:border-[#0A2F1D] outline-none cursor-pointer"
                >
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 7: Specific Requirements Textarea */}
            <div className="space-y-1.5">
              <label htmlFor={`${uid}-specificRequirements`} className="text-xs font-semibold text-[#14263D] uppercase tracking-wider">
                Anything specific you'd like to see?
              </label>
              <textarea
                {...fieldProps('specificRequirements')}
                value={formData.specificRequirements}
                onChange={handleChange}
                rows={3}
                placeholder="e.g. Barcode POS, multi-branch stock transfers, automated WhatsApp VIP lookbooks, factory tech packs..."
                className="w-full p-3.5 text-sm rounded-xl border border-gray-200 bg-white focus:border-[#0A2F1D] outline-none transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-13 rounded-full bg-gradient-to-r from-[#0A2F1D] to-[#12422b] text-[var(--color-accent)] font-bold text-base hover:shadow-xl hover:scale-101 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-md"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[var(--color-accent)]/30 border-t-[var(--color-accent)] rounded-full animate-spin" />
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
            <p className="text-center text-xs text-gray-600 pt-2 flex items-center justify-center gap-1.5">
              <Lock size={12} className="text-gray-500" />
              <span>Your data is strictly confidential. We will never share your contact details.</span>
            </p>

          </form>
        )}
      </div>
    </div>
  );
}
