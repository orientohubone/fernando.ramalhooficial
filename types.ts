
export enum HighlightColor {
  YELLOW = 'YELLOW',
  GREEN = 'GREEN'
}

export interface ListItem {
  id: number;
  title: string;
  category: string;
  src: string;
  alt: string;
  color: HighlightColor;
  description: string;
  thesis?: string;
  stack?: string[];
  impact?: string;
}

export interface CategoryGroup {
  name: string;
  items: ListItem[];
}

export interface Principle {
  title: string;
  description: string;
}

export interface ReportSource {
  label: string;
  url: string;
}

export interface ReportMetric {
  label: string;
  value: string;
  percentage: number; 
  trend: 'up' | 'down';
}

export interface InsightCard {
  title: string;
  content: string;
}

export interface ReportItem {
  id: string;
  cat: string;
  title: string;
  desc: string;
  summary: string;
  methodology: string;
  analysis: string;
  findings: string[];
  recommendations: string;
  nextSteps: string;
  references: string[];
  sources?: ReportSource[];
  truthScore: number;
  metrics?: ReportMetric[];
  insightCards?: InsightCard[];
  ogImage?: string;
}
