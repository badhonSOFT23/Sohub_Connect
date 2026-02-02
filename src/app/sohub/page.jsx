import Header from "../../components/sohub/Header";
import Hero from "../../components/sohub/Hero";
import ProblemSection from "../../components/sohub/ProblemSection";
import SolutionSection from "../../components/sohub/SolutionSection";
import FeaturesSection from "../../components/sohub/FeaturesSection";
import PricingSection from "../../components/sohub/PricingSection";
import TestimonialsSection from "../../components/sohub/TestimonialsSection";
import CTASection from "../../components/sohub/CTASection";
import Footer from "../../components/sohub/Footer";

export default function SOHUBConnectPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
