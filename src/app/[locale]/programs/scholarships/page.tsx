"use client";

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

export default function ScholarshipsPage() {
  const t = useTranslations('programs');
  const ts = useTranslations('scholarships');
  const [width, setWidth] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    // mark mounted to show real content after hydration
    setMounted(true);

    function update() {
      setWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const bp = width >= 1024 ? 'lg' : width >= 768 ? 'md' : width >= 640 ? 'sm' : 'xs';
  // show skeleton until client mounts to improve perceived performance
  if (!mounted) {
    return (
      <div className="min-h-screen pt-20">
        <section className="relative -mt-20 pt-20 py-24 bg-gradient-to-br from-primary/10 to-white">
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
                <div className="space-y-3">
                  <div className="h-4 bg-white/10 rounded w-full"></div>
                  <div className="h-4 bg-white/10 rounded w-full"></div>
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
      {/* Hero Section - pulled up so gradient starts at the top */}
      <section className="relative -mt-20 pt-20 py-24 bg-gradient-to-br from-primary/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-white/30 shadow-xl overflow-hidden">
              {/* responsive width indicator (quick visual check) */}
              <div className="absolute top-4 right-4 bg-white/10 text-xs text-white px-3 py-1 rounded-full">
                {width}px • {bp}
              </div>

              <div className="inline-flex items-center space-x-3 px-2 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4 border border-primary/20">
                {t('scholarships.title')}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-nature bg-clip-text text-transparent">
                  {t('scholarships.title')}
                </span>
              </h1>

              <p className="text-lg text-neutral-gray mb-6">{t('scholarships.description')}</p>

              {/* hero CTA removed per design (no Learn more button) */}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">{ts('about.title')}</h2>
              <div className="prose prose-lg max-w-none text-neutral-gray">
                <p className="mb-4">{ts('about.description1')}</p>
                <p className="mb-4">{ts('about.description2')}</p>
              </div>
            </div>

            {/* Criteria */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">{ts('criteria.title')}</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FiCheck className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-darkGray mb-1">{ts('criteria.origin.title')}</h3>
                    <p className="text-neutral-gray">{ts('criteria.origin.description')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FiCheck className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-darkGray mb-1">{ts('criteria.abilities.title')}</h3>
                    <p className="text-neutral-gray">{ts('criteria.abilities.description')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FiCheck className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-darkGray mb-1">{ts('criteria.financial.title')}</h3>
                    <p className="text-neutral-gray">{ts('criteria.financial.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-4">{ts('status.title')}</h2>
              <p className="text-neutral-gray text-lg mb-6">{ts('status.description')}</p>
              <Link
                href="/#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:shadow-lg transition-all"
              >
                {ts('status.cta')}
                <FiArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
