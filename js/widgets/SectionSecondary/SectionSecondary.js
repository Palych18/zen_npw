import {
  Title,
  Text,
  Button,
} from '../../shared/ui/index.js';

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
          ${buttonText ? Button(buttonText, className) : ''}
        </div>
      </div>
    </section>
  `;
};
