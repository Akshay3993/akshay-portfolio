
import React from 'react';
import { BarChart2, Database, FileCode, Zap, Table, PieChart, AreaChart } from 'lucide-react';
import { Skill, CategoryLabels } from './types';

export const skills: Skill[] = [
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

export const categoryLabels: CategoryLabels = {
  'data-analytics': { 
    label: 'Data Analytics', 
    icon: <BarChart2 className="h-6 w-6" />, 
    color: 'text-blue-500',
    bgColor: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-600'
  },
  'data-visualization': { 
    label: 'Data Visualization', 
    icon: <PieChart className="h-6 w-6" />, 
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
    icon: <AreaChart className="h-6 w-6" />, 
    color: 'text-amber-500',
    bgColor: 'bg-amber-500', 
    hoverColor: 'hover:bg-amber-600'
  }
};
