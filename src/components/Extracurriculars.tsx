
import React from 'react';
import { GraduationCap, Users } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Extracurriculars = () => {
  return (
    <section 
      id="extracurriculars" 
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(243, 244, 246) 100%)"
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Extracurricular Activities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-center">
            Experiences that shaped my leadership, character, and commitment to community service
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <AnimatedSection animation="fade-in-left" delay={200}>
            <Card className="h-full bg-white/50 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  <span>National Service Scheme (NSS)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  As the Head of Hospitality in NSS, I led initiatives that bridged the gap between service and leadership. 
                  This role taught me the true meaning of community service and social responsibility. I coordinated various 
                  outreach programs, managed volunteer teams, and ensured smooth execution of community service events. 
                  This experience enhanced my organizational skills and deepened my commitment to giving back to society.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-right" delay={400}>
            <Card className="h-full bg-white/50 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <span>National Cadet Corps (NCC)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  My journey in NCC during school days was transformative, instilling core values of discipline, leadership, 
                  and patriotism. Through rigorous training, camps, and community service activities, I developed a strong 
                  sense of national spirit and camaraderie. This experience shaped my character, teaching me the importance 
                  of teamwork, resilience, and service to the nation.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Extracurriculars;
