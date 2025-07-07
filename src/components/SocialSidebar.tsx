
import { Github, Linkedin, Mail } from "lucide-react";

export const SocialSidebar = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-neon-blue" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-neon-teal" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email", color: "hover:text-neon-purple" },
  ];

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col space-y-6 bg-dark-card/30 backdrop-blur-sm p-4 rounded-2xl border border-gray-800">
        {socialLinks.map(({ icon: Icon, href, label, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-400 ${color} transition-all duration-300 hover:scale-125 p-2 rounded-lg hover:bg-gray-800/50`}
            aria-label={label}
          >
            <Icon className="h-6 w-6" />
          </a>
        ))}
        
        {/* Vertical line */}
        <div className="w-px h-16 bg-gradient-to-b from-neon-teal to-transparent mx-auto"></div>
      </div>
    </div>
  );
};
