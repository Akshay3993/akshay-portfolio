
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Activities from '@/components/Activities';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const Index = () => {
  // Create matrix digital rain effect for data background
  useEffect(() => {
    const createDataParticle = () => {
      const particle = document.createElement('div');
      const size = Math.random() * 20 + 10;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = Math.random() > 0.5 ? 'rgba(59, 130, 246, 0.1)' : 'rgba(99, 102, 241, 0.1)';
      particle.style.position = 'fixed';
      particle.style.borderRadius = '50%';
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.zIndex = '-1';
      particle.style.pointerEvents = 'none';
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        if (document.body.contains(particle)) {
          document.body.removeChild(particle);
        }
      }, 10000);
    };
    
    const interval = setInterval(createDataParticle, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
