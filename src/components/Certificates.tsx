import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certificates = () => {
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
          <p className="text-xl text-muted-foreground font-dm-sans max-w-2xl mx-auto mb-8">
            Professional certifications and achievements coming soon
          </p>
          
          <div className="max-w-md mx-auto">
            <Card className="border-dashed border-2 border-primary/30 bg-primary/5">
              <CardContent className="py-12 px-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Award className="w-8 h-8 text-primary animate-pulse" />
                </div>
                <h3 className="text-xl font-dm-sans font-semibold text-foreground mb-2">
                  Coming Soon
                </h3>
                <p className="text-muted-foreground font-dm-sans">
                  New certifications and achievements will be displayed here
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;