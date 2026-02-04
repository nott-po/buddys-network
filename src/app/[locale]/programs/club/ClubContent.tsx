'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FiGift, FiUsers, FiShare2, FiPenTool, FiCheck } from 'react-icons/fi'
import { FaTelegramPlane } from 'react-icons/fa'

type PageData = {
  title?: string
  subtitle?: string
  whatTitle?: string
  whatDescription1?: string
  whatDescription2?: string
  typesTitle?: string
  activityTypes?: Array<{
    title?: string
    description?: string
    items?: string[]
  }>
  benefitsTitle?: string
  benefits?: Array<{
    title?: string
    description?: string
  }>
  ctaTitle?: string
  ctaDescription?: string
  ctaTelegramText?: string
  ctaIdeasText?: string
} | null

type Props = {
  pageData: PageData
}

const activityIcons = [FiGift, FiUsers, FiShare2, FiPenTool]

export default function ClubContent({ pageData }: Props) {
  const ts = useTranslations('clubActivities')

  // Use Sanity data if available, otherwise fall back to translations
  const title = pageData?.title || ts('title')
  const subtitle = pageData?.subtitle || ts('subtitle')
  const whatTitle = pageData?.whatTitle || ts('what.title')
  const whatDescription1 = pageData?.whatDescription1 || ts('what.description1')
  const whatDescription2 = pageData?.whatDescription2 || ts('what.description2')
  const typesTitle = pageData?.typesTitle || ts('types.title')
  const benefitsTitle = pageData?.benefitsTitle || ts('benefits.title')
  const ctaTitle = pageData?.ctaTitle || ts('cta.title')
  const ctaDescription = pageData?.ctaDescription || ts('cta.description')
  const ctaTelegramText = pageData?.ctaTelegramText || ts('cta.telegram')
  const ctaIdeasText = pageData?.ctaIdeasText || ts('cta.ideas')

  // Activity types from Sanity or fallback to translations
  const activityTypes = pageData?.activityTypes && pageData.activityTypes.length > 0
    ? pageData.activityTypes
    : [
        {
          title: ts('types.educational.title'),
          description: ts('types.educational.description'),
          items: [ts('types.educational.cashflow'), ts('types.educational.mafia'), ts('types.educational.strategy')],
        },
        {
          title: ts('types.social.title'),
          description: ts('types.social.description'),
          items: [ts('types.social.movies'), ts('types.social.coffee'), ts('types.social.outdoor')],
        },
        {
          title: ts('types.skills.title'),
          description: ts('types.skills.description'),
          items: [ts('types.skills.presentations'), ts('types.skills.workshops'), ts('types.skills.qa')],
        },
        {
          title: ts('types.creative.title'),
          description: ts('types.creative.description'),
          items: [ts('types.creative.bookclub'), ts('types.creative.workshops'), ts('types.creative.projects')],
        },
      ]

  // Benefits from Sanity or fallback to translations
  const benefits = pageData?.benefits && pageData.benefits.length > 0
    ? pageData.benefits
    : [
        { title: ts('benefits.relationships.title'), description: ts('benefits.relationships.description') },
        { title: ts('benefits.skills.title'), description: ts('benefits.skills.description') },
        { title: ts('benefits.relaxation.title'), description: ts('benefits.relaxation.description') },
      ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative -mt-20 pt-20 py-24 bg-gradient-to-br from-secondary-dark/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-white/30 shadow-xl overflow-hidden">
              <div className="inline-block px-4 py-2 bg-secondary-dark/10 rounded-full text-secondary-dark text-sm font-medium mb-4 border border-secondary-dark/20">
                {title}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-darkGray mb-4">
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
            {/* What is club activities */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">{whatTitle}</h2>
              <div className="space-y-6 text-neutral-gray">
                <p>{whatDescription1}</p>
                <p>{whatDescription2}</p>
              </div>
            </div>

            {/* Types of activities */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-8">{typesTitle}</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {activityTypes.map((activity, index) => {
                  const IconComponent = activityIcons[index % activityIcons.length]
                  return (
                    <div key={index} className="bg-white/50 rounded-2xl p-6 border border-white/30">
                      <div className="w-14 h-14 bg-gradient-to-br from-secondary to-nature rounded-2xl flex items-center justify-center mb-4">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-darkGray mb-3">{activity.title}</h3>
                      <p className="text-neutral-gray text-sm mb-4">{activity.description}</p>
                      {activity.items && activity.items.length > 0 && (
                        <ul className="space-y-2 text-sm text-neutral-gray">
                          {activity.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center space-x-2">
                              <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">{benefitsTitle}</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-secondary to-nature rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FiCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-darkGray mb-1">{benefit.title}</h3>
                      <p className="text-neutral-gray">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-br from-secondary-dark/10 to-white rounded-3xl p-12 border border-secondary-dark/20">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-4">{ctaTitle}</h2>
              <p className="text-neutral-gray mb-8">{ctaDescription}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="https://t.me/BuddysNetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-secondary to-nature text-white font-medium rounded-full hover:shadow-lg transition-all"
                >
                  {ctaTelegramText}
                  <FaTelegramPlane className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center px-8 py-4 bg-white/50 backdrop-blur-xl text-neutral-darkGray font-medium rounded-full hover:bg-white transition-all border border-white/50"
                >
                  {ctaIdeasText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
