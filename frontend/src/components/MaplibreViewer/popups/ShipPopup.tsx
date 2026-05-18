'use client';

import React from 'react';
import { Popup } from 'react-map-gl/maplibre';
import type { Ship } from '@/types/dashboard';
import { useTranslations } from 'next-intl';

export interface ShipPopupProps {
  ship: Ship;
  longitude: number;
  latitude: number;
  onClose: () => void;
}

export function ShipPopup({ ship, longitude, latitude, onClose }: ShipPopupProps) {
  const t = useTranslations('popups');
  return (
    <Popup
      longitude={longitude}
      latitude={latitude}
      closeButton={false}
      closeOnClick={false}
      onClose={onClose}
      anchor="bottom"
      offset={12}
    >
      <div
        className="map-popup"
        style={{
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: ship.yacht_alert
            ? 'rgba(255,105,180,0.5)'
            : ship.type === 'carrier'
              ? 'rgba(255,170,0,0.5)'
              : 'rgba(59,130,246,0.4)',
        }}
      >
        <div className="flex justify-between items-start mb-1">
          <div
            className="map-popup-title"
            style={{
              color: ship.yacht_alert
                ? '#FF69B4'
                : ship.type === 'carrier'
                  ? '#ffaa00'
                  : '#3b82f6',
            }}
          >
            {ship.name || t('unknown_vessel')}
          </div>
          <button
            onClick={onClose}
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] ml-2"
          >
            ✕
          </button>
        </div>
        {ship.estimated && (
          <div className="map-popup-subtitle text-[#ff6644] border-b border-[#ff664450] pb-1">
            {t('estimated_position', { source: ship.source || 'OSINT DERIVED' })}
          </div>
        )}
        {ship.type && (
          <div className="map-popup-row">
            {t('type')}{' '}
            <span className="text-white capitalize">{ship.type.replace('_', ' ')}</span>
          </div>
        )}
        {ship.mmsi && (
          <div className="map-popup-row">
            {t('mmsi')} <span className="text-[#888]">{ship.mmsi}</span>
          </div>
        )}
        {ship.imo && (
          <div className="map-popup-row">
            {t('imo')} <span className="text-[#888]">{ship.imo}</span>
          </div>
        )}
        {ship.callsign && (
          <div className="map-popup-row">
            {t('callsign')} <span className="text-[#00e5ff]">{ship.callsign}</span>
          </div>
        )}
        {ship.country && (
          <div className="map-popup-row">
            {t('flag')} <span className="text-white">{ship.country}</span>
          </div>
        )}
        {ship.destination && (
          <div className="map-popup-row">
            {t('destination')} <span className="text-[#44ff88]">{ship.destination}</span>
          </div>
        )}
        {typeof ship.sog === 'number' && ship.sog > 0 && (
          <div className="map-popup-row">
            {t('speed')} <span className="text-[#00e5ff]">{ship.sog.toFixed(1)} kn</span>
          </div>
        )}
        <div className="map-popup-row">
          {t('heading')}{' '}
          <span style={{ color: ship.heading != null ? '#888' : '#ff6644' }}>
            {ship.heading != null ? `${Math.round(ship.heading)}°` : t('unknown')}
          </span>
        </div>
        {ship.type === 'carrier' && ship.source && (
          <div className="mt-1.5 p-[5px_7px] bg-[rgba(255,170,0,0.08)] border border-[rgba(255,170,0,0.3)] rounded text-[9px] tracking-wide">
            <div className="text-[#ffaa00] mb-0.5">
              {t('source')}{' '}
              {ship.source_url ? (
                <a
                  href={ship.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00e5ff] underline"
                >
                  {ship.source}
                </a>
              ) : (
                <span className="text-white">{ship.source}</span>
              )}
            </div>
            {ship.last_osint_update && (
              <div className="text-[#888]">
                {t('last_osint_update')}{' '}
                {new Date(ship.last_osint_update).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </div>
            )}
            {ship.desc && (
              <div className="text-[#aaa] mt-0.5 text-[11px] leading-tight">
                {ship.desc}
              </div>
            )}
          </div>
        )}
        {ship.type !== 'carrier' && ship.last_osint_update && (
          <div className="map-popup-row">
            {t('last_osint_update_short')}{' '}
            <span className="text-[#888]">
              {new Date(ship.last_osint_update).toLocaleDateString()}
            </span>
          </div>
        )}
        {ship.yacht_alert && (
          <div className="mt-1.5 p-[5px_7px] bg-[rgba(255,105,180,0.08)] border border-[rgba(255,105,180,0.3)] rounded text-[9px] tracking-wide">
            <div className="text-[#FF69B4] font-bold mb-0.5">{t('tracked_yacht')}</div>
            <div>
              {t('owner')} <span className="text-white">{ship.yacht_owner}</span>
            </div>
            {ship.yacht_builder && (
              <div>
                {t('builder')} <span className="text-[#888]">{ship.yacht_builder}</span>
              </div>
            )}
            {(ship.yacht_length ?? 0) > 0 && (
              <div>
                {t('length')} <span className="text-[#888]">{ship.yacht_length}m</span>
              </div>
            )}
            {(ship.yacht_year ?? 0) > 0 && (
              <div>
                {t('year')} <span className="text-[#888]">{ship.yacht_year}</span>
              </div>
            )}
            {ship.yacht_category && (
              <div>
                {t('category')} <span className="text-[#FF69B4]">{ship.yacht_category}</span>
              </div>
            )}
            {ship.yacht_link && (
              <a
                href={ship.yacht_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00e5ff] underline"
              >
                {t('wikipedia')}
              </a>
            )}
          </div>
        )}
      </div>
    </Popup>
  );
}
