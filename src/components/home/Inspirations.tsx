"use client";

import { motion } from 'framer-motion';
import { PartyPopper, Rocket } from 'lucide-react';

export default function Inspirations() {
  const cards = [
    {
      title: "Birthday Countdown",
      icon: <PartyPopper className="w-10 h-10 text-white" />,
      color: "bg-pink-500"
    },
    {
      title: "The Big Reveal",
      icon: <Rocket className="w-10 h-10 text-white" />,
      color: "bg-blue-500"
    }
  ];

  return (
    <div className="px-6 py-6 pb-24">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Inspirations</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="group cursor-pointer"
          >
            <div className={`aspect-square ${card.color} rounded-[2rem] flex items-center justify-center mb-3 shadow-md group-hover:shadow-lg transition-all`}>
              {card.icon}
            </div>
            <p className="font-bold text-sm text-gray-800 text-center">{card.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
