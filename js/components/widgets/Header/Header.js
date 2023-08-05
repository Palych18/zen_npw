import { Logo, Navigation, Lang, Theme, Burger } from '../../features/index.js';

/** @typedef {import('./types').HeaderData} Data */

/**
 * @function Header
 * @param {Data} data
 * @returns {string}
 */

export const Header = (data) => {
  const dataKeys = Object.keys(data);

  if (!dataKeys.length) return '';

  const { name, langs, nav } = data;

  const className = name
    ? name
    : 'header';

  return `
    <header class="${className}" id="header">
      <div class="${className}__wrapper">
        ${Logo(className)}
        ${Navigation(nav, className)}
        <div class="${className}__button">
          ${Lang(className)}
          ${Theme(className)}
          ${Burger(className)}
        </div>
      </div>
    </header>
  `;
};
