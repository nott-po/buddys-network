import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import type { Metadata } from 'next';
import './globals.css';

const metaByLocale = {
  pl: {
    title: "Buddy's Network - Społeczność Młodych Liderów i Mentorów",
    description:
      'Dołącz do Buddy\'s Network! Tworzymy społeczność młodych, ambitnych ludzi dążących do rozwoju. Programy stypendialne, wydarzenia, grupy wsparcia i działalność klubowa. Zostań mentorem lub uczniem już dziś!',
    shortDescription: 'Społeczność młodych liderów - programy stypendialne, wydarzenia i mentoring.',
  },
  en: {
    title: "Buddy's Network - Community of Young Leaders & Mentors",
    description:
      'Join Buddy\'s Network! We build a community of young, ambitious people focused on growth. Scholarship programs, events, peer groups and club activities. Become a mentor or learner today!',
    shortDescription: 'Community of young leaders - scholarships, events and mentoring programs.',
  },
  ru: {
    title: "Buddy's Network - Сообщество Молодых Лидеров и Менторов",
    description:
      'Присоединяйтесь к Buddy\'s Network! Мы создаем сообщество молодых, амбициозных людей, стремящихся к развитию. Стипендиальные программы, события, группы поддержки и клубная деятельность.',
    shortDescription: 'Сообщество молодых лидеров - стипендии, события и менторинг.',
  },
  uk: {
    title: "Buddy's Network - Спільнота Молодих Лідерів та Менторів",
    description:
      'Приєднуйтесь до Buddy\'s Network! Ми створюємо спільноту молодих, амбітних людей, які прагнуть розвитку. Стипендіальні програми, події, групи підтримки та клубна діяльність.',
    shortDescription: 'Спільнота молодих лідерів - стипендії, події та менторинг.',
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
    title: meta.title,
    description: meta.description,
    keywords: ['Buddy\'s Network', 'społeczność', 'młodzież', 'mentoring', 'stypendia', 'wydarzenia', 'rozwój', 'liderzy', 'community', 'youth'],
    openGraph: {
      title: meta.title,
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
      card: 'summary_large_image',
      title: meta.title,
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
