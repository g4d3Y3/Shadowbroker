'use client';

import React from 'react';
import { ChevronLeft, Vote } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function BallotView({ onBack }: { onBack: () => void }) {
  const t = useTranslations('infonet');
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <div className="border-b border-gray-800 pb-4 mb-4 shrink-0">
        <div className="flex justify-between items-start mb-4">
          <button
            onClick={onBack}
            className="flex items-center text-cyan-500 hover:text-cyan-400 transition-all uppercase text-xs tracking-widest border border-cyan-900/50 px-3 py-1 bg-cyan-900/10 hover:bg-cyan-900/30 hover:border-cyan-500/50"
          >
            <ChevronLeft size={14} className="mr-1" />
            {t('return_to_main')}
          </button>
        </div>
        <h1 className="text-2xl font-bold text-cyan-400 uppercase tracking-widest flex items-center">
          <Vote className="mr-2 text-cyan-400" />
          {t('open_ballot')}
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          {t('ballot_not_live')}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 pb-4">
        <div className="border border-gray-800 bg-gray-900/10 p-6 md:p-8">
          <div className="border border-cyan-900/40 bg-cyan-950/10 px-6 py-10 text-center">
            <div className="text-3xl md:text-5xl font-bold tracking-[0.34em] text-cyan-300">
              {t('democracy_soon')}
            </div>
            <p className="mt-5 text-sm text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('ballot_description')}
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="border border-gray-800 bg-black/20 p-4">
              <div className="text-sm text-cyan-400 uppercase tracking-[0.22em]">
                {t('principle')}
              </div>
              <div className="mt-2 text-sm text-gray-300 leading-relaxed">
                Governance should be real, verifiable, and community-shaped before it appears in the shell.
              </div>
            </div>
            <div className="border border-gray-800 bg-black/20 p-4">
              <div className="text-sm text-cyan-400 uppercase tracking-[0.22em]">
                {t('current_stance')}
              </div>
              <div className="mt-2 text-sm text-gray-300 leading-relaxed">
                No timeline, no fake proposals, and no synthetic vote counts are being presented in this build.
              </div>
            </div>
            <div className="border border-gray-800 bg-black/20 p-4">
              <div className="text-sm text-cyan-400 uppercase tracking-[0.22em]">
                {t('testnet_focus')}
              </div>
              <div className="mt-2 text-sm text-gray-300 leading-relaxed">
                The priority right now is privacy posture, working nodes, real gates, and stable communication.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
