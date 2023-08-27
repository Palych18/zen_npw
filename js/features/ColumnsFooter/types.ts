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
