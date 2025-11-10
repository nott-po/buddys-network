'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedStat } from '../../hooks/useScrollAnimations';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-br from-neutral-lightest via-white to-accent-light/20"
      id="hero"
    >
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-nature/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-3/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/6 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Enhanced Main Content Card */}
            <div className="relative animate-fade-in">
              {/* Main bg-white/10 backdrop-blur-xl border border-white/20 Card */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-[40px] p-10 md:p-12 shadow-2xl overflow-hidden">
                {/* Top decorative gradient line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-nature-gradient"></div>

                {/* Badge with icon */}
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/40 backdrop-blur-xl rounded-full text-primary text-sm font-medium mb-6 border border-white/50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span>{t('badge')}</span>
                </div>

                {/* Logo/Icon */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-3 bg-white/30 backdrop-blur-xl rounded-3xl p-5 md:p-6 border border-white/40">
                  <Image
                    src="/images/logo/logo2.png"
                    alt="Buddy's Network"
                    fill
                    className="object-contain p-3"
                  />
                </div>

                {/* Title with new gradient */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-primary via-secondary to-nature bg-clip-text text-transparent">
                    Buddy&#39;s
                  </span>
                  <br />
                  <span className="text-neutral-darkest">Network</span>
                </h1>

                {/* Description */}
                <p className="text-lg text-neutral-dark leading-relaxed mb-8">{t('description')}</p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#programs"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                  >
                    {t('cta')}
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
                  </Link>

                  <Link
                    href="#about"
                    className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-neutral-darkest font-medium hover:bg-white/20 transition-all duration-300 group"
                  >
                    Learn More
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Bottom decorative element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary/10 to-transparent rounded-tl-full"></div>
              </div>

              {/* Floating mini badges */}
              <div className="absolute -top-4 right-8 bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full shadow-lg animate-gentle-bounce">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-nature rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-neutral-darkest">Active Community</span>
                </div>
              </div>
            </div>

            {/* Right: Hero Illustration with Animated Stats */}
            <div className="relative animate-fade-in">
              {/* Main illustration */}
              <div className="relative">
                <Image
                  src="/images/illustrations/hero.png"
                  alt="Community Growth Illustration"
                  width={600}
                  height={600}
                  className="w-full h-auto animate-float"
                  priority
                />
              </div>

              {/* Floating Stats Cards with Animated Counters */}
              <div className="absolute top-8 -left-8 bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-6 shadow-xl animate-fade-in">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-nature to-secondary rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <AnimatedStat value={4} label={t('stats.programs')} />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-16 -right-8 bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-6 shadow-xl animate-fade-in">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <AnimatedStat value={100} label={t('stats.members')} suffix="+" />
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-12 bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-6 shadow-xl animate-fade-in">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-nature-light rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
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
                  <div>
                    <AnimatedStat value={4} label={t('stats.countries')} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
