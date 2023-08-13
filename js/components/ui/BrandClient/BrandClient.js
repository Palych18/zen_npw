/** @typedef {import('./types').Client} Client */

/**
 * @function BrandClient
 * @param {Client} client
 * @returns {string}
 */

export const BrandClient = (client) => {
  if (Object.keys(client).length !== 2) return '';

  const { source, description } = client;

  return `
    <img
      data-type="brand"
      src="${source}"
      alt="${description}"
    />
  `;
};
