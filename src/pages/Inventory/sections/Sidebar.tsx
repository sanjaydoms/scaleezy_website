import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  ChevronUp,
  Package,
  Layers,
  Archive,
  ClipboardList,
  PlusCircle,
  MinusCircle,
  History,
  Scan,
  Printer,
  AlertTriangle,
  Sparkles,
  Bell,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeItem?: string;
  onSelectSubitem?: (id: string) => void;
}

interface NavGroup {
  id: string;
  label: string;
  icon: React.ReactNode;
  subitems: { id: string; label: string; icon?: React.ReactNode }[];
}

export function Sidebar({
  isOpen,
  onClose,
  activeItem = 'inventory-dashboard',
  onSelectSubitem
}: SidebarProps) {
  const groups: NavGroup[] = [
    {
      id: 'inventory',
      label: 'Inventory',
      icon: <Package className="h-4 w-4" />,
      subitems: [
        { id: 'inventory-dashboard', label: 'Inventory Dashboard' },
        { id: 'product-inventory-list', label: 'Product Inventory List' },
        { id: 'reserved-stock-view', label: 'Reserved Stock View' },
        { id: 'dead-stock-panel', label: 'Dead Stock Panel' }
      ]
    },
    {
      id: 'stock-operations',
      label: 'Stock Operations',
      icon: <ClipboardList className="h-4 w-4" />,
      subitems: [
        { id: 'stock-intake-screen', label: 'Stock Intake Screen', icon: <PlusCircle className="h-3 w-3" /> },
        { id: 'stock-deduction-screen', label: 'Stock Deduction Screen', icon: <MinusCircle className="h-3 w-3" /> },
        { id: 'inventory-log', label: 'Inventory Log', icon: <History className="h-3 w-3" /> },
        { id: 'barcode-scanner-view', label: 'Barcode Scanner View', icon: <Scan className="h-3 w-3" /> },
        { id: 'barcode-label-print', label: 'Barcode Label Print', icon: <Printer className="h-3 w-3" /> }
      ]
    },
    {
      id: 'alerts',
      label: 'Alerts',
      icon: <AlertTriangle className="h-4 w-4" />,
      subitems: [
        { id: 'low-stock-alert-detail', label: 'Low Stock Alert Detail' },
        { id: 'restock-forecast-card', label: 'Restock Forecast Card', icon: <Sparkles className="h-3 w-3" /> }
      ]
    }
  ];

  // Accordion state - keep active item group open by default
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    inventory: true,
    'stock-operations': true,
    alerts: true
  });

  const toggleGroup = (groupId: string) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };

  const handleSubitemClick = (id: string) => {
    if (onSelectSubitem) {
      onSelectSubitem(id);
    }
    // Close sidebar on mobile upon item selection
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#0D1712] text-[#FAF8F5]/90 border-r border-[#FAF8F5]/5 select-none">
      {/* Sidebar Header / Logo */}
      <div className="flex items-center justify-between px-6 py-6 border-b border-[#FAF8F5]/5 shrink-0">
        <Link to="/" className="text-2xl font-semibold tracking-tight text-white hover:opacity-90 transition-opacity">
          scale<span className="text-[#C2FF3D]">ezy</span>
        </Link>
        <button
          onClick={onClose}
          className="md:hidden p-1.5 rounded-full hover:bg-white/10 text-white/80 transition-colors"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Navigation Groups Accordions */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-5 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {groups.map(group => {
          const isExpanded = !!expandedGroups[group.id];
          const hasActiveItem = group.subitems.some(item => item.id === activeItem);

          return (
            <div key={group.id} className="space-y-1">
              {/* Group Header Button */}
              <button
                onClick={() => toggleGroup(group.id)}
                className={`flex items-center justify-between w-full px-3 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  hasActiveItem
                    ? 'text-white border border-[#C2FF3D]/25 bg-[#FAF8F5]/5'
                    : 'text-[#706E6B] hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={hasActiveItem ? 'text-[#C2FF3D]' : 'text-[#706E6B]'}>
                    {group.icon}
                  </span>
                  <span>{group.label}</span>
                </div>
                {isExpanded ? (
                  <ChevronUp className="h-3 w-3" />
                ) : (
                  <ChevronDown className="h-3 w-3" />
                )}
              </button>

              {/* Subitems container */}
              {isExpanded && (
                <div className="mt-1 pl-6 space-y-0.5">
                  {group.subitems.map(subitem => {
                    const isActive = subitem.id === activeItem;
                    return (
                      <button
                        key={subitem.id}
                        onClick={() => handleSubitemClick(subitem.id)}
                        className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm transition-all duration-300 text-left ${
                          isActive
                            ? 'text-white font-semibold bg-[#FAF8F5]/10'
                            : 'text-[#FAF8F5]/60 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center gap-2 overflow-hidden truncate">
                          {subitem.icon && (
                            <span className={isActive ? 'text-[#C2FF3D]' : 'text-[#FAF8F5]/40 shrink-0'}>
                              {subitem.icon}
                            </span>
                          )}
                          <span className="truncate">{subitem.label}</span>
                        </div>
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#C2FF3D] shrink-0 ml-1.5" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Boutique Profile Widget */}
      <div className="p-4 border-t border-[#FAF8F5]/5 shrink-0 bg-[#0A110D]">
        <div className="flex items-center justify-between gap-3 p-2.5 rounded-2xl bg-white/5 border border-white/5">
          <div className="flex items-center gap-3 min-w-0">
            {/* Avatar Circle with initials */}
            <div className="h-10 w-10 rounded-full bg-[#C2FF3D] text-[#0F1913] font-bold flex items-center justify-center text-sm shrink-0">
              AM
            </div>
            {/* User Meta */}
            <div className="min-w-0">
              <p className="text-xs font-semibold text-white truncate">Anjali Manager</p>
              <p className="text-[10px] text-[#706E6B] font-medium uppercase tracking-wider truncate">
                Boutique Owner
              </p>
            </div>
          </div>
          {/* Bell icon notification shortcut */}
          <button
            className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors flex items-center justify-center shrink-0 relative"
            aria-label="Sidebar Notifications"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute top-0.5 right-0.5 h-2 w-2 rounded-full bg-[#C2FF3D]" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Permanent) */}
      <aside className="hidden md:block w-64 h-screen sticky top-0 shrink-0 z-30">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="md:hidden fixed inset-0 bg-[#0F1913]/60 backdrop-blur-sm z-40 transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Content */}
      <aside
        className={`md:hidden fixed top-0 bottom-0 left-0 w-64 z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
