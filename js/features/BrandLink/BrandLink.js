import {
  IconApple,
  IconGoogle,
} from '../../shared/icons/index.js';

/** @typedef {import('./types.js').Link} Link */

/**
 * @function BrandLink
 * @param {Link} link
 * @param {string} parentClassName
 * @returns {string}
 */

export const BrandLink = (link, parentClassName) => {
  if (Object.keys(link).length !== 2) return '';

  const { type, url } = link;

  const currentClassName = parentClassName
    ? `${parentClassName}__link`
    : 'link';

  return `
    <a 
      href="${url}"
      class="${currentClassName}"
    >
      ${type === 'apple' ? IconApple() : IconGoogle()}
    </a>
  `;
};
