
import React from 'react';
import { cn } from '@/lib/utils';
import { Skill, CategoryLabels } from './types';

interface SkillCardProps {
  skill: Skill;
  activeSkill: Skill | null;
  categoryLabels: CategoryLabels;
  onMouseEnter: (skill: Skill) => void;
  onMouseLeave: () => void;
}

const SkillCard = ({ 
  skill, 
  activeSkill, 
  categoryLabels, 
  onMouseEnter, 
  onMouseLeave 
}: SkillCardProps) => {
  return (
    <div 
      className="skill-card h-full cursor-pointer"
      onMouseEnter={() => onMouseEnter(skill)}
      onMouseLeave={onMouseLeave}
    >
      <div className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all",
        activeSkill?.name === skill.name 
          ? categoryLabels[skill.category].bgColor + " text-white"
          : "bg-white/10 " + categoryLabels[skill.category].color
      )}>
        {skill.icon}
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
      
      <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
      
      <div className="mt-auto">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-gray-400">Proficiency</span>
          <span className="text-xs text-gray-300">{skill.level}%</span>
        </div>
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
          <div 
            className={cn(
              "h-full rounded-full transition-all duration-1000",
              categoryLabels[skill.category].bgColor
            )}
            style={{ 
              width: `${skill.level}%`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
