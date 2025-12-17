import { cookies } from 'next/headers';
import { JSX } from 'react';
import AppShell from '@/components/AppShell';

export default async function ServerShell({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies(); // ✅ your types require await
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';

  return <AppShell defaultOpen={defaultOpen}>{children}</AppShell>;
}
