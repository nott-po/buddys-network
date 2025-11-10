'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Founder() {
  const t = useTranslations('founder');

  return (
    <section
      className="py-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5"
      id="founder"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 border border-primary/20">
              {t('badge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-darkGray mb-6">
              {t('title')}
            </h2>
            <p className="text-lg text-neutral-gray">{t('subtitle')}</p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Photo */}
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[40px] transform rotate-3"></div>

              {/* Main photo card */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-[40px] p-4 shadow-2xl border border-white/40">
                <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden bg-neutral-lightGray">
                  <Image
                    src="/images/founder.jpg"
                    alt="Wład Korecki - Founder"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name badge */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl rounded-3xl p-6 border border-white/40 shadow-xl">
                  <h3 className="text-2xl font-bold text-neutral-darkGray mb-1">Wład Korecki</h3>
                  <p className="text-primary font-medium">{t('role')}</p>
                </div>
              </div>
            </div>

            {/* Right: Story */}
            <div className="space-y-6">
              <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 border border-white/30">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-primary/30 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
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
                    <h4 className="text-xl font-bold text-neutral-darkGray mb-2">
                      {t('journey.title')}
                    </h4>
                    <p className="text-neutral-gray leading-relaxed">{t('journey.description')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 border border-white/30">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-secondary/30 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-neutral-darkGray mb-2">
                      {t('inspiration.title')}
                    </h4>
                    <p className="text-neutral-gray leading-relaxed">
                      {t('inspiration.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 border border-white/30">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary-dark/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-primary-dark/30 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-neutral-darkGray mb-2">
                      {t('vision.title')}
                    </h4>
                    <p className="text-neutral-gray leading-relaxed">{t('vision.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white/30 backdrop-blur-2xl rounded-[40px] p-10 md:p-12 border border-white/40 shadow-2xl">
              {/* Quote icon */}
              <div className="absolute top-8 left-8 text-primary/20">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="relative z-10 pt-12">
                <p className="text-2xl md:text-3xl font-light text-neutral-darkGray italic leading-relaxed text-center mb-6">
                  {t('quote')}
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <div className="h-px w-12 bg-primary"></div>
                  <p className="text-primary font-semibold">Wład Korecki</p>
                  <div className="h-px w-12 bg-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
