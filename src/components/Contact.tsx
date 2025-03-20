
import { useState, useRef, useEffect } from 'react';
import { Mail, MapPin, MessageSquare, Send, Github, Linkedin, Twitter } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import { cn } from '@/lib/utils';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [particles, setParticles] = useState<{x: number, y: number, size: number, speed: number}[]>([]);
  
  useEffect(() => {
    // Generate particles for background
    const newParticles = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 1
    }));
    
    setParticles(newParticles);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  const handleFocus = () => {
    if (formRef.current) {
      formRef.current.classList.add('glow-focus');
    }
  };
  
  const handleBlur = () => {
    if (formRef.current) {
      formRef.current.classList.remove('glow-focus');
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.speed + 3}s infinite ease-in-out`,
              animationDelay: `${-i * 0.2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container-custom relative z-10">
        <AnimatedSection>
          <h2 className="section-heading">Get In Touch</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <p className="section-subheading">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <AnimatedSection animation="fade-in-right">
            <div className="glass p-8 rounded-xl h-full border border-white/5 hover:border-primary/20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Contact Information
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start group cursor-pointer">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mr-4 group-hover:bg-primary/20 transition-all duration-300">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a 
                      href="mailto:your.email@example.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      helloakshay20@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group cursor-pointer">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mr-4 group-hover:bg-primary/20 transition-all duration-300">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">
                      Pune, India
                    </p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-white/5">
                  <h4 className="font-medium mb-4">Connect with me</h4>
                  <div className="flex gap-4">
                    <a 
                      href="https://linkedin.com/in/akshay-yadav-16ak" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary/20 transition-all duration-300"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a 
                      href="https://github.com/Akshay3993" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary/20 transition-all duration-300"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary/20 transition-all duration-300"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                  </div>
                </div>
                
                {/* Data visualization decoration */}
                <div className="mt-8 pt-8 border-t border-white/5">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">Response time visualization</p>
                    <div className="flex justify-between items-end h-20 mx-auto">
                      {[...Array(12)].map((_, i) => {
                        const height = 30 + Math.sin(i * 0.5) * 20 + Math.random() * 10;
                        return (
                          <div 
                            key={i}
                            className="w-1 bg-primary/30 rounded-t-full animate-pulse mx-px"
                            style={{
                              height: `${height}%`,
                              animationDuration: `${1 + Math.random() * 2}s`,
                              animationDelay: `${i * 0.1}s`
                            }}
                          />
                        );
                      })}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Usually responds within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-left" delay={200}>
            <div 
              className="glass rounded-xl p-8 relative border border-white/5 hover:border-primary/20 transition-all duration-300"
              ref={formRef}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400"></div>
              
              <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Send a Message
              </h3>
              
              {isSubmitted ? (
                <div className="bg-emerald-900/30 border-l-4 border-emerald-500 p-4 rounded mb-6">
                  <p className="text-emerald-400">
                    Thank you for your message! I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : null}
              
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-white/10 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-white/10 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-white/10 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "btn btn-primary w-full relative overflow-hidden group",
                    isSubmitting && "opacity-80 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                </button>
              </form>
              
              {/* Binary data background */}
              <div className="absolute bottom-6 right-8 text-xs font-mono text-primary/20 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="opacity-80">
                    {[...Array(8)].map((_, j) => (
                      <span key={j} className="mr-1">{Math.round(Math.random())}</span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
