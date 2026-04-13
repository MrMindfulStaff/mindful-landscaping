import Link from "next/link";

export default function AboutBlurb() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-charcoal">
            Rooted in Milwaukee
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Mindful Landscaping was built on a simple idea: treat every property
            like it&apos;s your own. We&apos;re a Milwaukee-based crew that
            takes pride in honest work, fair pricing, and making our
            neighborhoods look their best. As part of The Mindful Companies, we
            believe in building something that serves the community — one lawn
            at a time.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 mt-8 text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
          >
            Learn More About Us
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
