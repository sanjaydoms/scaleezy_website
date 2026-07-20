import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { ProductRow } from '../components/ProductRow';
import { Button } from '../components/Button';

interface FastMoversSectionProps {
  searchQuery?: string;
  onViewAllClick?: () => void;
}

export function FastMoversSection({ searchQuery = '', onViewAllClick }: FastMoversSectionProps) {
  const products = [
    {
      id: 'p1',
      name: 'Classic Cotton T-Shirt',
      category: 'T-Shirts',
      soldCount: 840,
      imageUrl: '/040c1ae5-eee1-4eb1-80da-16278e880f31.jpg'
    },
    {
      id: 'p2',
      name: 'Linen Wide-Leg Pants',
      category: 'Bottoms',
      soldCount: 520,
      imageUrl: '/67b453b8-fd20-4d85-adb2-7254c089a986.jpg'
    },
    {
      id: 'p3',
      name: 'Ribbed Knit Sweater',
      category: 'Knitwear',
      soldCount: 412,
      imageUrl: '/ab535969-817b-4993-8338-e2f262fbd8c8.jpg'
    },
    {
      id: 'p4',
      name: 'Silk Midi Dress',
      category: 'Dresses',
      soldCount: 329,
      imageUrl: '/817dabab-8ea9-4cb8-8fdc-e460ea2c7ead.jpg'
    },
    {
      id: 'p5',
      name: 'Leather Chelsea Boots',
      category: 'Footwear',
      soldCount: 284,
      imageUrl: '/7ebc5968-eef2-4818-ad01-414da6d717e2.jpg'
    }
  ];

  // Filter products by search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white border border-[#E5E2DD] rounded-3xl p-6 flex flex-col h-full hover:shadow-sm transition-shadow">
      {/* Header */}
      <div className="flex items-center gap-2 pb-5 border-b border-[#E5E2DD]/50">
        <span className="p-1.5 rounded-lg bg-[#FFFBEB] text-[#D97706] flex items-center justify-center shrink-0">
          <TrendingUp className="h-4 w-4" />
        </span>
        <h3 className="text-lg font-bold text-[#1A1A1A]">Fast Movers</h3>
      </div>

      {/* List content */}
      <div className="flex-1 mt-4 space-y-2 overflow-y-auto no-scrollbar max-h-[380px]">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductRow
              key={product.id}
              name={product.name}
              category={product.category}
              soldCount={product.soldCount}
              imageUrl={product.imageUrl}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-sm font-medium text-[#706E6B]">No matching products</p>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="pt-6 border-t border-[#E5E2DD]/50 mt-auto">
        <Button
          variant="primary"
          size="md"
          className="w-full text-xs font-semibold tracking-wider uppercase"
          onClick={onViewAllClick}
          icon={<ArrowRight className="h-3.5 w-3.5" />}
          iconPosition="right"
        >
          View All Products
        </Button>
      </div>
    </div>
  );
}
