import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, recipient_name, sender_name, wish_type, custom_message, youtube_url, video_upload_url } = body;

    const { data, error } = await supabase
      .from('wishes')
      .insert({ 
        id, 
        recipient_name, 
        sender_name, 
        wish_type, 
        custom_message, 
        youtube_url, 
        video_upload_url 
      })
      .select();

    console.log('[DEBUG] Insert Attempt ID:', id);
    console.log('[DEBUG] Insert Response:', { data, error });

    if (error) {
      console.error('[Supabase Error]:', error.message, error.details, error.hint);
      return NextResponse.json({ 
        error: error.message,
        details: error.details,
        hint: error.hint 
      }, { status: 500 });
    }

    console.log('[Success]: Wish created successfully with ID:', id);
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('[API Catch Error]:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
