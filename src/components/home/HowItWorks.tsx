"use client";

import { MagicWandIcon } from '@radix-ui/react-icons'; // wait, I'll use Lucide
import { Wand2, Timer, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Wand2 className="w-5 h-5 text-pink-500" />,
      title: "Make a Wish",
      desc: "Choose a surprise for your friend",
      color: "bg-pink-50"
    },
    {
      icon: <Timer className="w-5 h-5 text-purple-500" />,
      title: "Set the Timer",
      desc: "Decide when the wish reveals",
      color: "bg-purple-50"
    },
    {
      icon: <Share2 className="w-5 h-5 text-blue-500" />,
      title: "Share the Magic",
      desc: "Send a link and build suspense",
      color: "bg-blue-50"
    }
  ];

  return (
    <div className="px-6 py-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">How it works</h2>
        <button className="text-pink-500 text-sm font-medium">Learn more</button>
      </div>
      
      <div className="space-y-4">
        {steps.map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-gray-50 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 ${step.color} rounded-2xl flex items-center justify-center`}>
              {step.icon}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 leading-none mb-1.5">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
