
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
            Get to know my background, interests, and what drives me in the field of Data Science.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <AnimatedSection animation="fade-in-right">
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-primary/5 rounded-xl"></div>
              <div className="relative bg-white shadow-lg rounded-xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400"></div>
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="Portrait" 
                  className="w-full h-full object-cover rounded-xl"
                  style={{ maxHeight: '420px' }}
                />
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-left" delay={200}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Computer Engineering Student</h3>
              <p className="text-muted-foreground">
                I'm a third-year Computer Engineering student with a passion for data analytics, 
                data science, and machine learning. My journey in technology began with a 
                curiosity about how data can be leveraged to solve real-world problems and 
                has evolved into a dedicated pursuit of expertise in these fields.
              </p>
              <p className="text-muted-foreground">
                Through my academic projects and personal initiatives, I've gained hands-on 
                experience in data processing, statistical analysis, and developing machine 
                learning models. I'm particularly interested in the applications of AI in 
                healthcare, finance, and environmental sustainability.
              </p>
              <p className="text-muted-foreground">
                Beyond technical skills, I value collaboration, continuous learning, and 
                the ethical implications of technology. I'm always eager to connect with 
                like-minded professionals and explore opportunities where I can contribute 
                and grow.
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
