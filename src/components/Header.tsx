
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Activities', href: '#activities' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference for dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (prefersDarkMode) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Determine which section is currently in view
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'py-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-primary">
          <span className="font-display">Akshay</span>Yadav
        </a>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <ul className="flex space-x-2 mr-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className={cn(
                    'nav-link',
                    activeSection === link.href.replace('#', '') && 'nav-link-active'
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Dark mode toggle */}
          <div className="flex items-center gap-2 ml-4 p-1 rounded-full bg-secondary">
            <Sun size={16} className={cn(
              "text-yellow-500", 
              isDarkMode ? "opacity-50" : "opacity-100"
            )} />
            <Switch 
              checked={isDarkMode} 
              onCheckedChange={toggleDarkMode} 
              aria-label="Toggle dark mode"
              className="data-[state=checked]:bg-slate-700"
            />
            <Moon size={16} className={cn(
              "text-slate-700", 
              isDarkMode ? "opacity-100" : "opacity-50"
            )} />
          </div>
        </nav>
        
        {/* Mobile menu button and dark mode toggle */}
        <div className="md:hidden flex items-center gap-4">
          <div className="flex items-center gap-1 p-1 rounded-full bg-secondary">
            <Sun size={14} className={cn(
              "text-yellow-500", 
              isDarkMode ? "opacity-50" : "opacity-100"
            )} />
            <Switch 
              checked={isDarkMode} 
              onCheckedChange={toggleDarkMode} 
              aria-label="Toggle dark mode"
              className="data-[state=checked]:bg-slate-700 h-5 w-9"
            />
            <Moon size={14} className={cn(
              "text-slate-700", 
              isDarkMode ? "opacity-100" : "opacity-50"
            )} />
          </div>
          
          <button 
            className="p-2 rounded-md text-foreground/80 hover:text-foreground"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <div 
        className={cn(
          'fixed inset-0 z-40 bg-background pt-20 pb-6 px-4 transition-all duration-300 ease-in-out transform md:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav>
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className={cn(
                    'block py-3 px-4 text-lg font-medium rounded-md transition-colors',
                    activeSection === link.href.replace('#', '') 
                      ? 'bg-primary/10 text-primary' 
                      : 'hover:bg-secondary'
                  )}
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
