import { UsersRoundIcon } from 'lucide-react';
import { IMAGES } from '../../../components/assets';
import type { PlatformModule } from '../../../components/moduleData';

export const crmModule: PlatformModule = {
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
    'Lifecycle and engagement signals',
  ],

  capabilities: [
    {
      title: 'A customer memory that travels with the team',
      description:
        'Bring purchase history, style preferences, store visits, try-ons, and team notes into a customer view that is useful in the next conversation.',
    },
    {
      title: 'Follow-ups with a real reason',
      description:
        'Create reminders around fittings, collections, birthdays, wish lists, and previously viewed pieces without relying on memory alone.',
    },
    {
      title: 'Segments grounded in behaviour',
      description:
        'Group customers around meaningful signals such as repeat purchases, occasionwear interest, recent engagement, or dormant relationships.',
    },
    {
      title: 'A shared clienteling rhythm',
      description:
        'Give associates a clear handoff when a colleague is away, a customer changes stores, or a relationship moves from in-store to online.',
    },
  ],

  workflows: [
    {
      title: 'Pick up a fitting where it left off',
      description:
        'Capture shortlisted pieces, fit notes, preferred colours, and alteration context so any associate can continue the appointment with care.',
    },
    {
      title: 'Reach out when a new collection is relevant',
      description:
        'Use previous purchases and style preferences to identify customers who may appreciate a new saree, bridal edit, or restock.',
    },
    {
      title: 'Bring a quiet relationship back into view',
      description:
        'Identify valuable customers who have not returned recently and give the team a thoughtful reason to reconnect.',
    },
  ],

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
          'Use reminders to turn a fitting, a date, or an unanswered message into an appropriate follow-up rather than a generic campaign.',
      },
      {
        label: 'Context',
        title: 'Understand the customer before the greeting',
        description:
          'Customer activity puts previous purchases, questions, and product interest close to the associate who needs it.',
      },
      {
        label: 'Segments',
        title: 'Move from one-to-one care to useful groups',
        description:
          'Build audience groups from relationship signals, then let marketing and store teams act from the same customer understanding.',
      },
    ],
  },

  proof: {
    value: '40%',
    label: 'higher repeat purchases',
    detail:
      'when teams have the context to make every follow-up feel considered, not automated.',
  },
  cta: 'Make every relationship feel remembered.',
  image: IMAGES.customer,
  alt: 'Fashion customer working at a boutique table',
  icon: UsersRoundIcon,
};
