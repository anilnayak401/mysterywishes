-- Mystery Wishes Database Schema
-- Exactly as requested by user

create table if not exists wishes (
  id text primary key,
  recipient_name text,
  sender_name text,
  wish_type text,
  custom_message text,
  youtube_url text,
  video_upload_url text,
  created_at timestamp default now()
);

-- Note: Don't forget to enable RLS and add policies if using Supabase client directly
-- ALTER TABLE wishes ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Allow public inserts" ON wishes FOR INSERT WITH CHECK (true);
-- CREATE POLICY "Allow public select by id" ON wishes FOR SELECT USING (true);
