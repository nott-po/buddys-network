'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20" id="hero">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-bg22.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Enhanced Main Content Card */}
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>

              {/* Main Glass Card */}
              <div className="relative bg-white/20 backdrop-blur-2xl rounded-[40px] p-10 md:p-12 shadow-2xl border border-white/40 overflow-hidden">
                {/* Top decorative line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary-dark"></div>

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
                <div className="relative w-20 h-20 mb-6 bg-white/30 backdrop-blur-xl rounded-3xl p-4 border border-white/40">
                  <Image
                    src="/images/logo/logo.png"
                    alt="Buddy's Network"
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Title with gradient */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent">
                    Buddy's
                  </span>
                  <br />
                  <span className="text-neutral-darkGray">Network</span>
                </h1>

                {/* Description */}
                <p className="text-lg text-neutral-darkGray/80 leading-relaxed mb-8">
                  {t('description')}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#programs"
                    className="inline-flex items-center px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-all hover:shadow-lg hover:scale-105 group"
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
                    className="inline-flex items-center px-8 py-4 bg-white/40 backdrop-blur-xl text-neutral-darkGray font-medium rounded-full hover:bg-white/60 transition-all border border-white/50 group"
                  >
                    Learn More
                    <svg
                      className="w-5 h-5 ml-2"
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
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full"></div>
              </div>

              {/* Floating mini badges */}
              <div className="absolute -top-4 right-8 bg-white/25 backdrop-blur-xl px-4 py-2 rounded-full border border-white/40 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-white">Active Now</span>
                </div>
              </div>
            </div>

            {/* Right: Floating Stats Cards - Keep as is */}
            <div className="space-y-4">
              {/* Programs Card */}
              <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-5xl font-bold text-white drop-shadow-lg mb-2">04</div>
                    <div className="text-white/90 font-medium drop-shadow-md">
                      {t('stats.programs')}
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-white/25 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/40">
                    <svg
                      className="w-8 h-8 text-white drop-shadow-md"
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
                </div>
              </div>

              {/* Members Card */}
              <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-5xl font-bold text-white drop-shadow-lg mb-2">100+</div>
                    <div className="text-white/90 font-medium drop-shadow-md">
                      {t('stats.members')}
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-white/25 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/40">
                    <svg
                      className="w-8 h-8 text-white drop-shadow-md"
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
                </div>
              </div>

              {/* Countries Card */}
              <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-5xl font-bold text-white drop-shadow-lg mb-2">04</div>
                    <div className="text-white/90 font-medium drop-shadow-md">
                      {t('stats.countries')}
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-white/25 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/40">
                    <svg
                      className="w-8 h-8 text-white drop-shadow-md"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
