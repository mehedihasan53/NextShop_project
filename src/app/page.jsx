import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <header className="bg-white">
        <div className="container py-20 flex flex-col items-start gap-6">
          <h1 className="text-4xl font-extrabold">NextShop — Modern products, simple checkout</h1>
          <p className="text-lg text-gray-600 max-w-2xl">A small demo storefront showcasing product listings, dynamic pages, and protected admin flows.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/items" className="rounded-md bg-indigo-600 px-4 py-2 text-white">Browse Items</Link>
            <Link href="/add-item" className="rounded-md border px-4 py-2">Add Item (Admin)</Link>
          </div>
        </div>
      </header>

      <section id="about" className="container py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold">About NextShop</h2>
            <p className="mt-4 text-gray-600">NextShop is a demonstration of a production-ready layout combining Next.js App Router for frontend, and a small Express API for product management.</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow">Simple, focused, and built for clarity.</div>
        </div>
      </section>

      <section id="features" className="bg-white py-16">
        <div className="container grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded">Modern UI</div>
          <div className="p-6 border rounded">Protected Admin Routes</div>
          <div className="p-6 border rounded">Express API</div>
        </div>
      </section>

      <section id="services" className="container py-16">
        <h3 className="text-xl font-semibold">Services</h3>
        <p className="text-gray-600 mt-3">Product management, demo authentication, and responsive UI components suitable for production.</p>
      </section>

      <section id="testimonials" className="bg-white py-16">
        <div className="container">
          <h3 className="text-xl font-semibold">Testimonials</h3>
          <p className="mt-3 text-gray-600">"Beautiful and minimal — great demo for getting started." — Designer</p>
        </div>
      </section>

      <section id="pricing" className="container py-16">
        <h3 className="text-xl font-semibold">Pricing</h3>
        <p className="mt-3 text-gray-600">This is a demo and free to use. Extend it into a real store as needed.</p>
      </section>

      <section id="faq" className="bg-white py-16">
        <div className="container">
          <h3 className="text-xl font-semibold">FAQ</h3>
          <div className="mt-4 text-gray-600">
            <p><strong>Q:</strong> Is the API real? <br /> <strong>A:</strong> Yes — an Express server stores items to a JSON file for demo purposes.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
