// Scaleezy Modules - Single Source of Truth
// Standardized simple names: Inventory, CRM, Boutique, TRYON2BUY, Marketing, Analytics, Finance, Logistics

export const MODULE_URLS = {
  inventory: 'https://inventory.scaleezy.com/',
  crm: null, // Coming Soon
  boutique: 'https://boutique.scaleezy.com/',
  tryon2buy: 'https://www.tryon2buy.com/',
  tryon: 'https://www.tryon2buy.com/',
  pos: 'https://boutique.scaleezy.com/',
  marketing: 'https://marketing.scaleezy.com/',
  analytics: null, // Coming Soon
  finance: null, // Coming Soon
  logistics: null // Coming Soon
};

export const MODULES_DATA = [
  {
    id: 'inventory',
    slug: 'inventory',
    name: 'Inventory',
    fullName: 'Scaleezy Inventory',
    externalUrl: 'https://inventory.scaleezy.com/',
    isLive: true,
    tagline: 'Stock Intelligence & Demand Forecasting',
    badge: 'Module 01',
    heroHeadline: 'Never run out of bestsellers. Never sit on dead stock.',
    heroDescription: 'Real-time multi-location stock tracking, barcode intake, automated low-stock reorder triggers, and dead-stock alerts engineered specifically for apparel variants (sizes, fabrics, colors).',
    img: '/card-inventory-b2b.jpg',
    stats: [
      { value: '35%', label: 'Reduction in dead stock' },
      { value: '100%', label: 'Real-time barcode accuracy' },
      { value: '4x', label: 'Faster stock intake' }
    ],
    simpleFeatures: [
      {
        title: 'Real-Time Multi-Location Sync',
        desc: 'Sell simultaneously in your boutique, Shopify store, and WhatsApp without ever double-selling the last piece in stock.'
      },
      {
        title: 'Fast-Moving vs. Dead-Stock Alerts',
        desc: 'Spot items sitting on shelves for more than 45 days before their margin is lost, and instantly know which styles need restocking.'
      },
      {
        title: 'Color & Size Matrix Intelligence',
        desc: 'Manage apparel SKUs with granular size (XS to 5XL), colorways, fabric blends, and sleeve cut variations with zero confusion.'
      },
      {
        title: 'Rapid Barcode & QR Generation',
        desc: 'Inward wholesale shipments, print thermal barcode tags, and organize inventory shelves in minutes.'
      },
      {
        title: 'Predictive Demand Reordering',
        desc: 'AI forecasts demand based on upcoming festival seasons, wedding dates, and regional shopping peaks.'
      },
      {
        title: 'Damage & Alteration Inwarding',
        desc: 'Track items sent out for tailor alterations, dry cleaning, or vendor defects with complete status accountability.'
      }
    ],
    capabilities: [
      'Real-time stock monitoring',
      'Fast-moving SKU detection',
      'Dead-stock liquidation alerts',
      'AI demand forecasting',
      'Automated purchase orders',
      'Thermal barcode printing',
      'Multi-warehouse transfers'
    ],
    workflow: {
      title: 'How Scaleezy Inventory Works in Your Store',
      steps: [
        { step: '01', title: 'Batch Inwarding & Tagging', desc: 'Scan incoming manufacturer cartons, auto-generate barcode tags, and assign rack locations.' },
        { step: '02', title: 'Unified Catalog Sync', desc: 'Stock is instantly available for in-store billing and online channels simultaneously.' },
        { step: '03', title: 'Automated Depletion & Reorder', desc: 'Every sale automatically deducts inventory and triggers restock notifications when thresholds are met.' }
      ]
    },
    synergy: [
      { module: 'Boutique (POS)', text: 'Instant stock deduction at checkout counter.' },
      { module: 'TRYON2BUY', text: 'Customers only try on items currently in stock.' },
      { module: 'Marketing', text: 'Auto-promotes fast-moving and overstocked items.' }
    ],
    faqs: [
      {
        q: 'Can Scaleezy Inventory handle size and color variants for ethnic wear?',
        a: 'Yes! Scaleezy is built specifically for apparel and ethnic fashion. It natively handles size runs (XS-5XL), color shades, unstitched fabric meters, and designer piece codes.'
      },
      {
        q: 'Can I transfer stock between my central warehouse and retail boutiques?',
        a: 'Yes, Scaleezy features full inter-store transfer manifests with dispatch and receipt acknowledgment to prevent shrinkage.'
      }
    ]
  },
  {
    id: 'crm',
    slug: 'crm',
    name: 'CRM',
    fullName: 'Scaleezy CRM',
    externalUrl: null,
    isLive: false,
    tagline: 'Clienteling & VIP Customer Intelligence',
    badge: 'Module 02',
    heroHeadline: "Remember every client's size, taste, and occasion.",
    heroDescription: 'Transform one-off boutique shoppers into lifelong VIP clients. Empower associates with 360-degree client profiles, past purchase history, fit preferences, and automated anniversary greetings.',
    img: '/crm-module.jpg',
    stats: [
      { value: '42%', label: 'Higher repeat purchase rate' },
      { value: '3.2x', label: 'VIP client engagement' },
      { value: 'Zero', label: 'Forgotten customer preferences' }
    ],
    simpleFeatures: [
      {
        title: '360° Customer Profiles',
        desc: 'View every visit, total spend, favorite fabrics, preferred silhouettes, and return history on a single screen.'
      },
      {
        title: 'VIP Clienteling Alerts',
        desc: 'Notify sales associates on their phone or tablet when a top client visits the boutique so they can deliver personalized styling.'
      },
      {
        title: 'Automated Occasion Greetings',
        desc: 'Send personalized WhatsApp greetings and curated style recommendations for birthdays, anniversaries, and wedding dates.'
      },
      {
        title: 'Fitting Room Wishlists',
        desc: 'Save items clients tried on in the trial room but didn’t purchase, and trigger a follow-up offer a few days later.'
      },
      {
        title: 'Customer Lifetime Value (LTV) Segmentation',
        desc: 'Easily group high-ticket bridal spenders, casual weekend shoppers, and festival buyers for tailored outreach.'
      },
      {
        title: 'Omnichannel Communication',
        desc: 'Message clients over WhatsApp, SMS, or email directly from their customer profile with one tap.'
      }
    ],
    capabilities: [
      'Omnichannel purchase history',
      'VIP clienteling alerts',
      'Size and fit preference memory',
      'Occasion & festival reminders',
      'Fitting room try-on wishlists',
      'Automated WhatsApp client chats',
      'Loyalty points & store credit'
    ],
    workflow: {
      title: 'How Scaleezy CRM Drives High-Value Sales',
      steps: [
        { step: '01', title: 'Capture Client Profile at Billing', desc: 'Collect phone number, style taste, and key anniversary dates during in-store or online checkout.' },
        { step: '02', title: 'Personalized Style Matching', desc: 'When new collections arrive, the CRM auto-suggests matching clients based on their size and past likes.' },
        { step: '03', title: 'Direct WhatsApp Concierge', desc: 'Associates send VIP previews and private lookbooks directly via WhatsApp.' }
      ]
    },
    synergy: [
      { module: 'Marketing', text: 'Feeds high-intent segments into automated campaigns.' },
      { module: 'Boutique (POS)', text: 'Pulls VIP purchase history right to the billing counter.' },
      { module: 'TRYON2BUY', text: 'Logs virtual try-on preferences to the customer dossier.' }
    ],
    faqs: [
      {
        q: 'Does Scaleezy CRM connect with WhatsApp Business API?',
        a: 'Yes, Scaleezy integrates natively with official WhatsApp Business accounts, allowing you to send automated reminders, lookbooks, and receipts.'
      },
      {
        q: 'Can staff access customer profiles on an iPad in the showroom?',
        a: 'Absolutely. The CRM interface is touch-friendly and responsive, designed for sales stylists walking the retail showroom.'
      }
    ]
  },
  {
    id: 'boutique',
    slug: 'boutique',
    name: 'Boutique',
    fullName: 'Scaleezy Boutique',
    externalUrl: 'https://boutique.scaleezy.com/',
    isLive: true,
    tagline: 'In-Store Billing, Counter POS & Retail Operations',
    badge: 'Module 03',
    heroHeadline: 'Lightning-fast retail checkout made for apparel stores.',
    heroDescription: 'The modern counter point-of-sale engineered for apparel boutiques. Handle custom tailoring alterations, split payments, barcode billing, and staff commissions in seconds.',
    img: '/smart-pos.jpg',
    stats: [
      { value: '15s', label: 'Average billing time' },
      { value: '100%', label: 'Offline-ready billing capability' },
      { value: '0', label: 'Counter checkout bottlenecks' }
    ],
    simpleFeatures: [
      {
        title: 'Rapid Barcode & QR Checkout',
        desc: 'Scan garments and ring up sales in seconds with thermal receipt printing or instant paperless WhatsApp e-bills.'
      },
      {
        title: 'Alteration & Measurement Slip',
        desc: 'Record custom tailor measurements, sleeve alterations, hem adjustments, and target delivery dates directly on the invoice.'
      },
      {
        title: 'Flexible Split Payments',
        desc: 'Seamlessly accept partial cash, UPI, card, store credit, and customer advance deposits on custom designer orders.'
      },
      {
        title: 'Offline Billing Mode',
        desc: 'Never stop ringing sales during peak holiday footfall, even if your showroom internet drops temporarily.'
      },
      {
        title: 'Sales Stylist Commissions',
        desc: 'Attribute sales to individual boutique stylists to track sales incentives and commission targets with zero disputes.'
      },
      {
        title: 'Multi-Register & Multi-Store',
        desc: 'Run multiple billing registers in flagship stores, temporary exhibition pop-ups, and secondary boutique branches.'
      }
    ],
    capabilities: [
      'Lightning-fast barcode checkout',
      'WhatsApp paperless digital receipts',
      'Custom alteration tracking',
      'Split payment & advance booking',
      'Offline-first billing reliability',
      'Sales associate commission tracking',
      'GST-compliant tax invoicing'
    ],
    workflow: {
      title: 'How Scaleezy Boutique Powers Checkout',
      steps: [
        { step: '01', title: 'Barcode Scan or SKU Lookup', desc: 'Scan clothing tags with any handheld scanner or phone camera.' },
        { step: '02', title: 'Customer Lookup & Alterations', desc: 'Apply loyalty points, record fitting adjustments, and set pickup reminders.' },
        { step: '03', title: 'Instant Payment & WhatsApp Bill', desc: 'Accept payment via UPI/Card and immediately dispatch a branded WhatsApp receipt.' }
      ]
    },
    synergy: [
      { module: 'Inventory', text: 'Instantly deducts stock and prevents overselling.' },
      { module: 'CRM', text: 'Enriches client profile with purchase and size history.' },
      { module: 'Finance', text: 'Logs daily cash register totals and net margin splits.' }
    ],
    faqs: [
      {
        q: 'Can Scaleezy Boutique POS print on standard thermal printers?',
        a: 'Yes, it supports all standard 2-inch and 3-inch USB/Bluetooth thermal receipt printers, as well as A4/A5 laser printers.'
      },
      {
        q: 'Can we take partial advance payments for bridal lehengas and suits?',
        a: 'Yes. You can collect a deposit advance, schedule alteration fittings, and collect the balance on pickup.'
      }
    ]
  },
  {
    id: 'tryon2buy',
    slug: 'tryon2buy',
    name: 'TRYON2BUY',
    fullName: 'Scaleezy TRYON2BUY',
    externalUrl: 'https://www.tryon2buy.com/',
    isLive: true,
    tagline: 'AI Virtual Try-On Studio for Fashion & Apparel',
    badge: 'Module 04',
    heroHeadline: 'Let shoppers visualize apparel on realistic body models.',
    heroDescription: 'Transform customer fit hesitation into confident purchases. Patented AI lets customers preview sarees, kurtas, suits, and western wear instantly on diverse models or their own photo.',
    img: '/virtual-tryon.jpg',
    stats: [
      { value: '+28%', label: 'Increase in purchase conversion' },
      { value: '-45%', label: 'Drop in apparel size returns' },
      { value: '6x', label: 'Higher shopper time on site' }
    ],
    simpleFeatures: [
      {
        title: 'Photorealistic Fabric & Drape Rendering',
        desc: 'Advanced generative AI accurately depicts silk shine, embroidery weight, pleat folds, and natural garment contours.'
      },
      {
        title: 'In-Store Interactive Try-On Kiosk',
        desc: 'Delight boutique walk-ins with interactive touch mirrors and tablet styling lounges to showcase out-of-stock colors.'
      },
      {
        title: 'Consumer Photo Try-On',
        desc: 'Shoppers upload a quick selfie to visualize how an outfit looks on their specific body type, height, and skin tone.'
      },
      {
        title: 'Diverse Model Avatar Library',
        desc: 'Instantly showcase your apparel across 50+ inclusive model body types, heights, and complexions without expensive photoshoots.'
      },
      {
        title: 'Abandoned Try-On Remarketing',
        desc: 'Track items shoppers tried on virtually and send automated reminders with styling advice to close the sale.'
      },
      {
        title: 'Social Lookbook Generator',
        desc: 'Produce high-resolution catalog photos and Instagram-ready model shots without booking models, studios, or photographers.'
      }
    ],
    capabilities: [
      'Photorealistic AI garment draping',
      'Ethnic wear & western wear support',
      'In-store interactive kiosk mode',
      'Web & mobile try-on widget',
      'Diverse avatar body library',
      'Social lookbook generator',
      'Abandoned try-on conversion tracking'
    ],
    workflow: {
      title: 'How TRYON2BUY Boosts Fashion Sales',
      steps: [
        { step: '01', title: 'Upload Garment Flat Lay', desc: 'Take a clear flat lay or mannequin photo of your clothing item.' },
        { step: '02', title: 'AI Fabric & Fit Mapping', desc: 'Our engine detects seams, fabric texture, drape stiffness, and embroidery patterns.' },
        { step: '03', title: 'Instant Customer Visualizer', desc: 'Shoppers view the piece draped realistically on a model or themselves in under 3 seconds.' }
      ]
    },
    synergy: [
      { module: 'Inventory', text: 'Showcases only garments in stock.' },
      { module: 'CRM', text: 'Stores try-on preferences to tailor future recommendations.' },
      { module: 'Marketing', text: 'Auto-generates model visual assets for social ads.' }
    ],
    faqs: [
      {
        q: 'Does TRYON2BUY work for ethnic wear like sarees and lehengas?',
        a: 'Yes! TRYON2BUY is specially optimized for complex Indian ethnic wear, sarees with pallu draping, heavy bridal lehengas, and anarkalis.'
      },
      {
        q: 'Can we install TRYON2BUY in our physical store?',
        a: 'Yes, we provide an In-Store Kiosk Mode for iPads or touchscreen displays in your boutique showroom.'
      }
    ]
  },
  {
    id: 'marketing',
    slug: 'marketing',
    name: 'Marketing',
    fullName: 'Scaleezy Marketing',
    externalUrl: 'https://marketing.scaleezy.com/',
    isLive: true,
    tagline: 'AI-Driven Marketing & Automated Campaigns',
    badge: 'Module 05',
    heroHeadline: 'Turn boutique inventory into automated high-converting campaigns.',
    heroDescription: 'Launch segmented WhatsApp broadcasts, festive collection drops, and automated VIP lookbooks in clicks. AI crafts apparel copy and selects the exact customer segment most likely to buy.',
    img: '/marketing-hub.jpg',
    stats: [
      { value: '4.8x', label: 'Average WhatsApp broadcast ROI' },
      { value: '65%', label: 'Open rate on personalized alerts' },
      { value: '2 min', label: 'To launch a collection campaign' }
    ],
    simpleFeatures: [
      {
        title: 'Segmented WhatsApp Broadcasts',
        desc: 'Send targeted collection launches to clients based on their favorite designer, past spend, or dress size.'
      },
      {
        title: 'AI Fashion Copywriter',
        desc: 'Automatically generate compelling captions, product descriptions, and promotional messages tailored to fashion shoppers.'
      },
      {
        title: 'In-Store QR Capture',
        desc: 'Place smart QR codes on clothing tags and trial room mirrors so showroom visitors follow your brand and join VIP clubs.'
      },
      {
        title: 'Automated Browse & Cart Recovery',
        desc: 'Re-engage shoppers who browsed your catalog or left items in their cart with timely WhatsApp reminders.'
      },
      {
        title: 'Festive & Wedding Season Calendars',
        desc: 'Pre-schedule campaigns for Diwali, Eid, Rakhi, wedding seasons, and seasonal clearance events with one click.'
      },
      {
        title: 'Clear Revenue Attribution',
        desc: 'See exactly how much in-store and online revenue was generated by each WhatsApp message or promotional broadcast.'
      }
    ],
    capabilities: [
      'Segmented WhatsApp broadcasts',
      'AI fashion copywriting',
      'In-store smart QR code lead capture',
      'Automated browse recovery',
      'Festival campaign automations',
      'Omnichannel ROI tracking',
      'Automated catalog lookbooks'
    ],
    workflow: {
      title: 'How Scaleezy Marketing Automates Growth',
      steps: [
        { step: '01', title: 'Select Audience Segment', desc: 'Pick customers by past spend, preferred category, or dormant status.' },
        { step: '02', title: 'Generate AI Lookbook & Copy', desc: 'Scaleezy crafts imagery and persuasive copy in seconds.' },
        { step: '03', title: 'Broadcast & Track Conversions', desc: 'Send via WhatsApp API and watch orders and showroom visits flow in.' }
      ]
    },
    synergy: [
      { module: 'CRM', text: 'Pulls real purchase history and customer preferences.' },
      { module: 'Inventory', text: 'Promotes high-margin and overstocked apparel.' },
      { module: 'Analytics', text: 'Feeds campaign conversion data into executive reports.' }
    ],
    faqs: [
      {
        q: 'Will our WhatsApp number get blocked for sending broadcasts?',
        a: 'No. Scaleezy uses the official Meta WhatsApp Cloud API with approved notification templates to ensure 100% compliance and zero number bans.'
      },
      {
        q: 'Can we send product lookbooks with buy buttons?',
        a: 'Yes, interactive catalogs with image carousels and direct "Order on WhatsApp" or "Reserve in Store" buttons are fully supported.'
      }
    ]
  },
  {
    id: 'analytics',
    slug: 'analytics',
    name: 'Analytics',
    fullName: 'Scaleezy Analytics',
    externalUrl: null,
    isLive: false,
    tagline: 'Merchandising Insights & Executive Dashboard',
    badge: 'Module 06',
    heroHeadline: 'Clear numbers you can act on every single Monday morning.',
    heroDescription: 'Stop drowning in messy spreadsheets. Get clear apparel metrics: sell-through rates, top-selling categories, dead stock velocity, store staff productivity, and profit margins.',
    img: '/analytics-hub.jpg',
    stats: [
      { value: '50+', label: 'Pre-built fashion retail metrics' },
      { value: 'Real-Time', label: 'Multi-store sales telemetry' },
      { value: '1-Click', label: 'Excel & PDF executive exports' }
    ],
    simpleFeatures: [
      {
        title: 'Executive Store Command Center',
        desc: 'Instant visual snapshot of total sales, average order value, footfall, and gross margins across all boutique branches.'
      },
      {
        title: 'Collection Sell-Through Velocity',
        desc: 'Track how quickly each collection or festive drop is selling out so you know when to order repeat production runs.'
      },
      {
        title: 'Category & Fabric Margin Analysis',
        desc: 'Pinpoint which clothing fabrics, silhouettes, and price points generate the highest net profit margins.'
      },
      {
        title: 'Sales Stylist Performance',
        desc: 'Compare billing totals, conversion rates, and client repeat visits by store associate to reward top performers.'
      },
      {
        title: 'Return & Exchange Diagnostics',
        desc: 'Identify specific SKUs with frequent alteration or return requests to fix sizing and pattern flaws early.'
      },
      {
        title: 'Daily WhatsApp Digest',
        desc: 'Receive a concise closing report on WhatsApp every night summarizing sales, top products, and cash register balances.'
      }
    ],
    capabilities: [
      'Multi-store executive dashboard',
      'Collection sell-through tracking',
      'Category & fabric margin breakdown',
      'Sales associate productivity metrics',
      'Return reason diagnostics',
      'Daily WhatsApp executive digest',
      'Custom date range comparison'
    ],
    workflow: {
      title: 'Actionable Intelligence in 3 Steps',
      steps: [
        { step: '01', title: 'Data Aggregation', desc: 'Scaleezy continuously aggregates transactions from counters, web, and warehouse.' },
        { step: '02', title: 'Automated Visual Insights', desc: 'View intuitive charts showing velocity, margins, and stock health.' },
        { step: '03', title: 'Monday Morning Actions', desc: 'Identify which items to discount, which to reorder, and which stylists to reward.' }
      ]
    },
    synergy: [
      { module: 'Boutique (POS)', text: 'Aggregates in-store register receipts in real time.' },
      { module: 'Inventory', text: 'Identifies slow-moving SKUs before they age.' },
      { module: 'Finance', text: 'Provides top-line revenue feeds to margin calculators.' }
    ],
    faqs: [
      {
        q: 'Can store owners check analytics on their phone while traveling?',
        a: 'Yes, the executive dashboard is fully mobile-optimized, and you can also receive daily WhatsApp summary reports.'
      },
      {
        q: 'Can we control which staff members can see revenue figures?',
        a: 'Yes, granular role-based permissions allow you to restrict financial and margin data to store owners and managers.'
      }
    ]
  },
  {
    id: 'finance',
    slug: 'finance',
    name: 'Finance',
    fullName: 'Scaleezy Finance',
    externalUrl: null,
    isLive: false,
    tagline: 'Fashion Costing, Margins & Financial Health',
    badge: 'Module 07',
    heroHeadline: 'Know your true net margins after fabric, tailoring, and discounts.',
    heroDescription: 'Track fabric procurement costs, tailor job-work payables, promotional discounts, and net margins per collection. Eliminate hidden cost leaks and keep boutique cash flow crystal clear.',
    img: '/finance-dashboard.jpg',
    stats: [
      { value: '100%', label: 'Net margin visibility per SKU' },
      { value: 'Zero', label: 'Unreconciled cash discrepancies' },
      { value: 'GST-Ready', label: 'One-click tax export' }
    ],
    simpleFeatures: [
      {
        title: 'True Garment Costing (BOM)',
        desc: 'Calculate the total cost of each piece including fabric, lining, trims, buttons, embroidery, and master tailor labor.'
      },
      {
        title: 'Real-Time Net Margin Calculation',
        desc: 'See exactly what you earn after accounting for counter discounts, payment gateway fees, and packaging expenses.'
      },
      {
        title: 'Tailor & Job-Worker Ledger',
        desc: 'Manage tailor advances, per-piece stitching charges, and outstanding balances with clear digital ledgers.'
      },
      {
        title: 'Cash Drawer Closing & Petty Cash',
        desc: 'Reconcile daily counter cash, UPI collections, and card payments at the end of each shift with zero shortages.'
      },
      {
        title: 'Vendor Payables & Purchase Aging',
        desc: 'Track outstanding balances owed to textile weavers, fabric wholesalers, and accessory suppliers.'
      },
      {
        title: 'GST-Compliant Tax Reports',
        desc: 'Export clean GSTR-1 and GSTR-3B compliant transaction spreadsheets formatted for your chartered accountant.'
      }
    ],
    capabilities: [
      'Garment bill of materials (BOM)',
      'True net margin tracking',
      'Tailor job-work ledger',
      'Daily counter cash reconciliation',
      'Vendor payables management',
      'GST & tax ready exports',
      'Multi-branch expense tracking'
    ],
    workflow: {
      title: 'Financial Clarity from Fabric to Checkout',
      steps: [
        { step: '01', title: 'Record Inward Costs', desc: 'Enter fabric cost, embellishment labor, and packaging for each batch.' },
        { step: '02', title: 'Track Real-Time Sales & Discounts', desc: 'Every billing transaction automatically calculates net margin after tax and discounts.' },
        { step: '03', title: 'One-Click CA Export', desc: 'Download monthly purchase and sales ledgers ready for tax filing.' }
      ]
    },
    synergy: [
      { module: 'Boutique (POS)', text: 'Pulls counter transactions and registers cash drawer closing.' },
      { module: 'Inventory', text: 'Calculates total asset value of in-stock merchandise.' },
      { module: 'Analytics', text: 'Feeds profit margins into executive reports.' }
    ],
    faqs: [
      {
        q: 'Can Scaleezy Finance export reports compatible with Tally?',
        a: 'Yes, sales, purchases, and vendor entries can be exported to Excel/CSV formats directly compatible with Tally and Zoho Books.'
      },
      {
        q: 'Can we track tailor piece-rate payments?',
        a: 'Yes, you can assign piece rates for stitching, alterations, and handwork, and track completed jobs by master tailor.'
      }
    ]
  },
  {
    id: 'logistics',
    slug: 'logistics',
    name: 'Logistics',
    fullName: 'Scaleezy Logistics',
    externalUrl: null,
    isLive: false,
    tagline: 'Multi-Carrier Dispatch & Smart Courier Routing',
    badge: 'Module 08',
    heroHeadline: 'Ship orders faster with lowest courier rates and smart NDR tracking.',
    heroDescription: 'Integrated with leading courier aggregators and direct carriers. Automatically select the fastest, lowest-cost courier for every pincode, print bulk shipping labels, and slash RTO with automated address verification.',
    img: '/logistics-hub.jpg',
    stats: [
      { value: '22%', label: 'Average shipping cost savings' },
      { value: '38%', label: 'Drop in Return-to-Origin (RTO)' },
      { value: 'Live', label: 'Automated WhatsApp tracking updates' }
    ],
    simpleFeatures: [
      {
        title: 'Smart Multi-Carrier Comparison',
        desc: 'Automatically route shipments through BlueDart, Delhivery, DTDC, FedEx, or Shiprocket based on price and delivery speed.'
      },
      {
        title: 'One-Click Bulk Shipping Labels',
        desc: 'Generate and print thermal shipping labels, packing slips, and pickup manifests for dozens of orders simultaneously.'
      },
      {
        title: 'Automated WhatsApp Tracking Updates',
        desc: 'Keep shoppers informed with live shipment tracking links sent automatically when parcels are dispatched and out for delivery.'
      },
      {
        title: 'Smart NDR & RTO Reduction',
        desc: 'Trigger automated WhatsApp messages to customers when delivery attempts fail, allowing them to verify address or reschedule.'
      },
      {
        title: 'COD Verification & Fraud Shield',
        desc: 'Verify high-value cash-on-delivery orders via WhatsApp OTP before dispatching to eliminate fake orders.'
      },
      {
        title: 'Boutique vs. Warehouse Dispatch',
        desc: 'Route order fulfillment to the showroom or warehouse closest to the customer to ensure fastest delivery.'
      }
    ],
    capabilities: [
      'Multi-carrier rate comparison',
      'Bulk thermal label printing',
      'Automated WhatsApp tracking links',
      'AI NDR and RTO prevention',
      'COD fraud verification',
      'Multi-branch order fulfillment',
      'Courier performance scoring'
    ],
    workflow: {
      title: 'Effortless Dispatch in 3 Steps',
      steps: [
        { step: '01', title: 'Order Received & Packed', desc: 'Order is packed and auto-assigned the optimal courier partner.' },
        { step: '02', title: 'One-Click Label & Manifest', desc: 'Print thermal shipping tag and schedule courier doorstep pickup.' },
        { step: '03', title: 'Real-Time Customer Tracking', desc: 'Customer receives live tracking updates on WhatsApp until doorstep delivery.' }
      ]
    },
    synergy: [
      { module: 'Inventory', text: 'Deducts dispatched stock and handles reverse logistics.' },
      { module: 'CRM', text: 'Shows order delivery status directly in client profile.' },
      { module: 'Marketing', text: 'Triggers review requests after successful delivery.' }
    ],
    faqs: [
      {
        q: 'Which courier partners does Scaleezy Logistics support?',
        a: 'Scaleezy supports Delhivery, BlueDart, DTDC, Shiprocket, Xpressbees, Shadowfax, and DHL for domestic and international deliveries.'
      },
      {
        q: 'How does Scaleezy help reduce COD returns (RTO)?',
        a: 'Scaleezy sends automated WhatsApp OTP verification on COD orders and uses address-validation intelligence to catch invalid addresses before shipping.'
      }
    ]
  }
];

export const SIMPLE_MODULE_NAMES = [
  'Inventory',
  'CRM',
  'Boutique',
  'TRYON2BUY',
  'Marketing',
  'Analytics',
  'Finance',
  'Logistics'
];

