
import { useEffect, useState, useRef } from 'react';
import { ArrowDownCircle, Database, BarChart2, FileCode, Server, BrainCircuit } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const matrixRef = useRef<HTMLDivElement>(null);
  const dataNodesRef = useRef<HTMLDivElement>(null);
  
  // Create matrix digital rain effect
  useEffect(() => {
    if (!matrixRef.current) return;
    
    const matrixChars = '10アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const container = matrixRef.current;
    
    const createMatrixRain = () => {
      const columnCount = Math.floor(window.innerWidth / 20);
      
      for (let i = 0; i < columnCount; i++) {
        setTimeout(() => {
          if (!container) return;
          
          const element = document.createElement('div');
          element.classList.add('matrix-rain');
          element.style.left = `${i * 20 + Math.random() * 10}px`;
          element.style.animationDuration = `${5 + Math.random() * 10}s`;
          element.style.opacity = `${Math.random() * 0.5 + 0.1}`;
          
          // Random character
          const char = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
          element.textContent = char;
          
          container.appendChild(element);
          
          // Remove after animation completes
          setTimeout(() => {
            if (container.contains(element)) {
              container.removeChild(element);
            }
          }, 15000);
        }, i * 100);
      }
    };
    
    createMatrixRain();
    const interval = setInterval(createMatrixRain, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Create data nodes and connections effect
  useEffect(() => {
    if (!dataNodesRef.current) return;
    
    const container = dataNodesRef.current;
    const nodeCount = 30;
    
    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      const node = document.createElement('div');
      const size = Math.random() * 8 + 4;
      
      node.classList.add('data-node');
      node.style.width = `${size}px`;
      node.style.height = `${size}px`;
      node.style.backgroundColor = 'rgba(59, 130, 246, 0.5)';
      node.style.borderRadius = '50%';
      node.style.position = 'absolute';
      node.style.top = `${Math.random() * 100}%`;
      node.style.left = `${Math.random() * 100}%`;
      node.style.animationDelay = `${Math.random() * 4}s`;
      
      container.appendChild(node);
    }
  }, []);
  
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
      className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 transition-colors duration-300"
    >
      {/* Matrix digital rain effect container */}
      <div ref={matrixRef} className="absolute inset-0 opacity-5 dark:opacity-10 overflow-hidden pointer-events-none" />
      
      {/* Data nodes and connections effect */}
      <div ref={dataNodesRef} className="absolute inset-0 opacity-30 overflow-hidden pointer-events-none" />
      
      {/* Abstract shapes */}
      <div 
        className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"
        style={{ 
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200/20 dark:bg-blue-300/5 rounded-full blur-3xl"
        style={{ 
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      />
      
      {/* Floating data icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Database className="data-particle text-blue-500 w-8 h-8 top-[15%] left-[10%] animate-float" style={{ animationDelay: '0s' }} />
        <BarChart2 className="data-particle text-green-500 w-10 h-10 top-[60%] left-[20%] animate-float" style={{ animationDelay: '2s' }} />
        <FileCode className="data-particle text-purple-500 w-12 h-12 top-[25%] left-[85%] animate-float" style={{ animationDelay: '1s' }} />
        <Server className="data-particle text-orange-500 w-6 h-6 top-[70%] left-[80%] animate-float" style={{ animationDelay: '3s' }} />
        <BrainCircuit className="data-particle text-red-500 w-10 h-10 top-[40%] left-[5%] animate-float" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimatedSection animation="fade-in-left">
              <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
                Computer Engineering Student
              </span>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-left" delay={200}>
              <h1 className="mb-6">
                Akshay Yadav
                <span className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent animate-gradient-shift"> 
                  Data Scientist & ML Engineer
                </span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-left" delay={400}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Computer Engineering student with expertise in data analytics, machine learning, and data science, 
                passionate about leveraging AI to create innovative solutions for real-world problems.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={600}>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="btn btn-primary rounded-full shadow-md hover:shadow-lg">
                  View My Projects
                </a>
                <a href="#contact" className="btn btn-outline rounded-full">
                  Get In Touch
                </a>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection animation="fade-in" delay={300} className="hidden lg:block">
            <div className="relative">
              {/* Animated border */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 blur-md opacity-70 dark:opacity-40 profile-border"></div>
              
              <div className="relative mx-auto w-[320px] h-[320px] rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl z-10">
                <img 
                  src="/lovable-uploads/7fa52a7e-06e7-4319-abd8-50d6e828b868.png" 
                  alt="Akshay Yadav" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70"></div>
                
                {/* Code particles around the image */}
                <div className="absolute -bottom-2 left-0 right-0 p-4 font-mono text-xs text-white opacity-70">
                  <div className="flex flex-wrap gap-1">
                    <span className="py-1 px-2 bg-blue-600/50 rounded">Python</span>
                    <span className="py-1 px-2 bg-green-600/50 rounded">SQL</span>
                    <span className="py-1 px-2 bg-purple-600/50 rounded">ML</span>
                    <span className="py-1 px-2 bg-red-600/50 rounded">TensorFlow</span>
                  </div>
                </div>
              </div>
              
              {/* Digital elements */}
              <div className="glass rounded-xl p-3 shadow-lg absolute -bottom-6 -right-10 z-20 max-w-[180px]">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-xs font-medium">Data Analytics Expert</span>
                </div>
              </div>
              
              <div className="glass rounded-xl p-3 shadow-lg absolute -top-4 -left-8 z-20 max-w-[160px]">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>
                  <span className="text-xs font-medium">Machine Learning</span>
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
