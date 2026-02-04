import { defineType, defineField } from 'sanity'

export const footerSettings = defineType({
  name: 'footerSettings',
  title: 'Kontakt i Social Media',
  type: 'document',
  fields: [
    defineField({
      name: 'contactEmail',
      title: 'Email kontaktowy',
      type: 'string',
      description: 'np. fundacja@buddys.network',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Telefon kontaktowy',
      type: 'string',
      description: 'np. +48 123 456 789',
    }),
    defineField({
      name: 'socialTelegram',
      title: 'Telegram URL',
      type: 'string',
      description: 'np. https://t.me/BuddysNetwork',
    }),
    defineField({
      name: 'socialFacebook',
      title: 'Facebook URL',
      type: 'string',
      description: 'np. https://facebook.com/BuddysNetwork',
    }),
    defineField({
      name: 'socialInstagram',
      title: 'Instagram URL',
      type: 'string',
      description: 'np. https://instagram.com/buddysnetwork',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Kontakt i Social Media',
        subtitle: 'Kliknij żeby edytować',
      }
    },
  },
})
