'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Link from 'next/link';
import { FiMail, FiArrowRight, FiUsers, FiCalendar } from 'react-icons/fi';
import { FaTelegramPlane, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

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
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-[40px] p-8 md:p-10 animate-fade-in hover:shadow-2xl hover:scale-[1.01] transition-all duration-300"
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
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center">
                    {t('form.submit')}
                    <FiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden />
                  </span>
                </button>
              </form>
            </div>

            {/* Get Involved Cards */}
              <div className="space-y-6">
              {/* Telegram CTA */}
              <div
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-8 hover:shadow-lg hover:scale-[1.01] transition-all animate-fade-in"
                style={{ animationDelay: '0.5s' }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0 p-3">
                    <FaTelegramPlane className="w-7 h-7 text-white" aria-hidden />
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
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
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
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-8 animate-fade-in hover:shadow-lg hover:scale-[1.01] transition-all"
                style={{ animationDelay: '0.7s' }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-nature rounded-2xl flex items-center justify-center flex-shrink-0 p-3">
                    <FiUsers className="w-7 h-7 text-white" aria-hidden />
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
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl rounded-3xl p-8 animate-fade-in hover:shadow-lg hover:scale-[1.01] transition-all"
                style={{ animationDelay: '0.9s' }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-nature to-secondary rounded-2xl flex items-center justify-center flex-shrink-0 p-3">
                    <FiMail className="w-7 h-7 text-white" aria-hidden />
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
                className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group p-3"
                aria-label="Telegram"
              >
                <FaTelegramPlane className="w-6 h-6 text-white group-hover:text-white transition-colors" aria-hidden />
              </a>

              {/* Facebook - Placeholder */}
              <a
                href="#"
                className="w-14 h-14 bg-gradient-to-br from-secondary to-nature rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group p-3"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-6 h-6 text-white group-hover:text-white transition-colors" aria-hidden />
              </a>

              {/* Instagram - Placeholder */}
              <a
                href="#"
                className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group p-3"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6 text-white group-hover:text-white transition-colors" aria-hidden />
              </a>

              {/* LinkedIn - Placeholder */}
              <a
                href="#"
                className="w-14 h-14 bg-gradient-to-br from-nature to-secondary rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group p-3"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-6 h-6 text-white group-hover:text-white transition-colors" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
