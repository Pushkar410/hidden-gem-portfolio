import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Calendar } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      description: "Advanced React concepts including hooks, context, and performance optimization",
      skills: ["React", "JavaScript", "Web Development"]
    },
    {
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2023",
      description: "Comprehensive full-stack development covering frontend and backend technologies",
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"]
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2022",
      description: "Advanced algorithms and data structures implementation in JavaScript",
      skills: ["JavaScript", "Algorithms", "Data Structures"]
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Award className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Certificates
          </h2>
          <p className="text-xl text-muted-foreground font-dm-sans max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {cert.date}
                  </div>
                </div>
                <CardTitle className="text-xl font-dm-sans font-bold text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </CardTitle>
                <CardDescription className="text-primary font-medium">
                  {cert.issuer}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground font-dm-sans mb-4 leading-relaxed">
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;