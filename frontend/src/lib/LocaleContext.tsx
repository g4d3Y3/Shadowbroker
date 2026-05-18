'use client';

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import type { AbstractIntlMessages } from 'next-intl';

type Locale = 'en' | 'zh-CN';

interface LocaleContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  messages: AbstractIntlMessages | null;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  setLocale: () => {},
  messages: null,
});

export function useLocaleCtx() {
  return useContext(LocaleContext);
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [messages, setMessages] = useState<AbstractIntlMessages | null>(null);
  const [loaded, setLoaded] = useState(false);

  // Load initial locale from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('sb_locale') as Locale | null;
    if (stored === 'zh-CN' || stored === 'en') {
      setLocaleState(stored);
    }
  }, []);

  // Load messages whenever locale changes
  useEffect(() => {
    let cancelled = false;
    const loadMessages = async () => {
      try {
        const mod = locale === 'zh-CN'
          ? await import('../../messages/zh-CN.json')
          : await import('../../messages/en.json');
        if (!cancelled) {
          setMessages(mod.default as AbstractIntlMessages);
          setLoaded(true);
        }
      } catch (e) {
        console.error('Failed to load locale messages:', e);
        if (!cancelled) {
          setLoaded(true);
        }
      }
    };
    loadMessages();
    return () => { cancelled = true; };
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('sb_locale', l);
  }, []);

  if (!loaded || !messages) {
    // Render nothing until messages are loaded to avoid flash of untranslated content
    return <>{children}</>;
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, messages }}>
      <NextIntlClientProvider locale={locale === 'zh-CN' ? 'zh-CN' : 'en'} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}
