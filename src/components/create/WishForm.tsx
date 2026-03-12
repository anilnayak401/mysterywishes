"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { WISH_TYPES } from '@/types/wish';
import { Button } from '@/components/ui/button';
import { Sparkles, Video, Youtube, Upload, ArrowLeft, Loader2 } from 'lucide-react';
import { generateId } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import ShareModal from '@/components/share/ShareModal';

export default function WishForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [videoOption, setVideoOption] = useState<'youtube' | 'upload' | null>(null);
  const [createdWishId, setCreatedWishId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    recipient_name: '',
    sender_name: '',
    wish_type: 'Happy Birthday',
    custom_message: '',
    youtube_url: '',
    video_file: null as File | null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let video_upload_url = '';

      // 1. Handle Video Upload if needed
      if (videoOption === 'upload' && formData.video_file) {
        const uploadFormData = new FormData();
        uploadFormData.append('file', formData.video_file);
        
        const uploadRes = await fetch('/api/upload-video', {
          method: 'POST',
          body: uploadFormData,
        });
        const uploadData = await uploadRes.json();
        if (uploadData.error) throw new Error(uploadData.error);
        video_upload_url = uploadData.url;
      }

      // 2. Create Wish
      const wishId = generateId();
      const res = await fetch('/api/create-wish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: wishId,
          recipient_name: formData.recipient_name,
          sender_name: formData.sender_name,
          wish_type: formData.wish_type,
          custom_message: formData.custom_message,
          youtube_url: videoOption === 'youtube' ? formData.youtube_url : '',
          video_upload_url: video_upload_url,
        }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setCreatedWishId(wishId);
    } catch (err: any) {
      alert(err.message || "Failed to create wish");
    } finally {
      setLoading(false);
    }
  };

  if (createdWishId) {
    return <ShareModal wishId={createdWishId} />;
  }

  return (
    <div className="px-6 py-6 pb-24">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => router.back()} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <h1 className="text-xl font-bold text-gray-800">Create Mystery Wish</h1>
      </div>

      <div className="bg-pink-100/50 rounded-3xl p-6 mb-8 border border-pink-200 border-dashed text-center">
        <Sparkles className="mx-auto text-pink-500 mb-2" size={32} />
        <p className="text-pink-600 font-bold">Magical Vibes Only</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">Customize Your Magic</h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">Recipient Name</label>
            <input
              required
              type="text"
              placeholder="e.g., Parul"
              className="w-full px-5 py-3.5 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400/20 transition-all shadow-sm"
              value={formData.recipient_name}
              onChange={(e) => setFormData({ ...formData, recipient_name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">Sender Name</label>
            <input
              required
              type="text"
              placeholder="e.g., Anil"
              className="w-full px-5 py-3.5 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400/20 transition-all shadow-sm"
              value={formData.sender_name}
              onChange={(e) => setFormData({ ...formData, sender_name: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 ml-1">What's the occasion?</label>
          <select
            className="w-full px-5 py-3.5 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400/20 transition-all shadow-sm appearance-none"
            value={formData.wish_type}
            onChange={(e) => setFormData({ ...formData, wish_type: e.target.value })}
          >
            {WISH_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-end ml-1">
            <label className="text-sm font-bold text-gray-700">Your Message</label>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{formData.custom_message.length}/250</span>
          </div>
          <textarea
            maxLength={250}
            placeholder="Write something magical..."
            className="w-full px-5 py-4 bg-white border border-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-pink-400/20 transition-all shadow-sm min-h-[120px]"
            value={formData.custom_message}
            onChange={(e) => setFormData({ ...formData, custom_message: e.target.value })}
          />
        </div>

        <div className="p-6 bg-white rounded-[2rem] border border-gray-100 shadow-sm space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Video className="text-pink-500" size={20} />
            <h3 className="font-bold text-gray-800">Add a Video Wish</h3>
          </div>

          {!videoOption ? (
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setVideoOption('youtube')}
                className="flex flex-col items-center justify-center p-4 rounded-2xl border-2 border-dashed border-gray-100 hover:border-pink-200 bg-gray-50/30 transition-all gap-2"
              >
                <Youtube className="text-red-500" size={24} />
                <span className="text-xs font-bold text-gray-600">YouTube Link</span>
              </button>
              <button
                type="button"
                onClick={() => setVideoOption('upload')}
                className="flex flex-col items-center justify-center p-4 rounded-2xl border-2 border-dashed border-gray-100 hover:border-pink-200 bg-gray-50/30 transition-all gap-2"
              >
                <Upload className="text-blue-500" size={24} />
                <span className="text-xs font-bold text-gray-600">Upload Video</span>
              </button>
            </div>
          ) : (
            <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
              {videoOption === 'youtube' ? (
                <div className="relative">
                  <input
                    type="url"
                    placeholder="Paste YouTube or Vimeo URL"
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400/20 transition-all"
                    value={formData.youtube_url}
                    onChange={(e) => setFormData({ ...formData, youtube_url: e.target.value })}
                  />
                  <button 
                    type="button" 
                    onClick={() => setVideoOption(null)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-pink-500 uppercase"
                  >
                    Change
                  </button>
                </div>
              ) : (
                <div className="relative">
                  <label className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed border-pink-200 bg-pink-50/30 cursor-pointer">
                    <Upload className="text-pink-500 mb-2" size={24} />
                    <span className="text-xs font-bold text-pink-600">
                      {formData.video_file ? formData.video_file.name : 'Click to upload video file'}
                    </span>
                    <input
                      type="file"
                      accept="video/*"
                      className="hidden"
                      onChange={(e) => setFormData({ ...formData, video_file: e.target.files?.[0] || null })}
                    />
                  </label>
                  <button 
                    type="button" 
                    onClick={() => setVideoOption(null)}
                    className="absolute right-0 -top-6 text-[10px] font-bold text-pink-500 uppercase"
                  >
                    Change
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <Button 
          type="submit" 
          disabled={loading} 
          className="w-full py-5 rounded-3xl text-lg flex items-center gap-2 group"
        >
          {loading ? (
            <Loader2 className="animate-spin" size={24} />
          ) : (
            <>
              Create Magical Wish
              <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
