'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SidebarMenuButton, useSidebar } from '@/components/ui/sidebar';
import { useI18n } from '@/i18n/i18n';

export function SidebarLogoButton() {
  const { translate } = useI18n();
  return (
    <SidebarMenuButton asChild className="h-14 justify-start! group-data-[collapsible=icon]:justify-start!">
      <Link
        href="/"
        className="flex w-full items-start justify-start gap-2 px-2 group-data-[collapsible=icon]:justify-start"
      >
        <Image src="/pet-logo-dark.svg" alt="logo" width={40} height={40} className="shrink-0" priority />

        <div className="ml-2 flex flex-col leading-tight group-data-[collapsible=icon]:hidden">
          <p className="text-left text-sm font-semibold">{translate('sidebar.brand')}</p>
          <p className="text-muted-foreground mt-1 text-left text-xs">{translate('sidebar.subtitle')}</p>
        </div>
      </Link>
    </SidebarMenuButton>
  );
}
