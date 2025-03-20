
import { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';
import AnimatedSection from './ui/AnimatedSection';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Data from resume skills
const skillsData = [
  { name: 'Python', value: 90, category: 'Languages' },
  { name: 'SQL', value: 85, category: 'Languages' },
  { name: 'R', value: 75, category: 'Languages' },
  { name: 'C++', value: 70, category: 'Languages' },
  { name: 'TensorFlow', value: 80, category: 'ML/AI' },
  { name: 'Pandas', value: 90, category: 'Data Science' },
  { name: 'NumPy', value: 85, category: 'Data Science' },
  { name: 'Power BI', value: 85, category: 'Visualization' },
  { name: 'Tableau', value: 80, category: 'Visualization' },
  { name: 'Jupyter', value: 90, category: 'Developer Tools' },
  { name: 'Git', value: 80, category: 'Developer Tools' },
  { name: 'VS Code', value: 85, category: 'Developer Tools' },
  { name: 'Google Collab', value: 80, category: 'Developer Tools' },
];

const COLORS = [
  '#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', 
  '#d0ed57', '#ffc658', '#ff8042', '#ff6b6b', '#c44dff',
  '#8884d8', '#83a6ed', '#8dd1e1'
];

const chartConfig = {
  languages: { label: 'Programming Languages', theme: { light: '#8884d8', dark: '#8884d8' } },
  'data science': { label: 'Data Science Tools', theme: { light: '#83a6ed', dark: '#83a6ed' } },
  visualization: { label: 'Visualization Tools', theme: { light: '#8dd1e1', dark: '#8dd1e1' } },
  'developer tools': { label: 'Developer Tools', theme: { light: '#82ca9d', dark: '#82ca9d' } },
  'ml/ai': { label: 'Machine Learning/AI', theme: { light: '#ffc658', dark: '#ffc658' } },
};

// Grouping skills by category
const getSkillsByCategory = () => {
  return skillsData.reduce<Record<string, typeof skillsData>>((acc, skill) => {
    const category = skill.category.toLowerCase();
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});
};

type ChartType = 'bar' | 'radar' | 'pie';

const SkillsChart = () => {
  const [activeChart, setActiveChart] = useState<ChartType>('bar');
  const [expanded, setExpanded] = useState(true);
  const skillsByCategory = getSkillsByCategory();

  return (
    <div className="bg-background/80 backdrop-blur-sm rounded-xl shadow-lg border border-border/50 overflow-hidden">
      <div className="p-4 flex items-center justify-between bg-primary/10">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          Technical Skills Visualization
        </h3>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setActiveChart('bar')}
            className={`px-3 py-1 rounded-md text-sm font-medium ${activeChart === 'bar' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
          >
            Bar
          </button>
          <button 
            onClick={() => setActiveChart('radar')}
            className={`px-3 py-1 rounded-md text-sm font-medium ${activeChart === 'radar' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
          >
            Radar
          </button>
          <button 
            onClick={() => setActiveChart('pie')}
            className={`px-3 py-1 rounded-md text-sm font-medium ${activeChart === 'pie' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
          >
            Pie
          </button>
          <button 
            onClick={() => setExpanded(!expanded)}
            className="p-1 rounded-md hover:bg-secondary/80"
          >
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
      </div>
      
      {expanded && (
        <div className="p-4">
          <AnimatedSection animation="fade-in">
            {activeChart === 'bar' && (
              <div className="h-[400px] w-full">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={skillsData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
                      <YAxis label={{ value: 'Proficiency (%)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]}>
                        {skillsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            )}
            
            {activeChart === 'radar' && (
              <div className="h-[400px] w-full">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="name" />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar name="Skills" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </RadarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            )}
            
            {activeChart === 'pie' && (
              <div className="h-[400px] w-full">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={skillsData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {skillsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Legend />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            )}
          </AnimatedSection>
        </div>
      )}
    </div>
  );
};

export default SkillsChart;
