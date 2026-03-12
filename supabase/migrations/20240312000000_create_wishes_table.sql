-- Migration: Create wishes table
-- Create table if not exists with provided schema

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

-- Enable Row Level Security (RLS)
alter table wishes enable row level security;

-- Set up policies for public access (Anon key)
create policy "Allow internal/public insertion" on wishes for insert with check (true);
create policy "Allow public reading by id" on wishes for select using (true);
