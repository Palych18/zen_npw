import {Title} from '../../ui/Title/Title.js';
import {Text} from '../../ui/Text/Text.js';
import {Image} from '../../ui/Image/Image.js';
import {BrandLink} from '../../ui/BrandLink/BrandLink.js';

/** @typedef {import('../../../Schema/types').SectionPrimary} Data */

/**
 * @function SectionPrimary
 * @param {Data} data
 * @returns {string}
 */

export const SectionPrimary = (data) => {
  const dataKeys = Object.keys(data);

  if (dataKeys.length !== 4 && dataKeys.length !== 5) return '';

  const {name, title, texts, image, links} = data;

  const className = name 
    ? name 
    : 'section-primary';

  return `
    <section class="${className}">
      ${title ? Title(title, className) : ''}
      ${texts.length > 0 ? texts.map((text) => Text(text, className)).join('') : ''}
      ${image ? Image(image, className) : ''}
      ${links.length > 0 ? links.map((link) => BrandLink(link, className)).join('') : ''}
    </section>
  `;
};
