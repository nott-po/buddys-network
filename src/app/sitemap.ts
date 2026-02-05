import { MetadataRoute } from 'next';

const locales = ['pl', 'en', 'ru', 'uk'];
const baseUrl = 'https://www.buddys.network';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/programs/scholarships',
    '/programs/peer-groups',
    '/programs/club',
    '/programs/events',
    '/posts',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add entries for each locale and route
  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }

  return sitemapEntries;
}
