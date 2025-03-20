
import { 
  BarChart2, Database, FileCode, GitBranch, LineChart, Server, 
  Cpu, Settings, Table, Brain, Code, AlignLeft, BookOpen
} from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  level: number;
  category: 'data-science' | 'machine-learning' | 'programming' | 'tools';
  icon: React.ReactNode;
}

const skills: Skill[] = [
  // Data Science
  { name: 'Data Analysis', level: 90, category: 'data-science', icon: <BarChart2 className="h-5 w-5" /> },
  { name: 'Data Visualization', level: 85, category: 'data-science', icon: <LineChart className="h-5 w-5" /> },
  { name: 'Statistical Modeling', level: 80, category: 'data-science', icon: <BarChart2 className="h-5 w-5" /> },
  { name: 'SQL & NoSQL', level: 85, category: 'data-science', icon: <Database className="h-5 w-5" /> },
  
  // Machine Learning
  { name: 'Supervised Learning', level: 85, category: 'machine-learning', icon: <Cpu className="h-5 w-5" /> },
  { name: 'Neural Networks', level: 80, category: 'machine-learning', icon: <Brain className="h-5 w-5" /> },
  { name: 'LSTM Models', level: 75, category: 'machine-learning', icon: <Cpu className="h-5 w-5" /> },
  { name: 'Anomaly Detection', level: 70, category: 'machine-learning', icon: <FileCode className="h-5 w-5" /> },
  
  // Programming
  { name: 'Python', level: 90, category: 'programming', icon: <Code className="h-5 w-5" /> },
  { name: 'SQL', level: 85, category: 'programming', icon: <Database className="h-5 w-5" /> },
  { name: 'C++', level: 70, category: 'programming', icon: <FileCode className="h-5 w-5" /> },
  { name: 'R', level: 65, category: 'programming', icon: <FileCode className="h-5 w-5" /> },
  
  // Tools
  { name: 'TensorFlow/Keras', level: 80, category: 'tools', icon: <Settings className="h-5 w-5" /> },
  { name: 'Pandas/NumPy', level: 90, category: 'tools', icon: <Table className="h-5 w-5" /> },
  { name: 'Jupyter Notebook', level: 85, category: 'tools', icon: <BookOpen className="h-5 w-5" /> },
  { name: 'Git/GitHub', level: 75, category: 'tools', icon: <GitBranch className="h-5 w-5" /> },
];

type CategoryLabel = {
  [key in Skill['category']]: {
    label: string;
    icon: React.ReactNode;
    color: string;
    darkColor: string;
  };
};

const categoryLabels: CategoryLabel = {
  'data-science': { 
    label: 'Data Science', 
    icon: <BarChart2 className="h-6 w-6" />, 
    color: 'bg-blue-500 text-white',
    darkColor: 'dark:bg-blue-600 dark:text-white'
  },
  'machine-learning': { 
    label: 'Machine Learning', 
    icon: <Brain className="h-6 w-6" />, 
    color: 'bg-purple-500 text-white',
    darkColor: 'dark:bg-purple-600 dark:text-white'
  },
  'programming': { 
    label: 'Programming', 
    icon: <Code className="h-6 w-6" />, 
    color: 'bg-green-500 text-white',
    darkColor: 'dark:bg-green-600 dark:text-white'
  },
  'tools': { 
    label: 'Tools & Frameworks', 
    icon: <Settings className="h-6 w-6" />, 
    color: 'bg-amber-500 text-white',
    darkColor: 'dark:bg-amber-600 dark:text-white'
  }
};

const Skills = () => {
  // Group skills by category
  const skillsByCategory = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="section-padding bg-secondary/50 dark:bg-slate-800/30 transition-colors duration-300">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="section-heading">Technical Skills</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <p className="section-subheading">
            A comprehensive overview of my technical skills and expertise in data science, machine learning, and programming.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {Object.keys(skillsByCategory).map((category, index) => (
            <AnimatedSection 
              key={category} 
              animation={index % 2 === 0 ? 'fade-in-right' : 'fade-in-left'} 
              delay={100 * index}
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl">
                <div className={cn('p-4 flex items-center gap-3', categoryLabels[category as keyof CategoryLabel].color, categoryLabels[category as keyof CategoryLabel].darkColor)}>
                  {categoryLabels[category as keyof CategoryLabel].icon}
                  <h3 className="text-lg font-semibold">
                    {categoryLabels[category as keyof CategoryLabel].label}
                  </h3>
                </div>
                <div className="p-6 space-y-5">
                  {skillsByCategory[category].map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {skill.icon}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-secondary dark:bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className={cn(
                            "h-full rounded-full transition-all duration-1000",
                            category === 'data-science' && "bg-blue-500",
                            category === 'machine-learning' && "bg-purple-500",
                            category === 'programming' && "bg-green-500",
                            category === 'tools' && "bg-amber-500",
                          )}
                          style={{ 
                            width: `${skill.level}%`, 
                            transitionDelay: `${skillIndex * 100}ms` 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        {/* Additional Skills Section */}
        <AnimatedSection delay={500} className="mt-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <AlignLeft className="text-primary" />
              Additional Skills & Tools
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {[
                "Google Colab", "VS Code", "Tableau", "Power BI", "Git", 
                "Data Preprocessing", "Feature Engineering", "Data Cleaning",
                "Data Visualization", "Statistical Analysis", "Excel",
                "PowerPoint", "Critical Thinking", "Problem Solving"
              ].map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1.5 bg-secondary/70 dark:bg-slate-700/50 text-foreground dark:text-slate-200 
                  rounded-full text-sm font-medium transition-transform hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
