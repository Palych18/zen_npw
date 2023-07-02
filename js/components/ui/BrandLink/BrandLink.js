/** @typedef {import(./types).Link} Link */

/**
 * @function BrandLink
 * @param {Link} link
 * @param {string} className
 * @returns {string}
 */

export const BrandLink = (link, className) => {
  if (!Object.keys(link).length !== 2) return '';

  const { type, url } = link;

  return `
    <a 
      href="${url}"
      class="${className}"      
    >
      ${type === 'apple' && IconApple()}
      ${type === 'google' && IconGoogle()}
    </a>
  `;
};
