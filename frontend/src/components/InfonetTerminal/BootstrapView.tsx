'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronLeft, Cpu, Loader, AlertCircle, CheckCircle2, XCircle, Server } from 'lucide-react';
import {
  buildBootstrapResolutionVotePayload,
  fetchBootstrapMarketState,
  fetchInfonetStatus,
  type BootstrapMarketState,
  type InfonetStatus,
} from '@/mesh/infonetEconomyClient';
import { generateNodeKeys, getNodeIdentity } from '@/mesh/meshIdentity';
import {
  fetchInfonetNodeStatusSnapshot,
  setInfonetNodeEnabled,
  type InfonetNodeStatusSnapshot,
} from '@/mesh/controlPlaneStatusClient';
import { useSignAndAppend } from '@/hooks/useSignAndAppend';

interface BootstrapViewProps {
  marketId?: string;
  onBack: () => void;
}

export default function BootstrapView({ marketId, onBack }: BootstrapViewProps) {
  const t = useTranslations('infonet');
  const [status, setStatus] = useState<InfonetStatus | null>(null);
  const [market, setMarket] = useState<BootstrapMarketState | null>(null);
  const [nodeStatus, setNodeStatus] = useState<InfonetNodeStatusSnapshot | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nodeToggleBusy, setNodeToggleBusy] = useState(false);
  const [nodeToggleError, setNodeToggleError] = useState<string | null>(null);
  const [voteSide, setVoteSide] = useState<'yes' | 'no'>('yes');
  const [powNonce, setPowNonce] = useState('0');
  const voteAction = useSignAndAppend();

  const reload = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [s, m, n] = await Promise.all([
        fetchInfonetStatus(),
        marketId ? fetchBootstrapMarketState(marketId).catch(() => null) : Promise.resolve(null),
        fetchInfonetNodeStatusSnapshot(true).catch(() => null),
      ]);
      setStatus(s);
      setMarket(m);
      setNodeStatus(n);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'network error');
    } finally {
      setLoading(false);
    }
  }, [marketId]);

  const nodeEnabled = Boolean(nodeStatus?.node_enabled);
  const nodeMode = String(nodeStatus?.node_mode || 'participant').toUpperCase();
  const syncOutcome = String(nodeStatus?.sync_runtime?.last_outcome || 'idle').toLowerCase();
  const seedPeerCount = Number(
    nodeStatus?.bootstrap?.bootstrap_seed_peer_count ?? nodeStatus?.bootstrap?.default_sync_peer_count ?? 0,
  );
  const syncPeerCount = Number(nodeStatus?.bootstrap?.sync_peer_count || 0);
  const lastPeerUrl = String(nodeStatus?.sync_runtime?.last_peer_url || '').trim();
  const privateTransportRequired = Boolean(nodeStatus?.private_transport_required);

  const toggleNode = useCallback(async (enabled: boolean) => {
    setNodeToggleBusy(true);
    setNodeToggleError(null);
    try {
      if (enabled && !getNodeIdentity()) {
        await generateNodeKeys();
      }
      await setInfonetNodeEnabled(enabled);
      const next = await fetchInfonetNodeStatusSnapshot(true);
      setNodeStatus(next);
    } catch (err) {
      setNodeToggleError(err instanceof Error ? err.message : 'node settings update failed');
    } finally {
      setNodeToggleBusy(false);
    }
  }, []);

  const hasActivePhase = !!market && market.tally.total_eligible >= 0
    && market.tally.yes + market.tally.no < market.tally.total_eligible;

  useEffect(() => {
    void reload();
    const interval = setInterval(() => void reload(), hasActivePhase ? 8_000 : 30_000);
    return () => clearInterval(interval);
  }, [reload, hasActivePhase]);

  const submitVote = useCallback(async () => {
    if (!marketId) return;
    const nonce = Number(powNonce);
    if (!Number.isFinite(nonce) || nonce < 0) return;
    const built = buildBootstrapResolutionVotePayload(marketId, voteSide, Math.floor(nonce));
    const res = await voteAction.submit(built.event_type, built.payload);
    if (res.ok) {
      void reload();
    }
  }, [marketId, voteSide, powNonce, voteAction, reload]);

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="flex items-center justify-between border-b border-gray-800/50 pb-3 mb-4 shrink-0">
        <button onClick={onBack} className="flex items-center text-cyan-400 hover:text-cyan-300 text-sm">
          <ChevronLeft size={14} className="mr-1" /> {t('bootstrap_back')}
        </button>
        <div className="text-sm text-cyan-400 font-bold uppercase tracking-widest flex items-center gap-2">
          <Cpu size={16} /> {t('bootstrap_title')}
        </div>
        <button onClick={() => void reload()} disabled={loading} className="text-xs text-gray-500 hover:text-cyan-400 disabled:opacity-30">
          {loading ? <Loader size={12} className="animate-spin" /> : t('bootstrap_refresh')}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pr-3 space-y-4">
        <div className="text-xs text-gray-500 leading-relaxed">
          {t('bootstrap_desc_intro')}{' '}
          <span className="text-cyan-400">{t('bootstrap_market_count')}</span>{' '}
          {t('bootstrap_markets_resolve')}{' '}
          <span className="text-cyan-400">{t('bootstrap_eligible_vote')}</span>{' '}
          {t('bootstrap_instead_of')}{' '}
          <span className="text-cyan-400">{t('bootstrap_threshold')}</span>{' '}
          {t('bootstrap_threshold_desc')}
        </div>

        {error && (
          <div className="border border-red-900/50 bg-red-900/10 p-3 text-xs text-red-400">
            <AlertCircle size={12} className="inline mr-1" />{error}
          </div>
        )}

        <div className="border border-cyan-900/50 bg-cyan-950/10 p-3">
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <Server size={14} /> {t('bootstrap_network_seed')}
            </div>
            <button
              type="button"
              onClick={() => void reload()}
              disabled={loading}
              className="text-[10px] text-gray-500 hover:text-cyan-400 disabled:opacity-30 uppercase tracking-widest"
            >
              {t('bootstrap_refresh_btn')}
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
            <div>
              <div className="text-gray-500">{t('bootstrap_transport')}</div>
              <div className="text-cyan-300 font-mono break-all">
                {privateTransportRequired ? t('bootstrap_onion_rns') : t('bootstrap_clearnet_dev')}
              </div>
            </div>
            <div>
              <div className="text-gray-500">{t('bootstrap_local_node')}</div>
              <div className={nodeEnabled ? 'text-green-400' : 'text-gray-500'}>
                {nodeEnabled ? t('bootstrap_node_online', { mode: nodeMode }) : t('bootstrap_node_offline', { mode: nodeMode })}
              </div>
            </div>
            <div>
              <div className="text-gray-500">{t('bootstrap_sync_path')}</div>
              <div className="text-white font-mono">
                {t('bootstrap_peers_seeds', { peers: syncPeerCount, seeds: seedPeerCount })}
              </div>
            </div>
          </div>
          <div className="mt-3 flex flex-col md:flex-row md:items-center gap-3">
            <div className="flex-1 text-[11px] text-gray-500 leading-relaxed">
              {nodeEnabled
                ? t('bootstrap_sync_active', { outcome: syncOutcome || 'active', url: lastPeerUrl ? ` via ${lastPeerUrl}` : '' })
                : t('bootstrap_node_off')}
            </div>
            <button
              type="button"
              onClick={() => void toggleNode(!nodeEnabled)}
              disabled={nodeToggleBusy}
              className={
                nodeEnabled
                  ? 'px-3 py-2 border border-rose-700/50 bg-rose-950/20 text-rose-300 hover:bg-rose-950/35 disabled:opacity-40 text-[10px] uppercase tracking-wider'
                  : 'px-3 py-2 border border-cyan-700/50 bg-cyan-900/20 text-cyan-300 hover:bg-cyan-900/40 disabled:opacity-40 text-[10px] uppercase tracking-wider'
              }
            >
              {nodeToggleBusy ? t('bootstrap_updating') : nodeEnabled ? t('bootstrap_turn_off_node') : t('bootstrap_start_node')}
            </button>
          </div>
          {nodeToggleError && (
            <div className="mt-3 border border-amber-900/50 bg-amber-950/20 p-2 text-[11px] text-amber-300">
              <AlertCircle size={11} className="inline mr-1" />{nodeToggleError}
            </div>
          )}
        </div>

        {status && (
          <div className="border border-gray-800 bg-black/40 p-3">
            <div className="text-xs uppercase tracking-wider text-cyan-400 mb-2">{t('bootstrap_network_ramp')}</div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
              <div>
                <div className="text-gray-500">{t('bootstrap_distinct_nodes')}</div>
                <div className="text-white font-mono text-lg">{status.ramp.node_count}</div>
              </div>
              <div>
                <div className="text-gray-500">{t('bootstrap_bootstrap_resolution')}</div>
                <div className={status.ramp.bootstrap_resolution_active ? 'text-green-400' : 'text-gray-500'}>
                  {status.ramp.bootstrap_resolution_active ? t('bootstrap_active') : t('bootstrap_transitioned')}
                </div>
              </div>
              <div>
                <div className="text-gray-500">{t('bootstrap_staked_resolution')}</div>
                <div className={status.ramp.staked_resolution_active ? 'text-green-400' : 'text-gray-500'}>
                  {status.ramp.staked_resolution_active ? t('bootstrap_active') : t('bootstrap_locked')}
                </div>
              </div>
              <div>
                <div className="text-gray-500">{t('bootstrap_petitions')}</div>
                <div className={status.ramp.governance_petitions_active ? 'text-green-400' : 'text-gray-500'}>
                  {status.ramp.governance_petitions_active ? t('bootstrap_active') : t('bootstrap_locked')}
                </div>
              </div>
              <div>
                <div className="text-gray-500">{t('bootstrap_upgrade_governance')}</div>
                <div className={status.ramp.upgrade_governance_active ? 'text-green-400' : 'text-gray-500'}>
                  {status.ramp.upgrade_governance_active ? t('bootstrap_active') : t('bootstrap_locked')}
                </div>
              </div>
              <div>
                <div className="text-gray-500">{t('bootstrap_commoncoin')}</div>
                <div className={status.ramp.commoncoin_active ? 'text-green-400' : 'text-gray-500'}>
                  {status.ramp.commoncoin_active ? t('bootstrap_active') : t('bootstrap_locked')}
                </div>
              </div>
            </div>
          </div>
        )}

        {market && (
          <div className="border border-gray-800 bg-black/40 p-3">
            <div className="text-xs uppercase tracking-wider text-cyan-400 mb-2">
              {t('bootstrap_market_label', { id: market.market_id })}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs mb-3">
              <div>
                <div className="text-gray-500">{t('bootstrap_yes_votes')}</div>
                <div className="text-green-400 font-mono text-lg">{market.tally.yes}</div>
              </div>
              <div>
                <div className="text-gray-500">{t('bootstrap_no_votes')}</div>
                <div className="text-red-400 font-mono text-lg">{market.tally.no}</div>
              </div>
              <div>
                <div className="text-gray-500">{t('bootstrap_total_eligible')}</div>
                <div className="text-white font-mono text-lg">{market.tally.total_eligible}</div>
              </div>
              <div>
                <div className="text-gray-500">{t('bootstrap_min_required')}</div>
                <div className="text-gray-300 font-mono text-lg">{market.tally.min_market_participants}</div>
              </div>
            </div>

            <div className="border border-cyan-900/50 bg-cyan-900/10 p-2 mb-3 text-xs">
              <div className="text-cyan-400 font-bold uppercase tracking-wider mb-2">
                {t('bootstrap_cast_vote')}
              </div>
              <div className="text-gray-500 mb-2">
                {t('bootstrap_eligibility_info')}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <select
                  value={voteSide}
                  onChange={(e) => setVoteSide(e.target.value as 'yes' | 'no')}
                  title={t('bootstrap_vote_side')}
                  aria-label={t('bootstrap_vote_side')}
                  className="bg-black/60 border border-gray-700 px-2 py-1 text-white font-mono"
                >
                  <option value="yes">{t('bootstrap_vote_yes')}</option>
                  <option value="no">{t('bootstrap_vote_no')}</option>
                </select>
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={powNonce}
                  onChange={(e) => setPowNonce(e.target.value)}
                  placeholder={t('bootstrap_pow_nonce_placeholder')}
                  className="bg-black/60 border border-gray-700 px-2 py-1 text-white font-mono w-32"
                />
                <button
                  type="button"
                  onClick={submitVote}
                  disabled={voteAction.state === 'submitting' || !marketId}
                  className="px-3 py-1 uppercase tracking-wider border border-cyan-700/50 bg-cyan-900/20 text-cyan-400 hover:bg-cyan-900/40 disabled:opacity-30"
                >
                  {voteAction.state === 'submitting' ? t('bootstrap_submitting') : t('bootstrap_cast_vote_button')}
                </button>
              </div>
              {voteAction.result && !voteAction.result.ok && (
                <div className="text-red-400 font-mono mt-2 break-all">
                  <AlertCircle size={10} className="inline mr-1" />
                  {voteAction.result.reason}
                </div>
              )}
            </div>

            <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">{t('bootstrap_all_submitted_votes')}</div>
            <div className="space-y-1 max-h-64 overflow-y-auto">
              {market.votes.map((v) => (
                <div key={v.node_id} className="flex items-center justify-between gap-2 text-xs border-b border-gray-800/30 py-1">
                  <span className="font-mono text-gray-400 truncate flex-1">{v.node_id.slice(0, 16)}…</span>
                  <span className={v.side === 'yes' ? 'text-green-400' : 'text-red-400'}>{v.side?.toUpperCase()}</span>
                  <span className="w-20 text-right">
                    {v.eligible ? (
                      <CheckCircle2 size={12} className="text-green-400 inline" />
                    ) : (
                      <span className="text-amber-400 flex items-center justify-end gap-1">
                        <XCircle size={12} />
                        <span className="text-xs">{v.ineligible_reason}</span>
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {!marketId && (
          <div className="border border-gray-800 bg-black/40 p-6 text-center text-xs text-gray-500">
            {t('bootstrap_select_market_hint')}
          </div>
        )}
      </div>
    </div>
  );
}
