
import React from 'react';
import { Skill, CategoryLabels } from './types';
import SkillCard from './SkillCard';
import AnimatedSection from '../ui/AnimatedSection';
import { motion } from 'framer-motion';

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
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {filteredSkills.map((skill) => (
        <motion.div key={skill.name} variants={item} className="h-full">
          <SkillCard 
            skill={skill} 
            activeSkill={activeSkill}
            categoryLabels={categoryLabels}
            onMouseEnter={() => setActiveSkill(skill)}
            onMouseLeave={() => setActiveSkill(null)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillsList;
