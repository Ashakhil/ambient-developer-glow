
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SocialSidebar } from "@/components/SocialSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Ambient background gradient */}
      <div className="fixed inset-0 bg-gradient-ambient opacity-50 pointer-events-none" />
      
      {/* Social sidebar */}
      <SocialSidebar />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <TechStackSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
