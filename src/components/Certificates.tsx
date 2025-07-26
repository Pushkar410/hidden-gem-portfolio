import React from "react";
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
            Professional certifications and achievements
          </p>

          {/* New Sections Start */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-8">
            {/* Course Section */}
            <Card className="border-dashed border-2 border-primary/30 bg-primary/5">
              <CardContent className="py-8 px-4 text-center">
                <h3 className="text-xl font-dm-sans font-semibold text-foreground mb-2">
                  Course
                </h3>
                <p className="text-xs text-primary font-semibold mt-2">
                  In progress: Master in Data Science
                </p>
              </CardContent>
            </Card>
            {/* Hackathon Section */}
            <Card className="border-dashed border-2 border-primary/30 bg-primary/5">
              <CardContent className="py-8 px-4 text-center">
                <h3 className="text-xl font-dm-sans font-semibold text-foreground mb-4">
                  Hackathon
                </h3>
                <div className="mb-4">
                  <a 
                    href="/hackathon-certificate.jpeg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:scale-105 transition-transform duration-300"
                  >
                    <img 
                      src="/hackathon-certificate.jpeg" 
                      alt="Hackathon Certificate - Hack-cse-lerate 2025" 
                      className="w-48 h-64 object-contain rounded-lg shadow-md cursor-pointer"
                    />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground font-dm-sans">
                  Hack-cse-lerate 2025 - 12 Hour Internal Hackathon
                </p>
                <p className="text-xs text-muted-foreground font-dm-sans">
                  Team SEMICOLONS • Siddaganga Institute of Technology
                </p>
              </CardContent>
            </Card>
            {/* Volunteering Section */}
            <Card className="border-dashed border-2 border-primary/30 bg-primary/5">
              <CardContent className="py-8 px-4 text-center">
                <h3 className="text-xl font-dm-sans font-semibold text-foreground mb-2">
                  Volunteering
                </h3>
                <div className="mb-4">
                  <a 
                    href="/browse2025-volunteering.jpeg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:scale-105 transition-transform duration-300"
                  >
                    <img 
                      src="/browse2025-volunteering.jpeg" 
                      alt="Volunteering Certificate - Browse 2025" 
                      className="w-48 h-64 object-contain rounded-lg shadow-md cursor-pointer"
                    />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground font-dm-sans">
                  Volunteering - Browse 2025 (DECODERS)
                </p>
                <p className="text-xs text-muted-foreground font-dm-sans">
                  Siddaganga Institute of Technology • 20th May 2025
                </p>
              </CardContent>
            </Card>
            {/* Participation Section */}
            <Card className="border-dashed border-2 border-primary/30 bg-primary/5">
              <CardContent className="py-8 px-4 text-center">
                <h3 className="text-xl font-dm-sans font-semibold text-foreground mb-4">
                  Participation
                </h3>
                <div className="mb-4">
                  <a 
                    href="/participation-certificate.jpeg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:scale-105 transition-transform duration-300"
                  >
                    <img 
                      src="/participation-certificate.jpeg" 
                      alt="Participation Certificate - ROBOCOR '25" 
                      className="w-48 h-64 object-contain rounded-lg shadow-md cursor-pointer"
                    />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground font-dm-sans">
                  ROBOCOR '25 - BGMI Punks
                </p>
                <p className="text-xs text-muted-foreground font-dm-sans">
                  Siddaganga Institute of Technology • 22nd May 2025
                </p>
              </CardContent>
            </Card>
          </div>
          {/* New Sections End */}
        </div>
      </div>
    </section>
  );
};

export default Certificates;