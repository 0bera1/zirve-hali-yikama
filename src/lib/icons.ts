/** 24×24 viewBox, stroke tabanlı ikon gövdeleri */
export const icons = {
  phone:
    '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  whatsapp:
    '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path d="M9 9.5c.3 2.4 2.2 4.4 4.8 5"/>',
  'chevron-right': '<polyline points="9 18 15 12 9 6"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  rug: '<rect x="5" y="3" width="14" height="18" rx="1"/><rect x="8.5" y="7" width="7" height="10"/><path d="M2 6h3M2 12h3M2 18h3M19 6h3M19 12h3M19 18h3"/>',
  sofa: '<path d="M4 11V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3"/><path d="M2 13a2 2 0 0 1 4 0v2h12v-2a2 2 0 0 1 4 0v5H2z"/><path d="M5 18v2M19 18v2"/>',
  blind: '<path d="M3 3h18"/><rect x="5" y="3" width="14" height="13"/><path d="M5 7.5h14M5 12h14M12 16v3"/><circle cx="12" cy="20.5" r="1"/>',
  quilt: '<rect x="3" y="6" width="18" height="12" rx="3"/><path d="M3 12h18M9 6v12M15 6v12"/>',
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
  chair: '<path d="M7 3h10v9H7z"/><path d="M5 12h14v3H5z"/><path d="M7 15v6M17 15v6"/>',
} as const;

export type IconName = keyof typeof icons;
