export type SiteMeta = {
  title: string
  description: string
}

export const SITE_DEFAULT: SiteMeta = {
  title: 'DayZ Dons — Premium DayZ Gaming Community',
  description:
    'PVP+PVE DayZ server with free traders, teleports, bunkers, oil rigs, quests, and a full DonCoin economy managed by our custom Discord bot.',
}

export function siteOrigin(): string {
  const fromEnv = import.meta.env.VITE_SITE_URL?.trim()
  if (fromEnv) return fromEnv.replace(/\/$/, '')
  if (typeof window !== 'undefined') return window.location.origin
  return ''
}

export function absoluteUrl(path: string): string {
  const base = siteOrigin()
  const p = path.startsWith('/') ? path : `/${path}`
  return base ? `${base}${p}` : p
}

export function metaForPath(_pathname: string): SiteMeta {
  return { ...SITE_DEFAULT }
}
