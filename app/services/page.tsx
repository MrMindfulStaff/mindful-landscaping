import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Services | Mindful Landscaping LLC",
  description:
    "Residential lawn care, commercial maintenance, seasonal cleanup, and leaf removal services in Milwaukee, WI.",
};

const services = [
  {
    title: "Residential Lawn Care",
    description:
      "Keep your home looking its best with our comprehensive lawn care packages. We handle weekly mowing, precision edging, string trimming, and fertilization programs tailored to Wisconsin's climate. Whether you're in Bay View, Wauwatosa, or Shorewood — we'll keep your yard the sharpest on the block.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Commercial Maintenance",
    description:
      "Professional grounds maintenance for office parks, retail centers, HOA communities, and multi-family properties across the Milwaukee metro. We provide consistent, reliable service with flexible scheduling to keep your commercial property inviting and well-maintained year-round.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Seasonal Cleanup",
    description:
      "Wisconsin's seasons hit hard — we make sure your property is ready. Our spring cleanup clears winter debris, preps beds, and edges walks. Fall cleanup includes leaf collection, bed preparation, and final mowing to winterize your lawn. We get your property through the transitions so it comes back strong.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Leaf Removal",
    description:
      "Milwaukee autumns are beautiful — but the leaves don't clean themselves up. Our dedicated leaf removal service handles full-property collection, hauling, and disposal. We work fast and clean so your lawn stays healthy heading into winter. Available as a standalone service or add-on to any maintenance plan.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3c0 0 3 2 7 2s7-2 7-2c0 0-1 8-7 12C6 11 5 3 5 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v6" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive lawn care and landscaping solutions for Milwaukee homes and businesses."
      />

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href="/contact"
                detailed
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-charcoal">
            Not Sure What You Need?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            No problem. Reach out and we&apos;ll walk your property, assess what
            needs doing, and give you an honest recommendation. No pressure, no
            hard sell.
          </p>
          <a
            href="/contact"
            className="inline-block mt-8 bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Request a Free Estimate
          </a>
        </div>
      </section>
    </>
  );
}
