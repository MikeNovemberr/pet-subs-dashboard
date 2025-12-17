import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pet Subs App',
  description: 'Veterinary Clinic Management',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* 1. Apply the font to the body */}
      <body className={inter.className}>
        {/* 2. Render whatever page we are on (Login OR Dashboard) */}
        {children}

        {/* 3. Global overlays (like Toasts) will live here later */}
        {/* <Toaster /> */}
      </body>
    </html>
  );
}
