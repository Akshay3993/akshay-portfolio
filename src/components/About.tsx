
import AnimatedSection from './ui/AnimatedSection';
import ExperienceTimeline from './ExperienceTimeline';

const About = () => {
  return (
    <>
      <section id="about" className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="section-heading">About Me</h2>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <p className="section-subheading">
              I'm a Computer Engineering student passionate about data science, machine learning, and creating data-driven solutions.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            <AnimatedSection animation="fade-in-right">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border/50">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Who I Am</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm Akshay Yadav, a Computer Engineering student with a strong foundation in data analytics, 
                    data science, and machine learning. My academic journey has equipped me with the skills to 
                    transform complex data into actionable insights and develop innovative solutions.
                  </p>
                  <p>
                    My expertise lies in Python, SQL, and data visualization tools like Power BI and Tableau. 
                    I'm passionate about applying machine learning algorithms to solve real-world problems, 
                    particularly in the financial domain.
                  </p>
                  <p>
                    When I'm not coding or analyzing data, I'm actively involved in community service through 
                    the National Service Scheme (NSS) and organizing various college events.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-left" delay={200}>
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border/50">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Education Highlights</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-lg">•</span>
                      <div>
                        <span className="font-medium">Bachelor of Technology in Computer Engineering</span>
                        <p className="text-muted-foreground text-sm">Pimpri Chinchwad College of Engineering, Pune</p>
                        <p className="text-muted-foreground text-sm">CGPA: 8.26</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-lg">•</span>
                      <div>
                        <span className="font-medium">HSC Examination</span>
                        <p className="text-muted-foreground text-sm">88.00% in HSC Boards</p>
                        <p className="text-muted-foreground text-sm">98.90 percentile in CET, 88 percentile in JEE</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border/50">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Contact Information</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-primary text-lg">•</span>
                      <span className="font-medium">Email:</span>
                      <a href="mailto:helloakshay20@gmail.com" className="text-blue-600 hover:underline">helloakshay20@gmail.com</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary text-lg">•</span>
                      <span className="font-medium">Phone:</span>
                      <a href="tel:+919730986643" className="text-blue-600 hover:underline">+91 9730986643</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary text-lg">•</span>
                      <span className="font-medium">LinkedIn:</span>
                      <a href="https://linkedin.com/in/akshay-yadav-16ak" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">akshay-yadav-16ak</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary text-lg">•</span>
                      <span className="font-medium">GitHub:</span>
                      <a href="https://github.com/Akshay3993" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Akshay3993</a>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <ExperienceTimeline />
    </>
  );
};

export default About;
