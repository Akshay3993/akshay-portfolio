
import { ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t">
      <div className="container-custom py-12">
        <div className="flex flex-col items-center">
          <a href="#home" className="text-2xl font-bold text-primary mb-6">
            <span className="font-display">Data</span>Portfolio
          </a>
          
          <div className="flex space-x-6 mb-8">
            <a 
              href="#" 
              className="p-2 text-foreground/60 hover:text-primary transition-colors rounded-full hover:bg-primary/5"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="p-2 text-foreground/60 hover:text-primary transition-colors rounded-full hover:bg-primary/5"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="p-2 text-foreground/60 hover:text-primary transition-colors rounded-full hover:bg-primary/5"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="p-2 text-foreground/60 hover:text-primary transition-colors rounded-full hover:bg-primary/5"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
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
