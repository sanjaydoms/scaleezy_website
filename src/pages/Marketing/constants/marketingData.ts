import { MegaphoneIcon } from 'lucide-react';
import { IMAGES } from '../../../components/assets';
import type { PlatformModule } from '../../../components/moduleData';

export const marketingModule: PlatformModule = {
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
    'Always-on retention flows',
  ],

  capabilities: [
    {
      title: 'Build collection moments clearly',
      description:
        'Plan launch, restock, festive, and clienteling messages around the real rhythm of your apparel calendar.',
    },
    {
      title: 'Start with the customers most likely to care',
      description:
        'Create audiences around categories, styles, purchase history, engagement, and availability instead of treating every customer the same.',
    },
    {
      title: 'Keep core journeys working in the background',
      description:
        'Set up welcome, post-purchase, reminder, and re-engagement flows that stay connected to the actions already happening in the business.',
    },
    {
      title: 'Give stores and campaigns the same product story',
      description:
        'Use connected product and customer context so the campaign promise aligns with what teams can actually sell and fulfil.',
    },
  ],

  workflows: [
    {
      title: 'Launch a collection to the customers it suits',
      description:
        'Build a launch audience around prior categories, preferred colours, price bands, or occasionwear purchases, then prepare a focused journey.',
    },
    {
      title: 'Move selected stock with relevance',
      description:
        'Create a focused campaign around specific styles or collections rather than sending a blanket discount to every customer.',
    },
    {
      title: 'Stay thoughtful after purchase',
      description:
        'Set up care, styling, and return-visit communication that reflects what a customer actually bought and what may come next.',
    },
  ],

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
          'Move from a new arrival to a clear campaign plan, with the product story and audience decision visible to the same team.',
      },
      {
        label: 'Create',
        title: 'Keep everyday content close to the campaign',
        description:
          'Quick actions make it easier to shape a storefront update, campaign, QR moment, or social post as part of one plan.',
      },
      {
        label: 'Refine',
        title: 'See what is in motion before the next send',
        description:
          'Recent campaign context helps the team keep launches, re-engagement, and seasonal communication coordinated.',
      },
    ],
  },

  proof: {
    value: '50%',
    label: 'less manual work',
    detail:
      'when ongoing customer communication moves from fragmented tasks into a connected operating flow.',
  },
  cta: 'Turn customer signals into timely action.',
  image: IMAGES.photoshoot,
  alt: 'Fashion campaign planning materials spread across a table',
  icon: MegaphoneIcon,
};
