'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FiCheck, FiUsers, FiCalendar, FiTarget, FiHeart } from 'react-icons/fi'
import { FaTelegramPlane } from 'react-icons/fa'

type PageData = {
  title?: string
  subtitle?: string
  howItWorksTitle?: string
  howItWorksDescription?: string
  features?: Array<{
    title?: string
    description?: string
  }>
  topicsTitle?: string
  topicsDescription?: string
  topics?: Array<{
    title?: string
    description?: string
  }>
  ctaTitle?: string
  ctaDescription?: string
  ctaButtonText?: string
} | null

type Props = {
  pageData: PageData
}

const featureIcons = [FiCalendar, FiUsers, FiTarget, FiHeart]

export default function PeerGroupsContent({ pageData }: Props) {
  const ts = useTranslations('peerGroups')

  // Use Sanity data if available, otherwise fall back to translations
  const title = pageData?.title || ts('title')
  const subtitle = pageData?.subtitle || ts('subtitle')
  const howItWorksTitle = pageData?.howItWorksTitle || ts('howItWorks.title')
  const howItWorksDescription = pageData?.howItWorksDescription || ts('howItWorks.description')
  const topicsTitle = pageData?.topicsTitle || ts('topics.title')
  const topicsDescription = pageData?.topicsDescription || ts('topics.description')
  const ctaTitle = pageData?.ctaTitle || ts('cta.title')
  const ctaDescription = pageData?.ctaDescription || ts('cta.description')
  const ctaButtonText = pageData?.ctaButtonText || ts('cta.telegram')

  // Features from Sanity or fallback to translations
  const features = pageData?.features && pageData.features.length > 0
    ? pageData.features
    : [
        { title: ts('howItWorks.frequency.title'), description: ts('howItWorks.frequency.description') },
        { title: ts('howItWorks.size.title'), description: ts('howItWorks.size.description') },
        { title: ts('howItWorks.format.title'), description: ts('howItWorks.format.description') },
        { title: ts('howItWorks.organization.title'), description: ts('howItWorks.organization.description') },
      ]

  // Topics from Sanity or fallback to translations
  const topics = pageData?.topics && pageData.topics.length > 0
    ? pageData.topics
    : [
        { title: ts('topics.challenges'), description: ts('topics.challenges') },
        { title: ts('topics.goals'), description: ts('topics.goals') },
        { title: ts('topics.experiences'), description: ts('topics.experiences') },
        { title: ts('topics.problemSolving'), description: ts('topics.problemSolving') },
      ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative -mt-20 pt-20 py-24 bg-gradient-to-br from-secondary/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-white/30 shadow-xl overflow-hidden">
              <div className="inline-flex items-center space-x-3 px-3 py-1 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-4 border border-secondary/20">
                <FiUsers className="w-4 h-4" />
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
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">{howItWorksTitle}</h2>
              <div className="prose prose-lg max-w-none text-neutral-gray">
                <p className="mb-4">{howItWorksDescription}</p>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">{howItWorksTitle}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => {
                  const IconComponent = featureIcons[index % featureIcons.length]
                  return (
                    <div key={index} className="bg-white/50 rounded-2xl p-6 border border-white/30">
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary to-nature rounded-xl flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-neutral-darkGray mb-2">{feature.title}</h3>
                      <p className="text-sm text-neutral-gray">{feature.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Topics */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">{topicsTitle}</h2>
              <div className="space-y-4">
                <p className="text-neutral-gray">{topicsDescription}</p>

                <div className="space-y-4">
                  {topics.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-secondary to-nature rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
            </div>

            {/* CTA Footer */}
            <div className="bg-gradient-to-br from-secondary/10 to-nature/10 rounded-3xl p-8 md:p-12 border border-secondary/20">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-neutral-darkGray mb-4">{ctaTitle}</h2>
                <p className="text-neutral-gray text-lg mb-6">{ctaDescription}</p>
                <Link
                  href="https://t.me/BuddysNetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-secondary to-nature text-white font-medium rounded-full hover:shadow-lg transition-all"
                >
                  {ctaButtonText}
                  <FaTelegramPlane className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
