import {Title} from '../../ui/Title/Title.js';
import {Text} from '../../ui/Text/Text.js';
import {Image} from '../../ui/Image/Image.js';
import {BrandLink} from '../../ui/BrandLink/BrandLink.js';
import {Button} from '../../ui/Button/Button.js';

/** @typedef {import('../../../Schema/types').SectionPrimary} Data */

/**
 * @function SectionPrimary
 * @param {Data} data
 * @returns {string}
 */

export const SectionPrimary = (data) => {
  const dataKeys = Object.keys(data);

  if (dataKeys.length !== 4 && dataKeys.length !== 5) return '';

  const {name, title, texts, links, image, buttonText} = data;

  const className = name 
    ? name 
    : 'section-primary';

  return `
    <section class="${className}">
      <div class="${className}__wrapper">
        <div class="${className}__text-block">
          ${title ? Title(title, className) : ''}
          ${texts?.length > 0 ? texts.map((text) => Text(text, className)).join('') : ''}
          <div class="${className}__links">
            ${links?.length > 0 ? links.map((link) => BrandLink(link, className)).join('') : ''}
          </div>
          ${image ? Image(image, className) : ''}
          ${image ? Image(image, className) : ''}
          ${buttonText ? Button(buttonText, className) : ''}
        </div>
      </div>
    </section>
  `;
};
