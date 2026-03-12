"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Wish } from '@/types/wish';
import { Button } from '@/components/ui/button';
import { Sparkles, Heart, Gift, Share2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Fireworks } from 'fireworks-js';
import Link from 'next/link';

export default function Celebration({ wish }: { wish: Wish }) {
  const fireworksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Trigger Confetti
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    // 2. Trigger Fireworks if container exists
    if (fireworksRef.current) {
        const fw = new Fireworks(fireworksRef.current, {
            autoresize: true,
            opacity: 0.5,
            acceleration: 1.05,
            friction: 0.97,
            gravity: 1.5,
            particles: 50,
            traceLength: 3,
            traceSpeed: 10,
            explosion: 5,
            intensity: 30,
            flicker: true,
            lineStyle: 'round',
            hue: { min: 0, max: 360 },
            delay: { min: 30, max: 60 },
            rocketsPoint: { min: 50, max: 50 },
            lineWidth: { explosion: { min: 1, max: 3 }, trace: { min: 1, max: 2 } },
            brightness: { min: 50, max: 80 },
            decay: { min: 0.015, max: 0.03 },
            mouse: { click: false, move: false, max: 1 }
        });
        fw.start();
        return () => {
            fw.stop();
            clearInterval(interval);
        };
    }

    return () => clearInterval(interval);
  }, []);

  const getYoutubeEmbedUrl = (url?: string) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : null;
  };

  const embedUrl = getYoutubeEmbedUrl(wish.youtube_url);

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Fireworks Background */}
      <div ref={fireworksRef} className="fixed inset-0 pointer-events-none z-0"></div>

      <div className="relative z-10 px-6 py-12 flex flex-col items-center">
        {/* Title Section */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2 mb-10"
        >
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
                {wish.wish_type} <br/>
                <span className="text-pink-500 font-black">{wish.recipient_name}</span> 🎉
            </h1>
            <div className="flex justify-center gap-2">
                <Sparkles className="text-pink-400" size={24} />
                <Sparkles className="text-purple-400" size={20} />
            </div>
        </motion.div>

        {/* Video Section */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full aspect-video rounded-[2rem] bg-gray-100 shadow-2xl overflow-hidden border-4 border-white mb-10 relative group"
        >
            {wish.video_upload_url ? (
                <video 
                    src={wish.video_upload_url} 
                    controls 
                    className="w-full h-full object-cover"
                    autoPlay
                />
            ) : embedUrl ? (
                <iframe 
                    src={`${embedUrl}?autoplay=1`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100 p-8 text-center">
                    <Gift className="text-pink-500 mb-4" size={48} />
                    <p className="font-bold text-gray-600">A special miracle has arrived!</p>
                </div>
            )}
            
            <div className="absolute top-4 left-4 bg-pink-500 text-white p-2 rounded-xl shadow-lg">
               <Heart size={20} fill="currentColor" />
            </div>
        </motion.div>

        {/* Message Section */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="w-full p-8 rounded-[2.5rem] bg-pink-50/50 border border-pink-100 text-center mb-10"
        >
            <p className="text-xl font-medium text-gray-800 leading-relaxed italic">
                "{wish.custom_message || "Hope your day is filled with happiness and surprises!"}"
            </p>
            
            <div className="mt-8 pt-8 border-t border-pink-200/50">
               <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-1">From</p>
               <h3 className="text-2xl font-black text-pink-500 flex items-center justify-center gap-2">
                 {wish.sender_name} <Heart className="fill-pink-500" size={24} />
               </h3>
            </div>
        </motion.div>

        {/* Viral Growth Section */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="w-full fixed bottom-8 left-0 px-6 z-20 max-w-md mx-auto"
        >
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-2xl border border-white/50 space-y-4">
                <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Want to spread the joy?
                </p>
                <Link href="/create">
                    <Button className="w-full py-6 rounded-3xl text-lg flex items-center gap-2 justify-center shadow-lg shadow-pink-200">
                        Send a Mystery Wish to Someone
                        <ArrowRight size={20} />
                    </Button>
                </Link>
                <p className="text-center text-[10px] font-bold text-gray-400 uppercase">
                    Join 10k+ people sharing joy today ✨
                </p>
            </div>
        </motion.div>
      </div>
    </div>
  );
}
