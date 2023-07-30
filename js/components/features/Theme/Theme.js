import { Moon } from './ui/Moon.js';
import { Sun } from './ui/Sun.js';

/**
 * @function Theme
 * @param {'light' | 'dark'} theme
 * @param {string} parentClassName
 * @returns {string}
 */

export const Theme = (parentClassName, theme = 'light') => {
  const currentClassName = parentClassName
    ? `${parentClassName}__theme`
    : 'theme';

  return `
    <button class="${currentClassName}" id="theme" data-theme="${theme}">
      ${theme === 'light' ? Moon() : Sun()}
    </button>
  `;
};
