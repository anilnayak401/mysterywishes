# Mystery Wishes 🎁

[**Live Application Link**](https://mysterywishes.app)

A mobile-first web application that allows users to create personalized mystery celebration links.

## Features
- ✨ **Create Mystery Wishes**: Customize names, occasion, and message.
- 🎥 **Video Integration**: Support for YouTube links or direct video uploads to Supabase.
- 🔗 **Smart Sharing**: Generate unique links, QR codes, and quick-share to WhatsApp, Instagram, etc.
- 🎭 **Experience Flow**: A 3-step suspense reveal for recipients.
- 🎉 **Celebration Effects**: High-quality confetti and fireworks animations.

## Getting Started

### Prerequisites
- Node.js installed
- Supabase account (configured in `.env.local`)

### Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your Supabase database using `supabase_schema.sql`.
4. Create a public bucket in Supabase named `wish-videos`.

### Run Locally
```bash
npm run dev
```

## Project Structure
- `src/app`: Next.js pages and API routes.
- `src/components`: UI components organized by domain.
- `src/lib`: Utilities and client initializations.
- `src/types`: TypeScript interfaces.
- `src/types/wish.ts`: Shared data structures.

## UI Inspiration
The app follows a playful, "bubbly" aesthetic with soft pinks, purples, and rounded UI elements to evoke joy and celebration.
