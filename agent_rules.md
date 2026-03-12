# Mystery Wishes Agent Rules

This project is a mobile-first web application for creating digital surprises.

## Tech Stack
- Frontend: Next.js 15 (App Router)
- CSS: Tailwind CSS 4
- Animations: Framer Motion, Canvas Confetti, Fireworks-JS
- Backend: Next.js API Routes + Supabase
- Auth: Public access (no login required for recipients)

## Styling Guidelines
- **Color Palette**: 
  - Brand Pink: `#FF4DB8`
  - Brand Purple: `#B066FE`
  - Background: `#FAFAFB`
- **Typography**: 
  - Primary Font: `Outfit` (sans-serif)
  - Secondary Font: `Inter`
- **UI Components**: 
  - Use large rounded corners (`rounded-[2rem]` or `rounded-full`).
  - Use subtle glassmorphism (`backdrop-blur-md`).
  - Add micro-animations to all interactive elements using Framer Motion.

## Database Schema
Refer to `supabase_schema.sql` for table definitions and RLS policies.
- Table: `wishes`
- Storage Bucket: `wish-videos` (Public)

## Sharing Format
Share links follow the pattern: `mysterywishes.app/w/[wishId]`

## Recipient Experience Flow
1. **Mystery Notification**: Initial screen showing sender and recipient names.
2. **Identity Check**: Playful confirmation screen.
3. **Suspense Reveal**: Final anticipation button with gift/sparkle visuals.
4. **Celebration**: Confetti, fireworks, and the actual content (video/message).

## Development Rules
- Always use `src/lib/utils.ts` for class merging (`cn` utility).
- All new components must be responsive and mobile-first.
- Heavy animations should be optimized or lazy-loaded if possible.
