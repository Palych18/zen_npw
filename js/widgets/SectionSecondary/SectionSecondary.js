import { Title, Text } from '../../shared/ui/index.js';
import { ModalOrderOpen } from '../../features/index.js';

/** @typedef {import('./types').SectionData} Data */

/**
 * @function SectionSecondary
 * @param {Data} data
 * @returns {string}
 */

export const SectionSecondary = (data) => {
  const dataKeys = Object.keys(data);

  if (dataKeys.length !== 4) return '';

  const { name, title, texts, buttonText } = data;

  const className = name
    ? name
    : 'section-secondary';

  return `
    <section class="${className}" id="${name}">
      <div class="${className}__wrapper">
        <div class="${className}__text-block">
          ${title ? Title(title, className) : ''}
          ${texts?.length > 0 ? texts.map((text) => Text(text, className)).join('') : ''}
          ${ModalOrderOpen(buttonText)}
        </div>
      </div>
    </section>
  `;
};
