
import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string[];
  image: string;
  duration: string;
  technologies: string;
  details: string[];
  links: {
    github?: string;
    live?: string;
  };
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Smart Personal Finance Assistant",
    description: "AI-powered personal finance assistant with predictive analytics and data visualization.",
    category: ["Data Analytics", "Machine Learning"],
    duration: "Oct 2024 – Present",
    technologies: "Python, SQL, TensorFlow (LSTM), Pandas, NumPy",
    details: [
      "Designed & implemented a savings forecasting model using LSTM, achieving 63% prediction accuracy in early iterations.",
      "Engineered data pipelines for data extraction, preprocessing (normalization, scaling, anomaly detection), improving data quality by 45%.",
      "Developed a synthetic dataset incorporating key financial parameters (actual_savings, forecasted_savings, income, date).",
      "Enhanced financial decision-making using AI-driven insights."
    ],
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    links: {
      github: "#"
    },
    tags: ["Python", "TensorFlow", "SQL", "LSTM", "Financial Analysis", "Data Pipelines"]
  },
  {
    id: 2,
    title: "Credit Card Financial Dashboard",
    description: "Interactive dashboard for credit card transaction analysis and financial trend visualization.",
    category: ["Data Analytics", "Power BI"],
    duration: "Dec 2024",
    technologies: "Power BI, SQL, Excel",
    details: [
      "Developed an interactive Power BI dashboard, analyzing transaction data from SQL databases, improving financial trend analysis by 30%.",
      "Implemented RDBMS-based data modeling, enhancing data structuring & query performance by 40%.",
      "Created KPI-based visualizations, streamlining real-time business intelligence reports."
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    links: {
      live: "#"
    },
    tags: ["Power BI", "SQL", "Excel", "Data Modeling", "Financial Analysis", "KPI Metrics"]
  }
];

const allCategories = Array.from(
  new Set(projects.flatMap(project => project.category))
);

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="section-heading text-black">My Projects</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <p className="section-subheading text-gray-700">
            Explore my portfolio of data analytics and machine learning projects.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={200} className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              onClick={() => setFilter("All")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                filter === "All"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary hover:bg-secondary/80 text-gray-700"
              )}
            >
              All
            </button>
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  filter === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary hover:bg-secondary/80 text-gray-700"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection 
              key={project.id} 
              animation="scale-in" 
              delay={index * 100} 
              className="h-full"
            >
              <div 
                className="data-card bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  
                  {/* Floating Data Points Animation on Hover */}
                  {hoveredProject === project.id && (
                    <>
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/60 animate-pulse"></div>
                      <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-blue-400/60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-green-400/60 animate-pulse" style={{animationDelay: '1s'}}></div>
                      <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-purple-400/60 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    </>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full flex justify-between items-center">
                      <div className="flex space-x-2">
                        {project.links.github && (
                          <a 
                            href={project.links.github} 
                            className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View Github repository"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="h-5 w-5 text-white" />
                          </a>
                        )}
                        {project.links.live && (
                          <a 
                            href={project.links.live} 
                            className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View live project"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="h-5 w-5 text-white" />
                          </a>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.category.map((cat) => (
                          <span 
                            key={cat} 
                            className="text-xs font-medium py-1 px-2 rounded-full bg-primary/60 text-white backdrop-blur-sm"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <span className="text-sm text-gray-500">{project.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.technologies}</p>
                  <p className="text-gray-700 mb-6 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs font-medium py-1 px-2 rounded-full bg-secondary text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-xs font-medium py-1 px-2 rounded-full bg-secondary text-gray-700">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      
      {/* Project Details Dialog */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex justify-between items-center">
                  <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                  <DialogClose className="rounded-full hover:bg-gray-200 p-1">
                    <X className="h-5 w-5" />
                  </DialogClose>
                </div>
                <DialogDescription className="text-gray-700 mt-1">
                  {selectedProject.technologies} | {selectedProject.duration}
                </DialogDescription>
              </DialogHeader>
              
              <div className="relative w-full h-60 mt-4 rounded-lg overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Project Overview</h4>
                <p className="text-gray-700 mb-4">{selectedProject.description}</p>
                
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Achievements</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  {selectedProject.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs font-medium py-1 px-2 rounded-full bg-secondary text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 mt-6">
                  {selectedProject.links.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Repository
                    </a>
                  )}
                  {selectedProject.links.live && (
                    <a
                      href={selectedProject.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live Project
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
