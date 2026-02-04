import { defineType, defineField } from 'sanity'

export const peerGroupsPage = defineType({
  name: 'peerGroupsPage',
  title: 'Strona Grup Wsparcia',
  type: 'document',
  fields: [
    // Hero section
    defineField({
      name: 'title',
      title: 'Tytuł strony',
      type: 'localizedString',
      description: 'Główny tytuł strony (np. "Grupy wsparcia")',
    }),
    defineField({
      name: 'subtitle',
      title: 'Podtytuł',
      type: 'localizedText',
      description: 'Krótki opis pod tytułem',
    }),

    // How it works section
    defineField({
      name: 'howItWorksTitle',
      title: 'Tytuł sekcji "Jak to działa"',
      type: 'localizedString',
    }),
    defineField({
      name: 'howItWorksDescription',
      title: 'Opis sekcji',
      type: 'localizedText',
    }),

    // Features
    defineField({
      name: 'features',
      title: 'Cechy programu',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Tytuł cechy',
              type: 'localizedString',
            }),
            defineField({
              name: 'description',
              title: 'Opis cechy',
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

    // Topics section
    defineField({
      name: 'topicsTitle',
      title: 'Tytuł sekcji "Tematy"',
      type: 'localizedString',
    }),
    defineField({
      name: 'topicsDescription',
      title: 'Opis sekcji tematów',
      type: 'localizedText',
    }),
    defineField({
      name: 'topics',
      title: 'Lista tematów',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Tytuł tematu',
              type: 'localizedString',
            }),
            defineField({
              name: 'description',
              title: 'Opis tematu',
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
      name: 'ctaButtonText',
      title: 'Tekst przycisku',
      type: 'localizedString',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Strona Grup Wsparcia',
        subtitle: 'Kliknij żeby edytować',
      }
    },
  },
})
