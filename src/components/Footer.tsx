
import { ArrowUp, Github, Linkedin, Mail, Instagram, Database } from 'lucide-react';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Track mouse position for subtle effect
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
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to generate random particles
  const renderParticles = () => {
    const particles = [];
    for (let i = 0; i < 8; i++) {
      const size = Math.random() * 4 + 1;
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
    <footer className="bg-white border-t relative overflow-hidden">
      {/* Add subtle particles */}
      {renderParticles()}
      
      {/* Background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30"
        style={{ 
          transform: `translate(calc(-50% + ${mousePosition.x * 20}px), calc(-50% + ${mousePosition.y * 20}px))`,
          transition: 'transform 0.5s ease-out'
        }}
      />
      
      <div className="container-custom py-12 relative z-10">
        <div className="flex flex-col items-center">
          <a href="#home" className="text-2xl font-bold text-primary mb-6 flex items-center">
            <Database className="mr-2 h-6 w-6" />
            <span className="font-display">Data</span>Portfolio
          </a>
          
          <div className="flex space-x-6 mb-8">
            <a 
              href="https://linkedin.com/in/akshay-yadav-16ak" 
              className="p-2 text-foreground/60 hover:text-primary transition-colors rounded-full hover:bg-primary/5"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/Akshay3993" 
              className="p-2 text-foreground/60 hover:text-primary transition-colors rounded-full hover:bg-primary/5"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.instagram.com/akshay1694" 
              className="p-2 text-foreground/60 hover:text-[#E1306C] transition-colors rounded-full hover:bg-primary/5"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="mailto:helloakshay20@gmail.com" 
              className="p-2 text-foreground/60 hover:text-primary transition-colors rounded-full hover:bg-primary/5"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          {/* Data Visualization Elements */}
          <div className="w-full max-w-md mx-auto mb-8 relative h-20">
            <div className="absolute w-2 h-2 bg-primary/70 rounded-full top-1/4 left-1/4 animate-pulse"></div>
            <div className="absolute w-3 h-3 bg-blue-400/70 rounded-full top-2/3 left-2/3 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute w-2 h-2 bg-purple-400/70 rounded-full top-1/2 right-1/4 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute w-1 h-1 bg-green-400/70 rounded-full bottom-1/4 right-1/3 animate-pulse" style={{animationDelay: '1.5s'}}></div>
            
            <div className="absolute w-32 h-[1px] bg-gradient-to-r from-primary/50 to-transparent top-1/4 left-1/4 translate-y-1"></div>
            <div className="absolute w-40 h-[1px] bg-gradient-to-r from-blue-400/50 to-transparent top-2/3 left-2/3 translate-y-1"></div>
            <div className="absolute w-36 h-[1px] bg-gradient-to-l from-purple-400/50 to-transparent top-1/2 right-1/4 translate-y-1"></div>
            <div className="absolute w-28 h-[1px] bg-gradient-to-l from-green-400/50 to-transparent bottom-1/4 right-1/3 translate-y-1"></div>
          </div>
          
          <div className="w-full max-w-lg mx-auto border-t pt-8 mt-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Data Portfolio. All rights reserved.
              </p>
              
              <button 
                onClick={scrollToTop}
                className="group p-2 mt-4 md:mt-0 rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-all"
                aria-label="Back to top"
              >
                <ArrowUp size={20} className="transform transition-transform duration-300 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
