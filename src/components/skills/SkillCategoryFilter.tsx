
import React from 'react';
import { cn } from '@/lib/utils';
import { CategoryLabels } from './types';
import AnimatedSection from '../ui/AnimatedSection';

interface SkillCategoryFilterProps {
  filter: string | null;
  setFilter: (category: string | null) => void;
  skillCategories: string[];
  categoryLabels: CategoryLabels;
}

const SkillCategoryFilter = ({ 
  filter, 
  setFilter, 
  skillCategories, 
  categoryLabels 
}: SkillCategoryFilterProps) => {
  return (
    <AnimatedSection delay={200}>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button
          onClick={() => setFilter(null)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all",
            filter === null
              ? "bg-primary text-white shadow-md"
              : "bg-white/10 text-white hover:bg-white/20"
          )}
        >
          All Skills
        </button>
        {skillCategories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2",
              filter === category
                ? `${categoryLabels[category].bgColor} text-white shadow-md`
                : "bg-white/10 text-white hover:bg-white/20"
            )}
          >
            {categoryLabels[category].icon}
            {categoryLabels[category].label}
          </button>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default SkillCategoryFilter;
