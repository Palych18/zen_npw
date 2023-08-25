export type Title = {
  priority: string | number;
  content: string;
};

export type Image = {
  source: string;
  description: string;
};

export type Link = {
  type: string;
  url: string;
};

export type SectionData = {
  name: string;
  title: Title;
  texts: string[];
  image: Image;
  links?: {
    apple: Link;
    google: Link;
  };
};
