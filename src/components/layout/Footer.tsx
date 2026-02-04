import { cachedFetch } from '../../../sanity/lib/client'
import { footerSettingsQuery } from '../../../sanity/lib/queries'
import Link from 'next/link'
import Image from 'next/image'
import { FiMail, FiPhone } from 'react-icons/fi'
import { FaTelegramPlane, FaFacebookF, FaInstagram } from 'react-icons/fa'

type FooterSettings = {
  contactEmail?: string
  contactPhone?: string
  socialTelegram?: string
  socialFacebook?: string
  socialInstagram?: string
}

export default async function Footer() {
  const settings: FooterSettings | null = await cachedFetch(footerSettingsQuery)
  const currentYear = new Date().getFullYear()

  const email = settings?.contactEmail || 'fundacja@buddys.network'
  const phone = settings?.contactPhone || '+48 123 456 789'
  const telegram = settings?.socialTelegram || 'https://t.me/BuddysNetwork'
  const facebook = settings?.socialFacebook || '#'
  const instagram = settings?.socialInstagram || '#'

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
                  src="/images/logo/logo.png"
                  alt="Buddy's Network"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">Buddy&#39;s Network</span>
            </div>
            <p className="text-neutral-lightGray text-sm leading-relaxed">
              Wspieramy młodzież poprzez różnorodne inicjatywy edukacyjne i społeczne.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Szybkie linki</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-neutral-lightGray hover:text-primary transition-colors">
                  O nas
                </Link>
              </li>
              <li>
                <Link href="#programs" className="text-neutral-lightGray hover:text-primary transition-colors">
                  Programy
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-neutral-lightGray hover:text-primary transition-colors">
                  Wydarzenia
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-neutral-lightGray hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Programy</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs/scholarships" className="text-neutral-lightGray hover:text-secondary transition-colors">
                  Stypendia
                </Link>
              </li>
              <li>
                <Link href="/programs/peer-groups" className="text-neutral-lightGray hover:text-secondary transition-colors">
                  Grupy wsparcia
                </Link>
              </li>
              <li>
                <Link href="/programs/events" className="text-neutral-lightGray hover:text-secondary transition-colors">
                  Wydarzenia
                </Link>
              </li>
              <li>
                <Link href="/programs/club" className="text-neutral-lightGray hover:text-secondary transition-colors">
                  Klub
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Kontakt</h3>
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiMail className="w-5 h-5 text-white" />
                </div>
                <a href={`mailto:${email}`} className="text-neutral-lightGray hover:text-primary transition-colors text-sm">
                  {email}
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-nature rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiPhone className="w-5 h-5 text-white" />
                </div>
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-neutral-lightGray hover:text-primary transition-colors text-sm">
                  {phone}
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-3 pt-2">
                <a
                  href={telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center transition-all"
                  aria-label="Telegram"
                >
                  <FaTelegramPlane className="w-5 h-5 text-white" />
                </a>

                {facebook !== '#' && (
                  <a
                    href={facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-secondary to-nature rounded-xl flex items-center justify-center transition-all"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="w-5 h-5 text-white" />
                  </a>
                )}

                {instagram !== '#' && (
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center transition-all"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-5 h-5 text-white" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-gray my-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p className="text-neutral-lightGray text-sm">
            © {currentYear} Buddy&#39;s Network. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}
