import React from 'react';
import { History } from 'lucide-react';
import { ActivityRow, type ActivityType } from '../components/ActivityRow';

interface RecentActivitySectionProps {
  onViewAllLogsClick?: () => void;
}

export function RecentActivitySection({ onViewAllLogsClick }: RecentActivitySectionProps) {
  const activities = [
    {
      id: 'act1',
      type: 'stock_in' as ActivityType,
      changeText: '+50 units',
      itemName: 'Linen Wide-Leg Pants (Store A)',
      timeText: '10 mins ago'
    },
    {
      id: 'act2',
      type: 'sale' as ActivityType,
      changeText: '-1 unit',
      itemName: 'Classic Cotton T-Shirt (Shopify Online)',
      timeText: '24 mins ago'
    },
    {
      id: 'act3',
      type: 'reserved' as ActivityType,
      changeText: '+10 units',
      itemName: 'Silk Midi Dress (Boutique B)',
      timeText: '1 hour ago'
    },
    {
      id: 'act4',
      type: 'stock_out' as ActivityType,
      changeText: '-12 units',
      itemName: 'Denim Jacket (Store C)',
      timeText: '2 hours ago'
    },
    {
      id: 'act5',
      type: 'adjustment' as ActivityType,
      changeText: '-2 units',
      itemName: 'Ribbed Knit Sweater (Damaged Item)',
      timeText: '4 hours ago'
    },
    {
      id: 'act6',
      type: 'stock_in' as ActivityType,
      changeText: '+100 units',
      itemName: 'Leather Chelsea Boots (Main Warehouse)',
      timeText: '1 day ago'
    }
  ];

  return (
    <div className="bg-white border border-[#E5E2DD] rounded-3xl p-6 flex flex-col h-full hover:shadow-sm transition-shadow">
      {/* Header */}
      <div className="flex items-center justify-between pb-5 border-b border-[#E5E2DD]/50">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-[#F0FDFA] text-[#0D9488] flex items-center justify-center shrink-0">
            <History className="h-4 w-4" />
          </span>
          <h3 className="text-lg font-bold text-[#1A1A1A]">Recent Activity</h3>
        </div>
        
        {/* Yellow/Golden Link */}
        <button
          onClick={onViewAllLogsClick}
          className="text-xs font-bold tracking-wider uppercase text-[#D97706] hover:text-[#B45309] transition-colors"
        >
          View All
        </button>
      </div>

      {/* Activities list */}
      <div className="flex-1 mt-4 space-y-1 overflow-y-auto no-scrollbar max-h-[380px]">
        {activities.map(activity => (
          <ActivityRow
            key={activity.id}
            type={activity.type}
            changeText={activity.changeText}
            itemName={activity.itemName}
            timeText={activity.timeText}
          />
        ))}
      </div>
    </div>
  );
}
