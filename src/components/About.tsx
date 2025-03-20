
import { useRef } from 'react';
import { FileText, Github, Linkedin, Mail, Calendar, Building, GraduationCap, Award } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const About = () => {
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900/50 transition-colors duration-300">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="section-heading">About Me</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <p className="section-subheading">
            Get to know my background, education, and experience in the field of Data Science.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          <AnimatedSection animation="fade-in-right" className="lg:col-span-1">
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-primary/5 rounded-xl"></div>
              <div className="relative bg-white dark:bg-slate-800 shadow-lg rounded-xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400"></div>
                <img 
                  src="/lovable-uploads/7fa52a7e-06e7-4319-abd8-50d6e828b868.png" 
                  alt="Portrait" 
                  className="w-full h-auto object-cover rounded-xl"
                  style={{ maxHeight: '320px' }}
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Akshay Yadav</h3>
                  <p className="text-muted-foreground">
                    Computer Engineering student specializing in data analytics, data science, and machine learning
                  </p>
                  
                  <div className="pt-2 flex flex-wrap gap-3">
                    <a 
                      href="#" 
                      className="btn btn-outline flex items-center gap-2 py-2 px-3 text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FileText size={16} />
                      Resume
                    </a>
                    <a 
                      href="https://linkedin.com/in/akshay-yadav-16ak" 
                      className="btn btn-outline flex items-center gap-2 py-2 px-3 text-sm hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </a>
                    <a 
                      href="https://github.com/Akshay3993" 
                      className="btn btn-outline flex items-center gap-2 py-2 px-3 text-sm hover:bg-[#333] hover:text-white hover:border-[#333] dark:hover:bg-[#222] dark:hover:border-[#222]"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                    <a 
                      href="mailto:helloakshay20@gmail.com" 
                      className="btn btn-outline flex items-center gap-2 py-2 px-3 text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary"
                    >
                      <Mail size={16} />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-left" delay={200} className="lg:col-span-2">
            <div className="space-y-8">
              <div ref={educationRef} className="space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <GraduationCap className="text-primary" />
                  Education
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h4 className="text-lg font-semibold">Bachelor of Technology, Computer Engineering</h4>
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Calendar size={14} className="mr-1" />
                        Nov. 2022 – Apr. 2026
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-2">Pimpri Chinchwad College of Engineering, Pune</p>
                    <p className="text-sm font-medium text-primary">CGPA: 8.26</p>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h4 className="text-lg font-semibold">Higher Secondary Certificate Examination</h4>
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Calendar size={14} className="mr-1" />
                        Apr. 2022
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">HSC Boards</p>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-primary">Score: 88.00%</p>
                      <p className="text-sm">Secured a percentile of 98.90 in the CET and percentile of 88 in the JEE.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div ref={experienceRef} className="space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <Building className="text-primary" />
                  Experience
                </h3>
                
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <h4 className="text-lg font-semibold">Data Analytics & Visualization Virtual Experience</h4>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Calendar size={14} className="mr-1" />
                      July 2024
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">Accenture North America – Forage</p>
                  <ul className="space-y-2 text-sm list-disc pl-5">
                    <li>Conducted data cleaning, modeling, and analysis on 7 datasets to identify content trends for a hypothetical social media client.</li>
                    <li>Applied SQL and Python (Pandas, NumPy) to uncover insights and drive data-driven recommendations.</li>
                    <li>Developed a PowerPoint presentation and video report to communicate findings to internal stakeholders and clients.</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Award className="text-primary" />
                  Achievements
                </h3>
                
                <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg p-5 shadow-sm">
                  <ul className="space-y-2 text-sm list-disc pl-5">
                    <li>Secured CGPA of 8.26 in Computer Engineering program</li>
                    <li>Achieved percentile of 98.90 in the CET and percentile of 88 in the JEE</li>
                    <li>Successfully led multiple projects in data analytics and machine learning</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
