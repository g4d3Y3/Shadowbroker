'use client';

import { useLocaleCtx } from '@/lib/LocaleContext';
import { Languages } from 'lucide-react';

export default function LanguageSwitcher({ slim = false }: { slim?: boolean }) {
  const { locale, setLocale } = useLocaleCtx();

  return (
    <button
      onClick={() => setLocale(locale === 'en' ? 'zh-CN' : 'en')}
      className={slim
        ? "px-2 py-1 text-xs rounded hover:bg-[var(--bg-tertiary)] transition-colors flex items-center gap-1"
        : "px-3 py-1.5 text-sm rounded hover:bg-[var(--bg-tertiary)] transition-colors flex items-center gap-2"
      }
      title={locale === 'en' ? 'Switch to Chinese (中文)' : '切换到英文 (English)'}
    >
      <Languages size={slim ? 12 : 14} />
      <span>{locale === 'en' ? '中文' : 'EN'}</span>
    </button>
  );
}
