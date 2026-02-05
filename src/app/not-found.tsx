import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <html lang="pl">
      <body className="antialiased">
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-teal-50 px-4">
          <div className="text-center max-w-lg">
            <div className="relative w-32 h-32 mx-auto mb-8">
              <Image
                src="/images/logo/logo2.png"
                alt="Buddy's Network logo"
                fill
                className="object-contain"
              />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-teal-600 mb-4">404</h1>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>

            <p className="text-gray-600 mb-8">
              Sorry, the page you are looking for does not exist or has been moved.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pl"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
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
                Go Home (PL)
              </Link>

              <Link
                href="/en"
                className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-200 text-gray-900 font-medium rounded-full hover:bg-gray-50 transition-all duration-300"
              >
                Go Home (EN)
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
