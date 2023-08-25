import { IconDev } from '../../shared/icons/index.js';

/** @typedef {import('./types').Dev} Dev */

/**
 * @function Developer
 * @param {Dev} dev
 * @return {string}
 */

export const Developer = (dev) => {
  if (Object.keys(dev).length !== 2) return '';

  const { url } = dev;

  return `
    <a 
      href="${url}"
      class="developer"
      target="_blank"
    >
      ${IconDev()}
    </a>
  `;
};
