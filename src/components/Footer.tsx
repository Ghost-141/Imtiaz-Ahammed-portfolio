import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/imtiazahammed141/",
      icon: Linkedin,
    },
    {
      name: "GitHub", 
      url: "https://github.com/Ghost-141",
      icon: Github,
    },
    {
      name: "Email",
      url: "mailto:mdimtiazahammed@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="backdrop-blur-md bg-slate-900/60 border-t border-white/10">
      <div className="section-container py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 group"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Get In Touch
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
              <a 
                href="mailto:mdimtiazahammed@gmail.com"
                className="hover:text-primary transition-colors"
              >
                mdimtiazahammed@gmail.com
              </a>
              <span className="hidden sm:inline">|</span>
              <span>+88 01723397253</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              © {currentYear} Md. Imtiaz Ahammed Anik.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
