import { cachedFetch, getLocalizedValue } from '../../../../../sanity/lib/client'
import { scholarshipsPageQuery } from '../../../../../sanity/lib/queries'
import ScholarshipsContent from './ScholarshipsContent'

type LocalizedField = Record<string, string>

type ScholarshipsPageData = {
  title?: LocalizedField
  subtitle?: LocalizedField
  aboutTitle?: LocalizedField
  aboutDescription1?: LocalizedField
  aboutDescription2?: LocalizedField
  criteriaTitle?: LocalizedField
  criteria?: Array<{
    title?: LocalizedField
    description?: LocalizedField
  }>
  statusTitle?: LocalizedField
  statusDescription?: LocalizedField
  statusCta?: LocalizedField
} | null

type Props = {
  params: Promise<{ locale: string }>
}

export default async function ScholarshipsPage({ params }: Props) {
  const { locale } = await params
  const sanityData: ScholarshipsPageData = await cachedFetch(scholarshipsPageQuery)

  // Process Sanity data for the current locale
  const pageData = sanityData ? {
    title: getLocalizedValue(sanityData.title, locale),
    subtitle: getLocalizedValue(sanityData.subtitle, locale),
    aboutTitle: getLocalizedValue(sanityData.aboutTitle, locale),
    aboutDescription1: getLocalizedValue(sanityData.aboutDescription1, locale),
    aboutDescription2: getLocalizedValue(sanityData.aboutDescription2, locale),
    criteriaTitle: getLocalizedValue(sanityData.criteriaTitle, locale),
    criteria: sanityData.criteria?.map(c => ({
      title: getLocalizedValue(c.title, locale),
      description: getLocalizedValue(c.description, locale),
    })),
    statusTitle: getLocalizedValue(sanityData.statusTitle, locale),
    statusDescription: getLocalizedValue(sanityData.statusDescription, locale),
    statusCta: getLocalizedValue(sanityData.statusCta, locale),
  } : null

  return <ScholarshipsContent pageData={pageData} />
}
