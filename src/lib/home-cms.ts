import { fetchPublicJson } from '@/lib/public-api'
import * as d from '@/app/data/site-content'

type CmsRow = { id: number; section: string; key: string; value: string | null }

const DEFAULT_STATS: HomeStat[] = [
  { kind: 'count', title: 'Global Indians served', end: 50, suffix: 'K+' },
  { kind: 'text', title: 'India remittances', value: '₹2500Cr+' },
  { kind: 'count', title: 'Countries supported', end: 100, suffix: '+' },
  { kind: 'text', title: 'User rating', value: '4.9★' },
]

type HomeStat =
  | { kind: 'count'; title: string; end: number; suffix: string; separator?: string }
  | { kind: 'text'; title: string; value: string }

function parseStatsJson(raw: string | null | undefined): HomeStat[] {
  if (!raw) return DEFAULT_STATS
  try {
    const a = JSON.parse(raw) as unknown
    if (!Array.isArray(a) || a.length === 0) return DEFAULT_STATS
    return a as HomeStat[]
  } catch {
    return DEFAULT_STATS
  }
}

function pick(map: Map<string, string | null>, k: string, def: string): string {
  const v = map.get(k)
  return v != null && v !== '' ? v : def
}

/**
 * Merges `section=home` CMS rows over static `site-content` defaults.
 * Safe to call on every home render; fails open to static copy.
 */
export async function getHomeCms() {
  try {
    const { data } = await fetchPublicJson<{ data: CmsRow[] }>('/cms?section=home')
    const map = new Map(data.map((r) => [r.key, r.value]))
    return {
      heroTitleBeforeGold: pick(map, 'hero_title_before', d.heroTitleBeforeGold),
      heroTitleGoldPart: pick(map, 'hero_title_gold', d.heroTitleGoldPart),
      heroSubtitle: pick(map, 'hero_subtitle', d.heroSubtitle),
      heroPrimaryCta: pick(map, 'hero_primary_cta', d.heroPrimaryCta),
      heroSecondaryCta: pick(map, 'hero_secondary_cta', d.heroSecondaryCta),
      sectionServicesTitle: pick(
        map,
        'section_services_title',
        d.sectionServicesTitle,
      ),
      sectionServicesSubtitle: pick(
        map,
        'section_services_subtitle',
        d.sectionServicesSubtitle,
      ),
      sectionHowItWorksTitle: pick(
        map,
        'section_how_it_works_title',
        d.sectionHowItWorksTitle,
      ),
      testimonialsHeading: pick(map, 'testimonials_heading', d.testimonialsHeading),
      testimonialsSubtitle: pick(
        map,
        'testimonials_subtitle',
        d.testimonialsSubtitle,
      ),
      siteNameShort: pick(map, 'site_name_short', d.siteNameShort),
      homeStats: parseStatsJson(map.get('stats_json')),
    }
  } catch {
    return {
      heroTitleBeforeGold: d.heroTitleBeforeGold,
      heroTitleGoldPart: d.heroTitleGoldPart,
      heroSubtitle: d.heroSubtitle,
      heroPrimaryCta: d.heroPrimaryCta,
      heroSecondaryCta: d.heroSecondaryCta,
      sectionServicesTitle: d.sectionServicesTitle,
      sectionServicesSubtitle: d.sectionServicesSubtitle,
      sectionHowItWorksTitle: d.sectionHowItWorksTitle,
      testimonialsHeading: d.testimonialsHeading,
      testimonialsSubtitle: d.testimonialsSubtitle,
      siteNameShort: d.siteNameShort,
      homeStats: DEFAULT_STATS,
    }
  }
}

export type { HomeStat }
