
import { BarChart2, Database, FileCode, GitBranch, LineChart, Server, Cpu, Settings, Terminal, Code, Search, TrendingUp } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'data-science' | 'machine-learning' | 'programming' | 'tools';
  icon: React.ReactNode;
  description: string;
}

const skills: Skill[] = [
  // Data Science
  { 
    name: 'Data Analysis', 
    level: 90, 
    category: 'data-science', 
    icon: <BarChart2 className="h-5 w-5" />,
    description: 'Expert in analyzing large datasets to extract valuable insights and trends.'
  },
  { 
    name: 'Data Visualization', 
    level: 85, 
    category: 'data-science', 
    icon: <LineChart className="h-5 w-5" />,
    description: 'Creating clear and impactful visual representations of complex data.'
  },
  { 
    name: 'SQL & NoSQL', 
    level: 80, 
    category: 'data-science', 
    icon: <Database className="h-5 w-5" />,
    description: 'Proficient in database querying, design, and optimization.'
  },
  { 
    name: 'Statistical Modeling', 
    level: 75, 
    category: 'data-science', 
    icon: <TrendingUp className="h-5 w-5" />,
    description: 'Building statistical models to analyze patterns and predict outcomes.'
  },
  
  // Machine Learning
  { 
    name: 'Supervised Learning', 
    level: 85, 
    category: 'machine-learning', 
    icon: <Cpu className="h-5 w-5" />,
    description: 'Creating and optimizing models for classification and regression tasks.'
  },
  { 
    name: 'TensorFlow/LSTM', 
    level: 80, 
    category: 'machine-learning', 
    icon: <Server className="h-5 w-5" />,
    description: 'Building neural networks and deep learning models for complex problems.'
  },
  { 
    name: 'NLP', 
    level: 75, 
    category: 'machine-learning', 
    icon: <FileCode className="h-5 w-5" />,
    description: 'Analyzing and generating human language with machine learning techniques.'
  },
  { 
    name: 'Anomaly Detection', 
    level: 80, 
    category: 'machine-learning', 
    icon: <Search className="h-5 w-5" />,
    description: 'Identifying unusual patterns and outliers in datasets.'
  },
  
  // Programming
  { 
    name: 'Python', 
    level: 90, 
    category: 'programming', 
    icon: <Code className="h-5 w-5" />,
    description: 'Expert in Python for data analysis, ML, and general programming tasks.'
  },
  { 
    name: 'R', 
    level: 75, 
    category: 'programming', 
    icon: <Terminal className="h-5 w-5" />,
    description: 'Statistical computing and graphics for data analysis and visualization.'
  },
  { 
    name: 'SQL', 
    level: 85, 
    category: 'programming', 
    icon: <Database className="h-5 w-5" />,
    description: 'Data extraction, transformation, and management with SQL.'
  },
  { 
    name: 'C++', 
    level: 70, 
    category: 'programming', 
    icon: <FileCode className="h-5 w-5" />,
    description: 'Developing efficient algorithms and performance-critical applications.'
  },
  
  // Tools
  { 
    name: 'Jupyter Notebook', 
    level: 90, 
    category: 'tools', 
    icon: <Settings className="h-5 w-5" />,
    description: 'Interactive computing and sharing of data science workflows.'
  },
  { 
    name: 'Power BI', 
    level: 85, 
    category: 'tools', 
    icon: <BarChart2 className="h-5 w-5" />,
    description: 'Creating interactive dashboards and business intelligence reports.'
  },
  { 
    name: 'Tableau', 
    level: 80, 
    category: 'tools', 
    icon: <LineChart className="h-5 w-5" />,
    description: 'Data visualization and analysis for business intelligence.'
  },
  { 
    name: 'Git/GitHub', 
    level: 85, 
    category: 'tools', 
    icon: <GitBranch className="h-5 w-5" />,
    description: 'Version control and collaborative software development.'
  },
];

type CategoryLabel = {
  [key in Skill['category']]: {
    label: string;
    icon: React.ReactNode;
    color: string;
    bgColor: string;
    borderColor: string;
  };
};

const categoryLabels: CategoryLabel = {
  'data-science': { 
    label: 'Data Science', 
    icon: <BarChart2 className="h-6 w-6" />, 
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20'
  },
  'machine-learning': { 
    label: 'Machine Learning', 
    icon: <Cpu className="h-6 w-6" />, 
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20'
  },
  'programming': { 
    label: 'Programming', 
    icon: <FileCode className="h-6 w-6" />, 
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20'
  },
  'tools': { 
    label: 'Tools & Frameworks', 
    icon: <Settings className="h-6 w-6" />, 
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20'
  }
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<Skill['category'] | 'all'>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  // Group skills by category
  const skillsByCategory = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="section-heading">My Skills</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <p className="section-subheading">
            Here's a comprehensive overview of my technical skills and proficiency levels.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={cn(
                "px-4 py-2 rounded-full transition-all duration-300",
                activeCategory === 'all' 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "bg-slate-800/60 text-foreground/70 hover:bg-slate-800/80"
              )}
            >
              All Skills
            </button>
            
            {Object.keys(skillsByCategory).map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category as Skill['category'])}
                className={cn(
                  "px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2",
                  activeCategory === category 
                    ? `${categoryLabels[category as keyof CategoryLabel].bgColor} ${categoryLabels[category as keyof CategoryLabel].color} shadow-lg` 
                    : "bg-slate-800/60 text-foreground/70 hover:bg-slate-800/80"
                )}
              >
                {categoryLabels[category as keyof CategoryLabel].icon}
                {categoryLabels[category as keyof CategoryLabel].label}
              </button>
            ))}
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <AnimatedSection 
              key={skill.name} 
              delay={index * 50}
              className="h-full"
            >
              <div 
                className={cn(
                  "h-full relative glass rounded-xl overflow-hidden transition-all duration-300 glow-effect",
                  hoveredSkill === skill.name && "transform scale-[1.03] shadow-lg",
                  categoryLabels[skill.category].borderColor
                )}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="relative z-10 p-5 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div 
                      className={cn(
                        "p-3 rounded-lg",
                        categoryLabels[skill.category].bgColor
                      )}
                    >
                      <div className={categoryLabels[skill.category].color}>
                        {skill.icon}
                      </div>
                    </div>
                    
                    <div 
                      className={cn(
                        "flex items-center justify-center w-10 h-10 rounded-full border-2",
                        categoryLabels[skill.category].borderColor
                      )}
                    >
                      <span className={cn("text-sm font-semibold", categoryLabels[skill.category].color)}>
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  
                  <p className="text-sm text-muted-foreground flex-grow">
                    {skill.description}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="h-1.5 w-full bg-slate-700/50 rounded-full overflow-hidden">
                      <div 
                        className={cn(
                          "h-full rounded-full transition-all duration-1000"
                        )}
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${skill.category === 'data-science' ? '#3b82f6' : 
                                                             skill.category === 'machine-learning' ? '#9333ea' : 
                                                             skill.category === 'programming' ? '#22c55e' : 
                                                             '#f59e0b'} 0%, rgba(255,255,255,0.3) 100%)`
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Interactive background elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "absolute w-1 h-10 opacity-20 rotate-45",
                        skill.category === 'data-science' ? 'bg-blue-400' : 
                        skill.category === 'machine-learning' ? 'bg-purple-400' : 
                        skill.category === 'programming' ? 'bg-green-400' : 
                        'bg-amber-400'
                      )}
                      style={{
                        left: `${i * 20 + Math.random() * 10}%`,
                        top: `${Math.random() * 100}%`,
                        transform: `rotate(${Math.random() * 90}deg)`,
                      }}
                    />
                  ))}
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
