import Link from 'next/link';

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary-dark/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary-dark/10 rounded-full text-primary-dark text-sm font-medium mb-6 border border-primary-dark/20">
              Open Events
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-darkGray mb-6">
              Otwarte Wydarzenia
            </h1>
            <p className="text-xl text-neutral-gray leading-relaxed">
              Warsztaty, wykłady i spotkania z inspirującymi gośćmi dla całej społeczności
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* What are open events */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">
                Czym są otwarte wydarzenia?
              </h2>
              <div className="space-y-6 text-neutral-gray">
                <p>
                  Otwarte wydarzenia to publiczne warsztaty, wykłady i spotkania dostępne dla
                  wszystkich zainteresowanych. To doskonała okazja, aby poznać naszą społeczność i
                  dowiedzieć się więcej o oferowanych programach.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/50 rounded-2xl p-6 border border-white/30 text-center">
                    <div className="w-12 h-12 bg-primary-dark/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-primary-dark"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-neutral-darkGray mb-2">Warsztaty</h3>
                    <p className="text-sm">Praktyczne sesje z ekspertami z różnych dziedzin</p>
                  </div>

                  <div className="bg-white/50 rounded-2xl p-6 border border-white/30 text-center">
                    <div className="w-12 h-12 bg-primary-dark/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-primary-dark"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-neutral-darkGray mb-2">Wykłady</h3>
                    <p className="text-sm">Inspirujące prezentacje liderów i ekspertów</p>
                  </div>

                  <div className="bg-white/50 rounded-2xl p-6 border border-white/30 text-center">
                    <div className="w-12 h-12 bg-primary-dark/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-primary-dark"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-neutral-darkGray mb-2">Networking</h3>
                    <p className="text-sm">Poznaj nowych ludzi i buduj wartościowe relacje</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Topics we cover */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">
                Jakie tematy poruszamy?
              </h2>
              <div className="space-y-4">
                <p className="text-neutral-gray">
                  Nasze wydarzenia obejmują szeroki zakres tematów istotnych dla młodych ludzi:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutral-darkGray">Rozwój osobisty:</h4>
                    <ul className="space-y-2 text-sm text-neutral-gray">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary-dark rounded-full"></span>
                        <span>Zarządzanie czasem i produktywność</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary-dark rounded-full"></span>
                        <span>Umiejętności komunikacyjne</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary-dark rounded-full"></span>
                        <span>Radzenie sobie ze stresem</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary-dark rounded-full"></span>
                        <span>Mindfulness i dobre samopoczucie</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutral-darkGray">Rozwój zawodowy:</h4>
                    <ul className="space-y-2 text-sm text-neutral-gray">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary-dark rounded-full"></span>
                        <span>Planowanie kariery</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary-dark rounded-full"></span>
                        <span>Umiejętności zawodowe</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary-dark rounded-full"></span>
                        <span>Przedsiębiorczość</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary-dark rounded-full"></span>
                        <span>Finanse osobiste</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Past and upcoming events */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">Nasze Wydarzenia</h2>

              <div className="space-y-6">
                {/* Past event */}
                <div className="bg-white/50 rounded-2xl p-6 border border-white/30">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                        Zakończone
                      </span>
                    </div>
                    <span className="text-sm text-neutral-gray">Listopad 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-darkGray mb-2">
                    Warsztat: Finansowa Gramotność
                  </h3>
                  <p className="text-neutral-gray text-sm">
                    Podstawy zarządzania finansami osobistymi, budżetowanie i pierwsze kroki w
                    inwestowaniu dla młodych ludzi.
                  </p>
                </div>

                {/* Upcoming event */}
                <div className="bg-white/50 rounded-2xl p-6 border border-white/30">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs font-semibold">
                        Planowane
                      </span>
                    </div>
                    <span className="text-sm text-neutral-gray">Wkrótce</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-darkGray mb-2">
                    Spotkanie z Psychologiem
                  </h3>
                  <p className="text-neutral-gray text-sm">
                    Warsztat o zdrowiu psychicznym, radzeniu sobie ze stresem i budowaniu odporności
                    emocjonalnej.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-br from-primary-dark/10 to-white rounded-3xl p-12 border border-primary-dark/20">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-4">Bądź na bieżąco</h2>
              <p className="text-neutral-gray mb-8">
                Dołącz do naszego Telegram, aby otrzymywać powiadomienia o nadchodzących
                wydarzeniach
              </p>
              <Link
                href="https://t.me/BuddysNetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-primary-dark text-white font-medium rounded-full hover:bg-primary transition-all hover:shadow-lg"
              >
                Dołącz na Telegram
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
