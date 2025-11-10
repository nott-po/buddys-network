'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);

  const languages = [
    { code: 'pl', name: 'Polski', flag: '🇵🇱' },
    { code: 'en', name: 'English', flag: 'en' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'uk', name: 'Українська', flag: '🇺🇦' },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const handleLanguageChange = (newLocale: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
    setIsLanguageMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '/#home', label: t('home') },
    { href: '/#about', label: t('about') },
    { href: '/#programs', label: t('programs') },
    { href: '/#events', label: t('events') },
    { href: '/#contact', label: t('contact') },
  ];

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (isLanguageMenuOpen && langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    }

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsLanguageMenuOpen(false);
    }

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [isLanguageMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-neutral-white/95 backdrop-blur-md border-b border-neutral-lightGray shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-4 group">
            <div className="relative w-14 h-14 transition-transform group-hover:scale-105">
              <Image
                src="/images/logo/logo2.png"
                alt={"Buddy&apos;s Network"}
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-bold text-primary hidden sm:block">Buddy&apos;s Network</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-3">
            {navLinks.map((link) => {
              const isHome = link.href === '/#home';
              const href = isHome ? `/${locale}` : `/${locale}${link.href}`;

              return (
                <Link
                  key={link.href}
                  href={href}
                  className="px-5 py-2 text-neutral-darkGray font-medium rounded-full transition-all border border-transparent hover:from-primary hover:to-secondary hover:bg-gradient-to-r hover:text-white"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Language Switcher + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher Desktop - show only flag to avoid duplicate language label */}
            <div ref={langRef} className="hidden lg:block relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                aria-label="Change language"
                className="flex items-center px-3 py-2 rounded-full bg-white/10 hover:from-primary hover:to-secondary hover:bg-gradient-to-r hover:text-white transition-all"
              >
                <span className="text-xl">{currentLanguage?.flag}</span>
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${isLanguageMenuOpen ? 'rotate-180' : ''}`}
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
              </button>

              {/* Language Dropdown */}
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-neutral-lightGray overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-neutral-lightGray transition-colors ${
                        locale === lang.code ? 'bg-primary/10 text-primary' : ''
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                      {locale === lang.code && (
                        <svg className="w-5 h-5 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-lightGray transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-lightGray animate-slide-up">
            {/* Mobile Navigation Links */}
            <div className="space-y-2 mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/${locale}${link.href === '/' ? '' : link.href}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-neutral-lightGray transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Language Switcher */}
            <div className="border-t border-neutral-lightGray pt-4">
              <p className="px-4 text-sm text-neutral-gray mb-2 font-semibold">{t('language')}</p>
              <div className="space-y-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      locale === lang.code ? 'bg-primary text-white' : 'hover:bg-neutral-lightGray'
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                    {locale === lang.code && (
                      <svg className="w-5 h-5 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
