import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'buddys-network-studio',
  title: "Buddy's Network - Panel Administracyjny",

  projectId,
  dataset,

  basePath: '/admin',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Panel Administracyjny')
          .items([
            // Wydarzenia - główna sekcja
            S.listItem()
              .title('Wydarzenia')
              .schemaType('post')
              .child(S.documentTypeList('post').title('Wszystkie wydarzenia')),

            S.divider(),

            // Strony programów
            S.listItem()
              .title('Strony programów')
              .child(
                S.list()
                  .title('Strony programów')
                  .items([
                    S.listItem()
                      .title('Stypendia')
                      .id('scholarshipsPage')
                      .child(
                        S.document()
                          .schemaType('scholarshipsPage')
                          .documentId('scholarshipsPage')
                          .title('Strona Stypendiów')
                      ),
                    S.listItem()
                      .title('Grupy wsparcia')
                      .id('peerGroupsPage')
                      .child(
                        S.document()
                          .schemaType('peerGroupsPage')
                          .documentId('peerGroupsPage')
                          .title('Strona Grup Wsparcia')
                      ),
                    S.listItem()
                      .title('Klub')
                      .id('clubPage')
                      .child(
                        S.document()
                          .schemaType('clubPage')
                          .documentId('clubPage')
                          .title('Strona Klubu')
                      ),
                  ])
              ),

            S.divider(),

            // Footer Settings - singleton
            S.listItem()
              .title('Kontakt i Social Media')
              .id('footerSettings')
              .child(
                S.document()
                  .schemaType('footerSettings')
                  .documentId('footerSettings')
                  .title('Kontakt i Social Media')
              ),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
