'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function BentoGrid() {
  const t = useTranslations('programs');
  const locale = useLocale();

  return (
    <section className="py-24 bg-neutral-lightGray" id="programs">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 border border-primary/20">
            {t('title')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-darkGray mb-6">
            {t('title')}
          </h2>
          <p className="text-lg text-neutral-gray">{t('subtitle')}</p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button className="px-6 py-2 bg-white rounded-full text-sm font-medium text-neutral-darkGray hover:bg-primary hover:text-white transition-all shadow-sm">
            {t('categories.all')}
          </button>
          <button className="px-6 py-2 bg-white/50 backdrop-blur-xl rounded-full text-sm font-medium text-neutral-gray hover:bg-primary hover:text-white transition-all border border-white/30">
            {t('categories.education')}
          </button>
          <button className="px-6 py-2 bg-white/50 backdrop-blur-xl rounded-full text-sm font-medium text-neutral-gray hover:bg-primary hover:text-white transition-all border border-white/30">
            {t('categories.community')}
          </button>
          <button className="px-6 py-2 bg-white/50 backdrop-blur-xl rounded-full text-sm font-medium text-neutral-gray hover:bg-primary hover:text-white transition-all border border-white/30">
            {t('categories.events')}
          </button>
        </div>

        {/* Bento Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Scholarships */}
            <Link
              href={`/${locale}/programs/scholarships`}
              className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-[32px] h-[600px] shadow-lg hover:shadow-2xl transition-all"
            >
              <Image
                src="/images/scholarships.jpg"
                alt="Scholarships"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Floating Glass Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/20 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-2xl">
                <div className="flex items-start justify-between mb-3">
                  <div className="px-3 py-1 bg-white/30 backdrop-blur-xl rounded-full text-white text-xs font-semibold border border-white/40">
                    Featured
                  </div>
                  <div className="w-10 h-10 bg-white/25 backdrop-blur-xl rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/40">
                    <svg
                      className="w-5 h-5 text-white drop-shadow-md"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white drop-shadow-lg mb-2">
                  {t('scholarships.title')}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed drop-shadow-md">
                  {t('scholarships.description')}
                </p>
              </div>
            </Link>

            {/* Peer Groups */}
            <Link
              href={`/${locale}/programs/peer-groups`}
              className="group relative overflow-hidden rounded-[32px] h-[290px] shadow-lg hover:shadow-2xl transition-all"
            >
              <Image
                src="/images/peer-groups.jpg"
                alt="Peer Groups"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 bg-black/20 backdrop-blur-xl rounded-3xl p-5 border border-white/30 shadow-2xl">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white drop-shadow-lg mb-2">
                      {t('peerGroups.title')}
                    </h3>
                    <p className="text-white/90 text-xs line-clamp-2 drop-shadow-md">
                      {t('peerGroups.description')}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-white/25 backdrop-blur-xl rounded-full flex items-center justify-center flex-shrink-0 ml-3 group-hover:scale-110 transition-transform border border-white/40">
                    <svg
                      className="w-5 h-5 text-white drop-shadow-md"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Open Events */}
            <Link
              href={`/${locale}/programs/events`}
              className="group relative overflow-hidden rounded-[32px] h-[290px] shadow-lg hover:shadow-2xl transition-all"
            >
              <Image
                src="/images/open-events.jpg"
                alt="Open Events"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 bg-black/20 backdrop-blur-xl rounded-3xl p-5 border border-white/30 shadow-2xl">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white drop-shadow-lg mb-2">
                      {t('openEvents.title')}
                    </h3>
                    <p className="text-white/90 text-xs line-clamp-2 drop-shadow-md">
                      {t('openEvents.description')}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-white/25 backdrop-blur-xl rounded-full flex items-center justify-center flex-shrink-0 ml-3 group-hover:scale-110 transition-transform border border-white/40">
                    <svg
                      className="w-5 h-5 text-white drop-shadow-md"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Club Activities */}
            <Link
              href={`/${locale}/programs/club`}
              className="lg:col-span-3 group relative overflow-hidden rounded-[32px] h-[300px] shadow-lg hover:shadow-2xl transition-all"
            >
              <Image
                src="/images/club-activities.jpg"
                alt="Club Activities"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 lg:right-auto lg:max-w-md bg-black/20 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-2xl">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                    {t('clubActivities.title')}
                  </h3>
                  <div className="w-10 h-10 bg-white/25 backdrop-blur-xl rounded-full flex items-center justify-center flex-shrink-0 ml-3 group-hover:scale-110 transition-transform border border-white/40">
                    <svg
                      className="w-5 h-5 text-white drop-shadow-md"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-white/90 text-sm leading-relaxed drop-shadow-md">
                  {t('clubActivities.description')}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
