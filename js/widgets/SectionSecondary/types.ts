export type Title = {
  priority: string | number;
  content: string;
};

export type SectionData = {
  name: string;
  title: Title;
  text: string[];
  buttonText: string;
};
