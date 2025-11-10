'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      className="py-24 bg-gradient-to-br from-neutral-lightest via-white to-accent/10"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 border border-primary/20">
              {t('badge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-darkest mb-6">
              {t('title')}
            </h2>
            <p className="text-lg text-neutral-dark">{t('subtitle')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-[40px] p-8 md:p-10 animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              <h3 className="text-2xl font-bold text-neutral-darkest mb-6">{t('form.title')}</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-darkest mb-2"
                  >
                    {t('form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder={t('form.namePlaceholder')}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-darkest mb-2"
                  >
                    {t('form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder={t('form.emailPlaceholder')}
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-darkest mb-2"
                  >
                    {t('form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder={t('form.messagePlaceholder')}
                  />
                </div>

                {/* Submit Button - Updated with new style */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center">
                    {t('form.submit')}
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </button>
              </form>
            </div>

            {/* Get Involved Cards */}
            <div className="space-y-6">
              {/* Telegram CTA */}
              <div
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-8 hover:shadow-lg transition-all animate-fade-in"
                style={{ animationDelay: '0.5s' }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-neutral-darkest mb-2">
                      {t('telegram.title')}
                    </h4>
                    <p className="text-neutral-gray mb-4">{t('telegram.description')}</p>
                    <Link
                      href="https://t.me/BuddysNetwork"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent to-primary text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      {t('telegram.cta')}
                      <svg
                        className="w-5 h-5 ml-2"
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
                </div>
              </div>

              {/* Meeting Info */}
              <div
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-8 animate-fade-in"
                style={{ animationDelay: '0.7s' }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-nature rounded-2xl flex items-center justify-center flex-shrink-0">
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
                  <div>
                    <h4 className="text-xl font-bold text-neutral-darkest mb-2">
                      {t('meetings.title')}
                    </h4>
                    <p className="text-neutral-gray">{t('meetings.description')}</p>
                  </div>
                </div>
              </div>

              {/* Email Contact */}
              <div
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-8 animate-fade-in"
                style={{ animationDelay: '0.9s' }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-nature to-secondary-dark rounded-2xl flex items-center justify-center flex-shrink-0">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-neutral-darkest mb-2">
                      {t('email.title')}
                    </h4>
                    <a
                      href="mailto:info@buddys.network"
                      className="text-primary hover:text-secondary transition-colors font-medium"
                    >
                      info@buddys.network
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '1.1s' }}>
            <h3 className="text-2xl font-bold text-neutral-darkest mb-8">{t('social.title')}</h3>
            <div className="flex justify-center space-x-4">
              {/* Telegram */}
              <a
                href="https://t.me/BuddysNetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-gradient-to-br hover:from-primary hover:to-secondary rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Telegram"
              >
                <svg
                  className="w-6 h-6 text-primary group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                </svg>
              </a>

              {/* Facebook - Placeholder */}
              <a
                href="#"
                className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-gradient-to-br hover:from-accent hover:to-primary rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6 text-primary group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram - Placeholder */}
              <a
                href="#"
                className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-gradient-to-br hover:from-secondary hover:to-nature rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6 text-primary group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn - Placeholder */}
              <a
                href="#"
                className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-gradient-to-br hover:from-nature-dark hover:to-secondary-dark rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6 text-primary group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
