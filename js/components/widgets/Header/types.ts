export interface Lang {
  name: 'RU' | 'EN';
  key: 'ru' | 'en';
};

export interface Nav {
  target: string;
  content: string;
  type: 'anchor' | 'url';
};

export interface HeaderData {
  langs: Lang[];
  nav: Nav[];
};
