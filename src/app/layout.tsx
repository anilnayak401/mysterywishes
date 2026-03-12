import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mystery Wishes | Create Digital Surprises",
  description: "Create a personalized mystery celebration link that reveals a surprise message, animations, and a video.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased font-outfit`}
      >
        <main className="min-h-screen bg-[#FAFAFB] max-w-md mx-auto shadow-2xl relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
