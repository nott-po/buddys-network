'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

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
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-neutral-gray">{t('main.point1')}</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-neutral-gray">{t('main.point2')}</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-neutral-gray">{t('main.point3')}</span>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-secondary to-nature rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-10 h-10 text-white"
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
                    <h4 className="text-2xl font-bold text-neutral-darkest mb-2">
                      {t('cta.title')}
                    </h4>
                    <p className="text-neutral-gray mb-6">{t('cta.description')}</p>
                  </div>

                  <Link
                    href="mailto:info@buddys.network?subject=Support Buddy's Network"
                    className="block w-full px-8 py-4 bg-gradient-to-r from-secondary to-nature text-white font-semibold rounded-full hover:shadow-lg hover:scale-[1.02] transition-all duration-300 text-center"
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
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-8 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: '0.7s' }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-neutral-darkest mb-3">
                  {t('ways.volunteer.title')}
                </h4>
                <p className="text-neutral-gray text-sm leading-relaxed mb-4">
                  {t('ways.volunteer.description')}
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-medium rounded-full hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-all duration-300"
                >
                  {t('ways.volunteer.link')}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              {/* Share */}
              <div
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-8 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: '0.9s' }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-nature rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
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
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-secondary/10 to-nature/10 text-secondary font-medium rounded-full hover:bg-gradient-to-r hover:from-secondary hover:to-nature hover:text-white transition-all duration-300"
                >
                  {t('ways.share.link')}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>

              {/* Partner */}
              <div
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-8 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: '1.1s' }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-nature-dark to-secondary-dark rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-neutral-darkest mb-3">
                  {t('ways.partner.title')}
                </h4>
                <p className="text-neutral-gray text-sm leading-relaxed mb-4">
                  {t('ways.partner.description')}
                </p>
                <Link
                  href="mailto:info@buddys.network?subject=Partnership Inquiry"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-nature-dark/10 to-secondary-dark/10 text-nature-dark font-medium rounded-full hover:bg-gradient-to-r hover:from-nature-dark hover:to-secondary-dark hover:text-white transition-all duration-300"
                >
                  {t('ways.partner.link')}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
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
