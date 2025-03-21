import { useState } from 'react';
import { BarChart2, Database, FileCode, Zap, Table } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  level: number;
  category: 'data-analytics' | 'data-visualization' | 'database' | 'tools';
  icon: React.ReactNode;
  description: string;
}

const skills: Skill[] = [
  // Data Analytics
  { 
    name: 'Data Analytics', 
    level: 90, 
    category: 'data-analytics', 
    icon: <BarChart2 className="h-5 w-5" />,
    description: 'Experienced in analyzing large datasets to extract actionable insights.'
  },
  { 
    name: 'Power BI', 
    level: 85, 
    category: 'data-analytics', 
    icon: <Zap className="h-5 w-5" />,
    description: 'Creating interactive dashboards and reports for business intelligence.'
  },
  
  // Data Visualization
  { 
    name: 'Data Visualization', 
    level: 85, 
    category: 'data-visualization', 
    icon: <BarChart2 className="h-5 w-5" />,
    description: 'Creating clear, insightful visualizations that tell data stories.'
  },
  { 
    name: 'Excel', 
    level: 90, 
    category: 'data-visualization', 
    icon: <Table className="h-5 w-5" />,
    description: 'Advanced Excel skills including pivot tables, charts, and formulas.'
  },
  { 
    name: 'Tableau', 
    level: 75, 
    category: 'data-visualization', 
    icon: <BarChart2 className="h-5 w-5" />,
    description: 'Building interactive dashboards and data visualizations.'
  },
  
  // Database
  { 
    name: 'SQL', 
    level: 85, 
    category: 'database', 
    icon: <Database className="h-5 w-5" />,
    description: 'Writing complex queries for data extraction and manipulation.'
  },
  
  // Tools
  { 
    name: 'Python (Pandas, NumPy)', 
    level: 80, 
    category: 'tools', 
    icon: <FileCode className="h-5 w-5" />,
    description: 'Data manipulation, analysis, and visualization using Python libraries.'
  },
  { 
    name: 'R', 
    level: 70, 
    category: 'tools', 
    icon: <FileCode className="h-5 w-5" />,
    description: 'Statistical computing and graphics for data analysis projects.'
  }
];

type CategoryLabel = {
  [key in Skill['category']]: {
    label: string;
    icon: React.ReactNode;
    color: string;
    bgColor: string;
    hoverColor: string;
  };
};

const categoryLabels: CategoryLabel = {
  'data-analytics': { 
    label: 'Data Analytics', 
    icon: <BarChart2 className="h-6 w-6" />, 
    color: 'text-blue-500',
    bgColor: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-600'
  },
  'data-visualization': { 
    label: 'Data Visualization', 
    icon: <LineChart className="h-6 w-6" />, 
    color: 'text-purple-500',
    bgColor: 'bg-purple-500',
    hoverColor: 'hover:bg-purple-600'
  },
  'database': { 
    label: 'Database Management', 
    icon: <Database className="h-6 w-6" />, 
    color: 'text-green-500',
    bgColor: 'bg-green-500',
    hoverColor: 'hover:bg-green-600'
  },
  'tools': { 
    label: 'Tools & Programming', 
    icon: <Settings className="h-6 w-6" />, 
    color: 'text-amber-500',
    bgColor: 'bg-amber-500', 
    hoverColor: 'hover:bg-amber-600'
  }
};

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
            {Object.keys(skillsByCategory).map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2",
                  filter === category
                    ? `${categoryLabels[category as keyof CategoryLabel].bgColor} text-white shadow-md`
                    : "bg-white/10 text-white hover:bg-white/20"
                )}
              >
                {categoryLabels[category as keyof CategoryLabel].icon}
                {categoryLabels[category as keyof CategoryLabel].label}
              </button>
            ))}
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <AnimatedSection 
              key={skill.name} 
              animation="scale-in" 
              delay={index * 100} 
              className="h-full"
            >
              <div 
                className="skill-card h-full cursor-pointer"
                onMouseEnter={() => setActiveSkill(skill)}
                onMouseLeave={() => setActiveSkill(null)}
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
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
