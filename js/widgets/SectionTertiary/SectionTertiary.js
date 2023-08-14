import { BrandClient } from '../../features/index.js';
import { Title } from '../../shared/ui/index.js';

/** @typedef {import('./types').SectionData} Data */

/**
 * @function SectionTertiary
 * @param {Data} data
 * @param {'light' | 'dark'} theme
 * @returns {string}
 */

export const SectionTertiary = (data, theme = 'dark') => {
  const dataKeys = Object.keys(data);
  if (dataKeys.length !== 3) return '';
  
  const { name, title, brands } = data;
  if (!brands[theme].length) return '';

  const className = name
    ? name
    : 'section-tertiary';

  return `
    <section class="${className}" id="${name}">
      ${title ? Title(title, className) : ''}
      <div class="${className}__wrapper">
        <ul class="${className}__brands">
          ${
            brands.light.map((brand) => `
              <li class="${className}__brand">
                ${BrandClient(brand)}
              </li>
            `).join('')
          }
        </ul>
      </div>
    </section>
  `;
};
