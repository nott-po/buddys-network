import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-lightest via-white to-accent-light/20 px-4">
      <div className="text-center max-w-lg">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <Image
            src="/images/logo/logo2.png"
            alt="Buddy's Network logo"
            fill
            className="object-contain"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>

        <h2 className="text-2xl md:text-3xl font-bold text-neutral-darkest mb-4">
          Strona nie znaleziona
        </h2>

        <p className="text-neutral-dark mb-8">
          Przepraszamy, strona której szukasz nie istnieje lub została przeniesiona.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/pl"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Strona główna
          </Link>

          <Link
            href="/pl#programs"
            className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/30 text-neutral-darkest font-medium rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <svg
              className="w-5 h-5 mr-2"
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
            Nasze programy
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-light">
          <p className="text-sm text-neutral-dark">
            Potrzebujesz pomocy?{' '}
            <Link href="/pl#contact" className="text-primary hover:underline">
              Skontaktuj się z nami
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
