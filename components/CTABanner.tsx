"use client";

export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden bg-brand-charcoal">
      {/* Animated gradient waves */}
      <div className="absolute inset-0">
        <div className="cta-wave cta-wave-1" />
        <div className="cta-wave cta-wave-2" />
        <div className="cta-wave cta-wave-3" />
      </div>

      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Ready to Transform Your Property?
        </h2>
        <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
          Get a free, no-obligation estimate from Milwaukee&apos;s trusted
          landscaping team. We&apos;ll come to you.
        </p>
        <a
          href="/contact"
          className="inline-block mt-8 bg-brand-gold hover:bg-brand-gold-dark text-brand-charcoal px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
        >
          Get Your Free Quote
        </a>
      </div>
    </section>
  );
}
