
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      name: "AI Chat Assistant",
      type: "AI Project",
      description: "A sophisticated chatbot powered by OpenAI's GPT model with custom knowledge base integration and real-time responses.",
      technologies: ["React", "Node.js", "OpenAI API", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      name: "E-Commerce Platform",
      type: "Web Development",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and advanced analytics dashboard.",
      technologies: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      name: "Task Management App",
      type: "Web Development",
      description: "Collaborative project management tool with real-time updates, team chat, and progress tracking features.",
      technologies: ["Vue.js", "Express", "Socket.io", "MongoDB"],
      github: "https://github.com",
      demo: null,
      featured: false
    },
    {
      name: "ML Image Classifier",
      type: "AI Project",
      description: "Deep learning model for image classification with 95% accuracy, deployed as a web service with REST API.",
      technologies: ["Python", "TensorFlow", "Flask", "Docker"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      name: "Portfolio Website",
      type: "Web Development",
      description: "Modern, responsive portfolio website with dark mode, smooth animations, and contact form integration.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      name: "Cryptocurrency Tracker",
      type: "Web Development",
      description: "Real-time crypto price tracker with portfolio management, price alerts, and market analysis tools.",
      technologies: ["React", "Chart.js", "CoinGecko API", "Firebase"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 animate-fade-in">
          <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-gradient-card rounded-2xl p-8 border transition-all duration-300 hover:scale-105 animate-fade-in ${
                project.featured 
                  ? 'glow-border glow-border-hover lg:col-span-1' 
                  : 'border-gray-700 hover:border-neon-teal/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.name}
                  </h3>
                  <span className="text-neon-blue text-sm font-medium px-3 py-1 bg-neon-blue/20 rounded-full">
                    {project.type}
                  </span>
                </div>
                {project.featured && (
                  <div className="text-neon-teal text-xs font-semibold px-2 py-1 border border-neon-teal/30 rounded-full">
                    FEATURED
                  </div>
                )}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                
                {project.demo && (
                  <Button
                    size="sm"
                    className="bg-neon-teal hover:bg-neon-blue text-white"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
