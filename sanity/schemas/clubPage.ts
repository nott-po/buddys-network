import { defineType, defineField } from 'sanity'

export const clubPage = defineType({
  name: 'clubPage',
  title: 'Strona Klubu',
  type: 'document',
  fields: [
    // Hero section
    defineField({
      name: 'title',
      title: 'Tytuł strony',
      type: 'localizedString',
      description: 'Główny tytuł strony (np. "Działania klubowe")',
    }),
    defineField({
      name: 'subtitle',
      title: 'Podtytuł',
      type: 'localizedText',
      description: 'Krótki opis pod tytułem',
    }),

    // What section
    defineField({
      name: 'whatTitle',
      title: 'Tytuł sekcji "Co to jest"',
      type: 'localizedString',
    }),
    defineField({
      name: 'whatDescription1',
      title: 'Opis (akapit 1)',
      type: 'localizedText',
    }),
    defineField({
      name: 'whatDescription2',
      title: 'Opis (akapit 2)',
      type: 'localizedText',
    }),

    // Types of activities
    defineField({
      name: 'typesTitle',
      title: 'Tytuł sekcji "Rodzaje aktywności"',
      type: 'localizedString',
    }),
    defineField({
      name: 'activityTypes',
      title: 'Rodzaje aktywności',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Tytuł aktywności',
              type: 'localizedString',
            }),
            defineField({
              name: 'description',
              title: 'Opis aktywności',
              type: 'localizedText',
            }),
            defineField({
              name: 'items',
              title: 'Przykłady (lista)',
              type: 'array',
              of: [{ type: 'localizedString' }],
            }),
          ],
          preview: {
            select: {
              title: 'title.pl',
            },
          },
        },
      ],
    }),

    // Benefits section
    defineField({
      name: 'benefitsTitle',
      title: 'Tytuł sekcji "Korzyści"',
      type: 'localizedString',
    }),
    defineField({
      name: 'benefits',
      title: 'Lista korzyści',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Tytuł korzyści',
              type: 'localizedString',
            }),
            defineField({
              name: 'description',
              title: 'Opis korzyści',
              type: 'localizedText',
            }),
          ],
          preview: {
            select: {
              title: 'title.pl',
            },
          },
        },
      ],
    }),

    // CTA section
    defineField({
      name: 'ctaTitle',
      title: 'Tytuł sekcji CTA',
      type: 'localizedString',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'Opis CTA',
      type: 'localizedText',
    }),
    defineField({
      name: 'ctaTelegramText',
      title: 'Tekst przycisku Telegram',
      type: 'localizedString',
    }),
    defineField({
      name: 'ctaIdeasText',
      title: 'Tekst przycisku "Masz pomysł"',
      type: 'localizedString',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Strona Klubu',
        subtitle: 'Kliknij żeby edytować',
      }
    },
  },
})
