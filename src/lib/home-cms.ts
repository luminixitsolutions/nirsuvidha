import { fetchPublicJson } from '@/lib/public-api'

type CmsRow = { id: number; section: string; key: string; value: string | null }

type HomeStat =
  | { kind: 'count'; title: string; end: number; suffix: string; separator?: string }
  | { kind: 'text'; title: string; value: string }

type AboutFeature = { icon: string; title: string; desc: string }
type HowStep = {
  n: number
  icon: string
  title: string
  body: string
  active?: boolean
}

function pickOptional(map: Map<string, string | null>, k: string): string {
  return map.get(k) ?? ''
}

function parseJsonArray<T>(raw: string | null | undefined): T[] {
  if (raw == null || raw === '') return []
  try {
    const a = JSON.parse(raw) as unknown
    return Array.isArray(a) ? (a as T[]) : []
  } catch {
    return []
  }
}

function parseStatsJson(raw: string | null | undefined): HomeStat[] {
  if (raw == null || raw === '') return []
  return parseJsonArray<HomeStat>(raw)
}

export type HomeCms = {
  heroTitleBeforeGold: string
  heroTitleGoldPart: string
  heroSubtitle: string
  heroPrimaryCta: string
  heroSecondaryCta: string
  sectionServicesTitle: string
  sectionServicesSubtitle: string
  sectionHowItWorksTitle: string
  testimonialsHeading: string
  testimonialsSubtitle: string
  siteNameShort: string
  homeStats: HomeStat[]
  heroBadgeLines: string[]
  aboutBadge: string
  aboutTitleBefore: string
  aboutTitleGold: string
  aboutLead: string
  aboutP1: string
  aboutP2: string
  aboutGoalKicker: string
  aboutGoalStatement: string
  aboutFoot: string
  aboutFeatures: AboutFeature[]
  howWorkTitle: string
  howWorkSubtitle: string
  howWorkSteps: HowStep[]
  whyChoosePoints: string[]
  /** Full URLs from the API (storage), or empty string when unset. */
  heroRightImage: string
  servicesSectionImage: string
  aboutSectionImage: string
}

/**
 * Homepage copy from Laravel (section `home`) only — no static marketing fallbacks in Next.
 */
export async function getHomeCms(): Promise<HomeCms> {
  const { data } = await fetchPublicJson<{ data: CmsRow[] }>(
    '/cms?section=home'
  )
  const m = new Map(data.map((r) => [r.key, r.value]))
  return {
    heroTitleBeforeGold: pickOptional(m, 'hero_title_before'),
    heroTitleGoldPart: pickOptional(m, 'hero_title_gold'),
    heroSubtitle: pickOptional(m, 'hero_subtitle'),
    heroPrimaryCta: pickOptional(m, 'hero_primary_cta'),
    heroSecondaryCta: pickOptional(m, 'hero_secondary_cta'),
    sectionServicesTitle: pickOptional(m, 'section_services_title'),
    sectionServicesSubtitle: pickOptional(m, 'section_services_subtitle'),
    sectionHowItWorksTitle: pickOptional(m, 'section_how_it_works_title'),
    testimonialsHeading: pickOptional(m, 'testimonials_heading'),
    testimonialsSubtitle: pickOptional(m, 'testimonials_subtitle'),
    siteNameShort: pickOptional(m, 'site_name_short'),
    homeStats: parseStatsJson(m.get('stats_json') ?? null),
    heroBadgeLines: parseJsonArray<string>(m.get('hero_badge_lines_json') ?? null),
    aboutBadge: pickOptional(m, 'about_badge'),
    aboutTitleBefore: pickOptional(m, 'about_title_before'),
    aboutTitleGold: pickOptional(m, 'about_title_gold'),
    aboutLead: pickOptional(m, 'about_lead'),
    aboutP1: pickOptional(m, 'about_p1'),
    aboutP2: pickOptional(m, 'about_p2'),
    aboutGoalKicker: pickOptional(m, 'about_goal_kicker'),
    aboutGoalStatement: pickOptional(m, 'about_goal_statement'),
    aboutFoot: pickOptional(m, 'about_foot'),
    aboutFeatures: parseJsonArray<AboutFeature>(m.get('about_features_json') ?? null),
    howWorkTitle: pickOptional(m, 'how_work_title'),
    howWorkSubtitle: pickOptional(m, 'how_work_subtitle'),
    howWorkSteps: parseJsonArray<HowStep>(m.get('how_work_steps_json') ?? null).filter(
      (s) => s.active !== false,
    ),
    whyChoosePoints: parseJsonArray<string>(m.get('why_choose_points_json') ?? null),
    heroRightImage: pickOptional(m, 'hero_right_image'),
    servicesSectionImage: pickOptional(m, 'services_section_image'),
    aboutSectionImage: pickOptional(m, 'about_section_image'),
  }
}

export type { HomeStat, AboutFeature, HowStep }
