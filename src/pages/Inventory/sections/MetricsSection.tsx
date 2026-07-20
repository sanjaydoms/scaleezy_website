import React from 'react';
import { Package, AlertTriangle, Archive, DollarSign } from 'lucide-react';
import { MetricCard } from '../components/MetricCard';

interface MetricsSectionProps {
  onCardClick?: (metricId: string) => void;
}

export function MetricsSection({ onCardClick }: MetricsSectionProps) {
  const metrics = [
    {
      id: 'total-stock',
      label: 'Total Stock',
      value: '12,847',
      icon: <Package className="h-5 w-5" />,
      variant: 'default' as const
    },
    {
      id: 'low-stock',
      label: 'Low Stock Alerts',
      value: '24',
      icon: <AlertTriangle className="h-5 w-5" />,
      variant: 'alert' as const
    },
    {
      id: 'dead-stock',
      label: 'Dead Stock',
      value: '156',
      icon: <Archive className="h-5 w-5 text-[#8B5A2B]" />,
      variant: 'default' as const
    },
    {
      id: 'revenue-risk',
      label: 'Revenue at Risk',
      value: '$12.4k',
      icon: <DollarSign className="h-5 w-5 text-[#B45309]" />,
      variant: 'default' as const
    }
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {metrics.map(metric => (
        <MetricCard
          key={metric.id}
          label={metric.label}
          value={metric.value}
          icon={metric.icon}
          variant={metric.variant}
          onClick={onCardClick ? () => onCardClick(metric.id) : undefined}
        />
      ))}
    </section>
  );
}
