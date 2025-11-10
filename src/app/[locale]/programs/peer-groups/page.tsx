import Link from 'next/link';

export default function PeerGroupsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-secondary/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-6 border border-secondary/20">
              Peer-to-Peer Groups
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-darkGray mb-6">
              Grupy Wsparcia
            </h1>
            <p className="text-xl text-neutral-gray leading-relaxed">
              Małe grupy, wielkie możliwości - spotykamy się, rozwijamy i wspieramy nawzajem
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* How it works */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">Jak to działa?</h2>
              <div className="space-y-6 text-neutral-gray">
                <p>
                  Grupy peer-to-peer to serce naszej społeczności. Spotykamy się regularnie co dwa
                  tygodnie w małych grupach do 10 osób.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/50 rounded-2xl p-6 border border-white/30">
                    <h3 className="font-bold text-neutral-darkGray mb-2">Częstotliwość</h3>
                    <p className="text-sm">2 razy w miesiącu lub według ustaleń grupy</p>
                  </div>
                  <div className="bg-white/50 rounded-2xl p-6 border border-white/30">
                    <h3 className="font-bold text-neutral-darkGray mb-2">Wielkość</h3>
                    <p className="text-sm">Do 10 osób - intymna atmosfera</p>
                  </div>
                  <div className="bg-white/50 rounded-2xl p-6 border border-white/30">
                    <h3 className="font-bold text-neutral-darkGray mb-2">Format</h3>
                    <p className="text-sm">Dyskusje, zadania, wzajemne wsparcie</p>
                  </div>
                  <div className="bg-white/50 rounded-2xl p-6 border border-white/30">
                    <h3 className="font-bold text-neutral-darkGray mb-2">Organizacja</h3>
                    <p className="text-sm">Samoorganizująca się z rotacją liderów</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What we discuss */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/40 mb-12">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-6">O czym rozmawiamy?</h2>
              <div className="space-y-4">
                <p className="text-neutral-gray">
                  Każda grupa ma swobodę wyboru tematów, ale najczęściej poruszamy:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary text-2xl">•</span>
                    <span className="text-neutral-gray">Wyzwania osobiste i profesjonalne</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary text-2xl">•</span>
                    <span className="text-neutral-gray">Cele i plany rozwoju</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary text-2xl">•</span>
                    <span className="text-neutral-gray">
                      Dzielenie się doświadczeniami i wiedzą
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary text-2xl">•</span>
                    <span className="text-neutral-gray">Rozwiązywanie problemów wspólnie</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-br from-secondary/10 to-white rounded-3xl p-12 border border-secondary/20">
              <h2 className="text-3xl font-bold text-neutral-darkGray mb-4">Dołącz do grupy</h2>
              <p className="text-neutral-gray mb-8">
                Zainteresowany? Dołącz do naszego Telegram i dowiedz się o najbliższych spotkaniach
              </p>
              <Link
                href="https://t.me/BuddysNetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-secondary text-white font-medium rounded-full hover:bg-secondary-dark transition-all hover:shadow-lg"
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
