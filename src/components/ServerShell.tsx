import { cookies } from 'next/headers';
import AppShell from '@/components/AppShell';
import { DEFAULT_LOCALE, normalizeLocale, type LocaleCode } from '@/i18n/shared';

export default async function ServerShell({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();

  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';
  const initialLocale: LocaleCode = normalizeLocale(cookieStore.get('locale')?.value, DEFAULT_LOCALE);

  return (
    <AppShell defaultOpen={defaultOpen} initialLocale={initialLocale}>
      {children}
    </AppShell>
  );
}
