import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['pl', 'en', 'ru', 'uk'];
const defaultLocale = 'pl';

export default getRequestConfig(async ({ requestLocale }) => {
  // Await the requestLocale promise
  const locale = await requestLocale;

  console.log('🌍 Requested locale:', locale);

  // If no locale was provided (e.g., non-localized routes like /admin),
  // fall back to the default locale instead of returning 404.
  if (!locale) {
    console.log('ℹ️ No locale provided, using default:', defaultLocale);
    return {
      locale: defaultLocale,
      messages: (await import(`../../messages/${defaultLocale}.json`)).default,
    };
  }

  // Validate that the incoming locale parameter is valid
  if (!locales.includes(locale)) {
    console.log('❌ Invalid locale:', locale);
    notFound();
  }

  console.log('✅ Valid locale:', locale);

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
