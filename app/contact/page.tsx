import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Quote | Mindful Landscaping LLC",
  description:
    "Request a free landscaping estimate in Milwaukee. No obligation, no pressure — just honest pricing for quality lawn care.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-brand-green-dark to-brand-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Get a Free Quote
          </h1>
          <p className="mt-4 text-green-100 text-lg max-w-2xl mx-auto">
            Tell us about your property and we&apos;ll get back to you with an
            honest estimate — usually within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
                  Request Your Estimate
                </h2>
                <QuoteForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-brand-charcoal text-lg mb-4">
                  Contact Us Directly
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-brand-charcoal">(414) 555-0192</p>
                      <p className="text-sm text-gray-500">Mon–Fri, 7am–6pm</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-brand-charcoal">info@mindfullandscaping.com</p>
                      <p className="text-sm text-gray-500">We reply within 24 hours</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Service Area Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-brand-charcoal text-lg mb-4">
                  Service Area
                </h3>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We serve Milwaukee and surrounding communities including
                      Wauwatosa, Shorewood, Whitefish Bay, Bay View, Brookfield,
                      West Allis, and Greenfield.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Note */}
              <div className="bg-brand-green/5 border border-brand-green/20 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-brand-charcoal text-sm">Licensed & Insured</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Full liability coverage. Your property is protected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
