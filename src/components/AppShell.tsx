'use client';

import * as React from 'react';
import AppSidebar from '@/components/AppSidebar';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppNavbar from '@/components/AppNavbar';
import { I18nProvider } from '@/i18n/i18n';

export default function AppShell({
  children,
  defaultOpen,
  initialLocale,
}: {
  children: React.ReactNode;
  defaultOpen: boolean;
  initialLocale: 'en_US' | 'sr_RS';
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <I18nProvider initialLocale={initialLocale}>
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          <main className="w-full">
            <AppNavbar />
            <div className="flex-1">{children}</div>
          </main>
        </SidebarProvider>
      </I18nProvider>
    </ThemeProvider>
  );
}
