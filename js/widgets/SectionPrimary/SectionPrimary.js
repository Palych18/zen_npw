import {
  Title,
  Text,
  Image,
} from '../../shared/ui/index.js';

import { BrandLink } from '../../features/index.js';

/** @typedef {import('./types').SectionData} Data */

/**
 * @function SectionPrimary
 * @param {Data} data
 * @returns {string}
 */

export const SectionPrimary = (data) => {
  const dataKeys = Object.keys(data);

  if (dataKeys.length !== 4 && dataKeys.length !== 5) return '';

  const { name, title, texts, links, image } = data;

  const { apple, google } = links || {};

  const className = name 
    ? name 
    : 'section-primary';

  return `
    <section class="${className}" id="${name}">
      <div class="${className}__wrapper">
        <div class="${className}__text-block">
          ${title ? Title(title, className) : ''}
          ${texts?.length > 0 ? texts.map((text) => Text(text, className)).join('') : ''}
          <div class="${className}__links">
            ${apple ? BrandLink(apple, className) : ''}
            ${google ? BrandLink(google, className) : ''}
          </div>
        </div>
        ${image ? Image(image, className) : ''}
      </div>
    </section>
  `;
};
