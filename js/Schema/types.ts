export interface Title {
  priority: string | number;
  content: string;
};

export interface Image {
  source: string;
  description: string;
};

export interface Link {
  type: string;
  url: string;
};

export interface Client {
  source: string;
  description: string;
};

export interface SectionPrimary {
  name: string;
  title: Title;
  texts: string[];
  image: Image;
  links?: {
    apple: Link;
    google: Link;
  };
};

export interface SectionTertiary {
  name: string;
  title: Title;
  brands: Client[];
};

export interface SectionSecondary {
  name: string;
  title: Title;
  text: string[];
  buttonText: string;
};
