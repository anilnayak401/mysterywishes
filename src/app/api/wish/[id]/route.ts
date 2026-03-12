import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // Sync params for Next.js build compatibility
  try {
    const id = params.id;

    if (!id) {
      return NextResponse.json({ error: 'Missing wish ID' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('wishes')
      .select('*')
      .eq('id', id)
      .single();

    console.log('[DEBUG] Fetch Attempt ID:', id);
    console.log('[DEBUG] Fetch Response:', { data, error });

    if (error) {
      console.error('[Supabase Fetch Error]:', error.message, error.details, error.hint);
      return NextResponse.json({ 
        error: error.message,
        details: error.details,
        hint: error.hint 
      }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error('[API GET Catch Error]:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
