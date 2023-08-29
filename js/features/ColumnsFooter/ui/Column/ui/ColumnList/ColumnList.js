import { ColumnItem } from '../ColumnItem/ColumnItem.js';

/** @typedef {import('../../../../types').Link} Link */

/**
 * @function ColumnList
 * @param {Link[]} columnList
 * @return {string}
 */

export const ColumnList = (columnList) => {
  if (!columnList.length) return '';
  const className = 'column';

  return `
    <ul class="${className}__list">
      ${columnList.map((columnItem) => ColumnItem(columnItem)).join('')}
    </ul>
  `;
};
