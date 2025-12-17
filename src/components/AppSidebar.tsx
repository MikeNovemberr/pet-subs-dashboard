'use client';

import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar';
import { MainMenuGroup } from '@/components/AppSidebarMenu';

const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Inbox',
    url: '#',
    icon: Inbox,
  },
  {
    title: 'Calendar',
    url: '#',
    icon: Calendar,
  },
  {
    title: 'Search',
    url: '#',
    icon: Search,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
];

export default function AppSidebar() {
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader />
      <SidebarContent>
        <MainMenuGroup label="Dashboard" items={items} />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
