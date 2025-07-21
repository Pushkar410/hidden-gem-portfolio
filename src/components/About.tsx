const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <h2 className="font-space-grotesk font-bold text-4xl lg:text-5xl mb-12 text-center text-foreground">
              About Me
            </h2>
            
            <div className="card-gradient rounded-2xl p-8 lg:p-12 border border-border/50">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-8 flex items-center justify-center glow-effect">
                  <span className="font-space-grotesk font-bold text-2xl text-primary-foreground">PR</span>
                </div>
                
                <div className="space-y-6">
                  <p className="font-dm-sans text-lg lg:text-xl leading-relaxed text-foreground">
                    Hey there — I'm <span className="text-primary font-medium">Pushkar</span>, a vibe coder currently immersed in the world of AI, ML, and data science.
                  </p>
                  
                  <p className="font-dm-sans text-lg lg:text-xl leading-relaxed text-muted-foreground">
                    I turn curiosity into code and data into direction. I'm building my future one experiment at a time — and you're welcome to follow along.
                  </p>
                  
                  <div className="pt-6">
                    <p className="font-dm-sans text-base text-muted-foreground italic">
                      "Impact over noise. Code with curiosity. Build with quiet confidence."
                    </p>
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

export default About;