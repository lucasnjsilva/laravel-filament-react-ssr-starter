import { Head } from "@inertiajs/react";

export default function Welcome() {
  return (
    <>
      <Head title="Welcome" />

      <div className="relative min-h-screen bg-gray-50 text-gray-900 selection:bg-[#FF2D20] selection:text-white dark:bg-gray-950 dark:text-white">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"></div>

        <div className="relative flex min-h-screen flex-col items-center justify-center p-6 lg:p-8">
          <div className="mb-8 flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 border border-orange-200 dark:border-orange-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            SSR Enabled & Ready
          </div>

          <main className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-400">
              Starter Kit
            </h1>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A production-ready{" "}
              <strong className="text-gray-900 dark:text-white">
                Laravel 12
              </strong>{" "}
              boilerplate featuring a{" "}
              <strong className="text-orange-600 dark:text-orange-500">
                Filament
              </strong>{" "}
              admin panel and a SEO-friendly{" "}
              <strong className="text-[#61DAFB]">React</strong> frontend via
              Inertia.js with{" "}
              <span className="underline decoration-dotted decoration-gray-400 underline-offset-4">
                SSR pre-configured
              </span>
              .
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/admin"
                className="w-full sm:w-auto rounded-lg bg-[#FF2D20] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#e0261a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF2D20] transition-all"
              >
                Access Admin Panel
              </a>

              <a
                href="https://github.com/lucasnjsilva/laravel-filament-react-ssr-starter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto rounded-lg bg-white dark:bg-gray-800 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              >
                View Documentation
              </a>
            </div>
          </main>

          <div className="mt-16 grid grid-cols-2 gap-8 text-center md:grid-cols-4 lg:gap-12 opacity-70">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                Backend
              </span>
              <span className="text-lg font-bold">Laravel 12</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                Admin
              </span>
              <span className="text-lg font-bold text-orange-600 dark:text-orange-500">
                Filament
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                Frontend
              </span>
              <span className="text-lg font-bold text-[#61DAFB]">
                React + Inertia
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                Rendering
              </span>
              <span className="text-lg font-bold text-green-600 dark:text-green-500">
                SSR Mode
              </span>
            </div>
          </div>

          <footer className="absolute bottom-4 text-xs text-gray-400">
            Laravel v{12.0} &bull; PHP v{8.4}
          </footer>
        </div>
      </div>
    </>
  );
}
