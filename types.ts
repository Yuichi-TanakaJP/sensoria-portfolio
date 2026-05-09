export interface Article {
  id: string;
  title: string;
  category: 'Art' | 'Beauty' | 'Travel' | 'Lifestyle';
  tags: string[];
  image: string;
  excerpt: string;
  date: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface WorksMetric {
  value: string;
  label: string;
  note: string;
}

export interface FeaturedWork {
  title: string;
  label: string;
  summary: string;
  url: string;
  mediaName?: string;
  year?: number;
  quote?: string;
  keyVisual?: string;
}

export interface WorksDetailItem {
  title: string;
  category: string;
  overview: string;
  tone: string;
}

export interface WorksLinkItem {
  title: string;
  url: string;
  cta?: 'Visit' | 'Read' | 'Listen' | 'Follow';
  year?: number;
  topic?: string[];
  mediaName?: string;
  excerpt?: string;
}

export interface WorksLinkCategory {
  name: string;
  lead: string;
  slug: string;
  items: WorksLinkItem[];
  displayLimit?: number;
  viewAllUrl?: string;
  viewAllLabel?: string;
}