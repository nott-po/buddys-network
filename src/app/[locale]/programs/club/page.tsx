import Link from 'next/link';

export default function ClubPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-secondary-dark/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-secondary-dark/10 rounded-full text-secondary-dark text-sm font-medium mb-6 border border-secondary-dark/20">
              Club Activities
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-darkGray mb-6">
              Działalność Klubowa
            </h1>
            <p className="text-xl text-neutral-gray leading-relaxed">
              Nieformalne spotkania, gry edukacyjne i wydarzenia integracyjne dla naszej
              społeczności
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* What is club activities */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">
                Czym są nasze aktywności klubowe?
              </h2>
              <div className="space-y-6 text-neutral-gray">
                <p>
                  Działalność klubowa to nieformalna strona naszej społeczności. To miejsce, gdzie
                  członkowie mogą się zrelaksować, poznać lepiej i spędzić czas w przyjaznej
                  atmosferze.
                </p>

                <p>
                  Organizujemy różnorodne wydarzenia - od gier edukacyjnych po wieczory filmowe,
                  które pozwalają nam budować silniejsze więzi i tworzyć prawdziwą społeczność.
                </p>
              </div>
            </div>

            {/* Types of activities */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-8">Rodzaje Aktywności</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Educational Games */}
                <div className="bg-white/50 rounded-2xl p-6 border border-white/30">
                  <div className="w-14 h-14 bg-secondary-dark/20 rounded-2xl flex items-center justify-center mb-4">
                    <svg
                      className="w-7 h-7 text-secondary-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-darkGray mb-3">Gry Edukacyjne</h3>
                  <p className="text-neutral-gray text-sm mb-4">
                    Uczymy się przez zabawę! Organizujemy sesje gier, które rozwijają różne
                    umiejętności.
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-gray">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                      <span>
                        <strong>Cashflow</strong> - nauka o finansach i inwestycjach
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                      <span>
                        <strong>Mafia</strong> - rozwijanie umiejętności komunikacyjnych
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                      <span>
                        <strong>Gry strategiczne</strong> - myślenie analityczne
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Social Events */}
                <div className="bg-white/50 rounded-2xl p-6 border border-white/30">
                  <div className="w-14 h-14 bg-secondary-dark/20 rounded-2xl flex items-center justify-center mb-4">
                    <svg
                      className="w-7 h-7 text-secondary-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-darkGray mb-3">
                    Wydarzenia Społeczne
                  </h3>
                  <p className="text-neutral-gray text-sm mb-4">
                    Nieformalne spotkania, które pozwalają lepiej się poznać i zbudować przyjaźnie.
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-gray">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                      <span>Wieczory filmowe z dyskusjami</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                      <span>Spotkania przy kawie i rozmowie</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                      <span>Wyjścia grupowe i aktywności outdoor</span>
                    </li>
                  </ul>
                </div>

                {/* Skill Sharing */}
                <div className="bg-white/50 rounded-2xl p-6 border border-white/30">
                  <div className="w-14 h-14 bg-secondary-dark/20 rounded-2xl flex items-center justify-center mb-4">
                    <svg
                      className="w-7 h-7 text-secondary-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-darkGray mb-3">
                    Wymiana Umiejętności
                  </h3>
                  <p className="text-neutral-gray text-sm mb-4">
                    Każdy ma coś wartościowego do zaoferowania. Organizujemy nieformalne sesje
                    wymiany wiedzy.
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-gray">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                      <span>Mini-prezentacje członków</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                      <span>Warsztaty "peer-to-peer"</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                      <span>Sesje Q&A na różne tematy</span>
                    </li>
                  </ul>
                </div>

                {/* Creative Activities */}
                <div className="bg-white/50 rounded-2xl p-6 border border-white/30">
                  <div className="w-14 h-14 bg-secondary-dark/20 rounded-2xl flex items-center justify-center mb-4">
                    <svg
                      className="w-7 h-7 text-secondary-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-darkGray mb-3">
                    Aktywności Kreatywne
                  </h3>
                  <p className="text-neutral-gray text-sm mb-4">
                    Rozwijamy kreatywność i ekspresję poprzez różnorodne formy artystyczne.
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-gray">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                      <span>Klub książki i dyskusje literackie</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                      <span>Warsztaty kreatywne</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-secondary-dark rounded-full"></span>
                      <span>Projekty grupowe</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">
                Dlaczego warto uczestniczyć?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary-dark/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-secondary-dark"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-darkGray mb-1">Budowanie Relacji</h3>
                    <p className="text-neutral-gray">
                      Poznaj nowych ludzi w luźnej, nieformalnej atmosferze
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary-dark/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-secondary-dark"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-darkGray mb-1">Rozwój Umiejętności</h3>
                    <p className="text-neutral-gray">
                      Ucz się nowych rzeczy w zabawny, angażujący sposób
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary-dark/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-secondary-dark"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-darkGray mb-1">Odprężenie</h3>
                    <p className="text-neutral-gray">
                      Zrelaksuj się po intensywnych sesjach rozwojowych
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-br from-secondary-dark/10 to-white rounded-3xl p-12 border border-secondary-dark/20">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-4">Dołącz do zabawy!</h2>
              <p className="text-neutral-gray mb-8">
                Śledź nasze aktywności i bierz udział w wydarzeniach klubowych
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="https://t.me/BuddysNetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-secondary-dark text-white font-medium rounded-full hover:bg-secondary transition-all hover:shadow-lg"
                >
                  Dołącz na Telegram
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                  </svg>
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center px-8 py-4 bg-white/50 backdrop-blur-xl text-neutral-darkGray font-medium rounded-full hover:bg-white transition-all border border-white/50"
                >
                  Masz pomysł na aktywność?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
