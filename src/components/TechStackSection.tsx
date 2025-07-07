
export const TechStackSection = () => {
  const technologies = [
    { name: "JavaScript", icon: "🟨", category: "Language" },
    { name: "TypeScript", icon: "🔷", category: "Language" },
    { name: "Python", icon: "🐍", category: "Language" },
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Next.js", icon: "▲", category: "Frontend" },
    { name: "Vue.js", icon: "💚", category: "Frontend" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "Express", icon: "🚀", category: "Backend" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "Docker", icon: "🐳", category: "DevOps" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "TensorFlow", icon: "🧠", category: "AI/ML" },
    { name: "PyTorch", icon: "🔥", category: "AI/ML" },
    { name: "OpenAI", icon: "🤖", category: "AI/ML" },
    { name: "Git", icon: "📝", category: "Tools" }
  ];

  return (
    <section id="tech-stack" className="section-padding bg-dark-card/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 animate-fade-in">
          <span className="text-gradient">Tech Stack</span>
        </h2>

        <div className="relative overflow-hidden">
          {/* Scrollable container */}
          <div className="flex gap-6 animate-fade-in pb-6 overflow-x-auto scrollbar-thin scrollbar-thumb-neon-teal scrollbar-track-dark-card">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="flex-shrink-0 group"
              >
                <div className="bg-gradient-card rounded-2xl p-6 border glow-border hover:glow-border-hover transition-all duration-300 hover:scale-110 min-w-[160px] text-center">
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {tech.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {tech.category}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-6 w-8 bg-gradient-to-r from-dark-bg to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-6 w-8 bg-gradient-to-l from-dark-bg to-transparent pointer-events-none"></div>
        </div>

        <p className="text-center text-gray-400 mt-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Scroll horizontally to explore more technologies →
        </p>
      </div>
    </section>
  );
};
