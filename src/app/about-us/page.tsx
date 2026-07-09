import PageHeader from "@/components/ui/PageHeader";
import AboutSection from "@/components/sections/home/AboutSection";
import WhyChooseSection from "@/components/sections/home/WhyChooseSection";

export default function AboutUsPage() {
  return (
    <main>
      <PageHeader title="About Us" description="Learn about our clean energy mission, solar experience, and customer-first approach." />
      <AboutSection />
      <WhyChooseSection />
    </main>
  );
}
