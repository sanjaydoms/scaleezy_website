import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  Server, 
  FileText, 
  UserCheck, 
  Mail, 
  ArrowLeft 
} from 'lucide-react';
import { BrandPatternAtelier } from './BrandPattern';
import Footer from './Footer';
import usePageMeta from './usePageMeta';

export default function PrivacyPolicy() {
  usePageMeta(
    "Privacy Policy — Scaleezy",
    "Read the Scaleezy Privacy Policy to understand how we collect, protect, process, and safeguard your retail store and boutique data."
  );

  const lastUpdated = "November 4, 2026";

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      icon: <Eye className="w-5 h-5 text-[var(--color-accent)]" />,
      content: `Scaleezy ("we," "our," or "us"), operated under DOMS Global, is committed to safeguarding your privacy and protecting the business and personal data you entrust to us. This Privacy Policy governs your use of the Scaleezy website (scaleezy.com), our multi-tenant SaaS applications (including inventory, boutique billing, CRM, marketing, and virtual try-on modules), and associated services.

By accessing or using Scaleezy, you acknowledge that you have read, understood, and agree to the practices described in this Privacy Policy.`
    },
    {
      id: "information-we-collect",
      title: "2. Information We Collect",
      icon: <FileText className="w-5 h-5 text-[var(--color-accent)]" />,
      content: `We collect information necessary to operate, configure, and secure your apparel commerce platform:

• Account & Lead Information: Full name, business email address, mobile/WhatsApp number, store or brand name, and workspace domain preferences provided when requesting platform access or contacting us.
• Store & Operational Data: Product catalogs, SKU identifiers, garment dimensions, barcode records, stock levels, supplier records, and sales transaction metadata inwarded into your tenant workspace.
• Customer Clienteling Records: Customer names, phone numbers, sizing notes, fit preferences, and purchase histories stored by boutique associates in your tenant database.
• Technical & Device Telemetry: IP addresses, browser types, device specifications, operating system versions, and anonymized user interaction logs to monitor performance, optimize latency, and prevent unauthorized intrusion.`
    },
    {
      id: "how-we-use",
      title: "3. How We Use Your Information",
      icon: <Server className="w-5 h-5 text-[var(--color-accent)]" />,
      content: `We strictly utilize collected data for legitimate operational and business purposes:

• Workspace Provisioning: Pre-configuring your tenant partition, database schema, user permissions, and authorized staff credentials.
• Core Platform Delivery: Processing fast barcode checkout, managing inventory transfers, synchronizing multi-store stock, and running AI virtual try-on algorithms.
• Transactional & Service Alerts: Delivering critical system notifications, order confirmations, daily closing receipts, and WhatsApp communications requested by you.
• Customer Support & Technical Assistance: Troubleshooting sync errors, assisting with catalog imports, and responding to technical tickets.
• Security & Fraud Prevention: Verifying authenticated access, preventing cross-tenant data leakage, and monitoring suspicious API attempts.

We will NEVER sell, lease, or monetize your customer records, catalog assets, or sales data to third parties.`
    },
    {
      id: "data-isolation",
      title: "4. Multi-Tenant Architecture & Data Isolation",
      icon: <Lock className="w-5 h-5 text-[var(--color-accent)]" />,
      content: `Scaleezy is architected on enterprise cloud infrastructure with strict tenant boundaries:

• Row-Level & Schema Isolation: Your boutique's records are logically partitioned. No other retailer or tenant on the Scaleezy network can view, query, or access your catalog, customer list, or margins.
• Encryption Standards: All data in transit is encrypted using 256-bit TLS/SSL encryption. Data at rest is encrypted in high-durability cloud data centers.
• Staff Access Controls: Internal access by Scaleezy engineers is restricted to authorized personnel solely for troubleshooting upon your explicit request.`
    },
    {
      id: "third-party-services",
      title: "5. Third-Party Service Providers",
      icon: <UserCheck className="w-5 h-5 text-[var(--color-accent)]" />,
      content: `We partner with trusted, SOC-2 compliant infrastructure providers to deliver our services:

• Cloud Database & Authentication: Secure Postgres hosting provided by Supabase with automated point-in-time backups.
• Transactional Communications: Email delivery infrastructure via Resend, and official WhatsApp Business Cloud API gateways.
• Payment Processing: Integrated payment processors compliant with PCI-DSS for subscription billing and boutique checkout.

Each sub-processor is bound by strict confidentiality and data protection agreements.`
    },
    {
      id: "retention-and-rights",
      title: "6. Data Retention & Your Rights",
      icon: <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" />,
      content: `You maintain ownership of your store and customer data at all times:

• Right to Export: You may request an export of your product catalogs, SKU lists, customer directories, and historical transactions at any time in CSV or JSON format.
• Right to Rectification & Deletion: You can update, correct, or request the permanent deletion of your store workspace and associated customer records.
• Retention Period: We retain workspace data for the duration of your active subscription. Following account termination, data is queued for permanent purge after a 30-day grace recovery window.`
    },
    {
      id: "compliance",
      title: "7. Regulatory Compliance & DPDP Act",
      icon: <FileText className="w-5 h-5 text-[var(--color-accent)]" />,
      content: `Scaleezy adheres to the Digital Personal Data Protection (DPDP) Act, 2023 of India, along with globally recognized data privacy standards. We process all personal information lawfully, transparently, and solely for specified commercial purposes with explicit user consent.`
    },
    {
      id: "contact-us",
      title: "8. Contact Us",
      icon: <Mail className="w-5 h-5 text-[var(--color-accent)]" />,
      content: `If you have questions regarding this Privacy Policy, wish to exercise your data rights, or have security inquiries, please contact our Privacy & Security Officer:

• Email: support@scaleezy.com / domsgloballlp@gmail.com
• Organization: DOMS Global / Scaleezy Technologies
• Website: https://scaleezy.com`
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-warm-white)] text-[var(--color-charcoal)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]">
      
      {/* Hero Header */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 bg-gradient-to-b from-[#06180E] via-[#0A2F1D] to-[#0A2619] text-white overflow-hidden text-center">
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
            Privacy <span className="text-[var(--color-accent)] font-serif italic font-normal">Policy</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            How Scaleezy safeguards your boutique, inventory, and customer records with enterprise-grade data isolation.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
            <ShieldCheck size={14} className="text-[var(--color-accent)]" />
            <span>Last Updated: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm border border-black/8 space-y-10">
          
          {sections.map((sec) => (
            <motion.div
              key={sec.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="space-y-3 pt-6 first:pt-0 border-t first:border-t-0 border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[var(--color-primary)] shrink-0">
                  {sec.icon}
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-[#14263D] tracking-tight">
                  {sec.title}
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line pl-0 sm:pl-12 font-normal">
                {sec.content}
              </p>
            </motion.div>
          ))}

          {/* Quick Contact Card */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-emerald-50/60 border border-emerald-700/15 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <h3 className="font-bold text-base text-[var(--color-primary)] mb-1">
                Have questions about your data security?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Our compliance and engineering team is available to assist you.
              </p>
            </div>
            <a
              href="mailto:support@scaleezy.com"
              className="px-6 py-3 rounded-full bg-[var(--color-primary)] text-white text-xs sm:text-sm font-semibold hover:bg-black transition-all shrink-0 shadow-md"
            >
              Email Security Team
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
