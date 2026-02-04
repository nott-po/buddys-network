import { cachedFetch, getLocalizedValue } from '../../../../../sanity/lib/client'
import { clubPageQuery } from '../../../../../sanity/lib/queries'
import ClubContent from './ClubContent'

type LocalizedField = Record<string, string>

type ClubPageData = {
  title?: LocalizedField
  subtitle?: LocalizedField
  whatTitle?: LocalizedField
  whatDescription1?: LocalizedField
  whatDescription2?: LocalizedField
  typesTitle?: LocalizedField
  activityTypes?: Array<{
    title?: LocalizedField
    description?: LocalizedField
    items?: LocalizedField[]
  }>
  benefitsTitle?: LocalizedField
  benefits?: Array<{
    title?: LocalizedField
    description?: LocalizedField
  }>
  ctaTitle?: LocalizedField
  ctaDescription?: LocalizedField
  ctaTelegramText?: LocalizedField
  ctaIdeasText?: LocalizedField
} | null

type Props = {
  params: Promise<{ locale: string }>
}

export default async function ClubPage({ params }: Props) {
  const { locale } = await params
  const sanityData: ClubPageData = await cachedFetch(clubPageQuery)

  // Process Sanity data for the current locale
  const pageData = sanityData ? {
    title: getLocalizedValue(sanityData.title, locale),
    subtitle: getLocalizedValue(sanityData.subtitle, locale),
    whatTitle: getLocalizedValue(sanityData.whatTitle, locale),
    whatDescription1: getLocalizedValue(sanityData.whatDescription1, locale),
    whatDescription2: getLocalizedValue(sanityData.whatDescription2, locale),
    typesTitle: getLocalizedValue(sanityData.typesTitle, locale),
    activityTypes: sanityData.activityTypes?.map(at => ({
      title: getLocalizedValue(at.title, locale),
      description: getLocalizedValue(at.description, locale),
      items: at.items?.map(item => getLocalizedValue(item, locale)).filter(Boolean) as string[],
    })),
    benefitsTitle: getLocalizedValue(sanityData.benefitsTitle, locale),
    benefits: sanityData.benefits?.map(b => ({
      title: getLocalizedValue(b.title, locale),
      description: getLocalizedValue(b.description, locale),
    })),
    ctaTitle: getLocalizedValue(sanityData.ctaTitle, locale),
    ctaDescription: getLocalizedValue(sanityData.ctaDescription, locale),
    ctaTelegramText: getLocalizedValue(sanityData.ctaTelegramText, locale),
    ctaIdeasText: getLocalizedValue(sanityData.ctaIdeasText, locale),
  } : null

  return <ClubContent pageData={pageData} />
}
