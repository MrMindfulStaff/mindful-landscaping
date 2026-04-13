import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      <Image
        src="/images/grass-closeup.jpg"
        alt="Lush green lawn"
        fill
        className="object-cover"
        quality={80}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/85 to-brand-green/75" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">{title}</h1>
        <p className="mt-4 text-green-100 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
