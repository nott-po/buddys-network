'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FiCalendar, FiClock, FiZap, FiGlobe } from 'react-icons/fi';

export default function Events() {
  const t = useTranslations('events');

  return (
    <section className="py-24 bg-white" id="events">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-6 border border-secondary/20">
              {t('badge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-darkGray mb-6">
              {t('title')}
            </h2>
            <p className="text-lg text-neutral-gray">{t('subtitle')}</p>
          </div>

          {/* Bi-Weekly Meeting Info Banner */}
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-8 md:p-10 mb-12 border border-primary/20 shadow-xl hover:shadow-2xl hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0 p-3">
                  <FiCalendar className="w-7 h-7 text-white" aria-hidden />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-darkGray mb-2">
                    {t('regular.title')}
                  </h3>
                  <p className="text-neutral-gray">{t('regular.description')}</p>
                </div>
              </div>
              <Link
                href="https://t.me/BuddysNetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:shadow-lg transition-all whitespace-nowrap"
              >
                {t('regular.cta')}
              </Link>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Upcoming Event - Psychologist */}
            <div className="bg-neutral-lightGray rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs font-semibold border border-secondary/30">
                    {t('upcoming.label')}
                  </span>
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary to-nature rounded-xl flex items-center justify-center p-2">
                    <FiCalendar className="w-5 h-5 text-white" aria-hidden />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-neutral-darkGray mb-3">
                  {t('psychologist.title')}
                </h3>
                <p className="text-neutral-gray mb-4">{t('psychologist.description')}</p>
                <div className="flex items-center space-x-4 text-sm text-neutral-gray">
                  <div className="flex items-center space-x-2">
                    <FiCalendar className="w-4 h-4 text-neutral-gray" aria-hidden />
                    <span>{t('psychologist.date')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiClock className="w-4 h-4 text-neutral-gray" aria-hidden />
                    <span>{t('psychologist.time')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Past Event - Financial Literacy */}
            <div className="bg-neutral-lightGray rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group opacity-75">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold border border-primary/30">
                    {t('past.label')}
                  </span>
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center p-2">
                    <FiGlobe className="w-5 h-5 text-white" aria-hidden />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-neutral-darkGray mb-3">
                  {t('financial.title')}
                </h3>
                <p className="text-neutral-gray mb-4">{t('financial.description')}</p>
                <div className="flex items-center space-x-4 text-sm text-neutral-gray">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{t('financial.status')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Future Ideas Teaser */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-10 border border-primary/10">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 p-3">
                <FiZap className="w-8 h-8 text-white" aria-hidden />
              </div>
              <h3 className="text-2xl font-bold text-neutral-darkGray mb-4">{t('future.title')}</h3>
              <p className="text-neutral-gray mb-6">{t('future.description')}</p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-white/50 backdrop-blur-xl rounded-full text-sm text-neutral-gray border border-white/30">
                  {t('future.idea1')}
                </span>
                <span className="px-4 py-2 bg-white/50 backdrop-blur-xl rounded-full text-sm text-neutral-gray border border-white/30">
                  {t('future.idea2')}
                </span>
                <span className="px-4 py-2 bg-white/50 backdrop-blur-xl rounded-full text-sm text-neutral-gray border border-white/30">
                  {t('future.idea3')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
