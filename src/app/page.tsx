import Navigation from "@/components/wabs/Navigation";
import HeroSection from "@/components/wabs/HeroSection";
import AudienceSegmentation from "@/components/wabs/AudienceSegmentation";
import AuthorityProofBar from "@/components/wabs/AuthorityProofBar";
import AboutSection from "@/components/wabs/AboutSection";
import AsSeenOn from "@/components/wabs/AsSeenOn";
import ServicesPillars from "@/components/wabs/ServicesPillars";
import BrandsCarousel from "@/components/wabs/BrandsCarousel";
import ProgramsSnapshot from "@/components/wabs/ProgramsSnapshot";
import TestimonialsCarousel from "@/components/wabs/TestimonialsCarousel";
import CaseStudyPreview from "@/components/wabs/CaseStudyPreview";
import LeadMagnetBlock from "@/components/wabs/LeadMagnetBlock";
import FinalCTA from "@/components/wabs/FinalCTA";
import Footer from "@/components/wabs/Footer";
import MobileFloatingCTA from "@/components/wabs/MobileFloatingCTA";

export default function Page() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#F5EFE0" }}>
      <Navigation />
      <HeroSection />
      <AudienceSegmentation />
      <AuthorityProofBar />
      <AboutSection />
      <AsSeenOn />
      <ServicesPillars />
      <BrandsCarousel />
      <ProgramsSnapshot />
      <TestimonialsCarousel />
      <CaseStudyPreview />
      <LeadMagnetBlock />
      <FinalCTA />
      <Footer />
      <MobileFloatingCTA />
    </main>
  );
}
