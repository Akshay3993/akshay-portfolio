
import { useState } from 'react';
import AnimatedSection from './ui/AnimatedSection';
import { skills, categoryLabels } from './skills/skillsData';
import SkillCategoryFilter from './skills/SkillCategoryFilter';
import SkillsList from './skills/SkillsList';
import { Skill } from './skills/types';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  const [filter, setFilter] = useState<string | null>(null);
  
  // Group skills by category
  const skillsByCategory = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const filteredSkills = filter ? skills.filter(skill => skill.category === filter) : skills;
  const skillCategories = Object.keys(skillsByCategory);

  return (
    <section id="skills" className="section-padding animated-bg">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="section-heading text-white">My Skills</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <p className="section-subheading text-gray-300">
            Here's a comprehensive overview of my technical skills in data analytics and visualization.
          </p>
        </AnimatedSection>
        
        <SkillCategoryFilter 
          filter={filter}
          setFilter={setFilter}
          skillCategories={skillCategories}
          categoryLabels={categoryLabels}
        />
        
        <SkillsList 
          filteredSkills={filteredSkills}
          activeSkill={activeSkill}
          categoryLabels={categoryLabels}
          setActiveSkill={setActiveSkill}
        />
      </div>
    </section>
  );
};

export default Skills;
