
import { useEffect, useState, useRef } from 'react';
import { ArrowDownCircle, Cpu, Database, BarChart2 } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "I'm Akshay, turning data into impactful solutions";
  const textRef = useRef(0);
  const typingSpeed = 100; // ms per character
  
  // Typewriter effect
  useEffect(() => {
    if (isTyping) {
      if (textRef.current < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.substring(0, textRef.current + 1));
          textRef.current += 1;
        }, typingSpeed);
        
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        // Reset after a delay
        setTimeout(() => {
          textRef.current = 0;
          setText('');
          setIsTyping(true);
        }, 5000);
      }
    }
  }, [text, isTyping]);
  
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

  // Function to generate random particles
  const renderParticles = () => {
    const particles = [];
    for (let i = 0; i < 15; i++) {
      const size = Math.random() * 10 + 2;
      const style = {
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 10 + 10}s`,
      };
      particles.push(<div key={i} className="particle" style={style} />);
    }
    return particles;
  };
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-20 relative overflow-hidden animated-bg"
    >
      {/* Floating data particles */}
      {renderParticles()}
      
      {/* Abstract shapes */}
      <div 
        className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-30"
        style={{ 
          transform: `translate(${mousePosition.x * -50}px, ${mousePosition.y * -50}px)`,
          transition: 'transform 0.7s ease-out'
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-200/10 rounded-full blur-3xl opacity-20"
        style={{ 
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
          transition: 'transform 0.7s ease-out'
        }}
      />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimatedSection animation="fade-in-left">
              <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
                Data Analyst
              </span>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-left" delay={200}>
              <h1 className="mb-6 flex items-center text-white">
                <span>{text}</span>
                <span className={isTyping ? "animate-pulse text-white" : "hidden"}>|</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-left" delay={400}>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
                Hi, I'm Akshay, a data analyst passionate about turning data into meaningful insights. 
                Skilled in Power BI, SQL, and Excel, I enjoy solving real-world problems with data-driven solutions.
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
              
              {/* Floating Message */}
              <div className="absolute -top-12 -right-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg animate-float-element z-20">
                <div className="flex items-center space-x-2">
                  <BarChart2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Analyzing data patterns...</span>
                </div>
              </div>
              
              <div className="float-element absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg z-20">
                <div className="flex items-center space-x-2">
                  <Database className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">Data insights loaded!</span>
                </div>
              </div>
              
              <div className="glass rounded-2xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400"></div>
                <div 
                  className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/10 rounded-full blur-xl"
                  style={{ 
                    transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
                    transition: 'transform 0.3s ease-out'
                  }}
                />
                
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="ml-4 font-mono text-sm text-foreground/70">data_analysis.py</div>
                  </div>
                  
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/b616d8ee-3185-4b9f-aa46-b9ec844e66e5.png" 
                      alt="Akshay Portrait" 
                      className="rounded-lg shadow-lg w-full object-cover h-60"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Cpu className="h-5 w-5 text-blue-400" />
                        <span className="text-white font-medium">Data Professional</span>
                      </div>
                      <div className="text-xs text-white/70">Transforming complex data into actionable insights</div>
                    </div>
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
