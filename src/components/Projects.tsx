
import AnimatedSection from './ui/AnimatedSection';
import ProjectCards from './ProjectCards';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-blue-50/50">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="section-heading">My Projects</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <p className="section-subheading">
            Explore my data science and machine learning projects that demonstrate my technical skills and problem-solving abilities.
          </p>
        </AnimatedSection>
        
        <ProjectCards />
      </div>
    </section>
  );
};

export default Projects;
