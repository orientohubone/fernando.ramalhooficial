
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

export interface Principle {
  title: string;
  description: string;
}
