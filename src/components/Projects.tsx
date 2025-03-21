
import { ExternalLink, Github } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string[];
  image: string;
  links: {
    github?: string;
    live?: string;
  };
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "COVID-19 Impact Analysis in Tech Industry",
    description: "Analyzed the impact of COVID-19 on job trends, stock prices, and remote work adoption in the tech industry using Power BI and SQL.",
    category: ["Data Analytics", "Power BI"],
    image: "https://images.unsplash.com/photo-1606765962248-7ff407b51667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    links: {
      github: "#",
      live: "#"
    },
    tags: ["Power BI", "SQL", "Data Visualization", "Industry Analysis"]
  },
  {
    id: 2,
    title: "Expense Categorization App using BERT & Streamlit",
    description: "Developed an app that categorizes expenses using BERT NLP and visualizes spending trends with interactive charts.",
    category: ["Machine Learning", "Data Visualization"],
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    links: {
      github: "#"
    },
    tags: ["Python", "NLP", "Streamlit", "BERT", "Financial Analysis"]
  },
  {
    id: 3,
    title: "E-commerce Sales Analysis Dashboard",
    description: "Created a comprehensive sales analytics dashboard for an e-commerce platform to track performance metrics and customer behavior.",
    category: ["Data Analytics", "Power BI"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    links: {
      github: "#",
      live: "#"
    },
    tags: ["Power BI", "SQL", "Data Modeling", "E-commerce"]
  },
  {
    id: 4,
    title: "Customer Segmentation Analysis",
    description: "Performed customer segmentation analysis using RFM methodology and k-means clustering to identify high-value customer groups.",
    category: ["Data Analytics", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=815&q=80",
    links: {
      github: "#"
    },
    tags: ["Python", "Clustering", "RFM Analysis", "Customer Analytics"]
  }
];

const allCategories = Array.from(
  new Set(projects.flatMap(project => project.category))
);

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="section-heading">My Projects</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <p className="section-subheading">
            Explore my portfolio of data analytics and visualization projects.
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
                  : "bg-secondary hover:bg-secondary/80"
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
                    : "bg-secondary hover:bg-secondary/80"
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
                className="data-card bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
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
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs font-medium py-1 px-2 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
