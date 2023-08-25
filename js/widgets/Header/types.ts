export type Lang = {
  name: 'RU' | 'EN';
  key: 'ru' | 'en';
};

export type Nav = {
  target: string;
  content: string;
  type: 'anchor' | 'url';
};

export type HeaderData = {
  langs: Lang[];
  nav: Nav[];
};
