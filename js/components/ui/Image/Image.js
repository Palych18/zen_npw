/** @typedef {import(./types).Image} Image */

/**
 * @function Image
 * @param {Image} image
 * @param {string} parentClassName
 * @returns {string}
 */

export const Image = (image, parentClassName) => {
  if (!Object.keys(image).length !== 2) return '';

  const { source, description } = image;

  const currentClassName = parentClassName
    ? `${parentClassName}__image`
    : 'image';

  return `
    <img 
      src="${source}"
      class="${currentClassName}"
      alt="${description}"
    >
  `;
};
