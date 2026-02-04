import { client, urlFor, getLocalizedValue } from '../../../../../sanity/lib/client'
import { postBySlugQuery, postsQuery } from '../../../../../sanity/lib/queries'
import { PortableText, PortableTextBlock } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { FiCalendar, FiArrowLeft } from 'react-icons/fi'
import { notFound } from 'next/navigation'
import Footer from '@/components/layout/Footer'

type Post = {
  _id: string
  title: Record<string, string>
  slug: { current: string }
  excerpt: Record<string, string>
  content: Record<string, unknown[]>
  mainImage?: {
    asset?: { _ref?: string }
  }
  publishedAt: string
}

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

// PortableText components for rendering rich content
const portableTextComponents = {
  types: {
    image: ({ value }: { value: { asset?: { _ref?: string }; alt?: string } }) => {
      const imageUrl = urlFor(value)
      if (!imageUrl) return null
      return (
        <div className="my-8 rounded-2xl overflow-hidden">
          <Image
            src={imageUrl.width(1200).url()}
            alt={value.alt || ''}
            width={1200}
            height={675}
            className="w-full h-auto"
          />
        </div>
      )
    },
  },
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-3xl font-bold text-neutral-darkGray mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-2xl font-bold text-neutral-darkGray mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-xl font-bold text-neutral-darkGray mt-6 mb-2">{children}</h4>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-neutral-gray leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-primary pl-6 italic text-neutral-gray my-6">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: { children?: React.ReactNode; value?: { href?: string } }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-secondary underline transition-colors"
      >
        {children}
      </a>
    ),
  },
}

export default async function PostPage({ params }: Props) {
  const { locale, slug } = await params
  const post: Post | null = await client.fetch(postBySlugQuery, { slug })

  if (!post) {
    notFound()
  }

  const translations: Record<string, { back: string }> = {
    pl: { back: 'Powrót do wydarzeń' },
    en: { back: 'Back to events' },
    uk: { back: 'Назад до подій' },
    ru: { back: 'Назад к событиям' },
  }

  const t = translations[locale] || translations.pl
  const content = getLocalizedValue(post.content, locale) as PortableTextBlock[]
  const imageUrl = urlFor(post.mainImage)

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-neutral-lightGray to-white">
        {/* Hero Image */}
        {imageUrl && (
          <div className="relative h-[40vh] md:h-[50vh] w-full">
            <Image
              src={imageUrl.width(1920).height(1080).url()}
              alt={getLocalizedValue(post.title, locale) || ''}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}

        {/* Content */}
        <article className={`${imageUrl ? '-mt-32 relative z-10' : 'pt-32'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                {/* Back Link */}
                <Link
                  href={`/${locale}/programs/events`}
                  className="inline-flex items-center space-x-2 text-primary hover:text-secondary transition-colors mb-8"
                >
                  <FiArrowLeft className="w-4 h-4" />
                  <span>{t.back}</span>
                </Link>

                {/* Date */}
                <div className="flex items-center space-x-2 text-neutral-gray mb-6">
                  <FiCalendar className="w-4 h-4" />
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString(locale, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-darkGray mb-8">
                  {getLocalizedValue(post.title, locale)}
                </h1>

                {/* Excerpt */}
                {post.excerpt && (
                  <p className="text-xl text-neutral-gray leading-relaxed mb-8 pb-8 border-b border-neutral-lightGray">
                    {getLocalizedValue(post.excerpt, locale)}
                  </p>
                )}

                {/* Content */}
                {content && (
                  <div className="prose prose-lg max-w-none">
                    <PortableText value={content} components={portableTextComponents} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>

        {/* Spacer */}
        <div className="py-16" />
      </main>
      <Footer />
    </>
  )
}

// Generate static params for all posts
export async function generateStaticParams() {
  const posts: { slug: { current: string } }[] = await client.fetch(postsQuery)
  const locales = ['pl', 'en', 'uk', 'ru']

  return locales.flatMap((locale) =>
    posts.map((post) => ({
      locale,
      slug: post.slug.current,
    }))
  )
}
