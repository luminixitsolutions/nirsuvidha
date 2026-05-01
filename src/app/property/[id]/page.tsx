import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Toaster } from 'sonner'
import FooterOne from '@/app/components/footer/footer-one'
import Navlight from '@/app/components/navbar/navlight'
import ScrollToTop from '@/app/components/scroll-to-top'
import { fetchRealEstateListingDetail } from '@/lib/real-estate-public'
import { getPublicServices } from '@/lib/public-services'
import PropertyDetailClient from './property-detail-client'

export const dynamic = 'force-dynamic'

type PageProps = { params: Promise<{ id: string }> }

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params
  const listing = await fetchRealEstateListingDetail(id)
  if (!listing) {
    return { title: 'Property — NRI Suvidha' }
  }
  return {
    title: `${listing.title} — NRI Suvidha`,
    description: [listing.price, listing.location].filter(Boolean).join(' · ') || undefined,
  }
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { id } = await params
  const [serviceItems, listing] = await Promise.all([
    getPublicServices(),
    fetchRealEstateListingDetail(id),
  ])

  if (!listing) {
    notFound()
  }

  return (
    <>
      <Toaster richColors position="top-center" />
      <Navlight serviceItems={serviceItems} />
      <PropertyDetailClient listing={listing} />
      <FooterOne />
      <ScrollToTop />
    </>
  )
}
