/** @typedef {import('./types').Client} Client */

/**
 * @function BrandClient
 * @param {Client} client
 * @param {string} parentClassName
 * @returns {string}
 */

export const BrandClient = (client, parentClassName) => {
  if (Object.keys(client).length !== 2) return "";

  const { source, description } = client;

  const currentClassName = parentClassName
    ? `${parentClassName}__brand`
    : "brand";

  return `
    <img
      src="${source}"
      class="${currentClassName}"
      alt="${description}"
    />
  `;
};
