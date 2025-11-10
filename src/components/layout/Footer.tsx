'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-darGray text-neutral-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo + Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo/logo.png"
                  alt="Buddy's Network"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold">Buddy's Network</span>
            </div>
            <p className="text-neutral-lightGray text-sm leading-relaxed">{t('description')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-neutral-lightGray hover:text-primary transition-colors"
                >
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link
                  href="#programs"
                  className="text-neutral-lightGray hover:text-primary transition-colors"
                >
                  {t('programs')}
                </Link>
              </li>
              <li>
                <Link
                  href="#events"
                  className="text-neutral-lightGray hover:text-primary transition-colors"
                >
                  {t('events')}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-neutral-lightGray hover:text-primary transition-colors"
                >
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('ourPrograms')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#scholarships"
                  className="text-neutral-lightGray hover:text-secondary transition-colors"
                >
                  {t('scholarships')}
                </Link>
              </li>
              <li>
                <Link
                  href="#peer-groups"
                  className="text-neutral-lightGray hover:text-secondary transition-colors"
                >
                  {t('peerGroups')}
                </Link>
              </li>
              <li>
                <Link
                  href="#open-events"
                  className="text-neutral-lightGray hover:text-secondary transition-colors"
                >
                  {t('openEvents')}
                </Link>
              </li>
              <li>
                <Link
                  href="#club"
                  className="text-neutral-lightGray hover:text-secondary transition-colors"
                >
                  {t('clubActivities')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('connect')}</h3>
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start space-x-2">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="pt-2">
                  <a
                    href="mailto:info@buddys.network"
                    className="text-neutral-lightGray hover:text-primary transition-colors text-sm"
                  >
                    info@buddys.network
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-3 pt-2">
                {/* Telegram */}
                <a
                  href="https://t.me/BuddysNetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-xl hover:bg-primary rounded-xl flex items-center justify-center transition-all border border-white/20 group"
                  aria-label="Telegram"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 backdrop-blur-xl hover:bg-primary rounded-xl flex items-center justify-center transition-all border border-white/20 group"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 backdrop-blur-xl hover:bg-primary rounded-xl flex items-center justify-center transition-all border border-white/20 group"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-gray my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-neutral-lightGray text-sm">
            © {currentYear} Buddy's Network. {t('rights')}
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-neutral-lightGray hover:text-primary transition-colors"
            >
              {t('privacy')}
            </Link>
            <Link
              href="/terms"
              className="text-neutral-lightGray hover:text-primary transition-colors"
            >
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
