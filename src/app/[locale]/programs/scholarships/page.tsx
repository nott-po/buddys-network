import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function ScholarshipsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 border border-primary/20">
              Program Stypendialny
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-darkGray mb-6">
              Stypendia dla Młodzieży
            </h1>
            <p className="text-xl text-neutral-gray leading-relaxed">
              Wspieramy talentowaną młodzież z Europy Wschodniej w realizacji marzeń edukacyjnych
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">O Programie</h2>
              <div className="prose prose-lg max-w-none text-neutral-gray">
                <p className="mb-4">
                  Program stypendialny Buddy's Network ma na celu wspieranie zdolnej młodzieży z
                  krajów Europy Wschodniej, w szczególności z Mołdawii, Ukrainy i Białorusi,
                  pochodzącej z rodzin o niskich dochodach.
                </p>
                <p className="mb-4">
                  Wierzymy, że każdy utalentowany młody człowiek zasługuje na szansę rozwijania
                  swojego potencjału, niezależnie od sytuacji finansowej rodziny.
                </p>
              </div>
            </div>

            {/* Criteria */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">Kryteria Wyboru</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-darkGray mb-1">Pochodzenie</h3>
                    <p className="text-neutral-gray">
                      Młodzież z krajów Europy Wschodniej (Mołdawia, Ukraina, Białoruś)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-darkGray mb-1">Zdolności</h3>
                    <p className="text-neutral-gray">
                      Utalentowani, zdolni młodzi ludzie z potencjałem rozwoju
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-darkGray mb-1">Sytuacja Finansowa</h3>
                    <p className="text-neutral-gray">
                      Rodziny o niskich dochodach wymagające wsparcia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-4">Status Programu</h2>
              <p className="text-neutral-gray text-lg mb-6">
                Program jest obecnie w fazie planowania. Pracujemy nad pozyskaniem grantów i
                zewnętrznego finansowania, aby móc uruchomić stypendia w najbliższej przyszłości.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-all hover:shadow-lg"
              >
                Skontaktuj się z nami
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
