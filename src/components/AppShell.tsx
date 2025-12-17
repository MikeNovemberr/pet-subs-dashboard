'use client';

import * as React from 'react';
import AppSidebar from '@/components/AppSidebar';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppNavbar from '@/components/AppNavbar';

export default function AppShell({ children, defaultOpen }: { children: React.ReactNode; defaultOpen: boolean }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <main className="w-full">
          <AppNavbar />
          <div className="flex-1">{children}</div>
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
}
