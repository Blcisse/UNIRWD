export default function HomePage() {
    return (
      <section className="flex flex-col items-center justify-center text-center py-24">
        <h1 className="text-5xl font-extrabold tracking-tight text-sky-600">
          Welcome to UNIRWD
        </h1>
        <p className="mt-4 max-w-xl text-gray-600 text-lg">
          The universal online ordering, loyalty, and rewards platform designed
          for businesses of all kinds. Streamline your checkout, reward your
          customers, and grow your brand—all in one seamless ecosystem.
        </p>
        <div className="mt-8 flex space-x-4">
          <a
            href="/menu"
            className="rounded-lg bg-sky-600 px-6 py-3 text-white font-semibold hover:bg-sky-700 transition-colors"
          >
            Explore Menu
          </a>
          <a
            href="/rewards" 
            className="rounded-lg border border-sky-600 px-6 py-3 font-semibold text-sky-600 hover:bg-sky-50 transition-colors"
          >
            View Rewards
          </a>
        </div>
      </section>
    );
  }
  