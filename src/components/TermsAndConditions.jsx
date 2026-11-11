import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  CreditCard, 
  HelpCircle, 
  Scale, 
  ArrowLeft 
} from 'lucide-react';
import { BrandPatternAtelier } from './BrandPattern';
import Footer from './Footer';
import usePageMeta from './usePageMeta';

export default function TermsAndConditions() {
  usePageMeta(
    "Terms & Conditions — Scaleezy",
    "Read the Scaleezy Terms and Conditions governing platform usage, multi-tenant workspace licensing, billing, and support service commitments."
  );

  const lastUpdated = "November 4, 2026";

  const terms = [
    {
      id: "agreement",
      title: "1. Agreement to Terms",
      icon: <FileText className="w-5 h-5 text-[var(--color-accent)]" />,
      content: `These Terms and Conditions ("Terms") constitute a legally binding agreement between DOMS Global / Scaleezy ("Scaleezy," "Company," "we," or "us") and the business entity, boutique owner, or individual ("Customer," "you," or "Tenant") accessing or using our software-as-a-service (SaaS) platform, APIs, and websites.

By accessing scaleezy.com, creating a workspace, or using any Scaleezy module (Inventory, Boutique, POS, CRM, Tryon2buy, Marketing, Analytics, Billing Desk, Logistics), you agree to be bound by these Terms.`
    },
    {
      id: "platform-license",
      title: "2. Platform License & Multi-Tenant Workspaces",
      icon: <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" />,
      content: `Subject to compliance with these Terms and payment of applicable fees:

• License Grant: Scaleezy grants you a non-exclusive, non-transferable, revocable license to access and operate your dedicated tenant workspace during your active subscription term.
• Custom Workspace Domains: Scaleezy workspaces are accessed via subdomains (e.g., yourbrand.scaleezy.com) or custom configured domain aliases.
• Authorized Users: You are responsible for maintaining the confidentiality of staff logins, supervisor PIN codes, and API credentials issued under your account.`
    },
    {
      id: "data-ownership",
      title: "3. Proprietary Rights & Customer Data Ownership",
      icon: <Scale className="w-5 h-5 text-[var(--color-accent)]" />,
      content: `• Your Customer Data: You retain 100% full legal ownership, title, and intellectual property rights in all product catalogs, SKU lists, customer directories, invoices, design photos, and transactional data you upload into Scaleezy.
• Scaleezy Platform IP: All source code, algorithmic workflows, UI designs, AI neural try-on models, trademarks, logos, and system documentation remain the sole and exclusive intellectual property of Scaleezy and its licensors.`
    },
    {
      id: "acceptable-use",
      title: "4. Acceptable Use Policy",
      icon: <AlertCircle className="w-5 h-5 text-[var(--color-accent)]" />,
      content: `You agree NOT to:
• Reverse engineer, decompile, or copy Scaleezy's architecture, APIs, or source algorithms.
• Use the platform to sell counterfeit garments, stolen goods, or prohibited contraband.
• Send unsolicited spam broadcasts via integrated WhatsApp or email channels in violation of anti-spam laws.
• Interfere with system integrity, bypass tenant isolation checks, or probe infrastructure security without prior written authorization.`
    },
    {
      id: "billing",
      title: "5. Subscriptions, Invoicing & Cancellations",
      icon: <CreditCard className="w-5 h-5 text-[var(--color-accent)]" />,
      content: `• Billing Cycle: Scaleezy services are billed on a monthly or annual subscription basis according to the tier selected (e.g., Starter, Growth, Enterprise).
• Module Activation: Modules marked as active are billed upon workspace activation. Modules marked as "Coming Soon" do not incur subscription fees until commercially launched.
• Automatic Renewals: Subscriptions renew automatically unless cancelled prior to the renewal date.
• Refund Policy: Subscription payments are non-refundable except where required by law or explicitly agreed in an enterprise master service agreement (MSA).`
    },
    {
      id: "uptime",
      title: "6. Service Availability & Maintenance",
      icon: <HelpCircle className="w-5 h-5 text-[var(--color-accent)]" />,
      content: `• Service Availability: Scaleezy strives to maintain a 99.9% uptime target across our core billing, POS, and inventory endpoints.
• Scheduled Maintenance: Routine platform upgrades are performed during low-traffic overnight windows with advance in-app notification.
• Offline Resilience: The Scaleezy Boutique POS module incorporates local caching to permit continuous counter billing during intermittent internet outages.`
    },
    {
      id: "liability",
      title: "7. Limitation of Liability",
      icon: <Scale className="w-5 h-5 text-[var(--color-accent)]" />,
      content: `To the maximum extent permitted by applicable law, Scaleezy shall not be liable for any indirect, incidental, special, punitive, or consequential damages, including loss of profits, retail sales, or inventory shrinkage resulting from software downtime or carrier delivery delays.

Scaleezy's cumulative liability under any claim arising out of these Terms shall not exceed the total fees paid by you to Scaleezy during the three (3) months preceding the event giving rise to liability.`
    },
    {
      id: "governing-law",
      title: "8. Governing Law & Dispute Resolution",
      icon: <Scale className="w-5 h-5 text-[var(--color-accent)]" />,
      content: `These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts in India.`
    },
    {
      id: "contact",
      title: "9. Inquiries & Legal Notices",
      icon: <FileText className="w-5 h-5 text-[var(--color-accent)]" />,
      content: `For legal notices or questions regarding these Terms and Conditions:
• Email: support@scaleezy.com / domsgloballlp@gmail.com
• Attention: Legal & Compliance Department, DOMS Global / Scaleezy`
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-warm-white)] text-[var(--color-charcoal)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]">
      
      {/* Hero Header */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 bg-gradient-to-b from-[#06180E] via-[#1C421D] to-[#0A2619] text-white overflow-hidden text-center">
        <BrandPatternAtelier mode="dark" opacity={0.08} size={360} />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-xs text-white/90 border border-white/15 mb-6 transition-all"
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Terms & <span className="text-[var(--color-accent)] font-serif italic font-normal">Conditions</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            The legal terms governing your license, workspace usage, subscription billing, and service commitments.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
            <CheckCircle2 size={14} className="text-[var(--color-accent)]" />
            <span>Effective Date: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Main Terms Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm border border-black/8 space-y-10">
          
          {terms.map((term) => (
            <motion.div
              key={term.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="space-y-3 pt-6 first:pt-0 border-t first:border-t-0 border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[var(--color-primary)] shrink-0">
                  {term.icon}
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-[#14263D] tracking-tight">
                  {term.title}
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line pl-0 sm:pl-12 font-normal">
                {term.content}
              </p>
            </motion.div>
          ))}

          {/* Quick Notice */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <h3 className="font-bold text-base text-[var(--color-primary)] mb-1">
                Have questions about our enterprise terms?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Reach out to our customer operations team for contract or billing clarifications.
              </p>
            </div>
            <a
              href="mailto:support@scaleezy.com"
              className="px-6 py-3 rounded-full bg-[var(--color-primary)] text-white text-xs sm:text-sm font-semibold hover:bg-black transition-all shrink-0 shadow-md"
            >
              Contact Support
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

