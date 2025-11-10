'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { FiMail } from 'react-icons/fi';
import { FaTelegramPlane, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-darkGray text-neutral-lightGray pt-6">
      {/* Decorative top stripe */}
      <div className="w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
            {/* Logo + Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="relative w-14 h-14">
                  <Image
                    src="/images/logo/logo2.png"
                    alt="Buddy's Network"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold text-white">Buddy&#39;s Network</span>
              </div>
              <p className="text-neutral-lightGray text-sm leading-relaxed">{t('description')}</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">{t('quickLinks')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#about"
                    className="text-neutral-lightGray hover:from-primary hover:to-secondary hover:bg-gradient-to-r hover:text-white transition-colors px-3 py-1 rounded-md"
                  >
                    {t('about')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#programs"
                    className="text-neutral-lightGray hover:from-primary hover:to-secondary hover:bg-gradient-to-r hover:text-white transition-colors px-3 py-1 rounded-md"
                  >
                    {t('programs')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#events"
                    className="text-neutral-lightGray hover:from-primary hover:to-secondary hover:bg-gradient-to-r hover:text-white transition-colors px-3 py-1 rounded-md"
                  >
                    {t('events')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-neutral-lightGray hover:from-primary hover:to-secondary hover:bg-gradient-to-r hover:text-white transition-colors px-3 py-1 rounded-md"
                  >
                    {t('contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">{t('ourPrograms')}</h3>
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
              <h3 className="text-lg font-semibold mb-4 text-white">{t('connect')}</h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 p-2">
                    <FiMail className="w-5 h-5 text-white" aria-hidden />
                  </div>
                  <div>
                    <a
                      href="mailto:info@buddys.network"
                      className="text-neutral-lightGray hover:text-primary transition-colors text-sm"
                    >
                      info@buddys.network
                    </a>
                    <p className="text-neutral-lightGray text-sm mt-1">+48 123 456 789</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-3 pt-2">
                  <a
                    href="https://t.me/BuddysNetwork"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center transition-all p-2 group"
                    aria-label="Telegram"
                  >
                    <FaTelegramPlane className="w-5 h-5 text-white" aria-hidden />
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 bg-gradient-to-br from-secondary to-nature rounded-xl flex items-center justify-center transition-all p-2 group"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="w-5 h-5 text-white" aria-hidden />
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center transition-all p-2 group"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-5 h-5 text-white" aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </div>

        {/* Divider */}
        <div className="border-t border-neutral-gray my-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p className="text-neutral-lightGray text-sm">
            © {currentYear} Buddy&#39;s Network. {t('rights')}
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
