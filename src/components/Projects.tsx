
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
    title: "Predictive Analytics Dashboard",
    description: "A comprehensive dashboard for visualizing and analyzing predictive models for financial data. Built with Python, Pandas, and Streamlit.",
    category: ["Data Analytics", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    links: {
      github: "#",
      live: "#"
    },
    tags: ["Python", "Pandas", "Scikit-learn", "Streamlit"]
  },
  {
    id: 2,
    title: "Customer Segmentation Model",
    description: "An unsupervised learning project to segment customers based on their purchase behavior using K-means clustering.",
    category: ["Machine Learning", "Data Science"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    links: {
      github: "#"
    },
    tags: ["Python", "K-means", "Matplotlib", "Pandas"]
  },
  {
    id: 3,
    title: "Natural Language Processing Toolkit",
    description: "A toolkit for NLP tasks including sentiment analysis, text classification, and named entity recognition.",
    category: ["NLP", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    links: {
      github: "#",
      live: "#"
    },
    tags: ["Python", "NLTK", "Spacy", "TensorFlow"]
  },
  {
    id: 4,
    title: "Healthcare Data Analysis",
    description: "A statistical analysis of healthcare data to identify patterns and correlations between patient demographics and outcomes.",
    category: ["Data Analytics", "Data Science"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    links: {
      github: "#"
    },
    tags: ["R", "ggplot2", "Statistical Modeling"]
  }
];

const allCategories = Array.from(
  new Set(projects.flatMap(project => project.category))
);

const Projects = () => {
  const [filter, setFilter] = useState("All");
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <section id="projects" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="section-heading dark:text-white">My Projects</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <p className="section-subheading dark:text-gray-300">
            Explore my portfolio of data science and machine learning projects.
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
                  : "bg-secondary hover:bg-secondary/80 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white"
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
                    : "bg-secondary hover:bg-secondary/80 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection 
              key={project.id} 
              animation="scale-in" 
              delay={index * 100} 
              className="h-full"
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col dark:text-white">
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
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
                  <p className="text-muted-foreground dark:text-gray-300 mb-6 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs font-medium py-1 px-2 rounded-full bg-secondary text-secondary-foreground dark:bg-blue-900/50 dark:text-blue-100"
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
