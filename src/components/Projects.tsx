
import AnimatedSection from './ui/AnimatedSection';
import { ArrowRight, ExternalLink, Github, FileCode, Database, BarChart2, TrendingUp, Code } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ProjectTechnology {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  period: string;
  technologies: ProjectTechnology[];
  keyFeatures: string[];
  image?: string;
  githubLink?: string;
  demoLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Smart Personal Finance Assistant",
    description: "Developed a savings forecasting model using LSTM to predict future savings with high accuracy.",
    period: "Oct 2024 - Present",
    technologies: [
      { name: "Python", icon: <Code />, color: "bg-blue-100 text-blue-700" },
      { name: "SQL", icon: <Database />, color: "bg-green-100 text-green-700" },
      { name: "TensorFlow (LSTM)", icon: <TrendingUp />, color: "bg-purple-100 text-purple-700" },
      { name: "Pandas", icon: <BarChart2 />, color: "bg-orange-100 text-orange-700" },
      { name: "NumPy", icon: <FileCode />, color: "bg-red-100 text-red-700" }
    ],
    keyFeatures: [
      "Developed a savings forecasting model using LSTM to predict future savings, achieving 63% accuracy in initial iterations",
      "Applied data preprocessing techniques (normalization, scaling, anomaly detection) and created a synthetic dataset with key financial parameters",
      "Leveraged machine learning and AI-driven insights to enhance financial decision-making"
    ],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    githubLink: "https://github.com/Akshay3993/finance-assistant"
  },
  {
    id: 2,
    title: "Credit Card Financial Dashboard",
    description: "Interactive financial dashboard using Power BI to analyze transaction and customer data.",
    period: "Dec 2024",
    technologies: [
      { name: "Power BI", icon: <BarChart2 />, color: "bg-yellow-100 text-yellow-700" },
      { name: "SQL", icon: <Database />, color: "bg-green-100 text-green-700" },
      { name: "Excel", icon: <FileCode />, color: "bg-emerald-100 text-emerald-700" }
    ],
    keyFeatures: [
      "Developed an interactive financial dashboard using Power BI to analyze transaction and customer data from a SQL database and provide real-time insights",
      "Streamlined data processing and analysis to monitor key performance metrics and identify financial trends",
      "Delivered actionable insights to stakeholders, enabling data-driven decision-making and strategic planning"
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    demoLink: "https://example.com/dashboard-demo"
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number}>>([]);
  
  useEffect(() => {
    // Generate data particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 0.5
    }));
    
    setParticles(newParticles);
  }, []);
  
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-blue-500/20 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
              animation: `float ${5 + particle.speed}s infinite linear`,
              animationDelay: `${particle.id * -0.1}s`
            }}
          />
        ))}
      </div>
      
      <div className="container-custom relative z-10">
        <AnimatedSection>
          <h2 className="section-heading">My Projects</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <p className="section-subheading">
            Explore my data science and machine learning projects that demonstrate my technical skills and problem-solving abilities.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={project.id} 
              animation={index % 2 === 0 ? 'fade-in-right' : 'fade-in-left'} 
              delay={index * 100}
              className="h-full"
            >
              <div 
                className="glass rounded-xl overflow-hidden h-full border-2 border-transparent transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] relative"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image/Header */}
                <div className="h-56 relative overflow-hidden">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-40 transition-transform duration-700 hover:scale-110"
                    />
                  )}
                  
                  {/* Data visualization overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    <svg width="100%" height="100%" className="opacity-20">
                      <defs>
                        <linearGradient id={`gradient-${project.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      
                      {/* Animated line chart */}
                      <path 
                        d={`M0,${50 + Math.sin(0) * 30} ${Array.from({length: 10}, (_, i) => {
                          const x = (i + 1) * 10;
                          const y = 50 + Math.sin(x / 10) * 30;
                          return `L${x}%,${y}%`;
                        }).join(' ')}`}
                        stroke="url(#gradient-${project.id})"
                        strokeWidth="2"
                        fill="none"
                        className="animate-pulse"
                        style={{animationDuration: '3s'}}
                      />
                      
                      {/* Data points */}
                      {Array.from({length: 8}, (_, i) => {
                        const x = (i + 1) * 12;
                        const y = 50 + Math.sin(x / 10) * 30;
                        return (
                          <circle 
                            key={i}
                            cx={`${x}%`} 
                            cy={`${y}%`} 
                            r="4" 
                            fill="#3b82f6" 
                            className="animate-pulse"
                            style={{animationDelay: `${i * 0.2}s`}}
                          />
                        );
                      })}
                    </svg>
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                    <div className="flex items-center text-white/80 text-sm gap-2">
                      <span>{project.period}</span>
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIdx) => (
                        <span key={techIdx} className={`inline-flex items-center text-xs px-2 py-1 rounded-full gap-1 ${tech.color}`}>
                          {tech.icon}
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Key Features</h4>
                    <ul className="space-y-2">
                      {project.keyFeatures.map((feature, featureIdx) => (
                        <li key={featureIdx} className="text-sm flex items-start gap-1.5">
                          <span className="text-primary shrink-0 mt-0.5">
                            <ArrowRight className="h-3.5 w-3.5" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Project Links */}
                  <div className="mt-6 flex gap-4">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        View Code
                      </a>
                    )}
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Data flow animation */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="data-flow"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          width: `${Math.random() * 4 + 2}px`,
                          height: `${Math.random() * 4 + 2}px`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
