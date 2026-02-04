import { cachedFetch, urlFor, getLocalizedValue } from '../../../sanity/lib/client'
import { latestPostsQuery } from '../../../sanity/lib/queries'
import Link from 'next/link'
import Image from 'next/image'
import { FiCalendar, FiZap, FiArrowRight } from 'react-icons/fi'

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
  locale: string
}

const translations: Record<
  string,
  {
    badge: string
    title: string
    subtitle: string
    regularTitle: string
    regularDesc: string
    regularCta: string
    futureTitle: string
    futureDesc: string
    idea1: string
    idea2: string
    idea3: string
    readMore: string
    viewAll: string
    noPosts: string
  }
> = {
  pl: {
    badge: 'Wydarzenia',
    title: 'Nasze Wydarzenia',
    subtitle: 'Bądź na bieżąco z wydarzeniami Buddy\'s Network',
    regularTitle: 'Spotkania co dwa tygodnie',
    regularDesc: 'Dołącz do naszych regularnych spotkań społeczności',
    regularCta: 'Dołącz na Telegram',
    futureTitle: 'Planowane wydarzenia',
    futureDesc: 'Śledź nas, żeby nie przegapić nadchodzących wydarzeń',
    idea1: 'Warsztaty',
    idea2: 'Wykłady',
    idea3: 'Networking',
    readMore: 'Czytaj więcej',
    viewAll: 'Zobacz wszystkie wydarzenia',
    noPosts: 'Brak nadchodzących wydarzeń',
  },
  en: {
    badge: 'Events',
    title: 'Our Events',
    subtitle: 'Stay up to date with Buddy\'s Network events',
    regularTitle: 'Bi-weekly meetings',
    regularDesc: 'Join our regular community meetings',
    regularCta: 'Join on Telegram',
    futureTitle: 'Upcoming events',
    futureDesc: 'Follow us to not miss upcoming events',
    idea1: 'Workshops',
    idea2: 'Lectures',
    idea3: 'Networking',
    readMore: 'Read more',
    viewAll: 'View all events',
    noPosts: 'No upcoming events',
  },
  uk: {
    badge: 'Події',
    title: 'Наші події',
    subtitle: 'Будьте в курсі подій Buddy\'s Network',
    regularTitle: 'Зустрічі кожні два тижні',
    regularDesc: 'Приєднуйтесь до наших регулярних зустрічей спільноти',
    regularCta: 'Приєднатися в Telegram',
    futureTitle: 'Заплановані події',
    futureDesc: 'Слідкуйте за нами, щоб не пропустити майбутні події',
    idea1: 'Воркшопи',
    idea2: 'Лекції',
    idea3: 'Нетворкінг',
    readMore: 'Читати далі',
    viewAll: 'Переглянути всі події',
    noPosts: 'Немає майбутніх подій',
  },
  ru: {
    badge: 'События',
    title: 'Наши события',
    subtitle: 'Будьте в курсе событий Buddy\'s Network',
    regularTitle: 'Встречи раз в две недели',
    regularDesc: 'Присоединяйтесь к нашим регулярным встречам сообщества',
    regularCta: 'Присоединиться в Telegram',
    futureTitle: 'Запланированные события',
    futureDesc: 'Следите за нами, чтобы не пропустить предстоящие события',
    idea1: 'Воркшопы',
    idea2: 'Лекции',
    idea3: 'Нетворкинг',
    readMore: 'Читать далее',
    viewAll: 'Просмотреть все события',
    noPosts: 'Нет предстоящих событий',
  },
}

export default async function EventsWithPosts({ locale }: Props) {
  const posts: Post[] = await cachedFetch(latestPostsQuery)
  const t = translations[locale] || translations.pl

  return (
    <section className="py-24 bg-white" id="events">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-6 border border-secondary/20">
              {t.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-darkGray mb-6">
              {t.title}
            </h2>
            <p className="text-lg text-neutral-gray">{t.subtitle}</p>
          </div>

          {/* Bi-Weekly Meeting Info Banner */}
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-8 md:p-10 mb-12 border border-primary/20 shadow-xl hover:shadow-2xl hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0 p-3">
                  <FiCalendar className="w-7 h-7 text-white" aria-hidden />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-darkGray mb-2">
                    {t.regularTitle}
                  </h3>
                  <p className="text-neutral-gray">{t.regularDesc}</p>
                </div>
              </div>
              <Link
                href="https://t.me/BuddysNetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:shadow-lg transition-all whitespace-nowrap"
              >
                {t.regularCta}
              </Link>
            </div>
          </div>

          {/* Posts Grid */}
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {posts.map((post) => {
                const imageUrl = urlFor(post.mainImage)
                return (
                  <Link
                    key={post._id}
                    href={`/${locale}/posts/${post.slug.current}`}
                    className="bg-neutral-lightGray rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group"
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
                      <div className="flex items-center space-x-2 text-sm text-neutral-gray mb-3">
                        <FiCalendar className="w-4 h-4" />
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString(locale, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>

                      <h3 className="text-xl font-bold text-neutral-darkGray mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {getLocalizedValue(post.title, locale)}
                      </h3>

                      {post.excerpt && (
                        <p className="text-neutral-gray mb-4 line-clamp-2">
                          {getLocalizedValue(post.excerpt, locale)}
                        </p>
                      )}

                      <span className="inline-flex items-center space-x-2 text-primary font-medium">
                        <span>{t.readMore}</span>
                        <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-12 mb-12">
              <p className="text-neutral-gray">{t.noPosts}</p>
            </div>
          )}

          {/* View All Events Link */}
          <div className="text-center mb-12">
            <Link
              href={`/${locale}/programs/events`}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:shadow-lg transition-all"
            >
              <span>{t.viewAll}</span>
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Future Ideas Teaser */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-10 border border-primary/10">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 p-3">
                <FiZap className="w-8 h-8 text-white" aria-hidden />
              </div>
              <h3 className="text-2xl font-bold text-neutral-darkGray mb-4">{t.futureTitle}</h3>
              <p className="text-neutral-gray mb-6">{t.futureDesc}</p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-white/50 backdrop-blur-xl rounded-full text-sm text-neutral-gray border border-white/30">
                  {t.idea1}
                </span>
                <span className="px-4 py-2 bg-white/50 backdrop-blur-xl rounded-full text-sm text-neutral-gray border border-white/30">
                  {t.idea2}
                </span>
                <span className="px-4 py-2 bg-white/50 backdrop-blur-xl rounded-full text-sm text-neutral-gray border border-white/30">
                  {t.idea3}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
