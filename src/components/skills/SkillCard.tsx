
import React from 'react';
import { cn } from '@/lib/utils';
import { Skill, CategoryLabels } from './types';
import { motion } from 'framer-motion';

interface SkillCardProps {
  skill: Skill;
  activeSkill: Skill | null;
  categoryLabels: CategoryLabels;
  onMouseEnter: (skill: Skill) => void;
  onMouseLeave: () => void;
}

const SkillCard = ({ 
  skill, 
  categoryLabels, 
  onMouseEnter, 
  onMouseLeave 
}: SkillCardProps) => {
  const categoryLabel = categoryLabels[skill.category];
  
  return (
    <motion.div 
      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full"
      whileHover={{ scale: 1.05, y: -5 }}
      onMouseEnter={() => onMouseEnter(skill)}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center mb-4">
        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center mr-4",
          categoryLabel.bgColor + " text-white"
        )}>
          {skill.icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
      </div>
      
      <p className="text-gray-300 text-sm">{skill.description}</p>
      
      <div className="mt-4">
        <span 
          className={cn(
            "text-xs font-medium py-1 px-3 rounded-full", 
            categoryLabel.bgColor + " text-white"
          )}
        >
          {categoryLabel.label}
        </span>
      </div>
    </motion.div>
  );
};

export default SkillCard;
