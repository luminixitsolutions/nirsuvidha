import RealEstatePageClient from './real-estate-page-client'
import { fetchRealEstatePublicBundle } from '@/lib/real-estate-public'

type Props = {
  serviceTitle: string
}

/** Loads CMS-backed masters + listings from Laravel when available. */
export default async function RealEstateServiceDetail({ serviceTitle }: Props) {
  const bundle = await fetchRealEstatePublicBundle()

  return <RealEstatePageClient bundle={bundle} serviceTitle={serviceTitle} />
}
