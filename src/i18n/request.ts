import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['pl', 'en', 'ru', 'uk'];

export default getRequestConfig(async ({ requestLocale }) => {
  // Await the requestLocale promise
  const locale = await requestLocale;

  console.log('🌍 Requested locale:', locale);

  // Validate that the incoming locale parameter is valid
  if (!locale || !locales.includes(locale)) {
    console.log('❌ Invalid locale:', locale);
    notFound();
  }

  console.log('✅ Valid locale:', locale);

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
