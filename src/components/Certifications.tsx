
import { Award, Calendar, ExternalLink } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  link?: string;
  image: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Machine Learning Specialization",
    issuer: "Coursera & Stanford University",
    date: "December 2023",
    description: "Comprehensive specialization covering supervised learning, neural networks, and practical ML applications.",
    link: "#",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    id: 2,
    title: "Data Science Professional Certificate",
    issuer: "IBM & Coursera",
    date: "August 2023",
    description: "Professional certificate covering data science methodology, tools, and techniques for real-world applications.",
    link: "#",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    id: 3,
    title: "Deep Learning Specialization",
    issuer: "deeplearning.ai",
    date: "May 2023",
    description: "Comprehensive program covering deep learning fundamentals and applications in computer vision and NLP.",
    link: "#",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    id: 4,
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "February 2023",
    description: "Professional certification validating skills in building TensorFlow models for various ML applications.",
    link: "#",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="section-heading">Certifications</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <p className="section-subheading">
            Professional certifications that validate my skills and knowledge in data science and machine learning.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {certifications.map((cert, index) => (
            <AnimatedSection 
              key={cert.id} 
              animation={index % 2 === 0 ? 'fade-in-right' : 'fade-in-left'} 
              delay={100 * index}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                <div className="flex flex-col h-full">
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <div className="flex items-center">
                        <Award className="text-primary bg-white rounded-full p-1 h-7 w-7 mr-2" />
                        <h3 className="text-white font-bold text-lg">{cert.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <span className="font-semibold text-foreground">{cert.issuer}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 flex-grow">{cert.description}</p>
                    
                    {cert.link && (
                      <a 
                        href={cert.link} 
                        className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium group mt-auto"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>View Certificate</span>
                        <ExternalLink className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </a>
                    )}
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

export default Certifications;
