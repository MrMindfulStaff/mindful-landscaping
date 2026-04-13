import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background image */}
      <Image
        src="/images/hero-home.jpg"
        alt="Beautiful residential home with a well-maintained green lawn and landscaping"
        fill
        className="object-cover"
        priority
        quality={85}
      />

      {/* Dark green overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/80 via-brand-green-dark/70 to-brand-green/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Milwaukee&apos;s Trusted
            <br />
            Landscaping Partner
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-xl">
            Professional lawn care and landscaping services for homes and
            businesses across Greater Milwaukee. Quality work, fair prices,
            community values.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-brand-gold hover:bg-brand-gold-dark text-brand-charcoal px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg text-center"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-green px-8 py-4 rounded-lg font-bold text-lg transition-colors text-center"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
