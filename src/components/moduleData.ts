import {
  BoxesIcon,
  MegaphoneIcon,
  PackageSearchIcon,
  SparklesIcon,
  TruckIcon,
  UsersRoundIcon,
  type LucideIcon } from
'lucide-react';

import { IMAGES } from './assets';

export type ModuleId =
'inventory' |
'crm' |
'marketing' |
'try-on-studio' |
'product-management' |
'logistics';

export type ModuleCapability = {
  title: string;
  description: string;
};

export type ModuleWorkflow = {
  title: string;
  description: string;
};

export type TourPoint = {
  label: string;
  title: string;
  description: string;
};

export type ModuleMedia = {
  title: string;
  description: string;
  image: string;
  alt: string;
  tourPoints: [TourPoint, TourPoint, TourPoint];
  supportingVisual?: {
    title: string;
    description: string;
    image: string;
    alt: string;
  };
};

export type PlatformModule = {
  id: ModuleId;
  name: string;
  eyebrow: string;
  subtitle: string;
  description: string;
  cardSummary: string;
  bestFor: string;
  benefits: [string, string, string];
  capabilities: [
    ModuleCapability,
    ModuleCapability,
    ModuleCapability,
    ModuleCapability];

  workflows: [ModuleWorkflow, ModuleWorkflow, ModuleWorkflow];
  media: ModuleMedia;
  proof: {
    value: string;
    label: string;
    detail: string;
  };
  cta: string;
  image: string;
  alt: string;
  icon: LucideIcon;
};

export const PLATFORM_MODULES: PlatformModule[] = [
{
  id: 'inventory',
  name: 'Inventory',
  eyebrow: 'Inventory intelligence',
  subtitle: 'Live stock intelligence across every channel.',
  description:
  'Keep every size, colour, location, and collection in view, so buying, merchandising, and store teams can make confident decisions from the same live stock picture.',
  cardSummary:
  'See sellable stock by variant, location, and collection before a customer or buyer has to ask.',
  bestFor:
  'Boutiques, multi-store retailers, and variant-rich ethnic wear ranges.',
  benefits: [
  'Store and online stock view',
  'Size, colour and collection matrix',
  'Slow-mover and replenishment cues'],

  capabilities: [
  {
    title: 'A live view of sellable stock',
    description:
    'Bring store, warehouse, reserved, and online availability into one working view instead of reconciling separate stock lists.'
  },
  {
    title: 'Variants that reflect apparel reality',
    description:
    'Read stock by size, colour, fabric, fit, collection, and SKU—without flattening the details that make an assortment sellable.'
  },
  {
    title: 'Stock movement with context',
    description:
    'Follow intake, sale, reservation, transfer, and adjustment activity so teams understand what changed and where it happened.'
  },
  {
    title: 'Focused action on ageing pieces',
    description:
    'Surface slow-moving styles by season, location, or variant so merchandising can choose a considered next step.'
  }],

  workflows: [
  {
    title: 'Locate a missing size before losing the sale',
    description:
    'A store associate checks the colour and size a customer wants, sees which location can fulfil it, and continues the sale with confidence.'
  },
  {
    title: 'Read the shape of a collection, not just its total',
    description:
    'Merchandising reviews performance by fabric, colour family, size curve, and store to guide a more useful replenishment conversation.'
  },
  {
    title: 'Give ageing stock a precise next move',
    description:
    'Teams identify stalled pieces, then pass an informed list to the right store or campaign owner instead of applying a blanket discount.'
  }],

  media: {
    title: 'Inventory, with the details that matter',
    description:
    'The Scaleezy inventory workspace brings stock levels, low-stock attention, fast movers, and recent activity into the same decision surface.',
    image: IMAGES.inventoryScreen,
    alt: 'Scaleezy Inventory Overview dashboard showing stock alerts, fast movers, forecast guidance, and recent inventory activity',
    tourPoints: [
    {
      label: 'Stock picture',
      title: 'Start with the whole stock position',
      description:
      'Review total stock, reserved quantities, and stock at risk in one place before taking action at a store, warehouse, or collection level.'
    },
    {
      label: 'Attention',
      title: 'Prioritise what needs a decision',
      description:
      'Low-stock and ageing signals help teams focus on the few styles, sizes, or locations that need attention now.'
    },
    {
      label: 'Next move',
      title: 'Turn movement into a clear action',
      description:
      'Recent activity and replenishment guidance give buyers and store teams the context to transfer, reorder, or follow up.'
    }]

  },
  proof: {
    value: '30%',
    label: 'less dead stock',
    detail:
    'when merchandising teams can act on the shape of their inventory, not a spreadsheet from last week.'
  },
  cta: 'Bring every piece into view.',
  image: IMAGES.warehouse,
  alt: 'Organized apparel warehouse with garments on a rail',
  icon: PackageSearchIcon
},
{
  id: 'crm',
  name: 'CRM',
  eyebrow: 'Customer intelligence',
  subtitle: 'Know every customer, automatically.',
  description:
  'Turn every visit, fitting, purchase, and conversation into useful context, so teams can offer personal service across boutiques, clienteling desks, and online touchpoints.',
  cardSummary:
  'Give every associate the customer context to continue a relationship, not restart it.',
  bestFor:
  'Clienteling teams, bridal journeys, and brands growing repeat purchase.',
  benefits: [
  'Purchase and preference history',
  'Fitting and follow-up context',
  'Lifecycle and engagement signals'],

  capabilities: [
  {
    title: 'A customer memory that travels with the team',
    description:
    'Bring purchase history, style preferences, store visits, try-ons, and team notes into a customer view that is useful in the next conversation.'
  },
  {
    title: 'Follow-ups with a real reason',
    description:
    'Create reminders around fittings, collections, birthdays, wish lists, and previously viewed pieces without relying on memory alone.'
  },
  {
    title: 'Segments grounded in behaviour',
    description:
    'Group customers around meaningful signals such as repeat purchases, occasionwear interest, recent engagement, or dormant relationships.'
  },
  {
    title: 'A shared clienteling rhythm',
    description:
    'Give associates a clear handoff when a colleague is away, a customer changes stores, or a relationship moves from in-store to online.'
  }],

  workflows: [
  {
    title: 'Pick up a fitting where it left off',
    description:
    'Capture shortlisted pieces, fit notes, preferred colours, and alteration context so any associate can continue the appointment with care.'
  },
  {
    title: 'Reach out when a new collection is relevant',
    description:
    'Use previous purchases and style preferences to identify customers who may appreciate a new saree, bridal edit, or restock.'
  },
  {
    title: 'Bring a quiet relationship back into view',
    description:
    'Identify valuable customers who have not returned recently and give the team a thoughtful reason to reconnect.'
  }],

  media: {
    title: 'A customer view designed for clienteling',
    description:
    'The CRM workspace keeps follow-ups, recent conversations, try-on intent, and customer segments visible without separating service from sales.',
    image: IMAGES.crmScreen,
    alt: 'Scaleezy CRM dashboard showing customer follow-up reminders, try-on alerts, customer segments, and recent interactions',
    tourPoints: [
    {
      label: 'Follow-up',
      title: 'Keep the next conversation timely',
      description:
      'Use reminders to turn a fitting, a date, or an unanswered message into an appropriate follow-up rather than a generic campaign.'
    },
    {
      label: 'Context',
      title: 'Understand the customer before the greeting',
      description:
      'Customer activity puts previous purchases, questions, and product interest close to the associate who needs it.'
    },
    {
      label: 'Segments',
      title: 'Move from one-to-one care to useful groups',
      description:
      'Build audience groups from relationship signals, then let marketing and store teams act from the same customer understanding.'
    }]

  },
  proof: {
    value: '40%',
    label: 'higher repeat purchases',
    detail:
    'when teams have the context to make every follow-up feel considered, not automated.'
  },
  cta: 'Make every relationship feel remembered.',
  image: IMAGES.customer,
  alt: 'Fashion customer working at a boutique table',
  icon: UsersRoundIcon
},
{
  id: 'marketing',
  name: 'Marketing',
  eyebrow: 'Marketing automation',
  subtitle: 'Campaigns that run themselves.',
  description:
  'Create timely customer moments from the inventory, product, and relationship signals already flowing through your apparel business—without building every campaign from scratch.',
  cardSummary:
  'Turn collections, stock movement, and customer intent into relevant outreach your team can own.',
  bestFor:
  'Collection launches, retention teams, and stores with limited campaign capacity.',
  benefits: [
  'Collection launch journeys',
  'Inventory-aware customer segments',
  'Always-on retention flows'],

  capabilities: [
  {
    title: 'Build collection moments clearly',
    description:
    'Plan launch, restock, festive, and clienteling messages around the real rhythm of your apparel calendar.'
  },
  {
    title: 'Start with the customers most likely to care',
    description:
    'Create audiences around categories, styles, purchase history, engagement, and availability instead of treating every customer the same.'
  },
  {
    title: 'Keep core journeys working in the background',
    description:
    'Set up welcome, post-purchase, reminder, and re-engagement flows that stay connected to the actions already happening in the business.'
  },
  {
    title: 'Give stores and campaigns the same product story',
    description:
    'Use connected product and customer context so the campaign promise aligns with what teams can actually sell and fulfil.'
  }],

  workflows: [
  {
    title: 'Launch a collection to the customers it suits',
    description:
    'Build a launch audience around prior categories, preferred colours, price bands, or occasionwear purchases, then prepare a focused journey.'
  },
  {
    title: 'Move selected stock with relevance',
    description:
    'Create a focused campaign around specific styles or collections rather than sending a blanket discount to every customer.'
  },
  {
    title: 'Stay thoughtful after purchase',
    description:
    'Set up care, styling, and return-visit communication that reflects what a customer actually bought and what may come next.'
  }],

  media: {
    title: 'Marketing built around the business you run',
    description:
    'Scaleezy brings campaign planning, storefront moments, social content, and recent launches into a workspace designed for apparel teams.',
    image: IMAGES.marketingScreen,
    alt: 'Scaleezy Marketing dashboard showing active campaigns, website actions, social content, and recent campaign activity',
    tourPoints: [
    {
      label: 'Launch',
      title: 'Make collection launches easy to coordinate',
      description:
      'Move from a new arrival to a clear campaign plan, with the product story and audience decision visible to the same team.'
    },
    {
      label: 'Create',
      title: 'Keep everyday content close to the campaign',
      description:
      'Quick actions make it easier to shape a storefront update, campaign, QR moment, or social post as part of one plan.'
    },
    {
      label: 'Refine',
      title: 'See what is in motion before the next send',
      description:
      'Recent campaign context helps the team keep launches, re-engagement, and seasonal communication coordinated.'
    }]

  },
  proof: {
    value: '50%',
    label: 'less manual work',
    detail:
    'when ongoing customer communication moves from fragmented tasks into a connected operating flow.'
  },
  cta: 'Turn customer signals into timely action.',
  image: IMAGES.photoshoot,
  alt: 'Fashion campaign planning materials spread across a table',
  icon: MegaphoneIcon
},
{
  id: 'try-on-studio',
  name: 'Try-On Studio',
  eyebrow: 'Virtual try-on',
  subtitle: 'See it before you buy it.',
  description:
  'Give shoppers a more confident way to explore garments they love by helping them picture a look before they make a commitment, especially when fit and styling need more reassurance.',
  cardSummary:
  'Bring the fitting-room question into the shopping journey, wherever discovery begins.',
  bestFor:
  'Occasionwear, sarees, high-consideration styles, and D2C discovery.',
  benefits: [
  'Shopper photo-to-look flow',
  'Richer product discovery',
  'Confidence before checkout'],

  capabilities: [
  {
    title: 'A simple, guided try-on flow',
    description:
    'Help customers move from a selected product and photo to a more personal visual moment without making the journey feel technical.'
  },
  {
    title: 'A richer story for considered pieces',
    description:
    'Let shoppers explore sarees, lehengas, occasionwear, and statement garments with more context than a product thumbnail alone can offer.'
  },
  {
    title: 'A workspace for product readiness',
    description:
    'Give the team a clear way to see which products are configured, which assets are available, and where attention is needed next.'
  },
  {
    title: 'Insight that informs merchandising',
    description:
    'Bring tried products and customer interest into the same conversation as product presentation and campaign planning.'
  }],

  workflows: [
  {
    title: 'Make occasionwear easier to imagine',
    description:
    'Help a customer move beyond a product thumbnail and picture how a saree, kurta, or statement piece could look in their own context.'
  },
  {
    title: 'Support the associate’s styling conversation',
    description:
    'Use a virtual look as a starting point for a more informed in-store or remote styling discussion, then continue from product preference.'
  },
  {
    title: 'Learn which pieces invite exploration',
    description:
    'Use try-on interest as a useful signal when deciding which styles deserve deeper product storytelling, assortment attention, or follow-up.'
  }],

  media: {
    title: 'A clear home for the try-on experience',
    description:
    'The Try-On Studio keeps product setup, generated assets, customer exploration, and team attention in a single, deliberately simple workspace.',
    image: IMAGES.tryOnScreen,
    alt: 'Scaleezy Try-On Studio dashboard showing product try-ons, configuration actions, generated assets, and insights',
    tourPoints: [
    {
      label: 'Configure',
      title: 'Prepare the right products for discovery',
      description:
      'Use the product list and quick actions to keep the styles you want shoppers to explore ready for the try-on experience.'
    },
    {
      label: 'Explore',
      title: 'See which garments are drawing interest',
      description:
      'The most-tried product view makes customer exploration visible to product, styling, and marketing teams.'
    },
    {
      label: 'Guide',
      title: 'Connect the visual moment to the next step',
      description:
      'Use generated assets and product context to guide a shopper from uncertainty to a more confident consideration of the piece.'
    }]

  },
  proof: {
    value: '+2.4×',
    label: 'conversion on tried-on items',
    detail:
    'when customers can see a garment in a context that feels closer to their own.'
  },
  cta: 'Help every shopper picture the purchase.',
  image: IMAGES.customer,
  alt: 'Customer viewing a garment look in a boutique mirror',
  icon: SparklesIcon
},
{
  id: 'product-management',
  name: 'Order Management',
  eyebrow: 'Order operations',
  subtitle: 'Every order, from confirmation to confident handoff.',
  description:
  'Run apparel orders with a clear view of what has been placed, packed, dispatched, delivered, or returned—so customer service and fulfilment teams work from the same order story.',
  cardSummary:
  'Keep orders, packing, dispatch, delivery questions, and return signals connected from checkout to handoff.',
  bestFor:
  'D2C brands, multi-location retailers, and high-consideration apparel orders.',
  benefits: [
  'Order queue and fulfilment flow',
  'Packing, dispatch and tracking context',
  'Returns and service follow-through'],

  capabilities: [
  {
    title: 'A shared order queue',
    description:
    'Give teams a clear operational view of orders as they move from confirmation through packing, dispatch, delivery, and return.'
  },
  {
    title: 'Fulfilment with the product context attached',
    description:
    'Keep the garment, variant, customer request, delivery detail, and order status close together when the team needs to act.'
  },
  {
    title: 'Exception handling before confusion grows',
    description:
    'Make shipment questions, delivery delays, and return reasons visible enough for teams to respond with useful context.'
  },
  {
    title: 'A more considered post-purchase experience',
    description:
    'Carry the care of a boutique or brand through packaging, dispatch updates, delivery support, and return follow-through.'
  }],

  workflows: [
  {
    title: 'Move a new order into a ready-to-pack queue',
    description:
    'The team sees the order alongside its product and customer details, then advances it through a consistent packing and dispatch process.'
  },
  {
    title: 'Answer delivery questions with the full order story',
    description:
    'Customer service can see the order status and shipment context before replying, rather than chasing fulfilment for a separate update.'
  },
  {
    title: 'Turn returns into product and service insight',
    description:
    'Return reasons can surface useful conversations for product content, sizing guidance, quality checks, and customer care.'
  }],

  media: {
    title: 'Order operations without the handoff gaps',
    description:
    'The Order Management workspace brings the fulfilment queue, packing and dispatch stages, tracking, returns, and delivery context into one operating view.',
    image: IMAGES.ordersScreen,
    alt: 'Scaleezy Order Fulfillment dashboard showing order queue, packing and dispatch, tracking, delivery, and returns analysis',
    tourPoints: [
    {
      label: 'Queue',
      title: 'Keep every order moving visibly',
      description:
      'The order queue gives operations a clear place to manage the work between purchase confirmation and dispatch.'
    },
    {
      label: 'Handoff',
      title: 'Make packing and dispatch easier to coordinate',
      description:
      'Status views help teams follow an order through the fulfilment steps without losing the customer or product context.'
    },
    {
      label: 'Resolve',
      title: 'Use delivery and return signals to respond well',
      description:
      'Tracking and returns context keep support and operations aligned when an order needs attention after it leaves the store or warehouse.'
    }],

    supportingVisual: {
      title: 'The product detail behind every order',
      description:
      'Order decisions are stronger when teams can recognise the garment, SKU, imagery, and selling context behind the parcel they are preparing or supporting.',
      image: IMAGES.productsScreen,
      alt: 'Scaleezy Products workspace showing recent apparel product uploads and AI-powered try-on readiness'
    }
  },
  proof: {
    value: '1',
    label: 'connected order view',
    detail:
    'for a fulfilment flow that stays understandable from the product selected through delivery and customer support.'
  },
  cta: 'Give every order a clearer path forward.',
  image: IMAGES.packaging,
  alt: 'Premium apparel orders being prepared for delivery',
  icon: BoxesIcon
},
{
  id: 'logistics',
  name: 'Logistics',
  eyebrow: 'Fulfilment visibility',
  subtitle: 'Every parcel, fully tracked.',
  description:
  'Keep fulfilment teams and customers aligned from the moment an order is dispatched until it reaches the doorstep, with a clearer view of delivery progress and exceptions.',
  cardSummary:
  'Carry the same clarity from dispatch to tracking, delivery questions, and final handoff.',
  bestFor:
  'D2C delivery, multi-location fulfilment, and time-sensitive apparel orders.',
  benefits: [
  'Order-to-doorstep visibility',
  'Shipment status and exceptions',
  'Delivery-aware customer service'],

  capabilities: [
  {
    title: 'A delivery journey teams can follow',
    description:
    'Keep shipment progress visible in the operating flow so fulfilment and service teams do not work from separate delivery updates.'
  },
  {
    title: 'Exception context before the customer asks',
    description:
    'Surface delivery questions and stalled moments early enough for a team to respond with the right order and customer detail.'
  },
  {
    title: 'A consistent final handoff',
    description:
    'Carry the care of the store or site through packaging, dispatch communication, tracking, and arrival.'
  },
  {
    title: 'Useful delivery learning over time',
    description:
    'Use delivery and return patterns as a starting point for better operational conversations across locations, products, and service.'
  }],

  workflows: [
  {
    title: 'Give a customer a confident delivery update',
    description:
    'Support can start with the shipment’s current context and answer from the same operational view used by the fulfilment team.'
  },
  {
    title: 'Spot a delivery that needs attention',
    description:
    'A visible exception helps the team decide when to investigate, communicate, or protect a time-sensitive customer moment.'
  },
  {
    title: 'Carry post-purchase care through the doorstep',
    description:
    'Delivery status, customer history, and order context stay connected so the last-mile experience still feels like your brand.'
  }],

  media: {
    title: 'From dispatch to delivery, in one operating view',
    description:
    'The fulfilment view gives logistics teams a practical way to follow the stages around packing, dispatch, tracking, and returns while keeping the customer journey in sight.',
    image: IMAGES.ordersScreen,
    alt: 'Scaleezy order fulfillment dashboard showing delivery progress, courier performance, packing and dispatch stages, tracking, and returns analysis',
    tourPoints: [
    {
      label: 'Dispatch',
      title: 'See fulfilment work as it progresses',
      description:
      'Packing and dispatch stages help logistics teams understand what is ready to leave and what still needs attention.'
    },
    {
      label: 'Track',
      title: 'Keep the delivery journey visible',
      description:
      'Tracking context gives operations and customer service a shared starting point when a customer asks where an order is.'
    },
    {
      label: 'Learn',
      title: 'Bring returns back into the operational picture',
      description:
      'Return patterns make it easier to spot conversations worth having around fit, product expectation, delivery care, or customer communication.'
    }]

  },
  proof: {
    value: '100%',
    label: 'delivery visibility',
    detail:
    'across the customer journey, so fulfilment no longer becomes a blind spot after checkout.'
  },
  cta: 'Give every order a clearer last mile.',
  image: IMAGES.packaging,
  alt: 'Premium apparel orders being prepared for delivery',
  icon: TruckIcon
}];


export function getModuleById(id: string | undefined) {
  return PLATFORM_MODULES.find((module) => module.id === id);
}

export function getRelatedModules(moduleId: ModuleId, count = 3) {
  const selectedIndex = PLATFORM_MODULES.findIndex(
    (module) => module.id === moduleId
  );
  const orderedModules = [
  ...PLATFORM_MODULES.slice(selectedIndex + 1),
  ...PLATFORM_MODULES.slice(0, selectedIndex)];


  return orderedModules.slice(0, count);
}