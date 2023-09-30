/** @typedef {import('../../types').MenuItem} MenuItem */

/**
 * @function MenuItem
 * @param {MenuItem} menuItem
 * @param {string} parentClassName
 * @return {string}
 */

export const MenuItem = (menuItem, parentClassName) => {
  if (Object.keys(menuItem).length !== 3) return '';

  const { target, content } = menuItem;

  const currentClassName = parentClassName
    ? `${parentClassName}__item`
    : 'menu-item';

  return `
    <li class="${currentClassName}" id="menu-item">
      <a href="#${target}">${content}</a>
    </li>
  `;
};
