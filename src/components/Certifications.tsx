
import { Award, Calendar, ExternalLink } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import { useState } from 'react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  link: string;
  credentialId: string;
  image: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Google Data Analytics Specialization",
    issuer: "Google & Coursera",
    date: "2024",
    description: "Comprehensive program covering data analytics processes, tools, and techniques including data preparation, analysis, and visualization.",
    link: "https://www.coursera.org/account/accomplishments/specialization/T84BVDYWY87G",
    credentialId: "T84BVDYWY87G",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 2,
    title: "Accenture North America - Data Analytics and Visualization Job Simulation",
    issuer: "Accenture & Forage",
    date: "2024",
    description: "Practical simulation focusing on data analytics and visualization techniques used in professional consulting environments.",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_4hafREtE6sr76kTFA_1720266869687_completion_certificate.pdf",
    credentialId: "DxY9m47zNPECHte7x",
    image: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  }
];

const Certifications = () => {
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

  return (
    <section id="certifications" className="section-padding animated-bg">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="section-heading text-white">Certifications</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <p className="section-subheading text-gray-300">
            Professional certifications that validate my skills and knowledge in data analytics.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {certifications.map((cert, index) => (
            <AnimatedSection 
              key={cert.id} 
              animation={index % 2 === 0 ? 'fade-in-right' : 'fade-in-left'} 
              delay={100 * index}
            >
              <div 
                className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border border-white/5"
                onMouseEnter={() => setHoveredCert(cert.id)}
                onMouseLeave={() => setHoveredCert(null)}
              >
                <div className="flex flex-col h-full">
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Dynamic Data Effect on Hover */}
                    {hoveredCert === cert.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent flex items-center justify-center">
                        <div className="text-white text-5xl font-bold opacity-30">DATA</div>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <div className="flex items-center">
                        <Award className="text-primary bg-white rounded-full p-1 h-7 w-7 mr-2" />
                        <h3 className="text-white font-bold text-lg line-clamp-1">{cert.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col bg-white/5">
                    <div className="flex flex-col space-y-2 text-gray-300 mb-4">
                      <div className="flex items-center">
                        <span className="font-semibold text-white">{cert.issuer}</span>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-400">Credential ID:</span> {cert.credentialId}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 flex-grow">{cert.description}</p>
                    
                    <a 
                      href={cert.link} 
                      className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium group mt-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </a>
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
