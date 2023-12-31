export type Title = {
  priority: string | number;
  content: string;
};

export type Link = {
  type: string;
  url: string;
  content: string;
};

export type Column = {
  title: Title;
  links: Link[];
};

export type Developer = {
  type: 'icon';
  url: string;
};

export type FooterData = {
  columns: Column[];
  texts: string[];
  developer: Developer;
};
