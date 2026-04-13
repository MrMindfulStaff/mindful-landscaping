import Hero from "@/components/Hero";
import ServiceHighlights from "@/components/ServiceHighlights";
import TrustBar from "@/components/TrustBar";
import AboutBlurb from "@/components/AboutBlurb";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServiceHighlights />
      <Testimonials />
      <AboutBlurb />

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-brand-green-dark to-brand-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Transform Your Property?
          </h2>
          <p className="mt-4 text-green-100 text-lg max-w-2xl mx-auto">
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
    </>
  );
}
