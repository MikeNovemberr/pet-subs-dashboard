import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import ServerShell from '@/components/ServerShell';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pet Subs',
  description: 'The only pet service you need.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background min-h-svh antialiased`}>
        <ServerShell>{children}</ServerShell>
      </body>
    </html>
  );
}
