
import { useState, useRef } from 'react';
import { Mail, MapPin, MessageSquare, Send } from 'lucide-react';
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

  // Generate random particles for the background
  const renderParticles = () => {
    const particles = [];
    for (let i = 0; i < 10; i++) {
      const size = Math.random() * 5 + 1;
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
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Add subtle particles */}
      {renderParticles()}
      
      <div className="container-custom">
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
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                      your.email@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">
                      City, Country
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mr-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Social</h4>
                    <div className="space-y-2 mt-2">
                      <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                        LinkedIn
                      </a>
                      <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                        GitHub
                      </a>
                      <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Data Points Visualization */}
              <div className="mt-12 relative h-40 bg-gradient-to-r from-blue-50 to-white rounded-lg p-4 overflow-hidden">
                <h4 className="text-sm font-medium text-gray-600 mb-2">Connect with me</h4>
                <div className="absolute w-3 h-3 bg-primary/70 rounded-full top-1/4 left-1/4 animate-pulse"></div>
                <div className="absolute w-4 h-4 bg-blue-400/70 rounded-full top-2/3 left-1/3 animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute w-3 h-3 bg-green-400/70 rounded-full top-1/2 right-1/3 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute w-2 h-2 bg-yellow-400/70 rounded-full bottom-1/4 right-1/4 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                <div className="absolute w-40 h-1 bg-gradient-to-r from-primary/50 to-transparent top-1/4 left-1/4 translate-y-1"></div>
                <div className="absolute w-40 h-1 bg-gradient-to-r from-blue-400/50 to-transparent top-2/3 left-1/3 translate-y-1"></div>
                <div className="absolute w-40 h-1 bg-gradient-to-l from-green-400/50 to-transparent top-1/2 right-1/3 translate-y-1"></div>
                <div className="absolute w-40 h-1 bg-gradient-to-l from-yellow-400/50 to-transparent bottom-1/4 right-1/4 translate-y-1"></div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-left" delay={200}>
            <div className="bg-white rounded-xl shadow-lg p-8 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400"></div>
              
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-6">
                  <p className="text-green-700">
                    Thank you for your message! I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : null}
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
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
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
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
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "btn btn-primary w-full",
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
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
