import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import StepsSection from "@/components/StepsSection";
import PricingSection from "@/components/PricingSection";
import PageWrapper from "@/components/PageWrapper";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <AboutSection />
      <StepsSection />
      <FAQ />
    </PageWrapper>
  );
}
