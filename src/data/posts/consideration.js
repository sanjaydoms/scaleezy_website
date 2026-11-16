// Consideration-stage posts: the reader knows the problem and is weighing approaches or tools.

export const considerationPosts = [
  {
    id: 21,
    slug: 'whatsapp-business-api-for-boutiques',
    title: 'WhatsApp Business API for Boutiques: Setup, Costs and Messages That Actually Convert',
    category: 'Marketing',
    date: 'Nov 10, 2026',
    dateModified: 'Nov 10, 2026',
    img: '/assets/blog/whatsapp-business-api-for-boutiques.jpg',
    excerpt: 'The free WhatsApp Business app stops scaling around 500 customers. Here is when to move to the WhatsApp Business API, what it costs per message in India and the five message types that bring boutique customers back.',
    keywords: ['WhatsApp Business API for boutique', 'WhatsApp marketing for clothing store', 'WhatsApp API pricing India', 'WhatsApp templates retail', 'WhatsApp Business app vs API'],
    funnelStage: 'consideration',
    module: 'marketing',
    quickAnswer: 'The WhatsApp Business app is free and fine for a few hundred customers. The WhatsApp Business API is for boutiques that want to send approved template messages to thousands of customers, automate order updates and link chats to customer records. In India, marketing messages cost under a rupee each and utility messages a fraction of that, billed per message since mid-2025. Replies within the 24-hour service window are free.',
    takeaways: [
      'Move to the API when broadcasts hit limits, two or more staff handle chats or you want messages to come from your customer data.',
      'Utility messages (order confirmed, ready for pickup) are cheap and welcome. Marketing messages need consent and relevance.',
      'The best boutique WhatsApp message is short, personal and tied to what the customer bought before.'
    ],
    faqs: [
      { q: 'What is the difference between WhatsApp Business app and WhatsApp Business API?', a: 'The app is a free phone app for small businesses with manual messaging and limited broadcasts. The API is a programmatic channel used through a software platform, with approved message templates, automation, multiple agents and much larger reach. The API has per-message costs.' },
      { q: 'How much does the WhatsApp Business API cost in India?', a: 'Meta bills per message. In India, marketing templates cost roughly ₹0.80 to ₹0.90 each and utility templates around ₹0.12. Service replies inside the 24-hour customer window are free. Platforms that give you access may add a monthly fee. Check Meta\'s current rate card, as prices change.' },
      { q: 'Do I need customer consent for WhatsApp marketing?', a: 'Yes. Meta requires opt-in before sending marketing messages, and customers can report or block you, which hurts your quality rating. Collect consent at billing, on your website or in a chat, and honour opt-outs immediately.' },
      { q: 'Can a small boutique use the WhatsApp API?', a: 'Yes. You do not need to be a large brand. You need a verified business, a phone number not used on the regular app and a platform that connects to the API. Many retail software tools include this.' },
      { q: 'What messages work best for boutiques on WhatsApp?', a: 'Order and pickup updates, personalised new-arrival alerts based on past purchases, festive previews for loyal customers, follow-ups after a try-on and occasion reminders like anniversaries. Mass discount blasts perform worst.' }
    ],
    leadMagnet: {
      title: '10 WhatsApp Templates for Boutiques',
      desc: 'Ready-to-adapt message templates for confirmations, follow-ups, festive previews and win-backs. Short, polite and tested with Indian customers.',
      items: [
        'Order confirmed: "Hi {name}, your order #{id} for {item} is confirmed. We will message you when it is ready. Thank you for shopping with {store}."',
        'Ready for pickup: "Hi {name}, your {item} is ready at {store}. We are open 10:30 to 8:30. Reply here if you need it delivered."',
        'Alteration done: "Hi {name}, your alteration is complete. You can collect it any time this week."',
        'Try-on follow-up: "Hi {name}, lovely seeing you yesterday. The {item} you tried is still available in your size. Want us to hold it for two days?"',
        'New arrival match: "Hi {name}, we just received new {category} in the colours you usually pick. Want a few photos?"',
        'Festive preview for VIPs: "Hi {name}, our Diwali collection arrives Friday. As one of our regulars, you can preview it Thursday evening. Shall we save a slot?"',
        'Anniversary nudge: "Hi {name}, it has been a year since your wedding shopping with us. Congratulations! We have put together a few anniversary picks if you would like to see them."',
        'Win-back: "Hi {name}, we have missed you. A lot has changed at {store} since your last visit. Here is a small welcome-back offer, valid till {date}."',
        'Feedback: "Hi {name}, thank you for your purchase. How was your experience? A one-line reply helps us a lot."',
        'Opt-out footer for marketing: "Reply STOP to stop receiving updates."'
      ]
    },
    content: `Almost every Indian boutique already sells on WhatsApp. Photos go out, questions come in, orders get confirmed in chat. The problem is not whether to use WhatsApp. It is that the free app stops working well once your customer list grows.

This guide explains when to move to the WhatsApp Business API, what it costs and what to actually send.

### App vs API: the real difference

**WhatsApp Business app** is free, lives on one phone and lets you broadcast to small lists. It works until roughly 500 active customers, after which broadcasts get capped, staff fight over the phone and nobody knows who was told what.

**WhatsApp Business API** connects WhatsApp to software. You send pre-approved template messages at scale, automate order updates, let several staff reply from one number and link every chat to a customer record. It costs money per message, and it is how serious retail messaging works.

### When to switch

You are ready for the API when:

* Broadcast lists hit their limits or get flagged
* Two or more staff need to reply to customers
* You want messages triggered by events, such as "order ready", without typing
* You want to send to the right customers based on what they bought, not to everyone
* You need chat history visible next to the customer's purchase history

### What it costs in India

Since July 2025, Meta bills per message rather than per conversation. Rates change, so check the current rate card, but in late 2026 the pattern looks like this:

| Message type | Example | Rough cost per message (India) |
| --- | --- | --- |
| Utility | Order confirmed, ready for pickup, alteration done | Around ₹0.12 |
| Marketing | New collection, festive offer, win-back | Around ₹0.80 to ₹0.90 |
| Service (reply within 24 hours of customer message) | Answering a question | Free |
| Authentication | OTP | Around ₹0.12 |

A boutique sending 2,000 utility and 1,000 marketing messages a month would spend roughly ₹1,100 on Meta fees, plus whatever platform you use to access the API. That is cheaper than one newspaper insert and far more targeted.

### Setting it up

1. **Verify your business on Meta.** You need a registered business name and documents. This can take a few days.
2. **Pick a number.** It cannot be active on the regular WhatsApp app. Many boutiques use a new landline-style number or a fresh SIM.
3. **Choose a platform.** You do not talk to Meta directly. A retail or marketing platform gives you the interface, templates and customer linking.
4. **Create and submit templates.** Every marketing and utility message must be approved by Meta first. Keep them clear and honest.
5. **Collect consent.** Add a line at billing: "Can we send you updates on WhatsApp?" Record the yes.
6. **Start with utility messages.** Order updates build trust and almost never get complaints. Add marketing later.

{{lead-magnet}}

### What to send, and what not to

**Send:**
* Order, pickup and alteration updates
* A follow-up the day after a try-on
* New arrivals that match what the customer has bought before
* Early festive previews for your top 20 percent of customers
* Anniversary and birthday notes with a soft suggestion

**Do not send:**
* The same discount to your entire list
* More than two or three marketing messages a month per person
* Long messages with five images and no question
* Anything to someone who has not opted in

Meta tracks your quality rating. Too many blocks and your sending limits drop. Relevance is not just polite, it protects your channel.

### Measuring whether it works

Track three numbers: delivery rate, reply rate and sales within seven days of a message. A festive preview to 200 loyal customers that produces 25 visits and 12 sales is a very good campaign. If reply rates fall below 5 percent, your messages are too generic.

### How Scaleezy fits

Scaleezy's Marketing Hub and CRM work together so WhatsApp messages come from real customer data: segments by purchase history, follow-ups after abandoned try-ons, occasion reminders and festive previews for VIPs. Chat context sits next to purchase history, so staff never ask "what did you buy last time". Full WhatsApp Commerce, with ordering and payment in chat, is on our roadmap.

Want to see a segment-based WhatsApp campaign built from your customer list? [Request access](/request-access?module=marketing).`
  },

  {
    id: 22,
    slug: 'shopify-alternatives-for-indian-fashion-brands',
    title: 'Shopify Alternatives for Indian Fashion Brands: An Honest 2026 Comparison',
    category: 'Technology',
    date: 'Nov 06, 2026',
    dateModified: 'Nov 06, 2026',
    img: '/assets/blog/shopify-alternatives-for-indian-fashion-brands.jpg',
    excerpt: 'Shopify is excellent, but it is not the only path for a fashion brand in India. Compare Shopify with WooCommerce, Dukaan, Zoho Commerce and apparel-first platforms on cost, payments, offline sales and what matters for sarees, kurtas and bridal wear.',
    keywords: ['Shopify alternatives India', 'ecommerce platform for fashion brand India', 'Shopify vs WooCommerce India', 'Dukaan vs Shopify', 'best ecommerce platform for clothing brand'],
    funnelStage: 'consideration',
    module: 'boutique',
    quickAnswer: 'Shopify suits Indian fashion brands that are online-first and want a polished storefront with a large app ecosystem, at roughly ₹2,000 a month plus app and payment fees. WooCommerce is cheapest but needs technical upkeep. Dukaan and Zoho Commerce are simpler and India-focused. Apparel-first platforms like Scaleezy make sense when you also sell in a physical store and need inventory, customers and billing connected to the website.',
    takeaways: [
      'The right platform depends on one question: do you sell only online, or online and in-store?',
      'Shopify\'s sticker price is small. Apps for inventory, WhatsApp, reviews and loyalty are where the monthly bill grows.',
      'For boutiques with a physical counter, a platform that connects store stock and online stock saves more than any theme.'
    ],
    faqs: [
      { q: 'What is the best alternative to Shopify in India?', a: 'It depends on your model. WooCommerce for full control at low cost, Dukaan or Zoho Commerce for simplicity, and an apparel-first platform like Scaleezy if you run a physical boutique and want online and offline stock, customers and billing in one system.' },
      { q: 'Is Shopify expensive in India?', a: 'The basic plan is around ₹2,000 a month on annual billing, which is reasonable. The real cost comes from apps for inventory sync, WhatsApp, reviews and loyalty, plus payment gateway fees. Many brands end up at ₹6,000 to ₹15,000 a month all in.' },
      { q: 'Can I sell in my boutique and online with Shopify?', a: 'Yes, with Shopify POS and inventory apps. It works best for brands that started online. Boutiques that started offline often find apparel-specific platforms handle sizes, exchanges and walk-in customers more naturally.' },
      { q: 'Is WooCommerce good for a fashion brand?', a: 'WooCommerce is flexible and cheap to run, but you manage hosting, security, plugins and updates yourself or pay someone to. It suits brands with a technical person on hand.' },
      { q: 'Do I need a website at all if I sell on Instagram and WhatsApp?', a: 'Not on day one. Many boutiques do well on Instagram and WhatsApp alone. A website becomes useful when you want search traffic, repeat orders without a chat and a catalog customers can browse at midnight.' }
    ],
    leadMagnet: {
      title: 'Ecommerce Platform Decision Sheet',
      desc: 'Eight questions that point you to the right platform, plus the hidden monthly costs to add up before you decide.',
      items: [
        'Do you have a physical store? If yes, prioritise online-offline stock sync over themes.',
        'How many SKUs including sizes and colours? Over 500 means variant handling must be native.',
        'Who will maintain the site? Nobody technical means avoid self-hosted options.',
        'Where do customers find you today? Instagram and WhatsApp first means the website is a catalog, not the main shop.',
        'Do you need COD and RTO controls? Essential for Indian D2C.',
        'Do you need GST invoices from every online order? Confirm it is built in.',
        'Add up: platform fee + apps + payment gateway % + shipping tool + theme. That is your real monthly cost.',
        'Ask: can I export products, orders and customers if I leave?'
      ]
    },
    content: `Shopify is a very good product. It is also the default recommendation on every YouTube video about starting a clothing brand, which means many Indian boutiques choose it before asking whether it fits how they actually sell.

Here is a fair comparison for fashion sellers in India, with the question that matters most up front.

### The question that decides everything

**Do you sell only online, or online and in a physical store?**

Online-only brands need a great storefront, checkout, payments and shipping. Shopify, WooCommerce and India-focused builders all do this.

Boutiques with a counter need something harder: one stock pool shared between the shop floor and the website, customers recognised in both places and billing that works with walk-ins, exchanges and alterations. General ecommerce platforms handle this through add-ons. Apparel-first platforms handle it natively.

### The options, honestly

**Shopify**
* Strengths: polished storefront, reliable checkout, huge app ecosystem, good themes
* Weaknesses: apps add up fast, physical-store features are an add-on mindset, variants beyond 100 per product need workarounds
* Cost: roughly ₹2,000 a month for the basic plan on annual billing, plus apps and payment fees
* Best for: online-first brands with a marketing budget

**WooCommerce (WordPress)**
* Strengths: cheapest to run, total control, no platform lock-in
* Weaknesses: you manage hosting, security, plugins and updates; things break
* Cost: hosting from ₹500 a month, plus paid plugins and developer time
* Best for: brands with a technical person or agency

**Dukaan**
* Strengths: very simple, India-focused, quick to launch, WhatsApp-friendly
* Weaknesses: limited depth for variants, inventory and customer data
* Cost: subscription plans starting low; check current pricing
* Best for: small sellers who want a catalog and checkout fast

**Zoho Commerce**
* Strengths: ties into Zoho Inventory, Books and CRM; good for GST and accounting
* Weaknesses: setup takes effort; fashion variants need configuration
* Cost: subscription, with other Zoho apps adding to the bill
* Best for: sellers already in the Zoho ecosystem

**Scaleezy (apparel-first platform)**
* Strengths: built for fashion variants, boutique storefront connected to store inventory, customer records shared between online and counter, billing and exchanges included
* Weaknesses: fewer third-party theme and app options than Shopify; focused on apparel, not general retail
* Cost: from ₹2,499 a month including inventory, billing and CRM
* Best for: boutiques and fashion brands that sell in-store and online

### Side-by-side

| Need | Shopify | WooCommerce | Dukaan | Zoho Commerce | Scaleezy |
| --- | --- | --- | --- | --- | --- |
| Quick launch | Yes | No | Yes | Moderate | Yes |
| Size and colour variants | Yes, with limits | Yes, with plugins | Basic | Yes, with setup | Native |
| Physical store billing | Via Shopify POS | Via plugins | No | Limited | Built in |
| Shared online and store stock | Via apps | Via plugins | No | Partial | Built in |
| Customer history across channels | Via apps | Via plugins | Basic | Via Zoho CRM | Built in |
| COD and RTO tools | Via apps | Via plugins | Basic | Basic | Built in |
| GST invoices | Via apps | Via plugins | Yes | Yes | Yes |
| Monthly cost all in (typical) | ₹6,000 to ₹15,000 | ₹2,000 to ₹10,000 | ₹500 to ₹3,000 | ₹3,000 to ₹8,000 | ₹2,499 to ₹5,999 |

Prices are indicative for late 2026 and change often. Always confirm before deciding.

{{lead-magnet}}

### The hidden cost nobody mentions

It is not the subscription. It is the hours. A platform that needs five apps to handle stock, WhatsApp, reviews, loyalty and shipping means five dashboards, five supports and five places where data can disagree. For a boutique owner who also buys stock, manages staff and serves customers, that time is the most expensive line item.

### A simple recommendation

* **Online only, strong on content and ads:** Shopify.
* **Online only, technical help available, tight budget:** WooCommerce.
* **Instagram and WhatsApp seller wanting a basic catalog:** Dukaan.
* **Already using Zoho Books and Inventory:** Zoho Commerce.
* **Physical boutique that also sells online, or plans to:** an apparel-first platform where store and site share one stock pool.

### How Scaleezy fits

Scaleezy's Boutique module gives fashion brands a storefront that shares inventory, customers and billing with the physical store. A saree sold at the counter disappears from the website instantly. A customer who bought online is recognised when she walks in. It is built for apparel variants and Indian selling habits, including COD confirmation and WhatsApp follow-ups.

Want to see your catalog on a store that talks to your counter? [Request access](/request-access?module=boutique).`
  },

  {
    id: 23,
    slug: 'multi-store-inventory-management-clothing-chains',
    title: 'Multi-Store Inventory Management for Clothing Chains: How to Stop Losing Stock Between Stores',
    category: 'Inventory Intelligence',
    date: 'Oct 30, 2026',
    dateModified: 'Oct 30, 2026',
    img: '/assets/blog/multi-store-inventory-management-clothing-chains.jpg',
    excerpt: 'Two stores is where inventory gets hard. Transfers go missing, one branch runs out while another sits on stock, and nobody has a single view. A practical system for clothing chains with 2 to 20 stores.',
    keywords: ['multi store inventory management', 'inventory software for retail chain India', 'stock transfer between stores', 'centralised inventory clothing stores', 'multi location stock management'],
    funnelStage: 'consideration',
    module: 'inventory',
    quickAnswer: 'Multi-store inventory works when every store and warehouse shares one live stock view, transfers are scanned out and scanned in, each location has its own reorder points and slow stock in one branch is moved to where it sells. The tools that make this possible are a central product catalog, barcode-based transfers and location-level reports. Spreadsheets and WhatsApp photos stop working at the second store.',
    takeaways: [
      'Stock leaks happen in transit. Scan out, scan in, and treat "in transit" as its own location.',
      'Each store sells differently. Reorder points and festive buys must be set per location, not per chain.',
      'The biggest win is rebalancing: moving a slow size from one branch to the branch that keeps selling out.'
    ],
    faqs: [
      { q: 'How do you manage inventory across multiple clothing stores?', a: 'Use one central catalog with location-level stock, scan all transfers out and in, set reorder points per store, review a weekly stock-by-location report and rebalance slow movers between branches. Software that supports multiple locations natively makes this routine.' },
      { q: 'What is the best way to transfer stock between stores?', a: 'Create a transfer document in your system, scan items out at the sending store, physically move them with a printed list, scan them in at the receiving store and resolve any mismatch the same day. Items should sit in an "in transit" location until received.' },
      { q: 'Should each store have its own stock or should stock be centralised?', a: 'Both. Each store holds selling stock with its own reorder points. A central warehouse or main store holds backup stock and feeds branches. The key is that the system shows all of it in one view.' },
      { q: 'How often should a retail chain count stock?', a: 'Do a full count once or twice a year and short cycle counts weekly: pick one category or rack per store, count it, fix differences. Cycle counts catch problems before they pile up.' }
    ],
    leadMagnet: {
      title: 'Multi-Store Stock Control Checklist',
      desc: 'The daily, weekly and monthly routines that keep stock accurate across 2 to 20 stores.',
      items: [
        'Daily: every transfer scanned out and scanned in the same day',
        'Daily: in-transit report reviewed; anything older than 48 hours chased',
        'Daily: each store checks its low-stock list before opening',
        'Weekly: cycle count one category per store; fix differences immediately',
        'Weekly: stock-by-location report for top 50 styles; flag imbalances',
        'Weekly: move slow sizes or colours to the store where they sell',
        'Monthly: dead stock list per store; decide clear, move or hold',
        'Monthly: compare sell-through per store to adjust next buy',
        'Quarterly: review reorder points per store against actual sales speed',
        'Twice a year: full physical count, all locations, same weekend'
      ]
    },
    content: `One store is manageable. You can see the racks, you know what came in and you can count on a Sunday. The second store changes everything. Stock moves between branches, two teams update records, and the owner starts getting "do we have this in M at the other store?" calls all day.

By the fifth store, most chains have a stock problem they cannot see. Here is how to fix it.

### Where multi-store stock goes wrong

* **Transfers without scanning.** Items leave one store in a bag and arrive at another, maybe. Nobody records the exact variants.
* **No in-transit state.** Stock vanishes from store A before it appears in store B. For two days it exists nowhere.
* **Chain-level reorder rules.** Headquarters reorders based on total sales, but one store sells out of size L while another sits on it.
* **Separate systems.** Each store runs its own billing app or sheet. Consolidation happens monthly in Excel, if at all.
* **Counts that never happen.** With many locations, the full annual count gets postponed until differences are huge.

### The system that works

**1. One catalog, many locations.** Every style and variant exists once in the system. Each location, including warehouses and "in transit", has its own quantity. You see total and per-location stock on one screen.

**2. Scan-based transfers.** Create a transfer, scan items out, print the list, move the goods, scan them in. Mismatches show up immediately, not at year end.

**3. Location-level reorder points.** Set reorder points per store based on that store's sales speed. A high-footfall mall store and a residential boutique need different buffers.

**4. Weekly rebalancing.** Pull a report of top styles by store. Where one branch has slow sizes and another is selling out, move stock. This is the cheapest way to raise sell-through across a chain.

**5. Cycle counts, not just annual counts.** Each store counts one category a week. Over a quarter, everything gets counted without closing for a day.

{{lead-magnet}}

### Roles that make it stick

* **Store managers** own daily low-stock checks and transfers in and out.
* **A central buyer or owner** owns the weekly stock-by-location review and rebalancing decisions.
* **One person** owns the master catalog so product data stays clean across stores.

Without clear owners, every store assumes someone else is watching.

### Numbers to watch across stores

* **Stock accuracy** per store: counted vs system, aim above 97 percent
* **Transfer time**: created to received, aim under 48 hours
* **Sell-through by store** for the top 50 styles
* **Dead stock value by store**
* **Stock-outs on bestsellers by store**

If one store is consistently worse on accuracy, the problem is process or training, not the software.

### Festive season across stores

Before Diwali or wedding season, plan buys per store based on last year's sell-through at that store. Hold 20 to 30 percent of festive stock centrally and release it to the stores that run fastest in the first week. This beats splitting everything equally on day one.

### How Scaleezy fits

Scaleezy Inventory is built for multi-location apparel: one catalog, location-level stock, barcode transfers with in-transit tracking, per-store reorder alerts and reports that show sell-through and dead stock by branch. The growth plan covers up to five stores and a central warehouse; enterprise plans scale to chains and franchises.

Running two or more stores and tired of stock calls? [Request access](/request-access?module=inventory) and we will map your locations in the first session.`
  },

  {
    id: 24,
    slug: 'ai-virtual-try-on-sarees-lehengas',
    title: 'AI Virtual Try-On for Sarees and Lehengas: What Actually Works in 2026',
    category: 'Virtual Try-On',
    date: 'Oct 26, 2026',
    dateModified: 'Oct 26, 2026',
    img: '/assets/blog/ai-virtual-try-on-sarees-lehengas.jpg',
    excerpt: 'Virtual try-on used to mean western wear on mannequins. The latest AI handles drapes, pleats and heavy embroidery. Here is what works today for ethnic wear, what still falls short and how boutiques are using it to sell.',
    keywords: ['virtual try on sarees', 'AI try on for ethnic wear', 'virtual try on lehenga', 'AI try on boutique India', 'virtual trial room clothing store'],
    funnelStage: 'consideration',
    module: 'tryon2buy',
    quickAnswer: 'In 2026, AI virtual try-on can realistically show sarees, lehengas and kurtas on a model or on the customer\'s own photo, including drape and embroidery detail, in a few seconds. It works best for helping customers shortlist before a physical trial, for selling on WhatsApp and Instagram without sending the piece, and for recovering sales from people who tried but did not buy. It does not replace fit checks for tailored blouses or heavy bridal pieces.',
    takeaways: [
      'Try-on is a shortlisting tool. It cuts trial room time and helps remote customers decide; it does not replace the final fitting.',
      'Every try-on is data. The customer who tried a maroon lehenga and left is your best follow-up tomorrow.',
      'Start with 20 to 30 high-value pieces, measure conversion and expand.'
    ],
    faqs: [
      { q: 'Does virtual try-on work for sarees?', a: 'Yes, with current AI models. Modern try-on tools render the drape, pleats and pallu on a model or the customer\'s photo with good realism. Heavy zari and embroidery render well in most cases. Results vary by image quality, so photograph pieces on a plain background in good light.' },
      { q: 'How much does AI virtual try-on cost for a boutique?', a: 'Pricing is usually per render or bundled into a retail platform plan. Scaleezy includes 1,500 try-on runs a month in its growth plan at ₹5,999 a month. Standalone tools charge per image or per month; compare on cost per render.' },
      { q: 'Can customers try on clothes from home?', a: 'Yes. Customers upload a photo or choose a model, pick pieces from your catalog and see the result on their phone. Boutiques share these previews on WhatsApp and Instagram to sell to customers in other cities.' },
      { q: 'Does virtual try-on increase sales?', a: 'It can, mainly by reducing hesitation and by giving you follow-up data. Boutiques typically see faster decisions on high-ticket pieces and recover some sales from customers who tried but did not buy. Measure your own numbers over a season rather than trusting generic claims.' },
      { q: 'Is virtual try-on accurate for fit and size?', a: 'It shows how a piece looks, not exact fit. For sarees and free-size pieces that is enough. For fitted blouses, lehenga waists and tailored kurtas, a physical fitting or measurements are still needed.' }
    ],
    leadMagnet: {
      title: 'Try-On Launch Plan for Boutiques',
      desc: 'A 4-week plan to launch virtual try-on on 25 pieces, with photo guidelines and the three numbers to track.',
      items: [
        'Week 1: pick 25 pieces, high value and high enquiry. Bridal, festive, designer.',
        'Week 1: photograph each on a plain background, front view, good daylight or soft studio light, no shadows',
        'Week 2: upload to try-on tool, test renders on 3 model types, fix any pieces that render poorly',
        'Week 2: train 2 staff to run try-on at the counter and on WhatsApp',
        'Week 3: offer try-on to every walk-in looking at those pieces; share previews with 50 WhatsApp enquiries',
        'Week 3: log every try-on: customer, piece, bought or not',
        'Week 4: follow up every "tried, did not buy" within 48 hours',
        'Track: try-on to purchase rate, trial room time saved, follow-up recovery rate',
        'Expand to next 50 pieces if try-on to purchase rate beats your normal enquiry conversion'
      ]
    },
    content: `Two years ago, virtual try-on demos showed t-shirts on western models and boutique owners rightly shrugged. Sarees drape. Lehengas have volume. Embroidery catches light. None of that worked.

That has changed. Here is an honest view of where AI try-on stands for Indian ethnic wear in 2026 and how boutiques are actually using it.

### What works now

**Sarees.** Current models render the drape, pleats and pallu with convincing fall on a model or on the customer's uploaded photo. Zari borders and heavy work come through clearly when the source photo is good.

**Lehengas and gowns.** Volume and flare render well. Dupatta placement is reasonable, though styling variations are limited.

**Kurtas, suits and co-ords.** These were already good and are now very reliable, including prints and asymmetric cuts.

**Speed.** Renders take seconds, which means staff can use it live at the counter or in a WhatsApp chat without the customer losing interest.

### What still falls short

* **Exact fit.** Try-on shows how something looks, not whether a 36 blouse fits. Measurements and fittings still matter.
* **Fabric feel.** Weight, texture and movement are not conveyed. Customers still want to touch silk before a ₹40,000 purchase.
* **Poor source photos.** A saree photographed crumpled on a shop floor will render badly. Good input is non-negotiable.
* **Extreme customisation.** Custom bridal with layered pieces and jewellery still needs a real trial.

### How boutiques are using it

**1. Shortlisting before the trial room.** A customer looking at eight lehengas sees all eight on herself in two minutes, then tries two physically. Trial room time drops and staff carry less.

**2. Selling to customers in other cities.** A bride in Vizag asks a Hyderabad boutique for options. Instead of shipping pieces on approval, the boutique sends try-on previews on her own photo. She shortlists and travels once.

**3. Instagram and WhatsApp content.** New arrivals shown on diverse models without a photoshoot every week.

**4. Follow-up on abandoned try-ons.** This is the quiet winner. Every try-on that does not end in a sale is a warm lead with a known preference. A message the next day, "the maroon velvet is still in your size, shall we hold it?", recovers sales that would have been lost.

{{lead-magnet}}

### What to measure

Do not trust generic conversion claims, including ours. Measure your own store over a season:

* **Try-on to purchase rate** compared with your normal enquiry to purchase rate
* **Average trial room time** before and after
* **Recovery rate** on follow-ups to customers who tried but did not buy
* **Remote sales** that would not have happened without previews

If try-on customers convert better and faster, expand. If not, you have learned cheaply.

### Getting the input right

* Plain background, ideally white or light grey
* Front view, piece fully visible, hung or on a mannequin
* Daylight or soft studio light, no hard shadows
* Consistent framing across pieces
* One good photo per piece beats five mediocre ones

### How Scaleezy fits

Scaleezy's Try-On Studio, powered by Tryon2buy, renders sarees, lehengas and apparel on models or customer photos in seconds, tracks every try-on and sends abandoned try-ons to the CRM as follow-up alerts. It is included in the growth plan with 1,500 renders a month and works at the counter, on WhatsApp and on your online store.

Want to see your own pieces rendered? [Request access](/request-access?module=tryon) and send us photos of five sarees.`
  },

  {
    id: 25,
    slug: 'wedding-season-planning-bridal-boutiques',
    title: 'Wedding Season Planning for Bridal Boutiques: A 12-Week Plan for November to February',
    category: 'Inventory Planning',
    date: 'Oct 22, 2026',
    dateModified: 'Oct 22, 2026',
    img: '/assets/blog/wedding-season-planning-bridal-boutiques.jpg',
    excerpt: 'Wedding season is where bridal boutiques make or lose the year. A week-by-week plan covering stock, customer outreach, staffing, alterations and follow-ups, built for Indian bridal and ethnic wear stores.',
    keywords: ['wedding season planning boutique', 'bridal boutique inventory planning', 'wedding season sales strategy India', 'bridal wear stock planning', 'lehenga store wedding season'],
    funnelStage: 'consideration',
    module: 'crm',
    quickAnswer: 'A bridal boutique should start wedding season planning 12 weeks before peak dates. Weeks 1 to 4: review last season\'s sell-through, lock core buys and place orders. Weeks 5 to 8: receive stock, tag it, train staff and start reaching out to past customers and enquiries. Weeks 9 to 12: run previews, manage alterations tightly, follow up on every try-on and keep a daily view of what is selling. After peak: thank customers and plan clearance.',
    takeaways: [
      'Bridal buying is appointment-driven and high ticket. Your past enquiries and customers are worth more than any ad.',
      'Alterations are the hidden bottleneck. Track every piece out for tailoring like it is stock, because it is.',
      'Follow up every try-on within 48 hours. Brides decide in a window; be in it.'
    ],
    faqs: [
      { q: 'When should a bridal boutique start preparing for wedding season?', a: 'At least 12 weeks before peak dates. In most of India, peak wedding months run November to February and again April to June. Starting in August or September for the winter season gives time for supplier lead times and staff training.' },
      { q: 'How much stock should a bridal boutique carry for wedding season?', a: 'Base it on last season\'s sell-through by category and price band, not on gut feel. Lock 60 to 70 percent of the budget on proven categories and keep 30 to 40 percent for new designs you can reorder if they take off. Avoid buying everything up front.' },
      { q: 'How do bridal boutiques get more customers during wedding season?', a: 'Reach past customers and old enquiries first with early previews, ask for referrals from recent brides, keep Instagram active with real customer moments and follow up every try-on within two days. Referrals and past customers convert far better than cold reach.' },
      { q: 'How do you manage alterations during wedding season?', a: 'Treat every piece out for alteration as a tracked item with a promised date. Keep a daily list, give tailors realistic loads and message customers when pieces are ready. Missing a wedding date is the one mistake that ends relationships.' }
    ],
    leadMagnet: {
      title: 'Wedding Season 12-Week Planner',
      desc: 'A week-by-week checklist for bridal and ethnic wear boutiques, from stock review to post-season clearance.',
      items: [
        'Week 1: pull last season\'s sales by category, price band, colour and size',
        'Week 2: set budget split: 60 to 70% proven categories, 30 to 40% new designs',
        'Week 3: place core orders; confirm supplier delivery dates in writing',
        'Week 4: list all past bridal customers and open enquiries from the last 18 months',
        'Week 5: receive, tag and photograph stock as it arrives',
        'Week 6: train staff on new collection, try-on tool and follow-up script',
        'Week 7: message past customers and enquiries with early preview invitations',
        'Week 8: set alteration capacity per week with tailors; agree turnaround',
        'Week 9: run preview evenings for referrals and VIPs',
        'Week 10: daily sell-through check; reorder fast movers; move slow pieces to front',
        'Week 11: follow up every try-on within 48 hours; confirm all alteration dates',
        'Week 12: peak week: daily stock check, staff on full strength, same-day alteration updates',
        'After: thank-you messages, referral asks, clearance plan for leftover pieces'
      ]
    },
    content: `For a bridal boutique, wedding season is not a busy period. It is the business. Three or four months decide whether the year was good. Yet many stores walk into it with stock bought on instinct, enquiries from last year lost in old chats and tailors overloaded by the second week.

Here is a 12-week plan that works for bridal, lehenga and heavy ethnic wear stores in India.

### Weeks 1 to 4: Decide what to buy

**Start with your own data.** Pull last season's sales by category (lehenga, saree, sherwani, gown), price band, colour family and size. Note what sold out early and what was left in February.

**Split the budget.** Put 60 to 70 percent into proven categories and price bands. Keep 30 to 40 percent for new designs, bought in small quantities you can reorder if they move.

**Lock supplier dates.** Bridal pieces have long lead times. Get delivery dates in writing and work backwards from your first preview event.

**Build your outreach list.** Every bride who bought in the last two years, every enquiry that did not convert, every family who came for a sibling's wedding. This list is worth more than any ad spend.

### Weeks 5 to 8: Get ready

**Receive and tag everything as it arrives.** Barcode or tag each piece the day it lands. Photograph it on a plain background for WhatsApp and try-on use.

**Train staff.** On the collection, on the story behind pieces, on the try-on tool if you use one and on a simple follow-up script.

**Start outreach.** Message past customers and old enquiries with a personal invitation to preview the new collection before it goes public. Keep it short and warm. This is where early sales come from.

**Fix alteration capacity.** Agree with tailors how many pieces per week they can turn around and in how many days. Write it down. You will need it in week 11.

{{lead-magnet}}

### Weeks 9 to 12: Sell and serve

**Preview evenings.** Invite your top customers and their referrals for an evening with the collection. Low cost, high conversion.

**Daily sell-through.** Every morning, look at what sold yesterday by category and price band. Reorder fast movers immediately. Move slow pieces to the front and feature them on social media.

**Follow up every try-on within 48 hours.** A bride who tried a piece and left is deciding. A message the next day, mentioning the exact piece and offering to hold it, brings back a meaningful share of them.

**Alterations as stock.** Every piece out for tailoring should be tracked with a customer name, promised date and status. Message customers the moment it is ready. A missed wedding date is the one mistake that ends a relationship and a referral chain.

**Peak week staffing.** Full strength, extended hours, one person dedicated to alterations and follow-ups so the floor team can sell.

### After the season

* Send a thank-you to every customer and ask for a referral or a photo from the wedding, with permission to share.
* Record anniversaries. Next year, that is a warm, personal message.
* Decide on leftover stock early: clear, hold for the summer season or move to another store.
* Write down what you learned while it is fresh. This becomes next year's week 1.

### Common mistakes

* Buying everything up front and having no money to reorder winners
* Letting enquiries live only in WhatsApp chats with no record
* Treating alterations as the tailor's problem
* Discounting in week 10 out of panic instead of moving pieces smartly

### How Scaleezy fits

Scaleezy's CRM keeps every bridal customer and enquiry with their preferences, dates and purchase history, so outreach is a filter and a message rather than a scroll through old chats. Inventory tracks pieces, including those out for alteration, with promised dates. Try-On Studio helps brides shortlist, and abandoned try-ons become follow-up alerts. Forecasting looks at last season to guide this season's buy.

Want to run this plan with your customer list and stock? [Request access](/request-access?module=crm) and we will set up the 12-week view with you.`
  }
];
