import { BrandClient } from '../../ui/BrandClient/BrandClient.js';
import { Title } from '../../ui/Title/Title.js';

/** @typedef {import('./types').SectionData} Data */

/**
 * @function SectionTertiary
 * @param {Data} data
 * @returns {string}
 */

export const SectionTertiary = (data) => {
  const dataKeys = Object.keys(data);

  if (dataKeys.length !== 3) return '';

  const { name, title, brands } = data;

  if (!brands.length) return '';

  const className = name
    ? name
    : 'section-client';

  return `
    <section class="${className}" id="${name}">
      ${title ? Title(title, className) : ''}
      <div class="${className}__wrapper">
        <ul class="${className}__brands">
          ${
            brands.map((brand) => `
              <li class="${className}__brand">
                ${BrandClient(brand, className)}
              </li>
            `).join('')
          }        
        </ul>
      </div>
    </section>
  `;
};
