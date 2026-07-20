import {
  PackageSearchIcon,
  type LucideIcon } from
'lucide-react';

import { IMAGES } from './assets';
import { crmModule } from '../pages/CRM/constants/crmData';
import { marketingModule } from '../pages/Marketing/constants/marketingData';
import { tryOnStudioModule } from '../pages/TryOnStudio/constants/tryOnStudioData';
import { orderManagementModule } from '../pages/OrderManagement/constants/orderManagementData';
import { logisticsModule } from '../pages/Logistics/constants/logisticsData';

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
crmModule,
marketingModule,
tryOnStudioModule,
orderManagementModule,
logisticsModule
];


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