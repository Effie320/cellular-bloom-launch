import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SymptomsSection from "@/components/SymptomsSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/i18n/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <SymptomsSection />
        <BenefitsSection />
        <AboutSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
