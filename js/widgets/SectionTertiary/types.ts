export type Title = {
  priority: string | number;
  content: string;
};

export type Client = {
  source: string;
  description: string;
};

export type SectionData = {
  name: string;
  title: Title;
  brands: {
    light: Client[];
    dark: Client[];
  };  
};
