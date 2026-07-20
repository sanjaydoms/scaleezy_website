import { SparklesIcon } from 'lucide-react';
import { IMAGES } from '../../../components/assets';
import type { PlatformModule } from '../../../components/moduleData';

export const tryOnStudioModule: PlatformModule = {
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
    'Confidence before checkout',
  ],

  capabilities: [
    {
      title: 'A simple, guided try-on flow',
      description:
        'Help customers move from a selected product and photo to a more personal visual moment without making the journey feel technical.',
    },
    {
      title: 'A richer story for considered pieces',
      description:
        'Let shoppers explore sarees, lehengas, occasionwear, and statement garments with more context than a product thumbnail alone can offer.',
    },
    {
      title: 'A workspace for product readiness',
      description:
        'Give the team a clear way to see which products are configured, which assets are available, and where attention is needed next.',
    },
    {
      title: 'Insight that informs merchandising',
      description:
        'Bring tried products and customer interest into the same conversation as product presentation and campaign planning.',
    },
  ],

  workflows: [
    {
      title: 'Make occasionwear easier to imagine',
      description:
        'Help a customer move beyond a product thumbnail and picture how a saree, kurta, or statement piece could look in their own context.',
    },
    {
      title: 'Support the associate\u2019s styling conversation',
      description:
        'Use a virtual look as a starting point for a more informed in-store or remote styling discussion, then continue from product preference.',
    },
    {
      title: 'Learn which pieces invite exploration',
      description:
        'Use try-on interest as a useful signal when deciding which styles deserve deeper product storytelling, assortment attention, or follow-up.',
    },
  ],

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
          'Use the product list and quick actions to keep the styles you want shoppers to explore ready for the try-on experience.',
      },
      {
        label: 'Explore',
        title: 'See which garments are drawing interest',
        description:
          'The most-tried product view makes customer exploration visible to product, styling, and marketing teams.',
      },
      {
        label: 'Guide',
        title: 'Connect the visual moment to the next step',
        description:
          'Use generated assets and product context to guide a shopper from uncertainty to a more confident consideration of the piece.',
      },
    ],
  },

  proof: {
    value: '+2.4\u00d7',
    label: 'conversion on tried-on items',
    detail:
      'when customers can see a garment in a context that feels closer to their own.',
  },
  cta: 'Help every shopper picture the purchase.',
  image: IMAGES.customer,
  alt: 'Customer viewing a garment look in a boutique mirror',
  icon: SparklesIcon,
};
