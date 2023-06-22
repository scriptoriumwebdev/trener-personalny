export default function Hero() {
  return (
    <section className="relative bg-[url(/images/hero.webp)] bg-cover bg-top bg-no-repeat">
      <div className="absolute inset-0 bg-black/25 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/25 sm:to-black/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            Radek Senski
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
            Trener personalny
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="/about"
              className="block w-full rounded bg-red-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700/75 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Dowiedz się więcej
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
