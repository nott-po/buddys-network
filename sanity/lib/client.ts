import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

// Client with caching - revalidates every 60 seconds
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Always use CDN for faster responses
  // Stega is disabled by default
  stega: {
    enabled: false,
  },
})

// Cached fetch wrapper - caches data for 60 seconds
export async function cachedFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T> {
  return client.fetch<T>(query, params, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  })
}

// Image URL builder
const builder = createImageUrlBuilder({ projectId, dataset })

// Safe image URL function - returns null if no valid image
// Handles both reference (_ref) and dereferenced (_id) assets
export function urlFor(source: { asset?: { _ref?: string; _id?: string } } | null | undefined) {
  if (!source?.asset) {
    return null
  }
  // Check for either _ref (reference) or _id (dereferenced)
  if (!source.asset._ref && !source.asset._id) {
    return null
  }
  return builder.image(source)
}

// Helper to get localized content
export function getLocalizedValue<T>(
  obj: Record<string, T> | undefined | null,
  locale: string
): T | undefined {
  if (!obj) return undefined
  return obj[locale] || obj['pl'] || obj['en'] || Object.values(obj)[0]
}
