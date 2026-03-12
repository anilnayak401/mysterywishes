"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Wish } from '@/types/wish';
import MysteryReveal from '@/components/wish/MysteryReveal';
import Celebration from '@/components/wish/Celebration';
import { Loader2, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function WishPage({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
  const params = React.use(paramsPromise);
  const [wish, setWish] = useState<Wish | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const fetchWish = async () => {
      try {
        const { data, error: dbError } = await supabase
          .from("wishes")
          .select("*")
          .eq("id", params.id)
          .single();

        console.log("Fetched wish:", data);

        if (dbError) {
          console.error("Supabase error:", dbError);
          throw new Error('Mystery message not found');
        }

        if (!data) {
          throw new Error('Mystery message not found');
        }

        setWish(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWish();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <Loader2 className="animate-spin text-pink-500 mb-4" size={48} />
        <h2 className="text-xl font-bold text-gray-800">Unlocking the magic...</h2>
      </div>
    );
  }

  if (error || !wish) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <AlertCircle className="text-red-500 mb-4" size={64} />
        <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Oops!</h2>
        <p className="text-gray-500 mb-8">{error || "This mystery link seems to have expired or never existed."}</p>
        <Link href="/">
          <Button>Create Your Own Wish</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50/30">
      {!isRevealed ? (
        <MysteryReveal 
          wish={wish} 
          onReveal={() => setIsRevealed(true)} 
        />
      ) : (
        <Celebration wish={wish} />
      )}
    </div>
  );
}
