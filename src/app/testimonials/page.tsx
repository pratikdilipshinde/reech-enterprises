import PageHeader from "@/components/ui/PageHeader";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";

export default function TestimonialsPage() {
  return (
    <main>
      <PageHeader title="Testimonials" description="Customer experiences and feedback from solar journeys." />
      <TestimonialsSection />
    </main>
  );
}
