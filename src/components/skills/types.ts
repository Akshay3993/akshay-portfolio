
import { ReactNode } from 'react';

export interface Skill {
  name: string;
  level: number;
  category: 'data-analytics' | 'data-visualization' | 'database' | 'tools';
  icon: ReactNode;
  description: string;
}

export interface CategoryLabel {
  label: string;
  icon: ReactNode;
  color: string;
  bgColor: string;
  hoverColor: string;
}

export type CategoryLabels = {
  [key in Skill['category']]: CategoryLabel;
};
