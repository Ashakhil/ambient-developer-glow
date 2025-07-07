
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Ambient background gradient */}
      <div className="fixed inset-0 bg-gradient-ambient opacity-50 pointer-events-none" />
      
      {/* Navigation bar */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10">
        <div id="home">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="education">
          <EducationSection />
        </div>
        <div id="tech-stack">
          <TechStackSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Index;
