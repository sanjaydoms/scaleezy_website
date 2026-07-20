import React, { useState } from 'react';
import { Bell, Menu, ChevronDown, User, Settings, LogOut } from 'lucide-react';
import { SearchInput } from '../components/SearchInput';

interface HeaderProps {
  onMenuToggle: () => void;
  onSearchChange: (value: string) => void;
}

export function Header({ onMenuToggle, onSearchChange }: HeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-[#FAF8F5]/85 backdrop-blur-md border-b border-[#E5E2DD] py-4 px-6 md:px-8 z-20 flex items-center justify-between gap-4">
      {/* Left side: Hamburger button + Search Input */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <button
          onClick={onMenuToggle}
          className="md:hidden p-2 rounded-full hover:bg-[#1A1A1A]/5 text-[#1A1A1A] transition-colors shrink-0"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        
        {/* Rounded Search bar */}
        <SearchInput onSearchChange={onSearchChange} className="w-full" />
      </div>

      {/* Right side: Notifications & User profile dropdown */}
      <div className="flex items-center gap-4 shrink-0 select-none">
        {/* Notification Bell with red badge */}
        <button
          className="relative p-2.5 rounded-full text-[#706E6B] hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5 transition-all duration-300"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-4 w-4 bg-[#EF4444] text-white text-[9px] font-extrabold flex items-center justify-center rounded-full border-2 border-[#FAF8F5]">
            3
          </span>
        </button>

        {/* User profile dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 p-1.5 rounded-full hover:bg-[#1A1A1A]/5 transition-all duration-300"
            aria-expanded={dropdownOpen}
            aria-label="User menu"
          >
            {/* User photo thumbnail */}
            <div className="h-8 w-8 rounded-full bg-[#25090B] text-white font-bold text-xs flex items-center justify-center border border-[#E5E2DD]">
              AM
            </div>
            
            <div className="hidden sm:block text-left pr-1">
              <p className="text-xs font-semibold text-[#1A1A1A]">Alex Morgan</p>
              <p className="text-[10px] text-[#706E6B] font-medium uppercase tracking-wider">Store Owner</p>
            </div>
            
            <ChevronDown className={`h-3 w-3 text-[#706E6B] transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* User Settings Dropdown menu */}
          {dropdownOpen && (
            <>
              {/* Overlay blocker to close */}
              <div 
                className="fixed inset-0 z-10" 
                onClick={() => setDropdownOpen(false)}
              />
              
              <div className="absolute right-0 mt-2 w-48 bg-white border border-[#E5E2DD] rounded-xl shadow-lg py-1.5 z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                <button className="flex items-center gap-2.5 w-full px-4 py-2 text-sm text-[#1A1A1A] hover:bg-[#FAF8F5] transition-colors text-left">
                  <User className="h-4 w-4 text-[#706E6B]" />
                  <span>My Profile</span>
                </button>
                <button className="flex items-center gap-2.5 w-full px-4 py-2 text-sm text-[#1A1A1A] hover:bg-[#FAF8F5] transition-colors text-left">
                  <Settings className="h-4 w-4 text-[#706E6B]" />
                  <span>Account Settings</span>
                </button>
                <div className="h-px bg-[#E5E2DD]/50 my-1" />
                <button className="flex items-center gap-2.5 w-full px-4 py-2 text-sm text-[#EF4444] hover:bg-[#FFF2F2] transition-colors text-left">
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
