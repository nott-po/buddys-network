import { defineType, defineField } from 'sanity'

// Supported locales matching next-intl configuration
const supportedLocales = [
  { id: 'pl', title: 'Polski' },
  { id: 'en', title: 'English' },
  { id: 'uk', title: 'Українська' },
  { id: 'ru', title: 'Русский' },
]

// Localized string field (single line)
export const localizedString = defineType({
  name: 'localizedString',
  title: 'Localized String',
  type: 'object',
  fields: supportedLocales.map((locale) =>
    defineField({
      name: locale.id,
      title: locale.title,
      type: 'string',
    })
  ),
})

// Localized text field (multiline)
export const localizedText = defineType({
  name: 'localizedText',
  title: 'Localized Text',
  type: 'object',
  fields: supportedLocales.map((locale) =>
    defineField({
      name: locale.id,
      title: locale.title,
      type: 'text',
      rows: 4,
    })
  ),
})

// Localized rich text (block content)
export const localizedBlockContent = defineType({
  name: 'localizedBlockContent',
  title: 'Localized Block Content',
  type: 'object',
  fields: supportedLocales.map((locale) =>
    defineField({
      name: locale.id,
      title: locale.title,
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    })
  ),
})
