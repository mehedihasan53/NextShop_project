import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen">
      <header className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent" />

        <div className="relative container py-20 lg:py-32 flex flex-col items-start gap-6">
          <h1 className="text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
            NextShop — Modern products, simple checkout
          </h1>
          <p className="text-lg lg:text-xl text-slate-400 max-w-2xl">
            A small demo storefront showcasing product listings, dynamic pages, and protected admin flows.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/items"
              className="
                px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg
                shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105
                transition-all duration-300
              "
            >
              Browse Items
            </Link>
            <Link
              href="/add-item"
              className="
                px-6 py-3 bg-slate-800/50 border border-slate-700/50 text-slate-300 font-medium rounded-lg
                backdrop-blur-sm hover:bg-slate-700/50 hover:border-slate-600/50 hover:text-white
                hover:scale-105 transition-all duration-300
              "
            >
              Add Item (Admin)
            </Link>
          </div>
        </div>
      </header>

      <section id="about" className="container py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">About NextShop</h2>
            <p className="text-slate-400 leading-relaxed">
              NextShop is a demonstration of a production-ready layout combining Next.js App Router for frontend,
              and a small Express API for product management.
            </p>
          </div>
          <div className="glass-dark rounded-2xl p-6 shadow-xl">
            <p className="text-slate-300">Simple, focused, and built for clarity.</p>
          </div>
        </div>
      </section>

      <section id="features" className="bg-slate-800/30 py-16 lg:py-24">
        <div className="container grid md:grid-cols-3 gap-6">
          <div className="glass-dark p-6 rounded-xl hover:scale-105 transition-all duration-300">
            <h3 className="text-lg font-semibold text-white mb-2">Modern UI</h3>
            <p className="text-slate-400">Glassmorphism design with smooth animations</p>
          </div>
          <div className="glass-dark p-6 rounded-xl hover:scale-105 transition-all duration-300">
            <h3 className="text-lg font-semibold text-white mb-2">Protected Admin Routes</h3>
            <p className="text-slate-400">Secure authentication and authorization</p>
          </div>
          <div className="glass-dark p-6 rounded-xl hover:scale-105 transition-all duration-300">
            <h3 className="text-lg font-semibold text-white mb-2">Express API</h3>
            <p className="text-slate-400">RESTful API with JSON data persistence</p>
          </div>
        </div>
      </section>

      <section id="services" className="container py-16 lg:py-24">
        <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">Services</h3>
        <p className="text-slate-400 leading-relaxed">
          Product management, demo authentication, and responsive UI components suitable for production.
        </p>
      </section>

      <section id="testimonials" className="bg-slate-800/30 py-16 lg:py-24">
        <div className="container">
          <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">Testimonials</h3>
          <p className="text-slate-400 leading-relaxed">
            "Beautiful and minimal — great demo for getting started." — Designer
          </p>
        </div>
      </section>

      <section id="pricing" className="container py-16 lg:py-24">
        <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">Pricing</h3>
        <p className="text-slate-400 leading-relaxed">
          This is a demo and free to use. Extend it into a real store as needed.
        </p>
      </section>

      <section id="faq" className="bg-slate-800/30 py-16 lg:py-24">
        <div className="container">
          <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">FAQ</h3>
          <div className="text-slate-400 leading-relaxed">
            <p>
              <strong className="text-slate-300">Q:</strong> Is the API real? <br />
              <strong className="text-slate-300">A:</strong> Yes — an Express server stores items to a JSON file for demo purposes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
