'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';
import localizationJson from './localization.json';
import { DEFAULT_LOCALE, normalizeLocale, type LocaleCode } from './shared';

type TranslationMap = Record<string, string>;
type TranslationsByLocale = Record<LocaleCode, TranslationMap>;

type I18nContextValue = {
  locale: LocaleCode;
  setLocale: (nextLocale: LocaleCode) => void;
  translate: (key: string) => string;
};

const translationsByLocale = localizationJson as unknown as TranslationsByLocale;

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children, initialLocale }: { children: React.ReactNode; initialLocale: LocaleCode }) {
  const [locale, setLocaleState] = useState<LocaleCode>(() => {
    const safeInitialLocale = normalizeLocale(initialLocale, DEFAULT_LOCALE);

    if (typeof window === 'undefined') return safeInitialLocale;

    const savedLocale = localStorage.getItem('locale');
    return normalizeLocale(savedLocale, safeInitialLocale);
  });

  const contextValue = useMemo<I18nContextValue>(() => {
    const currentTranslations = translationsByLocale[locale] ?? translationsByLocale[DEFAULT_LOCALE];
    const fallbackTranslations = translationsByLocale[DEFAULT_LOCALE];

    const setLocale = (nextLocale: LocaleCode) => {
      const safeNextLocale = normalizeLocale(nextLocale, locale);
      if (safeNextLocale === locale) return;

      setLocaleState(safeNextLocale);
      localStorage.setItem('locale', safeNextLocale);
      document.cookie = `locale=${safeNextLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
    };

    const translate = (key: string) => currentTranslations[key] ?? fallbackTranslations[key] ?? key;

    return { locale, setLocale, translate };
  }, [locale]);

  return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) throw new Error('useI18n must be used inside <I18nProvider>');
  return value;
}
