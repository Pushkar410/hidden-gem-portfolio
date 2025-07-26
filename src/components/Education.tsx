import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <h2 className="font-space-grotesk font-bold text-4xl lg:text-5xl mb-12 text-center text-foreground">
              Education
            </h2>
            
            <div className="space-y-8">
              {/* B.Tech */}
              <div className="card-gradient rounded-2xl p-8 lg:p-12 border border-border/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="font-space-grotesk font-bold text-2xl lg:text-3xl text-foreground mb-2">
                          Bachelor of Technology (B.Tech)
                        </h3>
                        <p className="font-dm-sans text-lg text-primary font-medium">
                          Information Science and Engineering
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 text-muted-foreground">
                          <MapPin className="w-5 h-5" />
                          <span className="font-dm-sans">Siddaganga Institute Of Technology</span>
                        </div>
                        
                        <div className="flex items-center space-x-3 text-muted-foreground">
                          <Calendar className="w-5 h-5" />
                          <span className="font-dm-sans">2024 – 2028</span>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <blockquote className="border-l-4 border-primary/50 pl-6 py-2">
                          <p className="font-dm-sans text-muted-foreground italic">
                            "Focusing on data-driven problem solving, intelligent systems, and modern computing technologies."
                          </p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PUC */}
              <div className="card-gradient rounded-2xl p-8 lg:p-12 border border-border/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="font-space-grotesk font-bold text-2xl lg:text-3xl text-foreground mb-2">
                          Pre-University Course (PUC)
                        </h3>
                        <p className="font-dm-sans text-lg text-accent font-medium">
                          Science Stream
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 text-muted-foreground">
                          <MapPin className="w-5 h-5" />
                          <span className="font-dm-sans">VCTC</span>
                        </div>
                        
                        <div className="flex items-center space-x-3 text-muted-foreground">
                          <Calendar className="w-5 h-5" />
                          <span className="font-dm-sans">2022 – 2024</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* School */}
              <div className="card-gradient rounded-2xl p-8 lg:p-12 border border-border/50 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="font-space-grotesk font-bold text-2xl lg:text-3xl text-foreground mb-2">
                          Primary & Secondary Education
                        </h3>
                        <p className="font-dm-sans text-lg text-primary font-medium">
                          ICSCE BOARD
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 text-muted-foreground">
                          <MapPin className="w-5 h-5" />
                          <span className="font-dm-sans">Kanva Public School</span>
                        </div>
                        
                        <div className="flex items-center space-x-3 text-muted-foreground">
                          <Calendar className="w-5 h-5" />
                          <span className="font-dm-sans">2012 – 2022</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;