
import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center section-padding">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="text-gradient">Alex</span>{" "}
                <span className="text-white">Johnson</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-neon-teal font-medium">
                Developer | AI Enthusiast
              </h2>
              <p className="text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed">
                I'm passionate about building innovative web applications and exploring AI solutions. 
                Crafting digital experiences that merge creativity with cutting-edge technology.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-neon-teal to-neon-blue hover:from-neon-blue hover:to-neon-purple text-white px-8 py-6 text-lg rounded-xl glow-border-hover transition-all duration-300 hover:scale-105"
              >
                Contact Me
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                onClick={() => scrollToSection('projects')}
                variant="outline"
                className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
              >
                View Projects
              </Button>
              
              <Button 
                variant="outline"
                className="border-neon-green text-neon-green hover:bg-neon-green hover:text-dark-bg px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Button>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-neon-teal via-neon-blue to-neon-purple p-1 animate-glow-pulse">
                <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                  <div className="w-[95%] h-[95%] rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-8xl text-gray-300">
                    👨‍💻
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-teal rounded-full animate-float opacity-60"></div>
              <div className="absolute -bottom-8 -left-8 w-6 h-6 bg-neon-purple rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -left-12 w-4 h-4 bg-neon-blue rounded-full animate-float opacity-50" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
