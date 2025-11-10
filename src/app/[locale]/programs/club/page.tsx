"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FiGift, FiUsers, FiShare2, FiPenTool, FiCheck } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

export default function ClubPage() {
  const t = useTranslations('programs');
  const ts = useTranslations('clubActivities');
  const [width, setWidth] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    // mark mounted on client to show the real content after hydration
    setMounted(true);

    function update() {
      setWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const bp = width >= 1024 ? 'lg' : width >= 768 ? 'md' : width >= 640 ? 'sm' : 'xs';
  if (!mounted) {
    return (
      <div className="min-h-screen pt-20">
        <section className="relative -mt-20 pt-20 py-24 bg-gradient-to-br from-secondary-dark/10 to-white">
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
                <div className="h-40 bg-white/10 rounded-2xl"></div>
              </div>

              <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 animate-pulse">
                <div className="h-6 w-1/2 bg-white/20 rounded mb-4"></div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="h-40 bg-white/10 rounded-2xl"></div>
                  <div className="h-40 bg-white/10 rounded-2xl"></div>
                </div>
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
      <section className="relative -mt-20 pt-20 py-24 bg-gradient-to-br from-secondary-dark/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-white/30 shadow-xl overflow-hidden">
              <div className="absolute top-4 right-4 bg-white/10 text-xs text-white px-3 py-1 rounded-full">
                {width}px • {bp}
              </div>
              <div className="inline-block px-4 py-2 bg-secondary-dark/10 rounded-full text-secondary-dark text-sm font-medium mb-4 border border-secondary-dark/20">
                {ts('title')}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-darkGray mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-nature bg-clip-text text-transparent">{ts('title')}</span>
              </h1>
              <p className="text-lg text-neutral-gray mb-6">{ts('subtitle')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* What is club activities */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">{ts('what.title')}</h2>
              <div className="space-y-6 text-neutral-gray">
                <p>{ts('what.description1')}</p>

                <p>{ts('what.description2')}</p>
              </div>
            </div>

            {/* Types of activities */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-8">{ts('types.title')}</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Educational Games */}
                <div className="bg-white/50 rounded-2xl p-6 border border-white/30">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-nature rounded-2xl flex items-center justify-center mb-4">
                    <FiGift className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-darkGray mb-3">{ts('types.educational.title')}</h3>
                  <p className="text-neutral-gray text-sm mb-4">{ts('types.educational.description')}</p>
                  <ul className="space-y-2 text-sm text-neutral-gray">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                      <span><strong>{ts('types.educational.cashflow')}</strong></span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                      <span><strong>{ts('types.educational.mafia')}</strong></span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                      <span><strong>{ts('types.educational.strategy')}</strong></span>
                    </li>
                  </ul>
                </div>

                {/* Social Events */}
                <div className="bg-white/50 rounded-2xl p-6 border border-white/30">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-nature rounded-2xl flex items-center justify-center mb-4">
                    <FiUsers className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-darkGray mb-3">{ts('types.social.title')}</h3>
                  <p className="text-neutral-gray text-sm mb-4">{ts('types.social.description')}</p>
                  <ul className="space-y-2 text-sm text-neutral-gray">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                      <span>{ts('types.social.movies')}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                      <span>{ts('types.social.coffee')}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                      <span>{ts('types.social.outdoor')}</span>
                    </li>
                  </ul>
                </div>

                {/* Skill Sharing */}
                <div className="bg-white/50 rounded-2xl p-6 border border-white/30">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-nature rounded-2xl flex items-center justify-center mb-4">
                    <FiShare2 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-darkGray mb-3">{ts('types.skills.title')}</h3>
                  <p className="text-neutral-gray text-sm mb-4">{ts('types.skills.description')}</p>
                  <ul className="space-y-2 text-sm text-neutral-gray">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                      <span>{ts('types.skills.presentations')}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                      <span>{ts('types.skills.workshops')}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                      <span>{ts('types.skills.qa')}</span>
                    </li>
                  </ul>
                </div>

                {/* Creative Activities */}
                <div className="bg-white/50 rounded-2xl p-6 border border-white/30">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-nature rounded-2xl flex items-center justify-center mb-4">
                    <FiPenTool className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-darkGray mb-3">{ts('types.creative.title')}</h3>
                  <p className="text-neutral-gray text-sm mb-4">{ts('types.creative.description')}</p>
                  <ul className="space-y-2 text-sm text-neutral-gray">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                      <span>{ts('types.creative.bookclub')}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                      <span>{ts('types.creative.workshops')}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                      <span>{ts('types.creative.projects')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">{ts('benefits.title')}</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-secondary to-nature rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FiCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-darkGray mb-1">{ts('benefits.relationships.title')}</h3>
                    <p className="text-neutral-gray">{ts('benefits.relationships.description')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-secondary to-nature rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FiCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-darkGray mb-1">{ts('benefits.skills.title')}</h3>
                    <p className="text-neutral-gray">{ts('benefits.skills.description')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-secondary to-nature rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FiCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-darkGray mb-1">{ts('benefits.relaxation.title')}</h3>
                    <p className="text-neutral-gray">{ts('benefits.relaxation.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-br from-secondary-dark/10 to-white rounded-3xl p-12 border border-secondary-dark/20">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-4">{ts('cta.title')}</h2>
              <p className="text-neutral-gray mb-8">{ts('cta.description')}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="https://t.me/BuddysNetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-secondary to-nature text-white font-medium rounded-full hover:shadow-lg transition-all"
                >
                  {ts('cta.telegram')}
                  <FaTelegramPlane className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center px-8 py-4 bg-white/50 backdrop-blur-xl text-neutral-darkGray font-medium rounded-full hover:bg-white transition-all border border-white/50"
                >
                  {ts('cta.ideas')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
