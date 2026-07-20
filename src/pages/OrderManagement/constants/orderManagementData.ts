import { BoxesIcon } from 'lucide-react';
import { IMAGES } from '../../../components/assets';
import type { PlatformModule } from '../../../components/moduleData';

export const orderManagementModule: PlatformModule = {
  id: 'product-management',
  name: 'Order Management',
  eyebrow: 'Order operations',
  subtitle: 'Every order, from confirmation to confident handoff.',
  description:
    'Run apparel orders with a clear view of what has been placed, packed, dispatched, delivered, or returned\u2014so customer service and fulfilment teams work from the same order story.',
  cardSummary:
    'Keep orders, packing, dispatch, delivery questions, and return signals connected from checkout to handoff.',
  bestFor:
    'D2C brands, multi-location retailers, and high-consideration apparel orders.',
  benefits: [
    'Order queue and fulfilment flow',
    'Packing, dispatch and tracking context',
    'Returns and service follow-through',
  ],

  capabilities: [
    {
      title: 'A shared order queue',
      description:
        'Give teams a clear operational view of orders as they move from confirmation through packing, dispatch, delivery, and return.',
    },
    {
      title: 'Fulfilment with the product context attached',
      description:
        'Keep the garment, variant, customer request, delivery detail, and order status close together when the team needs to act.',
    },
    {
      title: 'Exception handling before confusion grows',
      description:
        'Make shipment questions, delivery delays, and return reasons visible enough for teams to respond with useful context.',
    },
    {
      title: 'A more considered post-purchase experience',
      description:
        'Carry the care of a boutique or brand through packaging, dispatch updates, delivery support, and return follow-through.',
    },
  ],

  workflows: [
    {
      title: 'Move a new order into a ready-to-pack queue',
      description:
        'The team sees the order alongside its product and customer details, then advances it through a consistent packing and dispatch process.',
    },
    {
      title: 'Answer delivery questions with the full order story',
      description:
        'Customer service can see the order status and shipment context before replying, rather than chasing fulfilment for a separate update.',
    },
    {
      title: 'Turn returns into product and service insight',
      description:
        'Return reasons can surface useful conversations for product content, sizing guidance, quality checks, and customer care.',
    },
  ],

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
          'The order queue gives operations a clear place to manage the work between purchase confirmation and dispatch.',
      },
      {
        label: 'Handoff',
        title: 'Make packing and dispatch easier to coordinate',
        description:
          'Status views help teams follow an order through the fulfilment steps without losing the customer or product context.',
      },
      {
        label: 'Resolve',
        title: 'Use delivery and return signals to respond well',
        description:
          'Tracking and returns context keep support and operations aligned when an order needs attention after it leaves the store or warehouse.',
      },
    ],
    supportingVisual: {
      title: 'The product detail behind every order',
      description:
        'Order decisions are stronger when teams can recognise the garment, SKU, imagery, and selling context behind the parcel they are preparing or supporting.',
      image: IMAGES.productsScreen,
      alt: 'Scaleezy Products workspace showing recent apparel product uploads and AI-powered try-on readiness',
    },
  },

  proof: {
    value: '1',
    label: 'connected order view',
    detail:
      'for a fulfilment flow that stays understandable from the product selected through delivery and customer support.',
  },
  cta: 'Give every order a clearer path forward.',
  image: IMAGES.packaging,
  alt: 'Premium apparel orders being prepared for delivery',
  icon: BoxesIcon,
};
