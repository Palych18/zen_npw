import { Text } from '../../shared/ui/index.js';
import {
  ColumnsFooter,
  Developer,
  LogoFooter,
} from '../../features/index.js';

/** @typedef {import('./types').FooterData} Data */

/**
 * @function Footer
 * @param {Data} data
 * @returns {string}
 */

export const Footer = (data) => {
  const { columns, texts, developer } = data;
  const className = 'footer';

  return `
    <section class="${className}">
      <div class="${className}__wrapper">
        <div class="${className}__columns">
          ${ColumnsFooter(columns)}
        </div>
        <div class="${className}__info">
          ${LogoFooter()}
          ${texts?.length > 0 ? texts.map((text) => Text(text, className)).join('') : ''}
          <div class="footer_dev">
            ${Developer(developer)}
          </div>
        </div>
      </div>
    </section>
  `;
};
