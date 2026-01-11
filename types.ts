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