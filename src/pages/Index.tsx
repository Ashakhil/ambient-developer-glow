
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Separator } from "@/components/ui/separator";

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
        <Separator className="bg-gradient-to-r from-transparent via-neon-teal/30 to-transparent h-px" />
        
        <div id="about">
          <AboutSection />
        </div>
        <Separator className="bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent h-px" />
        
        <div id="education">
          <EducationSection />
        </div>
        <Separator className="bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent h-px" />
        
        <div id="tech-stack">
          <TechStackSection />
        </div>
        <Separator className="bg-gradient-to-r from-transparent via-neon-green/30 to-transparent h-px" />
        
        <div id="projects">
          <ProjectsSection />
        </div>
        <Separator className="bg-gradient-to-r from-transparent via-neon-teal/30 to-transparent h-px" />
        
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Index;
