import { cachedFetch, getLocalizedValue } from '../../../../../sanity/lib/client'
import { peerGroupsPageQuery } from '../../../../../sanity/lib/queries'
import PeerGroupsContent from './PeerGroupsContent'

type LocalizedField = Record<string, string>

type PeerGroupsPageData = {
  title?: LocalizedField
  subtitle?: LocalizedField
  howItWorksTitle?: LocalizedField
  howItWorksDescription?: LocalizedField
  features?: Array<{
    title?: LocalizedField
    description?: LocalizedField
  }>
  topicsTitle?: LocalizedField
  topicsDescription?: LocalizedField
  topics?: Array<{
    title?: LocalizedField
    description?: LocalizedField
  }>
  ctaTitle?: LocalizedField
  ctaDescription?: LocalizedField
  ctaButtonText?: LocalizedField
} | null

type Props = {
  params: Promise<{ locale: string }>
}

export default async function PeerGroupsPage({ params }: Props) {
  const { locale } = await params
  const sanityData: PeerGroupsPageData = await cachedFetch(peerGroupsPageQuery)

  // Process Sanity data for the current locale
  const pageData = sanityData ? {
    title: getLocalizedValue(sanityData.title, locale),
    subtitle: getLocalizedValue(sanityData.subtitle, locale),
    howItWorksTitle: getLocalizedValue(sanityData.howItWorksTitle, locale),
    howItWorksDescription: getLocalizedValue(sanityData.howItWorksDescription, locale),
    features: sanityData.features?.map(f => ({
      title: getLocalizedValue(f.title, locale),
      description: getLocalizedValue(f.description, locale),
    })),
    topicsTitle: getLocalizedValue(sanityData.topicsTitle, locale),
    topicsDescription: getLocalizedValue(sanityData.topicsDescription, locale),
    topics: sanityData.topics?.map(t => ({
      title: getLocalizedValue(t.title, locale),
      description: getLocalizedValue(t.description, locale),
    })),
    ctaTitle: getLocalizedValue(sanityData.ctaTitle, locale),
    ctaDescription: getLocalizedValue(sanityData.ctaDescription, locale),
    ctaButtonText: getLocalizedValue(sanityData.ctaButtonText, locale),
  } : null

  return <PeerGroupsContent pageData={pageData} />
}
