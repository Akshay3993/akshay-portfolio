
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="section-heading">About Me</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <p className="section-subheading">
            Get to know my background, interests, and what drives me in the field of Data Analytics.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <AnimatedSection animation="fade-in-right">
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-primary/5 rounded-xl"></div>
              <div className="relative bg-white shadow-lg rounded-xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Portrait" 
                  className="w-full h-full object-cover rounded-xl"
                  style={{ maxHeight: '420px' }}
                />
                
                {/* Floating Badges */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Data Enthusiast</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">Engineering Student</span>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-left" delay={200}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Computer Engineering Student</h3>
              <p className="text-muted-foreground">
                I am a third-year engineering student specializing in data analytics, with hands-on 
                experience in Power BI, SQL, and Excel. I have worked on various projects that involve 
                data visualization, business intelligence, and predictive analysis.
              </p>
              <p className="text-muted-foreground">
                Through my academic projects and personal initiatives, I've gained hands-on 
                experience in data processing, statistical analysis, and developing visualizations 
                that communicate insights effectively. I'm particularly interested in the applications 
                of data analytics in business intelligence, finance, and marketing.
              </p>
              <p className="text-muted-foreground">
                Currently, I am seeking internship opportunities to apply my skills and gain industry 
                experience. I value collaboration, continuous learning, and the ethical implications 
                of data-driven decision making.
              </p>
              
              <div className="pt-4 space-y-4">
                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href="#" 
                    className="btn btn-outline flex items-center gap-2 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FileText size={18} />
                    Resume
                  </a>
                  <a 
                    href="#" 
                    className="btn btn-outline flex items-center gap-2 hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                  <a 
                    href="#" 
                    className="btn btn-outline flex items-center gap-2 hover:bg-[#333] hover:text-white hover:border-[#333]"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                  <a 
                    href="mailto:your.email@example.com" 
                    className="btn btn-outline flex items-center gap-2 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  >
                    <Mail size={18} />
                    Email
                  </a>
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
