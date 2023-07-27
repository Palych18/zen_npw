export interface Title {
  priority: string | number;
  content: string;
};

export interface SectionData {
  name: string;
  title: Title;
  text: string[];
  buttonText: string;
};
