'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
} from '@/components/ui/sidebar';
import { SidebarLogoButton } from '@/components/SidebarLogo';

export type SidebarNavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

export function MainMenuGroup({ label, items }: { label: string; items: SidebarNavItem[] }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export function SidebarHeaderComp() {
  return (
    <SidebarHeader className="py-5">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarLogoButton />
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}
