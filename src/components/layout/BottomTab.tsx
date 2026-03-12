"use client";

import { Home, Sparkles, PlusCircle, Search, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function BottomTab() {
  const pathname = usePathname();

  const tabs = [
    { icon: <Home />, label: 'Home', href: '/' },
    { icon: <Sparkles />, label: 'My Wishes', href: '/my-wishes' },
    { icon: <Search />, label: 'Discover', href: '/discover' },
    { icon: <User />, label: 'Profile', href: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 py-3 flex items-center justify-between z-50">
      {tabs.slice(0, 2).map((tab) => (
        <Link 
          key={tab.href} 
          href={tab.href}
          className={cn(
            "flex flex-col items-center gap-1 transition-colors",
            pathname === tab.href ? "text-[#FF4DB8]" : "text-gray-400"
          )}
        >
          {React.cloneElement(tab.icon as React.ReactElement, { size: 22 })}
          <span className="text-[10px] font-bold uppercase tracking-wider">{tab.label}</span>
        </Link>
      ))}

      <Link 
        href="/create"
        className="relative -top-8 w-14 h-14 bg-[#FF4DB8] text-white rounded-full flex items-center justify-center shadow-xl shadow-pink-200 active:scale-90 transition-transform"
      >
        <PlusCircle size={32} />
      </Link>

      {tabs.slice(2).map((tab) => (
        <Link 
          key={tab.href} 
          href={tab.href}
          className={cn(
            "flex flex-col items-center gap-1 transition-colors",
            pathname === tab.href ? "text-[#FF4DB8]" : "text-gray-400"
          )}
        >
          {React.cloneElement(tab.icon as React.ReactElement, { size: 22 })}
          <span className="text-[10px] font-bold uppercase tracking-wider">{tab.label}</span>
        </Link>
      ))}
    </div>
  );
}

// Fixed import for React
import * as React from 'react';
