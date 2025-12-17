export const SUPPORTED_LOCALES = ['en_US', 'sr_RS'] as const;
export type LocaleCode = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: LocaleCode = 'en_US';

export function isSupportedLocale(value: unknown): value is LocaleCode {
  return typeof value === 'string' && (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export function normalizeLocale(value: unknown, fallback: LocaleCode = DEFAULT_LOCALE): LocaleCode {
  return isSupportedLocale(value) ? value : fallback;
}
