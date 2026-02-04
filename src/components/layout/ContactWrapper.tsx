import { cachedFetch } from '../../../sanity/lib/client'
import { footerSettingsQuery } from '../../../sanity/lib/queries'
import Contact from './Contact'

type FooterSettings = {
  contactEmail?: string
  contactPhone?: string
  socialTelegram?: string
  socialFacebook?: string
  socialInstagram?: string
}

export default async function ContactWrapper() {
  const settings: FooterSettings | null = await cachedFetch(footerSettingsQuery)

  const contactData = {
    email: settings?.contactEmail || 'fundacja@buddys.network',
    telegram: settings?.socialTelegram || 'https://t.me/BuddysNetwork',
    facebook: settings?.socialFacebook || '#',
    instagram: settings?.socialInstagram || '#',
  }

  return <Contact contactData={contactData} />
}
