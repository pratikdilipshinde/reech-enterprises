import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import WhyChooseSection from "./WhyChooseSection";
import PricingSection from "./PricingSection";
import CoreFeaturesSection from "./CoreFeaturesSection";
import FunFactsSection from "./FunFactsSection";
import ProcessSection from "./ProcessSection";
import FAQSection from "./FAQSection";
import TestimonialsSection from "./TestimonialsSection";
import BlogSection from "./BlogSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <PricingSection />
      <CoreFeaturesSection />
      <FunFactsSection />
      <ProcessSection />
      
      <TestimonialsSection />
      <FAQSection />
      {/* <BlogSection /> */}
    </>
  );
}
