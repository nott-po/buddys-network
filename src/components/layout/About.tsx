'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function About() {
  const t = useTranslations('about');

  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 border border-primary/20">
              {t('badge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-darkGray mb-6">
              {t('title')}
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left */}
            <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="/images/about-main.jpg"
                alt="About Buddy's Network"
                fill
                className="object-cover"
              />

              {/* Floating Stats Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/20 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-2xl">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white drop-shadow-lg mb-1">04</div>
                    <div className="text-xs text-white/90 drop-shadow-md">
                      {t('stats.programsLabel')}
                    </div>
                  </div>
                  <div className="text-center border-x border-white/30">
                    <div className="text-3xl font-bold text-white drop-shadow-lg mb-1">04</div>
                    <div className="text-xs text-white/90 drop-shadow-md">
                      {t('stats.countriesLabel')}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white drop-shadow-lg mb-1">100+</div>
                    <div className="text-xs text-white/90 drop-shadow-md">
                      {t('stats.membersLabel')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-6">
              <p className="text-xl text-neutral-gray leading-relaxed">{t('description')}</p>
              <p className="text-lg text-neutral-gray leading-relaxed">{t('mission')}</p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-3xl font-bold text-neutral-darkGray mb-10 text-center">
              {t('valuesTitle')}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Growth */}
              <div className="bg-neutral-lightGray rounded-3xl p-8 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6 border border-primary/30">
                  <svg
                    className="w-7 h-7 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-neutral-darkGray mb-3">
                  {t('values.growth.title')}
                </h4>
                <p className="text-neutral-gray text-sm leading-relaxed">
                  {t('values.growth.description')}
                </p>
              </div>

              {/* Support */}
              <div className="bg-neutral-lightGray rounded-3xl p-8 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-secondary/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6 border border-secondary/30">
                  <svg
                    className="w-7 h-7 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-neutral-darkGray mb-3">
                  {t('values.support.title')}
                </h4>
                <p className="text-neutral-gray text-sm leading-relaxed">
                  {t('values.support.description')}
                </p>
              </div>

              {/* Community */}
              <div className="bg-neutral-lightGray rounded-3xl p-8 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary-dark/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6 border border-primary-dark/30">
                  <svg
                    className="w-7 h-7 text-primary-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-neutral-darkGray mb-3">
                  {t('values.community.title')}
                </h4>
                <p className="text-neutral-gray text-sm leading-relaxed">
                  {t('values.community.description')}
                </p>
              </div>

              {/* Opportunity */}
              <div className="bg-neutral-lightGray rounded-3xl p-8 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-secondary-dark/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6 border border-secondary-dark/30">
                  <svg
                    className="w-7 h-7 text-secondary-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-neutral-darkGray mb-3">
                  {t('values.opportunity.title')}
                </h4>
                <p className="text-neutral-gray text-sm leading-relaxed">
                  {t('values.opportunity.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
