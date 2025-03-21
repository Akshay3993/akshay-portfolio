
import React from 'react';
import { Skill, CategoryLabels } from './types';
import SkillCard from './SkillCard';
import AnimatedSection from '../ui/AnimatedSection';

interface SkillsListProps {
  filteredSkills: Skill[];
  activeSkill: Skill | null;
  categoryLabels: CategoryLabels;
  setActiveSkill: (skill: Skill | null) => void;
}

const SkillsList = ({ 
  filteredSkills, 
  activeSkill, 
  categoryLabels, 
  setActiveSkill 
}: SkillsListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {filteredSkills.map((skill, index) => (
        <AnimatedSection 
          key={skill.name} 
          animation="scale-in" 
          delay={index * 100} 
          className="h-full"
        >
          <SkillCard 
            skill={skill} 
            activeSkill={activeSkill}
            categoryLabels={categoryLabels}
            onMouseEnter={() => setActiveSkill(skill)}
            onMouseLeave={() => setActiveSkill(null)}
          />
        </AnimatedSection>
      ))}
    </div>
  );
};

export default SkillsList;
