
import { useEffect, useState, useRef } from 'react';
import { ArrowDownCircle, Terminal, Code, Database, BarChart2, LineChart } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [text, setText] = useState('');
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  const phrases = [
    "Data Analyst & Visualization Expert",
    "Computer Engineering Student",
    "Machine Learning Enthusiast",
    "Python & SQL Developer",
    "Turning Data into Insights"
  ];
  
  const fullText = phrases[currentPhrase];
  const typingRef = useRef<NodeJS.Timeout | null>(null);
  
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
  
  // Typewriter effect
  useEffect(() => {
    if (typingRef.current) clearTimeout(typingRef.current);
    
    if (isDeleting) {
      setTypingSpeed(50); // Faster when deleting
      if (text.length > 0) {
        typingRef.current = setTimeout(() => {
          setText(text.substring(0, text.length - 1));
        }, typingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentPhrase((current) => (current + 1) % phrases.length);
        setTypingSpeed(200); // Pause before typing next phrase
      }
    } else {
      if (text.length < fullText.length) {
        typingRef.current = setTimeout(() => {
          setText(fullText.substring(0, text.length + 1));
        }, typingSpeed + Math.random() * 100);
      } else {
        typingRef.current = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(1000); // Pause before deleting
        }, 2000);
      }
    }
    
    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, [text, isDeleting, fullText, phrases, currentPhrase, typingSpeed]);
  
  // Binary/data particles for background
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1 + 0.5,
    speed: Math.random() * 1 + 0.2,
    value: Math.random() > 0.8 ? '1' : '0',
    opacity: Math.random() * 0.5 + 0.1
  }));
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-b from-background to-primary/5"
    >
      {/* Binary code background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute text-primary/30 font-mono animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              fontSize: `${particle.size}rem`,
              opacity: particle.opacity,
              animationDuration: `${10 + particle.speed * 5}s`,
              animationDelay: `${-particle.id * 0.1}s`
            }}
          >
            {particle.value}
          </div>
        ))}
      </div>
      
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
              <span className="inline-flex items-center py-1 px-3 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6 gap-1.5">
                <Database className="h-4 w-4" />
                <span>Data Professional</span>
              </span>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-left" delay={200}>
              <h1 className="mb-2 text-4xl md:text-5xl lg:text-6xl font-bold">
                Akshay Yadav
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-left" delay={300}>
              <div className="h-10 mb-6 flex items-center">
                <span className="inline-block text-xl md:text-2xl font-medium bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  {text}
                </span>
                <span className="inline-block w-0.5 h-7 bg-primary animate-pulse ml-0.5"></span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-left" delay={400}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Computer Engineering student with expertise in data analytics, 
                data science, and machine learning. Passionate about transforming 
                complex data into actionable insights.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={600}>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#projects" 
                  className="btn btn-primary rounded-full shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  <BarChart2 className="h-4 w-4" />
                  View My Projects
                </a>
                <a 
                  href="#contact" 
                  className="btn btn-outline rounded-full flex items-center gap-2"
                >
                  <Terminal className="h-4 w-4" />
                  Contact Me
                </a>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection animation="fade-in" delay={300} className="hidden lg:block">
            <div className="relative">
              <img 
                src="public/lovable-uploads/dae752f3-2003-4e3a-b8b9-b0c13d92b235.png" 
                alt="Akshay Yadav"
                className="rounded-xl object-cover w-full max-w-md h-auto relative z-10 mx-auto"
              />
              
              {/* Data-themed decorative elements */}
              <div className="absolute -bottom-4 -left-4 p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-primary/20 z-20 animate-float">
                <LineChart className="h-8 w-8 text-primary" />
              </div>
              
              <div className="absolute -top-4 -right-4 p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-primary/20 z-20 animate-float" style={{ animationDelay: '1s' }}>
                <Database className="h-8 w-8 text-primary" />
              </div>
              
              <div className="absolute top-1/2 -right-8 p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-primary/20 z-20 animate-float" style={{ animationDelay: '1.5s' }}>
                <Code className="h-8 w-8 text-primary" />
              </div>
              
              {/* Code snippet backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-400/20 rounded-2xl blur-xl transform rotate-6 scale-95"></div>
              <div className="absolute inset-0 -z-10 transform rotate-3 scale-95 rounded-2xl">
                <div className="glass rounded-2xl p-8 shadow-xl relative overflow-hidden h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400"></div>
                  <div className="flex flex-col space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <div className="ml-4 font-mono text-sm text-foreground/70">data_analysis.py</div>
                    </div>
                    <div className="space-y-2 font-mono text-sm">
                      <p><span className="text-blue-500">import</span> <span className="text-green-500">pandas</span> <span className="text-blue-500">as</span> <span className="text-green-500">pd</span></p>
                      <p><span className="text-blue-500">import</span> <span className="text-green-500">numpy</span> <span className="text-blue-500">as</span> <span className="text-green-500">np</span></p>
                      <p><span className="text-blue-500">import</span> <span className="text-green-500">matplotlib.pyplot</span> <span className="text-blue-500">as</span> <span className="text-green-500">plt</span></p>
                      <p><span className="text-blue-500">from</span> <span className="text-green-500">sklearn.model_selection</span> <span className="text-blue-500">import</span> <span className="text-green-500">train_test_split</span></p>
                      <p className="opacity-0 animate-fade-in animate-delay-800">
                        <span className="text-blue-500">from</span> <span className="text-green-500">tensorflow</span> <span className="text-blue-500">import</span> <span className="text-green-500">keras</span>
                      </p>
                    </div>
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
