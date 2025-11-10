'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FiCheck, FiArrowRight, FiUsers, FiCalendar, FiTarget, FiHeart } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

export default function PeerGroupsPage() {
  const t = useTranslations('programs');
  const ts = useTranslations('peerGroups');
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    function update() {
      setWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const bp = width >= 1024 ? 'lg' : width >= 768 ? 'md' : width >= 640 ? 'sm' : 'xs';

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative -mt-20 pt-20 py-24 bg-gradient-to-br from-secondary/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-white/30 shadow-xl overflow-hidden">
              <div className="absolute top-4 right-4 bg-white/10 text-xs text-white px-3 py-1 rounded-full">
                {width}px • {bp}
              </div>

              <div className="inline-flex items-center space-x-3 px-3 py-1 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-4 border border-secondary/20">
                <FiUsers className="w-4 h-4" />
                {ts('title')}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-secondary to-nature bg-clip-text text-transparent">
                  {ts('title')}
                </span>
              </h1>
 
              <p className="text-lg text-neutral-gray mb-6">{ts('subtitle')}</p>

              {/* hero CTA removed to match Scholarships hero */}
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
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">{ts('howItWorks.title')}</h2>
              <div className="prose prose-lg max-w-none text-neutral-gray">
                <p className="mb-4">{ts('howItWorks.description')}</p>
                <p className="mb-4">{ts('howItWorks.description')}</p>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">{ts('howItWorks.title')}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/50 rounded-2xl p-6 border border-white/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-nature rounded-xl flex items-center justify-center mb-4">
                    <FiCalendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-neutral-darkGray mb-2">{ts('howItWorks.frequency.title')}</h3>
                  <p className="text-sm text-neutral-gray">{ts('howItWorks.frequency.description')}</p>
                </div>

                <div className="bg-white/50 rounded-2xl p-6 border border-white/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-nature rounded-xl flex items-center justify-center mb-4">
                    <FiUsers className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-neutral-darkGray mb-2">{ts('howItWorks.size.title')}</h3>
                  <p className="text-sm text-neutral-gray">{ts('howItWorks.size.description')}</p>
                </div>

                <div className="bg-white/50 rounded-2xl p-6 border border-white/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-nature rounded-xl flex items-center justify-center mb-4">
                    <FiTarget className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-neutral-darkGray mb-2">{ts('howItWorks.format.title')}</h3>
                  <p className="text-sm text-neutral-gray">{ts('howItWorks.format.description')}</p>
                </div>

                <div className="bg-white/50 rounded-2xl p-6 border border-white/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-nature rounded-xl flex items-center justify-center mb-4">
                    <FiHeart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-neutral-darkGray mb-2">{ts('howItWorks.organization.title')}</h3>
                  <p className="text-sm text-neutral-gray">{ts('howItWorks.organization.description')}</p>
                </div>
              </div>
            </div>

            {/* Topics */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">{ts('topics.title')}</h2>
              <div className="space-y-4">
                <p className="text-neutral-gray">{ts('topics.description')}</p>

                <div className="space-y-4">
                  {[
                    { title: ts('topics.challenges'), desc: ts('topics.challenges') },
                    { title: ts('topics.goals'), desc: ts('topics.goals') },
                    { title: ts('topics.experiences'), desc: ts('topics.experiences') },
                    { title: ts('topics.problemSolving'), desc: ts('topics.problemSolving') },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-secondary to-nature rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FiCheck className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-neutral-darkGray mb-1">{item.title}</h3>
                        <p className="text-neutral-gray">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Footer */}
            <div className="bg-gradient-to-br from-secondary/10 to-nature/10 rounded-3xl p-8 md:p-12 border border-secondary/20">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-neutral-darkGray mb-4">{ts('cta.title')}</h2>
                <p className="text-neutral-gray text-lg mb-6">{ts('cta.description')}</p>
                <Link
                  href="https://t.me/BuddysNetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-secondary to-nature text-white font-medium rounded-full hover:shadow-lg transition-all"
                >
                  {ts('cta.telegram')}
                  <FaTelegramPlane className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}