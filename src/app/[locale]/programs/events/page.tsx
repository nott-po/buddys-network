import { cachedFetch, urlFor, getLocalizedValue } from '../../../../../sanity/lib/client'
import { postsQuery } from '../../../../../sanity/lib/queries'
import Link from 'next/link'
import Image from 'next/image'
import { FiCalendar, FiBook, FiUsers, FiArrowRight } from 'react-icons/fi'
import { FaTelegramPlane } from 'react-icons/fa'
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

const translations: Record<
  string,
  {
    badge: string
    title: string
    description: string
    whatTitle: string
    whatDesc: string
    workshops: string
    workshopsDesc: string
    lectures: string
    lecturesDesc: string
    networking: string
    networkingDesc: string
    topicsTitle: string
    topicsDesc: string
    personalTitle: string
    personal1: string
    personal2: string
    personal3: string
    personal4: string
    professionalTitle: string
    professional1: string
    professional2: string
    professional3: string
    professional4: string
    eventsTitle: string
    readMore: string
    noPosts: string
    ctaTitle: string
    ctaDesc: string
    ctaButton: string
  }
> = {
  pl: {
    badge: 'Otwarte wydarzenia',
    title: 'Otwarte wydarzenia',
    description: 'Organizujemy lekcje, warsztaty i spotkania z inspirującymi prelegentami na tematy rozwoju osobistego i zawodowego.',
    whatTitle: 'Czym są otwarte wydarzenia?',
    whatDesc: 'Otwarte wydarzenia to publiczne warsztaty, wykłady i spotkania dostępne dla wszystkich zainteresowanych. To doskonała okazja, aby poznać naszą społeczność.',
    workshops: 'Warsztaty',
    workshopsDesc: 'Praktyczne sesje z ekspertami',
    lectures: 'Wykłady',
    lecturesDesc: 'Inspirujące prezentacje',
    networking: 'Networking',
    networkingDesc: 'Poznawanie nowych ludzi',
    topicsTitle: 'Tematy, które poruszamy',
    topicsDesc: 'Nasze wydarzenia obejmują szeroki zakres tematów związanych z rozwojem osobistym i zawodowym.',
    personalTitle: 'Rozwój osobisty',
    personal1: 'Zarządzanie czasem',
    personal2: 'Komunikacja',
    personal3: 'Zarządzanie stresem',
    personal4: 'Mindfulness',
    professionalTitle: 'Rozwój zawodowy',
    professional1: 'Planowanie kariery',
    professional2: 'Umiejętności zawodowe',
    professional3: 'Przedsiębiorczość',
    professional4: 'Finanse osobiste',
    eventsTitle: 'Nasze wydarzenia',
    readMore: 'Czytaj więcej',
    noPosts: 'Brak wydarzeń do wyświetlenia. Dodaj pierwsze wydarzenie w panelu administracyjnym!',
    ctaTitle: 'Dołącz do naszych wydarzeń',
    ctaDesc: 'Śledź nas na Telegramie, żeby nie przegapić nadchodzących wydarzeń.',
    ctaButton: 'Dołącz na Telegram',
  },
  en: {
    badge: 'Open events',
    title: 'Open events',
    description: 'We organize lessons, workshops and meetings with inspiring speakers on personal and professional development topics.',
    whatTitle: 'What are open events?',
    whatDesc: 'Open events are public workshops, lectures and meetings available to everyone. It\'s a great opportunity to get to know our community.',
    workshops: 'Workshops',
    workshopsDesc: 'Practical sessions with experts',
    lectures: 'Lectures',
    lecturesDesc: 'Inspiring presentations',
    networking: 'Networking',
    networkingDesc: 'Meeting new people',
    topicsTitle: 'Topics we cover',
    topicsDesc: 'Our events cover a wide range of topics related to personal and professional development.',
    personalTitle: 'Personal development',
    personal1: 'Time management',
    personal2: 'Communication',
    personal3: 'Stress management',
    personal4: 'Mindfulness',
    professionalTitle: 'Professional development',
    professional1: 'Career planning',
    professional2: 'Job skills',
    professional3: 'Entrepreneurship',
    professional4: 'Personal finance',
    eventsTitle: 'Our events',
    readMore: 'Read more',
    noPosts: 'No events to display. Add your first event in the admin panel!',
    ctaTitle: 'Join our events',
    ctaDesc: 'Follow us on Telegram to not miss upcoming events.',
    ctaButton: 'Join on Telegram',
  },
  uk: {
    badge: 'Відкриті події',
    title: 'Відкриті події',
    description: 'Ми організовуємо уроки, воркшопи та зустрічі з натхненними спікерами на теми особистого та професійного розвитку.',
    whatTitle: 'Що таке відкриті події?',
    whatDesc: 'Відкриті події - це публічні воркшопи, лекції та зустрічі, доступні для всіх зацікавлених. Це чудова можливість познайомитися з нашою спільнотою.',
    workshops: 'Воркшопи',
    workshopsDesc: 'Практичні сесії з експертами',
    lectures: 'Лекції',
    lecturesDesc: 'Натхненні презентації',
    networking: 'Нетворкінг',
    networkingDesc: 'Знайомство з новими людьми',
    topicsTitle: 'Теми, які ми розглядаємо',
    topicsDesc: 'Наші події охоплюють широкий спектр тем, пов\'язаних з особистим та професійним розвитком.',
    personalTitle: 'Особистий розвиток',
    personal1: 'Управління часом',
    personal2: 'Комунікація',
    personal3: 'Управління стресом',
    personal4: 'Усвідомленість',
    professionalTitle: 'Професійний розвиток',
    professional1: 'Планування кар\'єри',
    professional2: 'Професійні навички',
    professional3: 'Підприємництво',
    professional4: 'Особисті фінанси',
    eventsTitle: 'Наші події',
    readMore: 'Читати далі',
    noPosts: 'Немає подій для відображення. Додайте першу подію в панелі адміністратора!',
    ctaTitle: 'Приєднуйтесь до наших подій',
    ctaDesc: 'Слідкуйте за нами в Telegram, щоб не пропустити майбутні події.',
    ctaButton: 'Приєднатися в Telegram',
  },
  ru: {
    badge: 'Открытые события',
    title: 'Открытые события',
    description: 'Мы организуем уроки, воркшопы и встречи с вдохновляющими спикерами на темы личного и профессионального развития.',
    whatTitle: 'Что такое открытые события?',
    whatDesc: 'Открытые события - это публичные воркшопы, лекции и встречи, доступные для всех желающих. Это отличная возможность познакомиться с нашим сообществом.',
    workshops: 'Воркшопы',
    workshopsDesc: 'Практические сессии с экспертами',
    lectures: 'Лекции',
    lecturesDesc: 'Вдохновляющие презентации',
    networking: 'Нетворкинг',
    networkingDesc: 'Знакомство с новыми людьми',
    topicsTitle: 'Темы, которые мы рассматриваем',
    topicsDesc: 'Наши события охватывают широкий спектр тем, связанных с личным и профессиональным развитием.',
    personalTitle: 'Личное развитие',
    personal1: 'Управление временем',
    personal2: 'Коммуникация',
    personal3: 'Управление стрессом',
    personal4: 'Осознанность',
    professionalTitle: 'Профессиональное развитие',
    professional1: 'Планирование карьеры',
    professional2: 'Профессиональные навыки',
    professional3: 'Предпринимательство',
    professional4: 'Личные финансы',
    eventsTitle: 'Наши события',
    readMore: 'Читать далее',
    noPosts: 'Нет событий для отображения. Добавьте первое событие в панели администратора!',
    ctaTitle: 'Присоединяйтесь к нашим событиям',
    ctaDesc: 'Следите за нами в Telegram, чтобы не пропустить предстоящие события.',
    ctaButton: 'Присоединиться в Telegram',
  },
}

export default async function EventsPage({ params }: Props) {
  const { locale } = await params
  const posts: Post[] = await cachedFetch(postsQuery)
  const t = translations[locale] || translations.pl

  return (
    <>
      <div className="min-h-screen pt-20">
        {/* Hero */}
        <section className="relative -mt-20 pt-20 py-24 bg-gradient-to-br from-secondary/10 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-white/30 shadow-xl overflow-hidden">
                <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-4 border border-secondary/20">
                  {t.badge}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-darkGray mb-4">
                  <span className="bg-gradient-to-r from-primary via-secondary to-nature bg-clip-text text-transparent">
                    {t.title}
                  </span>
                </h1>

                <p className="text-lg text-neutral-gray mb-6">{t.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* What are open events */}
              <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
                <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">{t.whatTitle}</h2>
                <div className="space-y-6 text-neutral-gray">
                  <p>{t.whatDesc}</p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white/50 rounded-2xl p-6 border border-white/30 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                        <FiCalendar className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-neutral-darkGray mb-2">{t.workshops}</h3>
                      <p className="text-sm">{t.workshopsDesc}</p>
                    </div>

                    <div className="bg-white/50 rounded-2xl p-6 border border-white/30 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                        <FiBook className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-neutral-darkGray mb-2">{t.lectures}</h3>
                      <p className="text-sm">{t.lecturesDesc}</p>
                    </div>

                    <div className="bg-white/50 rounded-2xl p-6 border border-white/30 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                        <FiUsers className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-neutral-darkGray mb-2">{t.networking}</h3>
                      <p className="text-sm">{t.networkingDesc}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Events/Posts from Sanity */}
              <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
                <h2 className="text-3xl font-bold text-neutral-darkGray mb-8">{t.eventsTitle}</h2>

                {posts.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                      <Link
                        key={post._id}
                        href={`/${locale}/posts/${post.slug.current}`}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group"
                      >
                        {/* Image */}
                        {(() => {
                          const imageUrl = urlFor(post.mainImage)
                          if (!imageUrl) return null
                          return (
                            <div className="relative h-40 overflow-hidden">
                              <Image
                                src={imageUrl.width(400).height(250).url()}
                                alt={getLocalizedValue(post.title, locale) || ''}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )
                        })()}

                        {/* Content */}
                        <div className="p-5">
                          <div className="flex items-center space-x-2 text-xs text-neutral-gray mb-2">
                            <FiCalendar className="w-3 h-3" />
                            <time dateTime={post.publishedAt}>
                              {new Date(post.publishedAt).toLocaleDateString(locale, {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                              })}
                            </time>
                          </div>

                          <h3 className="text-lg font-bold text-neutral-darkGray mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {getLocalizedValue(post.title, locale)}
                          </h3>

                          {post.excerpt && (
                            <p className="text-sm text-neutral-gray mb-3 line-clamp-2">
                              {getLocalizedValue(post.excerpt, locale)}
                            </p>
                          )}

                          <span className="inline-flex items-center space-x-1 text-primary text-sm font-medium">
                            <span>{t.readMore}</span>
                            <FiArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white/30 rounded-2xl">
                    <p className="text-neutral-gray">{t.noPosts}</p>
                  </div>
                )}
              </div>

              {/* Topics we cover */}
              <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
                <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">{t.topicsTitle}</h2>
                <div className="space-y-4">
                  <p className="text-neutral-gray">{t.topicsDesc}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-neutral-darkGray">{t.personalTitle}</h4>
                      <ul className="space-y-2 text-sm text-neutral-gray">
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span>{t.personal1}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span>{t.personal2}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span>{t.personal3}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span>{t.personal4}</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-neutral-darkGray">{t.professionalTitle}</h4>
                      <ul className="space-y-2 text-sm text-neutral-gray">
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-secondary rounded-full"></span>
                          <span>{t.professional1}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-secondary rounded-full"></span>
                          <span>{t.professional2}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-secondary rounded-full"></span>
                          <span>{t.professional3}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-secondary rounded-full"></span>
                          <span>{t.professional4}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center bg-gradient-to-br from-secondary/10 to-white rounded-3xl p-12 border border-secondary/20">
                <h2 className="text-3xl font-bold text-neutral-darkGray mb-4">{t.ctaTitle}</h2>
                <p className="text-neutral-gray mb-8">{t.ctaDesc}</p>
                <Link
                  href="https://t.me/BuddysNetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-secondary to-nature text-white font-medium rounded-full hover:shadow-lg transition-all"
                >
                  {t.ctaButton}
                  <FaTelegramPlane className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
