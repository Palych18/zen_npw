import { MenuItem } from '../MenuItem/MenuItem.js';

/** @typedef {import('../../types.js').MenuItem} MenuItem */

/**
 * @function MenuList
 * @param {MenuItem[]} menuList
 * @param {string} parentClassName
 * @return {string}
 */

export const MenuList = (menuList, parentClassName) => {
  if (!menuList?.length) return '';

  const currentClassName = parentClassName
    ? `${parentClassName}__menu`
    : 'menu';

  return `
    <ul class="${currentClassName}">
      ${menuList.map((menuItem) => MenuItem(menuItem, parentClassName)).join('')}
    </ul>
  `;
};
