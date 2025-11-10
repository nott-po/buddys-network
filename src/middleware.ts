import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['pl', 'en', 'ru', 'uk'],
  defaultLocale: 'pl',
});

export const config = {
  matcher: ['/', '/(pl|en|ru|uk)/:path*'],
};
