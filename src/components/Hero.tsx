
import { ArrowDown } from 'lucide-react';
import ProfilePicture from './ProfilePicture';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="reveal">
          {/* Profile Picture and Name Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
            <ProfilePicture 
              size="xl" 
              className="order-2 md:order-1" 
            />
            <div className="order-1 md:order-2">
              <h1 className="font-space-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-foreground">
                Pushkar R Adiga
              </h1>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto mb-12">
            <p className="font-space-grotesk text-xl md:text-2xl font-medium text-primary mb-4">
              Deep in data, sharp in execution.
            </p>
            <p className="font-dm-sans text-lg text-muted-foreground leading-relaxed">
              A vibe coder exploring the infinite possibilities of AI, ML, and Data Science.
              Building the future one experiment at a time.
            </p>
          </div>
          
          <button 
            onClick={scrollToAbout}
            className="group inline-flex items-center space-x-2 text-primary hover:text-accent transition-all duration-300 font-dm-sans font-medium"
          >
            <span>Discover More</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
