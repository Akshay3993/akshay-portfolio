
import { useEffect, useState } from 'react';
import { ArrowDownCircle } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Track mouse position for subtle parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
      style={{
        background: "radial-gradient(circle at center, rgba(224, 242, 254, 0.5) 0%, rgba(255, 255, 255, 1) 70%)"
      }}
    >
      {/* Abstract shapes */}
      <div 
        className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        style={{ 
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"
        style={{ 
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimatedSection animation="fade-in-left">
              <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
                Data Scientist & ML Engineer
              </span>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-left" delay={200}>
              <h1 className="mb-6">
                Turning Data into 
                <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent animate-gradient-shift"> Impactful Solutions</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-left" delay={400}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                I'm a Computer Engineering student specializing in data analytics, 
                data science, and machine learning, passionate about creating 
                innovative solutions to complex problems.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={600}>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="btn btn-primary rounded-full shadow-md hover:shadow-lg">
                  View My Work
                </a>
                <a href="#contact" className="btn btn-outline rounded-full">
                  Get In Touch
                </a>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection animation="fade-in" delay={300} className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-400/20 rounded-2xl blur-xl transform rotate-6 scale-95"></div>
              <div className="glass rounded-2xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400"></div>
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="ml-4 font-mono text-sm text-foreground/70">data_analytics.py</div>
                  </div>
                  <div className="space-y-2 font-mono text-sm">
                    <p><span className="text-blue-500">import</span> <span className="text-green-500">pandas</span> <span className="text-blue-500">as</span> <span className="text-green-500">pd</span></p>
                    <p><span className="text-blue-500">import</span> <span className="text-green-500">numpy</span> <span className="text-blue-500">as</span> <span className="text-green-500">np</span></p>
                    <p><span className="text-blue-500">import</span> <span className="text-green-500">matplotlib.pyplot</span> <span className="text-blue-500">as</span> <span className="text-green-500">plt</span></p>
                    <p><span className="text-blue-500">from</span> <span className="text-green-500">sklearn.model_selection</span> <span className="text-blue-500">import</span> <span className="text-green-500">train_test_split</span></p>
                    <p className="opacity-0 animate-fade-in animate-delay-800">
                      <span className="text-blue-500">from</span> <span className="text-green-500">tensorflow</span> <span className="text-blue-500">import</span> <span className="text-green-500">keras</span>
                    </p>
                    <p className="opacity-0 animate-fade-in animate-delay-800">
                      <span className="text-purple-500">def</span> <span className="text-yellow-500">analyze_data</span><span>(data):</span>
                    </p>
                    <div className="w-3 h-6 bg-primary/50 inline-block animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to About section">
            <ArrowDownCircle className="text-primary/70 hover:text-primary transition-colors" size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
