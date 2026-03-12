import Navbar from "@/components/layout/Navbar";
import BottomTab from "@/components/layout/BottomTab";
import { Sparkles, MessageSquare } from 'lucide-react';

export default function MyWishes() {
  return (
    <div className="pb-24 min-h-screen">
      <Navbar />
      <div className="px-6 py-12 flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center mb-6">
            <Sparkles className="text-pink-500" size={40} />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">My Wishes</h1>
        <p className="text-gray-500 max-w-[240px]">You haven't sent any mystery wishes yet. Start spreading joy!</p>
        
        <button className="mt-8 px-8 py-4 bg-[#FF4DB8] text-white rounded-2xl font-bold shadow-lg shadow-pink-100 flex items-center gap-2">
            <MessageSquare size={20} />
            Create Your First Wish
        </button>
      </div>
      <BottomTab />
    </div>
  );
}
