"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FiCalendar, FiBook, FiUsers } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

export default function EventsPage() {
  const t = useTranslations('programs');
  const [width, setWidth] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    // mark mounted for showing real content (skeleton until hydrate)
    setMounted(true);

    function update() {
      setWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const bp = width >= 1024 ? 'lg' : width >= 768 ? 'md' : width >= 640 ? 'sm' : 'xs';

  // Simple loading skeleton while component hydrates / mounts
  if (!mounted) {
    return (
      <div className="min-h-screen pt-20">
        <section className="relative -mt-20 pt-20 py-24 bg-gradient-to-br from-secondary/10 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-white/30 shadow-xl overflow-hidden animate-pulse">
                <div className="h-6 w-40 bg-white/20 rounded-full mb-6"></div>
                <div className="h-10 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-md mb-4" />
                <div className="h-8 bg-white/20 rounded-md w-3/4 mb-4"></div>
                <div className="h-4 bg-white/10 rounded-md w-1/2"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 animate-pulse">
                <div className="h-6 w-1/3 bg-white/20 rounded mb-4"></div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="h-40 bg-white/10 rounded-2xl"></div>
                  <div className="h-40 bg-white/10 rounded-2xl"></div>
                  <div className="h-40 bg-white/10 rounded-2xl"></div>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 animate-pulse">
                <div className="h-6 w-1/2 bg-white/20 rounded mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-white/10 rounded w-full"></div>
                  <div className="h-4 bg-white/10 rounded w-full"></div>
                </div>
              </div>

              <div className="bg-white/50 rounded-2xl p-6 border border-white/30 animate-pulse">
                <div className="h-5 w-1/6 bg-white/20 rounded mb-2"></div>
                <div className="h-6 bg-white/10 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative -mt-20 pt-20 py-24 bg-gradient-to-br from-secondary/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-white/30 shadow-xl overflow-hidden">
              <div className="absolute top-4 right-4 bg-white/10 text-xs text-white px-3 py-1 rounded-full">
                {width}px • {bp}
              </div>
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-4 border border-secondary/20">
                {t('openEvents.title')}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-darkGray mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-nature bg-clip-text text-transparent">
                  {t('openEvents.title')}
                </span>
              </h1>

              <p className="text-lg text-neutral-gray mb-6">{t('openEvents.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* What are open events */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">{t('openEvents.what.title')}</h2>
              <div className="space-y-6 text-neutral-gray">
                <p>{t('openEvents.what.description')}</p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/50 rounded-2xl p-6 border border-white/30 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                      <FiCalendar className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-neutral-darkGray mb-2">{t('openEvents.features.workshops.title')}</h3>
                    <p className="text-sm">{t('openEvents.features.workshops.description')}</p>
                  </div>

                  <div className="bg-white/50 rounded-2xl p-6 border border-white/30 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                      <FiBook className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-neutral-darkGray mb-2">{t('openEvents.features.lectures.title')}</h3>
                    <p className="text-sm">{t('openEvents.features.lectures.description')}</p>
                  </div>

                  <div className="bg-white/50 rounded-2xl p-6 border border-white/30 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                      <FiUsers className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-neutral-darkGray mb-2">{t('openEvents.features.networking.title')}</h3>
                    <p className="text-sm">{t('openEvents.features.networking.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Topics we cover */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">{t('openEvents.topics.title')}</h2>
              <div className="space-y-4">
                <p className="text-neutral-gray">{t('openEvents.topics.description')}</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutral-darkGray">{t('openEvents.topics.personal.title')}</h4>
                    <ul className="space-y-2 text-sm text-neutral-gray">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary-dark rounded-full"></span>
                        <span>{t('openEvents.topics.personal.timeManagement')}</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary-dark rounded-full"></span>
                        <span>{t('openEvents.topics.personal.communication')}</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary-dark rounded-full"></span>
                        <span>{t('openEvents.topics.personal.stress')}</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary-dark rounded-full"></span>
                        <span>{t('openEvents.topics.personal.mindfulness')}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutral-darkGray">{t('openEvents.topics.professional.title')}</h4>
                    <ul className="space-y-2 text-sm text-neutral-gray">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary-dark rounded-full"></span>
                        <span>{t('openEvents.topics.professional.careerPlanning')}</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary-dark rounded-full"></span>
                        <span>{t('openEvents.topics.professional.jobSkills')}</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary-dark rounded-full"></span>
                        <span>{t('openEvents.topics.professional.entrepreneurship')}</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary-dark rounded-full"></span>
                        <span>{t('openEvents.topics.professional.personalFinance')}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Past and upcoming events */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">{t('openEvents.events.title')}</h2>

              <div className="space-y-6">
                {/* Past event */}
                <div className="bg-white/50 rounded-2xl p-6 border border-white/30">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">{t('openEvents.events.pastLabel')}</span>
                    </div>
                    <span className="text-sm text-neutral-gray">{t('openEvents.events.pastDate')}</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-darkGray mb-2">{t('openEvents.events.past.title')}</h3>
                  <p className="text-neutral-gray text-sm">{t('openEvents.events.past.description')}</p>
                </div>

                {/* Upcoming event */}
                <div className="bg-white/50 rounded-2xl p-6 border border-white/30">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs font-semibold">{t('openEvents.events.upcomingLabel')}</span>
                    </div>
                    <span className="text-sm text-neutral-gray">{t('openEvents.events.upcomingDate')}</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-darkGray mb-2">{t('openEvents.events.upcoming.title')}</h3>
                  <p className="text-neutral-gray text-sm">{t('openEvents.events.upcoming.description')}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-br from-secondary/10 to-white rounded-3xl p-12 border border-secondary/20">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-4">{t('openEvents.cta.title')}</h2>
              <p className="text-neutral-gray mb-8">{t('openEvents.cta.description')}</p>
              <Link
                href="https://t.me/BuddysNetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-secondary to-nature text-white font-medium rounded-full hover:shadow-lg transition-all"
              >
                {t('openEvents.cta.button')}
                <FaTelegramPlane className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
