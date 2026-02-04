import { defineType, defineField } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Wydarzenie',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł',
      type: 'localizedString',
      description: 'Wpisz tytuł w każdym języku (PL, EN, UK, RU)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Adres URL',
      type: 'slug',
      description: 'Kliknij "Generate" żeby utworzyć automatycznie z tytułu',
      options: {
        source: 'title.pl',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data wydarzenia',
      type: 'datetime',
      description: 'Kiedy odbywa się/odbyło wydarzenie',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Zdjęcie (opcjonalne)',
      type: 'image',
      description: 'Dodaj zdjęcie do wydarzenia',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Krótki opis',
      type: 'localizedText',
      description: 'Krótki opis (2-3 zdania) wyświetlany na liście',
    }),
    defineField({
      name: 'content',
      title: 'Pełna treść',
      type: 'localizedBlockContent',
      description: 'Pełny opis wydarzenia z formatowaniem',
    }),
  ],
  preview: {
    select: {
      title: 'title.pl',
      subtitle: 'publishedAt',
      media: 'mainImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Bez tytułu',
        subtitle: subtitle
          ? new Date(subtitle).toLocaleDateString('pl-PL')
          : 'Brak daty',
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Data (najnowsze)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
})
