import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Mindful Landscaping LLC",
  description:
    "Milwaukee-based, community-focused lawn care and landscaping. Part of The Mindful Companies ecosystem.",
};

const values = [
  {
    title: "Quality Work",
    description:
      "Every property gets the same attention to detail — whether it's a front yard in Riverwest or a commercial park in Brookfield.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Fair Pricing",
    description:
      "Honest quotes, no hidden fees, no upselling. We tell you what it costs and we stick to it.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Community First",
    description:
      "We hire locally, spend locally, and invest in the neighborhoods we serve. Milwaukee is home.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Reliable Service",
    description:
      "We show up when we say we will, finish what we start, and communicate clearly throughout.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-brand-green-dark to-brand-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            About Us
          </h1>
          <p className="mt-4 text-green-100 text-lg max-w-2xl mx-auto">
            A Milwaukee landscaping company built on honest work and community
            values.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-charcoal mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Mindful Landscaping started with a straightforward belief: the
                  way you care for a property says something about the way you
                  do business. We treat every lawn, every lot, and every
                  property like our reputation depends on it — because it does.
                </p>
                <p>
                  Based right here in Milwaukee, we serve homeowners and
                  businesses across the metro area. Our crew knows the soil, the
                  seasons, and the neighborhoods. We&apos;re not a franchise
                  operation flying in from out of state — we&apos;re your
                  neighbors.
                </p>
                <p>
                  As part of{" "}
                  <span className="font-semibold text-brand-charcoal">
                    The Mindful Companies
                  </span>{" "}
                  ecosystem, we share a commitment to building businesses that
                  strengthen communities. From workforce development to
                  landscaping, every arm of the organization is rooted in the
                  same principle: do good work, hire good people, and invest in
                  where you live.
                </p>
              </div>
            </div>

            {/* Placeholder for future team photo */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-80 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <svg className="w-16 h-16 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="text-sm font-medium">Team Photo Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-charcoal text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-14 h-14 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="font-bold text-brand-charcoal text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-charcoal">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Whether it&apos;s a small yard or a large commercial property,
            we&apos;d love to earn your business.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
