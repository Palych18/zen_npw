export interface Title {
  priority: string | number;
  content: string;
};

export interface Client {
  source: string;
  description: string;
};

export interface SectionData {
  name: string;
  title: Title;
  brands: Client[];
};
