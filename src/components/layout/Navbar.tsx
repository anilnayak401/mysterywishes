"use client";

import Link from 'next/link';
import { Sparkles, UserCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-50">
      <Link href="/" className="flex items-center gap-2">
        <div className="w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center">
          <Sparkles className="text-[#FF4DB8] w-6 h-6" />
        </div>
        <span className="font-bold text-xl text-gray-800 tracking-tight">Mystery Wishes</span>
      </Link>
      
      <button className="w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center text-[#FF4DB8]">
        <UserCircle className="w-6 h-6" />
      </button>
    </nav>
  );
}
