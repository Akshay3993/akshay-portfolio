
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useEffect, useRef } from 'react';

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Interactive background effect
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    let particles: HTMLDivElement[] = [];
    
    // Create initial particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.width = `${Math.random() * 40 + 10}px`;
      particle.style.height = particle.style.width;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = `${Math.random() * 0.3}`;
      
      container.appendChild(particle);
      particles.push(particle);
    }
    
    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      particles.forEach(particle => {
        const particleRect = particle.getBoundingClientRect();
        const particleCenterX = particleRect.left + particleRect.width / 2 - rect.left;
        const particleCenterY = particleRect.top + particleRect.height / 2 - rect.top;
        
        const distanceX = mouseX - particleCenterX;
        const distanceY = mouseY - particleCenterY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        if (distance < 200) {
          const angle = Math.atan2(distanceY, distanceX);
          const force = (200 - distance) / 10;
          const moveX = Math.cos(angle) * force;
          const moveY = Math.sin(angle) * force;
          
          particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          particle.style.transform = 'translate(0, 0)';
        }
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      particles.forEach(p => p.remove());
    };
  }, []);
  
  return (
    <div ref={containerRef} className="min-h-screen flex flex-col relative">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
