import { TruckIcon } from 'lucide-react';
import { IMAGES } from '../../../components/assets';
import type { PlatformModule } from '../../../components/moduleData';

export const logisticsModule: PlatformModule = {
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
    'Delivery-aware customer service',
  ],

  capabilities: [
    {
      title: 'A delivery journey teams can follow',
      description:
        'Keep shipment progress visible in the operating flow so fulfilment and service teams do not work from separate delivery updates.',
    },
    {
      title: 'Exception context before the customer asks',
      description:
        'Surface delivery questions and stalled moments early enough for a team to respond with the right order and customer detail.',
    },
    {
      title: 'A consistent final handoff',
      description:
        'Carry the care of the store or site through packaging, dispatch communication, tracking, and arrival.',
    },
    {
      title: 'Useful delivery learning over time',
      description:
        'Use delivery and return patterns as a starting point for better operational conversations across locations, products, and service.',
    },
  ],

  workflows: [
    {
      title: 'Give a customer a confident delivery update',
      description:
        'Support can start with the shipment\u2019s current context and answer from the same operational view used by the fulfilment team.',
    },
    {
      title: 'Spot a delivery that needs attention',
      description:
        'A visible exception helps the team decide when to investigate, communicate, or protect a time-sensitive customer moment.',
    },
    {
      title: 'Carry post-purchase care through the doorstep',
      description:
        'Delivery status, customer history, and order context stay connected so the last-mile experience still feels like your brand.',
    },
  ],

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
          'Packing and dispatch stages help logistics teams understand what is ready to leave and what still needs attention.',
      },
      {
        label: 'Track',
        title: 'Keep the delivery journey visible',
        description:
          'Tracking context gives operations and customer service a shared starting point when a customer asks where an order is.',
      },
      {
        label: 'Learn',
        title: 'Bring returns back into the operational picture',
        description:
          'Return patterns make it easier to spot conversations worth having around fit, product expectation, delivery care, or customer communication.',
      },
    ],
  },

  proof: {
    value: '100%',
    label: 'delivery visibility',
    detail:
      'across the customer journey, so fulfilment no longer becomes a blind spot after checkout.',
  },
  cta: 'Give every order a clearer last mile.',
  image: IMAGES.packaging,
  alt: 'Premium apparel orders being prepared for delivery',
  icon: TruckIcon,
};
