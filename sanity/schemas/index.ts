import { localizedString, localizedText, localizedBlockContent } from './localizedString'
import { post } from './post'
import { footerSettings } from './footerSettings'
import { scholarshipsPage } from './scholarshipsPage'
import { peerGroupsPage } from './peerGroupsPage'
import { clubPage } from './clubPage'

export const schemaTypes = [
  // Localization types
  localizedString,
  localizedText,
  localizedBlockContent,

  // Document types
  post,
  footerSettings,
  scholarshipsPage,
  peerGroupsPage,
  clubPage,
]
