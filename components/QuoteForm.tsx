"use client";

import { useState } from "react";

interface FormData {
  name: string;
  address: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const serviceOptions = [
  "Residential Lawn Care",
  "Commercial Maintenance",
  "Seasonal Cleanup",
  "Leaf Removal",
  "Other",
];

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    address: "",
    phone: "",
    email: "",
    serviceType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.serviceType) newErrors.serviceType = "Please select a service";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  if (submitted) {
    return (
      <div className="bg-brand-green/5 border border-brand-green/20 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-brand-charcoal mb-2">
          Quote Request Received
        </h3>
        <p className="text-gray-600">
          Thanks, {formData.name}! We&apos;ll review your request and get back
          to you within 24 hours. If you need immediate assistance, give us a
          call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-brand-charcoal mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.name ? "border-red-400" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-colors`}
          placeholder="Your full name"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className="block text-sm font-semibold text-brand-charcoal mb-1">
          Property Address *
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.address ? "border-red-400" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-colors`}
          placeholder="123 Main St, Milwaukee, WI"
        />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
      </div>

      {/* Phone & Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-brand-charcoal mb-1">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.phone ? "border-red-400" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-colors`}
            placeholder="(414) 555-0000"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-brand-charcoal mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email ? "border-red-400" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-colors`}
            placeholder="you@email.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Service Type */}
      <div>
        <label htmlFor="serviceType" className="block text-sm font-semibold text-brand-charcoal mb-1">
          Service Needed *
        </label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.serviceType ? "border-red-400" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-colors bg-white`}
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.serviceType && <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-brand-charcoal mb-1">
          Additional Details
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-colors resize-vertical"
          placeholder="Tell us about your property, any specific needs, preferred schedule, etc."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-sm hover:shadow-md"
      >
        Submit Quote Request
      </button>
    </form>
  );
}
