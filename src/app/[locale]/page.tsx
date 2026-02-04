import Hero from '@/components/layout/Hero'
import BentoGrid from '@/components/layout/BentoGrid'
import About from '@/components/layout/About'
import Footer from '@/components/layout/Footer'
import EventsWithPosts from '@/components/layout/EventsWithPosts'
import Founder from '@/components/layout/Founder'
import ContactWrapper from '@/components/layout/ContactWrapper'
import Donation from '@/components/layout/Donation'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params

  return (
    <main>
      <Hero />
      <BentoGrid />
      <About />
      <Founder />
      <EventsWithPosts locale={locale} />
      <Donation />
      <ContactWrapper />
      <Footer />
    </main>
  )
}
