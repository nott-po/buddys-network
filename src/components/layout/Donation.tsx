'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FiCheck, FiHeart, FiUsers, FiShare2, FiArrowRight } from 'react-icons/fi';

export default function Donation() {
  const t = useTranslations('donation');

  return (
    <section
      className="py-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5"
      id="support"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-6 border border-secondary/20">
              {t('badge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-darkest mb-6">
              {t('title')}
            </h2>
            <p className="text-lg text-neutral-dark">{t('subtitle')}</p>
          </div>

          {/* Main CTA Card */}
          <div className="relative mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Decorative bg */}
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float"
              style={{ animationDelay: '1s' }}
            ></div>

            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-[40px] p-10 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Message */}
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-neutral-darkest mb-6">
                    {t('main.title')}
                  </h3>
                  <p className="text-lg text-neutral-dark leading-relaxed mb-6">
                    {t('main.description')}
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1 p-[2px]">
                          <FiCheck className="w-4 h-4 text-white" aria-hidden />
                        </div>
                      <span className="text-neutral-gray">{t('main.point1')}</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1 p-[2px]">
                        <FiCheck className="w-4 h-4 text-white" aria-hidden />
                      </div>
                      <span className="text-neutral-gray">{t('main.point2')}</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1 p-[2px]">
                        <FiCheck className="w-4 h-4 text-white" aria-hidden />
                      </div>
                      <span className="text-neutral-gray">{t('main.point3')}</span>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-8">
                  <div className="text-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-secondary to-nature rounded-full flex items-center justify-center mx-auto mb-4 p-3">
                        <FiHeart className="w-10 h-10 text-white" aria-hidden />
                      </div>
                    <h4 className="text-2xl font-bold text-neutral-darkest mb-2">
                      {t('cta.title')}
                    </h4>
                    <p className="text-neutral-gray mb-6">{t('cta.description')}</p>
                  </div>

                  <Link
                    href="mailto:info@buddys.network?subject=Support Buddy's Network"
                    className="block w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
                  >
                    {t('cta.button')}
                  </Link>

                  <p className="text-xs text-neutral-gray text-center mt-4">{t('cta.note')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ways to Support */}
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-3xl font-bold text-neutral-darkest text-center mb-10">
              {t('ways.title')}
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Volunteer */}
              <div
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: '0.7s' }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 p-3">
                  <FiUsers className="w-7 h-7 text-white" aria-hidden />
                </div>
                <h4 className="text-xl font-bold text-neutral-darkest mb-3">
                  {t('ways.volunteer.title')}
                </h4>
                <p className="text-neutral-gray text-sm leading-relaxed mb-4">
                  {t('ways.volunteer.description')}
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full transition-all duration-300"
                >
                  {t('ways.volunteer.link')}
                  <FiArrowRight className="w-4 h-4 ml-1" aria-hidden />
                </Link>
              </div>

              {/* Share */}
              <div
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: '0.9s' }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-nature rounded-2xl flex items-center justify-center mb-6 p-3">
                  <FiShare2 className="w-7 h-7 text-white" aria-hidden />
                </div>
                <h4 className="text-xl font-bold text-neutral-darkest mb-3">
                  {t('ways.share.title')}
                </h4>
                <p className="text-neutral-gray text-sm leading-relaxed mb-4">
                  {t('ways.share.description')}
                </p>
                <Link
                  href="https://t.me/BuddysNetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full transition-all duration-300"
                >
                  {t('ways.share.link')}
                  <FiArrowRight className="w-4 h-4 ml-1" aria-hidden />
                </Link>
              </div>

              {/* Partner */}
              <div
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-8 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: '1.1s' }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-nature to-secondary rounded-2xl flex items-center justify-center mb-6 p-3">
                  <FiUsers className="w-7 h-7 text-white" aria-hidden />
                </div>
                <h4 className="text-xl font-bold text-neutral-darkest mb-3">
                  {t('ways.partner.title')}
                </h4>
                <p className="text-neutral-gray text-sm leading-relaxed mb-4">
                  {t('ways.partner.description')}
                </p>
                <Link
                  href="mailto:info@buddys.network?subject=Partnership Inquiry"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full transition-all duration-300"
                >
                  {t('ways.partner.link')}
                  <FiArrowRight className="w-4 h-4 ml-1" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-32 left-8 w-24 h-24 bg-nature/5 rounded-full blur-2xl animate-float"></div>
      <div
        className="absolute bottom-32 right-8 w-32 h-32 bg-secondary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '2s' }}
      ></div>
    </section>
  );
}
