
import { useState } from 'react';
import { ArrowRight, ExternalLink, Github, FileCode, Database, BarChart2, TrendingUp, Code } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

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
    image: "/placeholder.svg",
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
    image: "/placeholder.svg",
    demoLink: "https://example.com/dashboard-demo"
  }
];

const ProjectCards = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      {projects.map((project, index) => (
        <AnimatedSection 
          key={project.id} 
          animation={index % 2 === 0 ? 'fade-in-right' : 'fade-in-left'} 
          delay={index * 100}
          className="h-full"
        >
          <div 
            className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden h-full border border-border/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] relative group"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Project Image/Header */}
            <div 
              className="h-48 bg-gradient-to-r from-primary/80 to-blue-500/80 relative overflow-hidden"
            >
              {project.image && (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-20"
                />
              )}
              
              {/* Data-themed decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-4 gap-3 w-full h-full p-6">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`bg-white/20 rounded-full animate-pulse h-4`}
                      style={{ 
                        animationDuration: `${2 + Math.random() * 3}s`,
                        animationDelay: `${Math.random() * 2}s`,
                        height: `${Math.random() * 40 + 10}%`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Title Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
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
                    className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
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
                    className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
            
            {/* Hover effect */}
            <div 
              className={`absolute inset-0 border-2 border-primary rounded-xl opacity-0 transition-opacity duration-300 pointer-events-none ${hoveredProject === project.id ? 'opacity-100' : ''}`}
            ></div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default ProjectCards;
