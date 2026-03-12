"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react'; // I'll use qrcode.react as it's easier for SVG
import { Copy, Check, MessageCircle, Instagram, Send, MoreHorizontal, Sparkles, PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ShareModal({ wishId }: { wishId: string }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = `${window.location.origin}/w/${wishId}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareVia = (platform: string) => {
    const text = `I sent you a mystery surprise 🎁\nOpen it here:\n${shareUrl}`;
    let url = '';
    
    switch(platform) {
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(text)}`;
        break;
      case 'telegram':
        url = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}`;
        break;
      case 'discord':
        // Discord doesn't have a direct URI scheme for text, but we can copy
        handleCopy();
        return;
    }
    
    if (url) window.open(url, '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-6 py-6 pb-24 min-h-screen bg-[#FAFAFB]"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
          <PartyPopper className="text-pink-500" size={20} />
        </div>
        <h1 className="text-xl font-bold text-gray-800">Share Mystery Wish</h1>
        <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
          <MoreHorizontal size={20} className="text-gray-400" />
        </button>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">It's Ready! 🎉</h2>
        <p className="text-gray-500 font-medium">Your mystery wish is generated and waiting.</p>
      </div>

      <div className="relative mx-auto w-full max-w-[280px] aspect-square mb-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 via-pink-400 to-pink-200 rounded-[3rem] blur-xl opacity-20"></div>
        <div className="relative bg-white rounded-[2.5rem] p-8 shadow-2xl border border-white flex flex-col items-center justify-center h-full">
           <QRCodeSVG 
            value={shareUrl} 
            size={180}
            level="H"
            includeMargin={true}
            imageSettings={{
              src: "/favicon.ico",
              x: undefined,
              y: undefined,
              height: 24,
              width: 24,
              excavate: true,
            }}
          />
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-pink-500 text-white rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
            <PartyPopper size={24} />
          </div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center shadow-lg">
            <Sparkles size={24} />
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Your Mystery Link</p>
          <div className="relative group">
            <input 
              readOnly 
              value={shareUrl}
              className="w-full pl-5 pr-24 py-5 bg-white border border-gray-100 rounded-3xl text-sm font-bold text-pink-500 truncate shadow-sm transition-all focus:ring-2 focus:ring-pink-100"
            />
            <button 
              onClick={handleCopy}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2 px-6 py-3 bg-[#FF4DB8] text-white rounded-2xl text-xs font-bold shadow-md active:scale-95 transition-all"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Quick Share</p>
          <div className="grid grid-cols-4 gap-4">
            {[
              { id: 'whatsapp', icon: <MessageCircle />, name: 'WhatsApp', color: 'bg-green-500' },
              { id: 'instagram', icon: <Instagram />, name: 'Instagram', color: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600' },
              { id: 'discord', icon: <Send />, name: 'Discord', color: 'bg-indigo-500' },
              { id: 'more', icon: <MoreHorizontal />, name: 'More', color: 'bg-gray-800' },
            ].map((platform) => (
              <div key={platform.id} className="flex flex-col items-center gap-2">
                <button 
                  onClick={() => shareVia(platform.id)}
                  className={`w-14 h-14 ${platform.color} text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-all`}
                >
                  {platform.icon}
                </button>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-pink-50 rounded-[2rem] border border-pink-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-pink-200/50 rounded-full flex items-center justify-center text-pink-500 shrink-0">
            <Sparkles size={24} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm">Mystery is On</h4>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">Your wish stays hidden until they unlock it!</p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col items-center gap-1 text-gray-400">
          <Send size={20} />
          <span className="text-[10px] font-bold">HOME</span>
        </Link>
        <Link href="/my-wishes" className="flex flex-col items-center gap-1 text-[#FF4DB8]">
          <Sparkles size={20} />
          <span className="text-[10px] font-bold">MY WISHES</span>
        </Link>
        <Link href="/settings" className="flex flex-col items-center gap-1 text-gray-400">
          <MessageCircle size={20} />
          <span className="text-[10px] font-bold">SETTINGS</span>
        </Link>
      </div>
    </motion.div>
  );
}
