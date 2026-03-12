"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Gift, Sparkle, Sun } from 'lucide-react';

export default function Hero() {
  return (
    <div className="px-6 py-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-[2.5rem] bg-gradient-to-br from-[#FFD3EE] via-[#FFF1F9] to-[#FFFFFF] p-8 overflow-hidden min-h-[400px] flex flex-col items-center justify-center text-center shadow-lg"
      >
        {/* Decorative elements */}
        <Sparkle className="absolute top-8 left-8 text-pink-300 w-8 h-8 opacity-60" />
        <Sun className="absolute bottom-8 right-8 text-pink-200 w-12 h-12 opacity-40 animate-pulse" />
        
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <Gift className="w-16 h-16 text-[#FF4DB8] mb-6 drop-shadow-md" />
          </motion.div>
          
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
            Mystery Wishes <span className="text-2xl">🎁</span>
          </h1>
          
          <p className="text-gray-600 mb-8 max-w-[280px] text-lg font-medium leading-relaxed">
            Create a digital surprise that builds suspense and brings joy.
          </p>
          
          <Link href="/create">
            <Button size="lg" className="rounded-2xl px-10 py-5">
              Create a Mystery Wish
            </Button>
          </Link>
          
          <div className="flex -space-x-3 mt-10">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm ${
                  i === 1 ? 'bg-pink-300' : 
                  i === 2 ? 'bg-blue-300' : 
                  i === 3 ? 'bg-yellow-300' : 
                  'bg-purple-300'
                }`}
              >
                {i === 4 ? '+2k' : ''}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
