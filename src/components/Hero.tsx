
import { useEffect, useState, useRef } from 'react';
import { ArrowDownCircle, Database, Code, BarChart2, Terminal, LineChart } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const Hero = () => {
  const [text, setText] = useState('');
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const particles = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const phrases = [
    "Data Analyst & Visualization Expert",
    "Computer Engineering Student",
    "Machine Learning Enthusiast",
    "Python & SQL Developer",
    "Turning Data into Insights"
  ];
  
  const fullText = phrases[currentPhrase];
  const typingRef = useRef<NodeJS.Timeout | null>(null);
  
  // Generate interactive particles
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create particles
    const particlesCount = 30;
    const container = containerRef.current;
    
    // Clear existing particles
    container.innerHTML = '';
    particles.current = [];
    
    for (let i = 0; i < particlesCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.width = `${Math.random() * 40 + 10}px`;
      particle.style.height = particle.style.width;
      particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      container.appendChild(particle);
      particles.current.push(particle);
    }
    
    // Create data flow elements
    for (let i = 0; i < 20; i++) {
      const flow = document.createElement('div');
      flow.className = 'data-flow';
      flow.style.left = `${Math.random() * 100}%`;
      flow.style.top = `${Math.random() * 100}%`;
      flow.style.animationDelay = `${Math.random() * 3}s`;
      container.appendChild(flow);
    }
    
    // Cleanup
    return () => {
      container.innerHTML = '';
    };
  }, []);
  
  // Track mouse position for interactive particles
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      
      // Move particles
      particles.current.forEach((particle) => {
        const rect = particle.getBoundingClientRect();
        const particleX = rect.left + rect.width / 2;
        const particleY = rect.top + rect.height / 2;
        
        const distanceX = e.clientX - particleX;
        const distanceY = e.clientY - particleY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        if (distance < 300) {
          const moveX = (distanceX / distance) * 40;
          const moveY = (distanceY / distance) * 40;
          particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          particle.style.transform = 'translate(0, 0)';
        }
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
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Interactive background */}
      <div ref={containerRef} className="interactive-bg"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-in-right">
            <div className="space-y-6">
              <span className="inline-flex items-center py-1 px-3 rounded-full text-sm font-medium bg-primary/20 text-primary mb-2 gap-1.5">
                <Database className="h-4 w-4" />
                <span>Data Professional</span>
              </span>
              
              <h1 className="mb-2 text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Akshay Yadav
              </h1>
              
              <div className="h-10 mb-6 flex items-center">
                <span className="inline-block text-2xl font-medium text-primary">
                  {text}
                </span>
                <span className="inline-block w-0.5 h-7 bg-primary animate-pulse ml-0.5"></span>
              </div>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                Computer Engineering student with expertise in data analytics, 
                data science, and machine learning. Passionate about transforming 
                complex data into actionable insights.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#projects" 
                  className="btn btn-primary rounded-full shadow-md hover:shadow-lg flex items-center gap-2 pulse-glow"
                >
                  <BarChart2 className="h-4 w-4" />
                  View My Projects
                </a>
                <a 
                  href="#contact" 
                  className="btn btn-outline rounded-full flex items-center gap-2 border-white/20"
                >
                  <Terminal className="h-4 w-4" />
                  Contact Me
                </a>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div className="data-card p-4 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-2">
                    <Database className="h-6 w-6 text-blue-400" />
                  </div>
                  <p className="text-sm font-medium">Data Analysis</p>
                </div>
                
                <div className="data-card p-4 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-2">
                    <Code className="h-6 w-6 text-purple-400" />
                  </div>
                  <p className="text-sm font-medium">ML Models</p>
                </div>
                
                <div className="data-card p-4 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                    <LineChart className="h-6 w-6 text-green-400" />
                  </div>
                  <p className="text-sm font-medium">Visualization</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-left" delay={200}>
            <div className="relative mx-auto max-w-md">
              {/* Code snippet backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-400/20 rounded-2xl blur-xl transform rotate-6 scale-95"></div>
              
              {/* Developer image */}
              <div className="relative z-10 glass rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Developer"
                  className="w-full h-auto rounded-2xl mix-blend-luminosity opacity-90 hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                
                {/* Data-themed decorative elements */}
                <div className="absolute -bottom-4 -left-4 p-3 bg-slate-800/80 backdrop-blur-sm rounded-lg shadow-lg border border-white/10 z-20 animate-float">
                  <LineChart className="h-8 w-8 text-blue-400" />
                </div>
                
                <div className="absolute -top-4 -right-4 p-3 bg-slate-800/80 backdrop-blur-sm rounded-lg shadow-lg border border-white/10 z-20 animate-float" style={{ animationDelay: '1s' }}>
                  <Database className="h-8 w-8 text-blue-400" />
                </div>
                
                <div className="absolute top-1/2 -right-8 p-3 bg-slate-800/80 backdrop-blur-sm rounded-lg shadow-lg border border-white/10 z-20 animate-float" style={{ animationDelay: '1.5s' }}>
                  <Code className="h-8 w-8 text-blue-400" />
                </div>
                
                {/* Data points overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-blue-500/50 rounded-full animate-pulse"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${2 + Math.random() * 3}s`
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Floating message */}
              <div className="absolute -right-16 top-1/4 bg-slate-800/90 p-4 rounded-lg shadow-lg border border-primary/30 max-w-[200px] z-20 animate-float" style={{ animationDelay: '0.5s' }}>
                <p className="text-sm">
                  <span className="text-primary font-bold">Hey there!</span> I'm Akshay, a data enthusiast turning complex numbers into meaningful insights.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to About section">
            <ArrowDownCircle className="text-primary hover:text-primary/80 transition-colors" size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
