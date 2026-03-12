/**
 * MYSTERY WISHES - FRONTEND CODE OVERVIEW
 * This file lists the primary UI components and page logic.
 * Original files located in src/app/ and src/components/...
 */

// --- 1. Main Landing Page ---
// File: src/app/page.tsx
// Components: Hero, HowItWorks, Inspirations

// --- 2. Create Wish Page ---
// File: src/app/create/page.tsx
// Component: WishForm (Handles user input and API submission)

// --- 3. Mystery Reveal Page ---
// File: src/app/w/[id]/page.tsx
// Components: 
// - MysteryReveal (3-step suspense flow: Notification -> Identity Check -> Anticipation)
// - Celebration (Final screen: Confetti, Fireworks, Video Embed, Message)

// --- 4. Shared UI Components ---
// Located in src/components/ui/
// - Button.tsx (Brand themed rounded buttons)
// - BottomTab.tsx (Mobile navigation)
// - Navbar.tsx (Top branding)

// --- 5. Logic Utilities ---
// File: src/lib/utils.ts
// - cn() (Tailwind class merging)
// - generateId() (6-character unique ID generation)
