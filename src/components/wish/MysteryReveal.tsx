"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wish } from '@/types/wish';
import { Button } from '@/components/ui/button';
import { Gift, Lock, Sparkles, Heart, PartyPopper, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function MysteryReveal({ wish, onReveal }: { wish: Wish, onReveal: () => void }) {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-white to-pink-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[5%] animate-pulse"><Sparkles className="text-pink-300" size={32} /></div>
        <div className="absolute top-[20%] right-[10%] animate-bounce duration-1000"><Heart className="text-pink-400" size={24} /></div>
        <div className="absolute bottom-[20%] left-[15%]"><Sparkles className="text-purple-300" size={20} /></div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div 
            key="step1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="text-center space-y-8"
          >
            <div className="relative mx-auto w-64 h-64">
              <div className="absolute inset-0 bg-pink-100 rounded-[3rem] blur-2xl opacity-60"></div>
              <motion.div 
                animate={{ y: [0, -10, 0], rotate: [0, -2, 2, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="relative bg-white rounded-[2.5rem] p-8 shadow-xl flex items-center justify-center h-full border border-pink-50"
              >
                <div className="flex flex-col items-center">
                   <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center mb-4">
                    <Gift size={48} className="text-pink-500" />
                   </div>
                   <div className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-full text-xs font-bold shadow-lg">
                     <CheckCircle size={14} />
                     SPECIAL DELIVERY
                   </div>
                </div>
              </motion.div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
                {wish.sender_name} sent a <br/>
                <span className="text-pink-500">mystery message</span> <br/>
                for {wish.recipient_name}
              </h2>
              <p className="text-gray-500 font-medium">A magical surprise is waiting for you!</p>
            </div>

            <Button size="lg" onClick={() => setStep(2)} className="w-full rounded-2xl py-6 shadow-xl shadow-pink-200">
              Open the Surprise
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="text-center space-y-8 max-w-sm"
          >
            <div className="flex flex-col items-center gap-6">
               <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-6xl"
               >
                 🥺
               </motion.div>
               <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
                 Are you the precious <br/> 
                 <span className="text-pink-500">{wish.recipient_name}?</span>
               </h2>
               <p className="text-gray-500 font-medium">Someone has left a magical surprise just for you. Verify your identity to unlock the magic.</p>
            </div>

            <Button size="lg" onClick={() => setStep(3)} className="w-full rounded-2xl py-6 bg-pink-100 text-pink-600 hover:bg-pink-200 shadow-none">
              Yes, that's me ✨
            </Button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div 
            key="step3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-10"
          >
            <div className="relative mx-auto w-72 h-72">
               <motion.div 
                animate={{ scale: [1, 1.05, 1], rotate: [0, 1, -1, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="relative bg-white rounded-[2.5rem] p-0 shadow-2xl flex items-center justify-center h-full border-4 border-white overflow-hidden"
              >
                {/* We'll use a placeholder or generated image for the "gift box" look if no media */}
                <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop" 
                  className="w-full h-full object-cover opacity-90" 
                  alt="Mystery Gift"
                />
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-full text-xs font-bold shadow-lg">
                  <CheckCircle size={14} />
                  SPECIAL DELIVERY
                </div>
              </motion.div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-pink-500 text-white rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
                <PartyPopper size={24} />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
                Let's have a look <br/> 👀👀
              </h2>
              <p className="text-gray-500 font-medium">Click only if you're ready for the magic!</p>
            </div>

            <Button 
              size="lg" 
              onClick={onReveal} 
              className="w-full rounded-2xl py-8 text-xl flex items-center gap-3 animate-bounce shadow-2xl shadow-pink-300"
            >
              <Lock size={24} />
              REVEAL THE SURPRISE
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
