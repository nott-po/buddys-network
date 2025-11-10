'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FiBook, FiHeart, FiTrendingUp, FiMessageSquare } from 'react-icons/fi';

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
              <div className="relative bg-white/80 backdrop-blur-xl rounded-[40px] p-4 shadow-2xl border border-white/40 animate-float">
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
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0 p-2">
                    <FiBook className="w-6 h-6 text-white" aria-hidden />
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
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-nature rounded-2xl flex items-center justify-center flex-shrink-0 p-2">
                    <FiHeart className="w-6 h-6 text-white" aria-hidden />
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
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0 p-2">
                    <FiTrendingUp className="w-6 h-6 text-white" aria-hidden />
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
            <div className="relative bg-white/30 backdrop-blur-2xl rounded-[40px] p-10 md:p-12 border border-white/40 shadow-2xl hover:shadow-3xl hover:scale-[1.01] transition-all duration-300">
              {/* Quote icon */}
              <div className="absolute top-8 left-8 text-primary/20">
                <FiMessageSquare className="w-16 h-16" aria-hidden />
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
