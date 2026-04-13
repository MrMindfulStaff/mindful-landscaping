import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  detailed?: boolean;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href = "/contact",
  detailed = false,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center text-brand-green mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-brand-charcoal mb-2">{title}</h3>
      <p className={`text-gray-600 leading-relaxed ${detailed ? "" : "text-sm"}`}>
        {description}
      </p>
      <Link
        href={href}
        className="inline-flex items-center gap-1 mt-4 text-brand-green font-semibold text-sm hover:text-brand-green-dark transition-colors"
      >
        {detailed ? "Request a Quote" : "Learn More"}
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
