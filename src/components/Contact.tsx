import { Github, Linkedin, Instagram, Mail, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      username: 'Pushkar410',
      url: 'https://github.com/Pushkar410',
      icon: Github,
      description: 'Code repositories'
    },
    {
      name: 'LinkedIn',
      username: 'Pushkar R. Adiga',
      url: 'https://linkedin.com/in/pushkar-r-adiga',
      icon: Linkedin,
      description: 'Professional network'
    },
    {
      name: 'Instagram',
      username: '@ram__2909',
      url: 'https://instagram.com/ram__2909',
      icon: Instagram,
      description: 'Life beyond code'
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <h2 className="font-space-grotesk font-bold text-4xl lg:text-5xl mb-12 text-center text-foreground">
              Let's Connect
            </h2>
            
            <div className="text-center mb-16">
              <p className="font-dm-sans text-xl lg:text-2xl text-muted-foreground mb-8">
                Let's build something smart together — or just say hi!
              </p>
              
              <a 
                href="mailto:pushkar@example.com"
                className="inline-flex items-center space-x-3 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-dm-sans font-medium text-lg hover:bg-primary/90 glow-effect transition-all duration-300 group"
              >
                <Mail className="w-6 h-6" />
                <span>Get In Touch</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-gradient rounded-xl p-6 border border-border/50 group hover:border-primary/30 transition-all duration-300 block"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/50 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-space-grotesk font-semibold text-foreground mb-1">
                        {link.name}
                      </h3>
                      <p className="font-dm-sans text-sm text-muted-foreground mb-2">
                        {link.description}
                      </p>
                      <p className="font-dm-sans text-sm text-primary font-medium truncate">
                        {link.username}
                      </p>
                    </div>
                    
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;