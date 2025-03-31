
import { FileText, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="section-heading text-gray-800">About Me</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <p className="section-subheading text-gray-600">
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
                  src="/lovable-uploads/f956a864-cecb-44de-9a39-75fce6ddb49b.png" 
                  alt="Akshay Portrait" 
                  className="w-full h-full object-cover object-top rounded-xl"
                  style={{ maxHeight: '420px' }}
                />
                
                {/* Floating Badges */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-800">Data Enthusiast</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-800">Engineering Student</span>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-left" delay={200}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Computer Engineering Student</h3>
              <p className="text-gray-700">
                I am a third-year engineering student specializing in data analytics, with hands-on 
                experience in Power BI, SQL, and Excel. I have worked on various projects that involve 
                data visualization, business intelligence, and predictive analysis.
              </p>
              <p className="text-gray-700">
                Through my academic projects and personal initiatives, I've gained hands-on 
                experience in data processing, statistical analysis, and developing visualizations 
                that communicate insights effectively. I'm particularly interested in the applications 
                of data analytics in business intelligence, finance, and marketing.
              </p>
              <p className="text-gray-700">
                Currently, I am seeking internship opportunities to apply my skills and gain industry 
                experience. I value collaboration, continuous learning, and the ethical implications 
                of data-driven decision making.
              </p>
              
              <div className="pt-4 space-y-4">
                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href="https://drive.google.com/file/d/1C4f2P5Qk9BoG8rGzhBNSMVag3ibCJzVY/view?usp=drive_link" 
                    className="btn btn-outline flex items-center gap-2 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FileText size={18} />
                    Resume
                  </a>
                  <a 
                    href="https://linkedin.com/in/akshay-yadav-16ak" 
                    className="btn btn-outline flex items-center gap-2 hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/Akshay3993" 
                    className="btn btn-outline flex items-center gap-2 hover:bg-[#333] hover:text-white hover:border-[#333]"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                  <a 
                    href="https://www.instagram.com/akshay1694" 
                    className="btn btn-outline flex items-center gap-2 hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C]"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Instagram size={18} />
                    Instagram
                  </a>
                  <a 
                    href="mailto:helloakshay20@gmail.com" 
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
