
import React from 'react';
import { GraduationCap, Users } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Extracurriculars = () => {
  return (
    <section id="extracurriculars" className="py-20 bg-background">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Extracurricular Activities</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <AnimatedSection animation="fade-in-left" delay={200}>
            <Card className="h-full bg-primary/5 border-none shadow-lg hover:shadow-xl transition-shadow">
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
            <Card className="h-full bg-primary/5 border-none shadow-lg hover:shadow-xl transition-shadow">
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
