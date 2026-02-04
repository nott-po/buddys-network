import { defineType, defineField } from 'sanity'

export const scholarshipsPage = defineType({
  name: 'scholarshipsPage',
  title: 'Strona Stypendiów',
  type: 'document',
  fields: [
    // Hero section
    defineField({
      name: 'title',
      title: 'Tytuł strony',
      type: 'localizedString',
      description: 'Główny tytuł strony (np. "Stypendia")',
    }),
    defineField({
      name: 'subtitle',
      title: 'Podtytuł',
      type: 'localizedText',
      description: 'Krótki opis pod tytułem',
    }),

    // About section
    defineField({
      name: 'aboutTitle',
      title: 'Tytuł sekcji "O programie"',
      type: 'localizedString',
    }),
    defineField({
      name: 'aboutDescription1',
      title: 'Opis programu (akapit 1)',
      type: 'localizedText',
    }),
    defineField({
      name: 'aboutDescription2',
      title: 'Opis programu (akapit 2)',
      type: 'localizedText',
    }),

    // Criteria section
    defineField({
      name: 'criteriaTitle',
      title: 'Tytuł sekcji "Kryteria"',
      type: 'localizedString',
    }),
    defineField({
      name: 'criteria',
      title: 'Kryteria',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Tytuł kryterium',
              type: 'localizedString',
            }),
            defineField({
              name: 'description',
              title: 'Opis kryterium',
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

    // Status section
    defineField({
      name: 'statusTitle',
      title: 'Tytuł sekcji "Status"',
      type: 'localizedString',
    }),
    defineField({
      name: 'statusDescription',
      title: 'Opis statusu',
      type: 'localizedText',
    }),
    defineField({
      name: 'statusCta',
      title: 'Tekst przycisku CTA',
      type: 'localizedString',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Strona Stypendiów',
        subtitle: 'Kliknij żeby edytować',
      }
    },
  },
})
