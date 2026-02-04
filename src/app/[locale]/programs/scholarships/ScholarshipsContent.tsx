'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FiCheck, FiArrowRight } from 'react-icons/fi'

type PageData = {
  title?: string
  subtitle?: string
  aboutTitle?: string
  aboutDescription1?: string
  aboutDescription2?: string
  criteriaTitle?: string
  criteria?: Array<{
    title?: string
    description?: string
  }>
  statusTitle?: string
  statusDescription?: string
  statusCta?: string
} | null

type Props = {
  pageData: PageData
}

export default function ScholarshipsContent({ pageData }: Props) {
  const t = useTranslations('programs')
  const ts = useTranslations('scholarships')

  // Use Sanity data if available, otherwise fall back to translations
  const title = pageData?.title || t('scholarships.title')
  const subtitle = pageData?.subtitle || t('scholarships.description')
  const aboutTitle = pageData?.aboutTitle || ts('about.title')
  const aboutDesc1 = pageData?.aboutDescription1 || ts('about.description1')
  const aboutDesc2 = pageData?.aboutDescription2 || ts('about.description2')
  const criteriaTitle = pageData?.criteriaTitle || ts('criteria.title')
  const statusTitle = pageData?.statusTitle || ts('status.title')
  const statusDescription = pageData?.statusDescription || ts('status.description')
  const statusCta = pageData?.statusCta || ts('status.cta')

  // Criteria from Sanity or fallback to translations
  const criteria = pageData?.criteria && pageData.criteria.length > 0
    ? pageData.criteria
    : [
        { title: ts('criteria.origin.title'), description: ts('criteria.origin.description') },
        { title: ts('criteria.abilities.title'), description: ts('criteria.abilities.description') },
        { title: ts('criteria.financial.title'), description: ts('criteria.financial.description') },
      ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative -mt-20 pt-20 py-24 bg-gradient-to-br from-primary/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-white/30 shadow-xl overflow-hidden">
              <div className="inline-flex items-center space-x-3 px-2 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4 border border-primary/20">
                {title}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-nature bg-clip-text text-transparent">
                  {title}
                </span>
              </h1>

              <p className="text-lg text-neutral-gray mb-6">{subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">{aboutTitle}</h2>
              <div className="prose prose-lg max-w-none text-neutral-gray">
                <p className="mb-4">{aboutDesc1}</p>
                <p className="mb-4">{aboutDesc2}</p>
              </div>
            </div>

            {/* Criteria */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">{criteriaTitle}</h2>
              <div className="space-y-4">
                {criteria.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FiCheck className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-darkGray mb-1">{item.title}</h3>
                      <p className="text-neutral-gray">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-4">{statusTitle}</h2>
              <p className="text-neutral-gray text-lg mb-6">{statusDescription}</p>
              <Link
                href="/#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:shadow-lg transition-all"
              >
                {statusCta}
                <FiArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
