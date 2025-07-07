
export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-dark-card/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            <span className="text-gradient">About Me</span>
          </h2>
          
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              I'm a passionate full-stack developer with a deep fascination for artificial intelligence 
              and machine learning. My journey in tech spans several years, during which I've honed my 
              skills in creating robust, scalable applications and exploring the frontiers of AI technology.
            </p>
            
            <p>
              When I'm not coding, you'll find me experimenting with new AI models, contributing to open-source 
              projects, or sharing knowledge with the developer community. I believe in the power of technology 
              to solve real-world problems and create meaningful impact.
            </p>
            
            <div className="bg-gradient-card rounded-2xl p-6 mt-8 border border-neon-teal/20">
              <p className="text-neon-teal font-medium">
                💡 Fun Fact: I've built over 50 web applications and contributed to 3 open-source AI projects!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
