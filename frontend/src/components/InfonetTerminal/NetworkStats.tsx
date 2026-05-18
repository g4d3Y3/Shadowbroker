'use client';

import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { API_BASE } from '@/lib/api';
import { fetchInfonetNodeStatusSnapshot } from '@/mesh/controlPlaneStatusClient';

interface Stats {
  meshtastic: number;
  aprs: number;
  infonetNodes: number;
  infonetEvents: number;
  syncPeers: number;
  nodeEnabled: boolean;
  syncOutcome: string;
}

const EMPTY: Stats = {
  meshtastic: 0, aprs: 0, infonetNodes: 0, infonetEvents: 0,
  syncPeers: 0, nodeEnabled: false, syncOutcome: 'offline',
};

export default function NetworkStats() {
  const t = useTranslations('infonet');
  const [stats, setStats] = useState<Stats>(EMPTY);

  useEffect(() => {
    let alive = true;
    const poll = async () => {
      try {
        const [meshRes, channelsRes, infonet] = await Promise.all([
          fetch(`${API_BASE}/api/mesh/status`).then(r => r.ok ? r.json() : null).catch(() => null),
          fetch(`${API_BASE}/api/mesh/channels`).then(r => r.ok ? r.json() : null).catch(() => null),
          fetchInfonetNodeStatusSnapshot(true).catch(() => null),
        ]);
        if (!alive) return;
        const knownNodes = Number(infonet?.known_nodes || 0);
        const syncPeerCount = Number(infonet?.bootstrap?.sync_peer_count || 0);
        const defaultSyncPeerCount = Number(infonet?.bootstrap?.default_sync_peer_count || 0);
        const lastPeerUrl = String(infonet?.sync_runtime?.last_peer_url || '').trim();
        const visibleInfonetNodes = Math.max(
          knownNodes,
          syncPeerCount,
          defaultSyncPeerCount,
          lastPeerUrl ? 1 : 0,
        );
        setStats({
          meshtastic: Number(channelsRes?.total_live || channelsRes?.total_nodes || meshRes?.signal_counts?.meshtastic || 0),
          aprs: Number(meshRes?.signal_counts?.aprs || 0),
          infonetNodes: visibleInfonetNodes,
          infonetEvents: Number(infonet?.total_events || 0),
          syncPeers: syncPeerCount,
          nodeEnabled: Boolean(infonet?.node_enabled),
          syncOutcome: String(infonet?.sync_runtime?.last_outcome || 'offline').toLowerCase(),
        });
      } catch { /* ignore */ }
    };
    poll();
    const interval = setInterval(poll, 15000);
    return () => { alive = false; clearInterval(interval); };
  }, []);

  const nodeColor = stats.syncOutcome === 'ok' ? 'text-green-400'
    : stats.syncOutcome === 'running' ? 'text-amber-400'
    : stats.nodeEnabled ? 'text-amber-400' : 'text-gray-600';
  const nodeLabel = t(stats.syncOutcome === 'ok' ? 'stats_seed_synced'
    : stats.syncOutcome === 'running' ? 'stats_syncing'
    : stats.syncOutcome === 'error' || stats.syncOutcome === 'fork' ? 'stats_retrying'
    : stats.nodeEnabled ? 'stats_waiting' : 'stats_offline');

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 mt-5 text-sm font-mono text-gray-500">
      <span>{t('stats_node')} <span className={nodeColor}>{nodeLabel}</span></span>
      <span className="text-gray-700">|</span>
      <span>{t('stats_mesh')} <span className={stats.meshtastic > 0 ? 'text-green-400' : 'text-gray-600'}>{stats.meshtastic.toLocaleString()}</span></span>
      <span className="text-gray-700">|</span>
      <span>{t('stats_aprs')} <span className={stats.aprs > 0 ? 'text-green-400' : 'text-gray-600'}>{stats.aprs.toLocaleString()}</span></span>
      <span className="text-gray-700">|</span>
      <span>{t('stats_infonet_nodes')} <span className="text-white">{stats.infonetNodes}</span></span>
      <span className="text-gray-700">|</span>
      <span>{t('stats_events')} <span className="text-white">{stats.infonetEvents}</span></span>
      <span className="text-gray-700">|</span>
      <span>{t('stats_peers')} <span className="text-white">{stats.syncPeers}</span></span>
    </div>
  );
}
