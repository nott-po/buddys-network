'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FiBook, FiUsers, FiHeart, FiTrendingUp, FiGlobe, FiAward } from 'react-icons/fi';

export default function About() {
  const t = useTranslations('about');

  return (
    <section
      className="py-24 bg-gradient-to-br from-white via-neutral-lightest to-accent/10"
      id="about"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-primary text-sm font-medium mb-6 border border-secondary/20">
              {t('badge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-darkest mb-6">
              {t('title')}
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left - Door illustration (bigger, no card) */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {/* Door illustration - no card wrapper, bigger size */}
              <div className="relative">
                <Image
                  src="/images/illustrations/door.png"
                  alt="Open Doors and Opportunities"
                  width={700}
                  height={600}
                  className="w-full h-auto animate-float"
                />
              </div>

              {/* Floating Stats Card - positioned over illustration */}
              <div
                className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-6 animate-fade-in"
                style={{ animationDelay: '0.8s' }}
              >
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-neutral-darkest mb-1">04</div>
                    <div className="text-xs text-neutral-gray">{t('stats.programsLabel')}</div>
                  </div>
                  <div className="text-center border-x border-neutral-light">
                    <div className="text-3xl font-bold text-neutral-darkest mb-1">04</div>
                    <div className="text-xs text-neutral-gray">{t('stats.countriesLabel')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-neutral-darkest mb-1">100+</div>
                    <div className="text-xs text-neutral-gray">{t('stats.membersLabel')}</div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl px-4 py-2 rounded-full animate-gentle-bounce">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-nature to-secondary rounded-full"></div>
                  <span className="text-sm font-medium text-neutral-darkest">
                    Growing Community
                  </span>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-8">
                <p className="text-xl text-neutral-dark leading-relaxed mb-6">{t('description')}</p>
                <p className="text-lg text-neutral-gray leading-relaxed">{t('mission')}</p>
              </div>

              {/* Mission highlights */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:scale-105 transition-all shadow-xl animate-fade-in"
                  style={{ animationDelay: '0.7s' }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 p-2">
                    <FiBook className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <h4 className="font-bold text-neutral-darkest mb-2">Education Focus</h4>
                  <p className="text-sm text-neutral-gray">
                    Empowering through knowledge and learning opportunities
                  </p>
                </div>

                <div
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:scale-105 transition-all shadow-xl animate-fade-in"
                  style={{ animationDelay: '0.9s' }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-nature rounded-2xl flex items-center justify-center mb-4 p-2">
                    <FiUsers className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <h4 className="font-bold text-neutral-darkest mb-2">Community Driven</h4>
                  <p className="text-sm text-neutral-gray">
                    Building connections across Eastern Europe
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <h3 className="text-3xl font-bold text-neutral-darkest mb-10 text-center">
              {t('valuesTitle')}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Growth */}
              <div
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 group animate-fade-in"
                style={{ animationDelay: '1s' }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 p-3">
                  <FiTrendingUp className="w-7 h-7 text-white group-hover:scale-110 transition-transform" aria-hidden />
                </div>
                <h4 className="text-xl font-bold text-neutral-darkest mb-3">
                  {t('values.growth.title')}
                </h4>
                <p className="text-neutral-gray text-sm leading-relaxed">
                  {t('values.growth.description')}
                </p>
              </div>

              {/* Support */}
              <div
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 group animate-fade-in"
                style={{ animationDelay: '1.1s' }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-nature rounded-2xl flex items-center justify-center mb-6 p-3">
                  <FiHeart className="w-7 h-7 text-white group-hover:scale-110 transition-transform" aria-hidden />
                </div>
                <h4 className="text-xl font-bold text-neutral-darkest mb-3">
                  {t('values.support.title')}
                </h4>
                <p className="text-neutral-gray text-sm leading-relaxed">
                  {t('values.support.description')}
                </p>
              </div>

              {/* Community */}
              <div
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 group animate-fade-in"
                style={{ animationDelay: '1.2s' }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-6 p-3">
                  <FiGlobe className="w-7 h-7 text-white group-hover:scale-110 transition-transform" aria-hidden />
                </div>
                <h4 className="text-xl font-bold text-neutral-darkest mb-3">
                  {t('values.community.title')}
                </h4>
                <p className="text-neutral-gray text-sm leading-relaxed">
                  {t('values.community.description')}
                </p>
              </div>

              {/* Opportunity */}
              <div
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 group animate-fade-in"
                style={{ animationDelay: '1.3s' }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-nature-dark to-secondary-dark rounded-2xl flex items-center justify-center mb-6 p-3">
                  <FiAward className="w-7 h-7 text-white group-hover:scale-110 transition-transform" aria-hidden />
                </div>
                <h4 className="text-xl font-bold text-neutral-darkest mb-3">
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

      {/* Decorative floating elements */}
      <div className="absolute top-32 left-8 w-24 h-24 bg-nature/5 rounded-full blur-2xl animate-float"></div>
      <div
        className="absolute bottom-32 right-8 w-32 h-32 bg-secondary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '1s' }}
      ></div>
    </section>
  );
}
