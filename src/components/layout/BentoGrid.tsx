'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function BentoGrid() {
  const t = useTranslations('programs');
  const locale = useLocale();

  return (
    <section
      className="py-24 bg-gradient-to-br from-neutral-lightest via-white to-secondary/5"
      id="programs"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-nature/10 rounded-full text-primary text-sm font-medium mb-6 border border-nature/20">
            {t('title')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-darkest mb-6">{t('title')}</h2>
          <p className="text-lg text-neutral-dark">{t('subtitle')}</p>
        </div>

        {/* Category Pills */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
            {t('categories.all')}
          </button>
          <button className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm font-medium text-neutral-dark hover:bg-white/30 hover:scale-105 transition-all border border-white/30">
            {t('categories.education')}
          </button>
          <button className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm font-medium text-neutral-dark hover:bg-white/30 hover:scale-105 transition-all border border-white/30">
            {t('categories.community')}
          </button>
          <button className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm font-medium text-neutral-dark hover:bg-white/30 hover:scale-105 transition-all border border-white/30">
            {t('categories.events')}
          </button>
        </div>

        {/* Bento Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Scholarships - Large card with book illustration */}
            <Link
              href={`/${locale}/programs/scholarships`}
              className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-[32px] h-[600px] bg-gradient-to-br from-primary/5 via-secondary/5 to-nature/5 hover:shadow-2xl transition-all duration-500 animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              {/* Book illustration - bigger and centered */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <Image
                  src="/images/illustrations/book.png"
                  alt="Education and Growth"
                  width={500}
                  height={500}
                  className="w-full h-auto max-w-lg group-hover:scale-110 transition-transform duration-700 animate-float"
                />
              </div>

              {/* Content card at bottom */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="px-3 py-1 bg-gradient-to-r from-nature/30 to-secondary/30 backdrop-blur-xl rounded-full text-primary text-xs font-semibold border border-nature/40">
                    Featured Program
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      className="w-5 h-5 text-white"
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
                <h3 className="text-2xl font-bold text-neutral-darkest mb-2">
                  {t('scholarships.title')}
                </h3>
                <p className="text-neutral-dark text-sm leading-relaxed">
                  {t('scholarships.description')}
                </p>
              </div>
            </Link>

            {/* Peer Groups - With puzzle illustration */}
            <Link
              href={`/${locale}/programs/peer-groups`}
              className="group relative overflow-hidden rounded-[32px] h-[290px] bg-gradient-to-br from-secondary/5 to-nature/5 hover:shadow-2xl transition-all duration-500 animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              {/* Puzzle illustration - bigger and properly sized */}
              <div className="absolute inset-x-0 top-4 flex justify-center">
                <Image
                  src="/images/illustrations/puzzle.png"
                  alt="Collaboration"
                  width={180}
                  height={180}
                  className="w-44 h-44 group-hover:scale-110 transition-transform duration-700 animate-float"
                  style={{ animationDelay: '1s' }}
                />
              </div>

              {/* Content card at bottom */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-5">
                <h3 className="text-xl font-bold text-neutral-darkest mb-2">
                  {t('peerGroups.title')}
                </h3>
                <p className="text-neutral-dark text-xs leading-relaxed line-clamp-2">
                  {t('peerGroups.description')}
                </p>
              </div>
            </Link>

            {/* Open Events - With plant illustration */}
            <Link
              href={`/${locale}/programs/events`}
              className="group relative overflow-hidden rounded-[32px] h-[290px] bg-gradient-to-br from-accent/5 to-primary/5 hover:shadow-2xl transition-all duration-500 animate-fade-in"
              style={{ animationDelay: '0.7s' }}
            >
              {/* Plant illustration - bigger */}
              <div className="absolute inset-x-0 top-4 flex justify-center">
                <Image
                  src="/images/illustrations/plant.png"
                  alt="Growth"
                  width={180}
                  height={180}
                  className="w-44 h-44 group-hover:scale-110 transition-transform duration-700 animate-float"
                  style={{ animationDelay: '1.5s' }}
                />
              </div>

              {/* Content card at bottom */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-5">
                <h3 className="text-xl font-bold text-neutral-darkest mb-2">
                  {t('openEvents.title')}
                </h3>
                <p className="text-neutral-dark text-xs leading-relaxed line-clamp-2">
                  {t('openEvents.description')}
                </p>
              </div>
            </Link>

            {/* Club Activities - Horizontal card with tea illustration */}
            <Link
              href={`/${locale}/programs/club`}
              className="lg:col-span-3 group relative overflow-hidden rounded-[32px] h-[300px] bg-gradient-to-r from-nature/5 via-secondary/3 to-primary/5 hover:shadow-2xl transition-all duration-500 animate-fade-in"
              style={{ animationDelay: '0.9s' }}
            >
              <div className="relative h-full flex items-center">
                {/* Content card */}
                <div className="flex-1 p-8 lg:p-12">
                  <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-8 max-w-md">
                    <h3 className="text-3xl font-bold text-neutral-darkest mb-4">
                      {t('clubActivities.title')}
                    </h3>
                    <p className="text-neutral-dark leading-relaxed mb-6">
                      {t('clubActivities.description')}
                    </p>
                    <div className="inline-flex items-center text-primary font-medium group-hover:text-secondary transition-colors">
                      <span>Explore Activities</span>
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
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

                {/* Tea illustration - bigger and no card */}
                <div className="flex-1 flex items-center justify-center p-8">
                  <Image
                    src="/images/illustrations/tea.png"
                    alt="Community Activities"
                    width={400}
                    height={400}
                    className="w-full h-auto max-w-lg group-hover:scale-105 transition-transform duration-700 animate-float"
                    style={{ animationDelay: '2s' }}
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-nature/5 rounded-full blur-2xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>
    </section>
  );
}
