import Hero from "@/components/Hero";
import ServiceHighlights from "@/components/ServiceHighlights";
import TrustBar from "@/components/TrustBar";
import AboutBlurb from "@/components/AboutBlurb";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServiceHighlights />
      <Testimonials />
      <AboutBlurb />
      <CTABanner />
    </>
  );
}
