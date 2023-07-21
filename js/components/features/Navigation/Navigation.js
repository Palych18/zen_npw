import { MenuList } from './ui/MenuList/MenuList.js';

/** @typedef {import('./types').MenuItem} MenuItem */

/**
 * @function Navigation
 * @param {MenuItem[]} menuList
 * @param {string} parentClassName
 * @returns
 */

export const Navigation = (menuList, parentClassName) => {
  if (!menuList?.length) return '';

  const currentClassName = parentClassName
    ? `${parentClassName}__nav`
    : 'nav';

  return `
    <nav class="${currentClassName}">
      ${MenuList(menuList, parentClassName)}
    </nav>
  `;
};
