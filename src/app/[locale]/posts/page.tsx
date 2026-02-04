import { cachedFetch, urlFor, getLocalizedValue } from '../../../../sanity/lib/client'
import { postsQuery } from '../../../../sanity/lib/queries'
import Link from 'next/link'
import Image from 'next/image'
import { FiCalendar, FiArrowRight } from 'react-icons/fi'
import Footer from '@/components/layout/Footer'

type Post = {
  _id: string
  title: Record<string, string>
  slug: { current: string }
  excerpt: Record<string, string>
  mainImage?: {
    asset?: { _ref?: string; _id?: string }
  }
  publishedAt: string
}

type Props = {
  params: Promise<{ locale: string }>
}

export default async function PostsPage({ params }: Props) {
  const { locale } = await params
  const posts: Post[] = await cachedFetch(postsQuery)

  const translations: Record<string, { title: string; subtitle: string; readMore: string; noPosts: string }> = {
    pl: {
      title: 'Wydarzenia',
      subtitle: 'Bądź na bieżąco z wydarzeniami Buddy\'s Network',
      readMore: 'Czytaj więcej',
      noPosts: 'Brak wydarzeń do wyświetlenia'
    },
    en: {
      title: 'Events',
      subtitle: 'Stay up to date with Buddy\'s Network events',
      readMore: 'Read more',
      noPosts: 'No events to display'
    },
    uk: {
      title: 'Події',
      subtitle: 'Будьте в курсі подій Buddy\'s Network',
      readMore: 'Читати далі',
      noPosts: 'Немає подій для відображення'
    },
    ru: {
      title: 'События',
      subtitle: 'Будьте в курсе событий Buddy\'s Network',
      readMore: 'Читать далее',
      noPosts: 'Нет событий для отображения'
    }
  }

  const t = translations[locale] || translations.pl

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-neutral-lightGray to-white">
        {/* Header Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 border border-primary/20">
                Events
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-darkGray mb-6">
                {t.title}
              </h1>
              <p className="text-lg text-neutral-gray">
                {t.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {posts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-neutral-gray text-lg">{t.noPosts}</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => {
                    const imageUrl = urlFor(post.mainImage)
                    return (
                      <article
                        key={post._id}
                        className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group"
                      >
                        {/* Image */}
                        {imageUrl && (
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={imageUrl.width(600).height(400).url()}
                              alt={getLocalizedValue(post.title, locale) || ''}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}

                        {/* Content */}
                        <div className="p-6">
                          {/* Date */}
                          <div className="flex items-center space-x-2 text-sm text-neutral-gray mb-3">
                            <FiCalendar className="w-4 h-4" />
                            <time dateTime={post.publishedAt}>
                              {new Date(post.publishedAt).toLocaleDateString(locale, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </time>
                          </div>

                          {/* Title */}
                          <h2 className="text-xl font-bold text-neutral-darkGray mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                            {getLocalizedValue(post.title, locale)}
                          </h2>

                          {/* Excerpt */}
                          {post.excerpt && (
                            <p className="text-neutral-gray mb-4 line-clamp-3">
                              {getLocalizedValue(post.excerpt, locale)}
                            </p>
                          )}

                          {/* Read More Link */}
                          <Link
                            href={`/${locale}/posts/${post.slug.current}`}
                            className="inline-flex items-center space-x-2 text-primary font-medium hover:text-secondary transition-colors"
                          >
                            <span>{t.readMore}</span>
                            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </article>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
