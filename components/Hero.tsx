import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light min-h-[600px] flex items-center">
      {/* Decorative overlay pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-brand-gold blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
          Milwaukee&apos;s Trusted
          <br />
          Landscaping Partner
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-green-100 max-w-2xl mx-auto text-balance">
          Professional lawn care and landscaping services for homes and
          businesses across Greater Milwaukee. Quality work, fair prices,
          community values.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-brand-gold hover:bg-brand-gold-dark text-brand-charcoal px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/services"
            className="border-2 border-white text-white hover:bg-white hover:text-brand-green px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
