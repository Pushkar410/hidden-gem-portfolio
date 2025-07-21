import { Sparkles, Plus } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <h2 className="font-space-grotesk font-bold text-4xl lg:text-5xl mb-12 text-center text-foreground">
              Projects
            </h2>
            
            <div className="card-gradient rounded-2xl p-8 lg:p-12 border border-border/50 relative overflow-hidden group">
              {/* Shimmer overlay */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Background decoration */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl mx-auto mb-8 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                  <Plus className="w-12 h-12 text-primary group-hover:rotate-180 transition-transform duration-500" />
                </div>
                
                <h3 className="font-space-grotesk font-bold text-2xl lg:text-3xl text-foreground mb-6">
                  Coming Soon
                </h3>
                
                <p className="font-dm-sans text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
                  This space is saving itself for something amazing. Stay tuned.
                </p>
                
                <div className="inline-flex items-center space-x-2 text-primary">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                  <span className="font-dm-sans font-medium">
                    Great things are brewing
                  </span>
                  <Sparkles className="w-5 h-5 animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;