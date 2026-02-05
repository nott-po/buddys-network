import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import type { Metadata } from 'next';
import './globals.css';

const metaByLocale = {
  pl: {
    description:
      'Tworzymy społeczność młodych, ambitnych ludzi dążących do rozwoju, gdzie każdy może być zarówno mentorem, jak i uczniem.',
    shortDescription: 'Tworzymy społeczność młodych, ambitnych ludzi dążących do rozwoju.',
  },
  en: {
    description:
      'We build a community of young, ambitious people focused on growth, where everyone can be both a mentor and a learner.',
    shortDescription: 'A community of young, ambitious people focused on growth.',
  },
  ru: {
    description:
      'Мы создаем сообщество молодых, амбициозных людей, стремящихся к развитию, где каждый может быть и наставником, и учеником.',
    shortDescription: 'Сообщество молодых, амбициозных людей, стремящихся к развитию.',
  },
  uk: {
    description:
      'Ми створюємо спільноту молодих, амбітних людей, які прагнуть розвитку, де кожен може бути і ментором, і учнем.',
    shortDescription: 'Спільнота молодих, амбітних людей, які прагнуть розвитку.',
  },
} as const;

const openGraphLocaleByLocale = {
  pl: 'pl_PL',
  en: 'en_US',
  ru: 'ru_RU',
  uk: 'uk_UA',
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = metaByLocale[locale as keyof typeof metaByLocale] ?? metaByLocale.en;
  const ogLocale =
    openGraphLocaleByLocale[locale as keyof typeof openGraphLocaleByLocale] ?? 'en_US';

  return {
    metadataBase: new URL('https://www.buddys.network'),
    title: "Buddy's Network",
    description: meta.description,
    openGraph: {
      title: "Buddy's Network",
      description: meta.shortDescription,
      type: 'website',
      locale: ogLocale,
      images: [
        {
          url: '/images/logo/logo2.png',
          width: 512,
          height: 512,
          alt: "Buddy's Network Logo",
        },
      ],
    },
    twitter: {
      card: 'summary',
      title: "Buddy's Network",
      description: meta.shortDescription,
      images: ['/images/logo/logo2.png'],
    },
    icons: {
      icon: '/images/logo/logo2.png',
      apple: '/images/logo/logo2.png',
    },
    alternates: {
      languages: {
        en: '/en',
        pl: '/pl',
        ru: '/ru',
        uk: '/uk',
      },
    },
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const locales = ['pl', 'en', 'ru', 'uk'];

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale)) {
    notFound();
  }

  // Get messages for the locale
  const messages = await getMessages();

  const meta = metaByLocale[locale as keyof typeof metaByLocale] ?? metaByLocale.en;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: "Buddy's Network",
    url: 'https://www.buddys.network',
    logo: 'https://www.buddys.network/images/logo/logo2.png',
    description: meta.description,
    sameAs: [],
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
