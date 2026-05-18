'use client';

import { useTranslations } from 'next-intl';

/* ── SENTINEL HUB — first-time info modal ── */
export function SentinelInfoModal({ onClose }: { onClose: () => void }) {
  const t = useTranslations('sentinel_modal');
  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/90"
        onClick={onClose}
      />
      <div className="relative z-[10001] w-[520px] max-h-[80vh] bg-[var(--bg-secondary)] border border-purple-500/30 shadow-2xl shadow-purple-900/20 overflow-y-auto styled-scrollbar">
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold tracking-wider text-purple-300 font-mono">
              {t('title')}
            </h2>
            <button
              onClick={onClose}
              className="text-[var(--text-muted)] hover:text-white transition-colors text-xl leading-none"
            >
              &times;
            </button>
          </div>

          <p className="text-[11px] text-[var(--text-secondary)] font-mono leading-relaxed">
            {t('intro')}
          </p>

          <div className="space-y-2">
            <h3 className="text-[10px] font-mono text-purple-400 tracking-widest">{t('available_layers')}</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: t('true_color'), desc: t('true_color_desc') },
                { name: t('false_color_ir'), desc: t('false_color_ir_desc') },
                { name: t('ndvi'), desc: t('ndvi_desc') },
                { name: t('moisture_index'), desc: t('moisture_index_desc') },
              ].map((l) => (
                <div key={l.name} className="p-2 border border-purple-900/30 bg-purple-950/10">
                  <div className="text-[10px] font-mono text-white">{l.name}</div>
                  <div className="text-[9px] text-[var(--text-muted)]">{l.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-[10px] font-mono text-purple-400 tracking-widest">{t('usage_limits')}</h3>
            <div className="p-3 border border-[var(--border-primary)] bg-[var(--bg-primary)]/40 space-y-1.5">
              <div className="flex justify-between text-[10px] font-mono">
                <span className="text-[var(--text-muted)]">{t('monthly_budget')}</span>
                <span className="text-purple-300">{t('monthly_budget_val')}</span>
              </div>
              <div className="flex justify-between text-[10px] font-mono">
                <span className="text-[var(--text-muted)]">{t('cost_per_tile')}</span>
                <span className="text-purple-300">{t('cost_per_tile_val')}</span>
              </div>
              <div className="flex justify-between text-[10px] font-mono">
                <span className="text-[var(--text-muted)]">{t('viewport_loads')}</span>
                <span className="text-purple-300">{t('viewport_loads_val')}</span>
              </div>
              <div className="flex justify-between text-[10px] font-mono">
                <span className="text-[var(--text-muted)]">{t('empty_tiles')}</span>
                <span className="text-green-400">{t('empty_tiles_val')}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-[10px] font-mono text-purple-400 tracking-widest">{t('how_it_works')}</h3>
            <ul className="text-[10px] text-[var(--text-secondary)] font-mono leading-relaxed space-y-1 list-disc list-inside">
              <li>{t('how_it_works_1')}</li>
              <li>{t('how_it_works_2')}</li>
              <li>{t('how_it_works_3')}</li>
              <li>{t('how_it_works_4')}</li>
              <li>{t('how_it_works_5')}</li>
            </ul>
          </div>

          <button
            onClick={onClose}
            className="w-full py-2.5 bg-purple-500/20 border border-purple-500/40 text-purple-300 hover:bg-purple-500/30 transition-colors text-[11px] font-mono tracking-wider"
          >
            {t('got_it')}
          </button>
        </div>
      </div>
    </div>
  );
}
