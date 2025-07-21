import { Code, Database, Brain, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Tools",
      icon: Code,
      skills: ["Python", "pandas", "NumPy", "scikit-learn", "Jupyter", "Git"]
    },
    {
      title: "Core Areas",
      icon: Brain,
      skills: ["Machine Learning", "Data Science", "Deep Learning (in progress)"]
    }
  ];

  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="reveal">
            <h2 className="font-space-grotesk font-bold text-4xl lg:text-5xl mb-12 text-center text-foreground">
              Skills & Expertise
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <div 
                  key={category.title}
                  className="card-gradient rounded-2xl p-8 border border-border/50 group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-space-grotesk font-bold text-xl text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skill}
                        className="skill-pill"
                        style={{ 
                          animationDelay: `${(index * 3 + skillIndex) * 0.1}s` 
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="inline-flex items-center space-x-2 text-muted-foreground">
                <GitBranch className="w-5 h-5" />
                <span className="font-dm-sans">
                  Always learning, always evolving
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;