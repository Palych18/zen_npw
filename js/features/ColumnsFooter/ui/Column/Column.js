import { Title } from '../../../../shared/ui/Title/Title.js';
import { ColumnList } from './ui/ColumnList/ColumnList.js';

/** @typedef {import('../../types').Link} Link */

/**
 * @function Column
 * @param {Title} title
 * @param {Link[]} columnList
 * @returns {string}
 */

export const Column = (title, columnList) => {
  if (!title || !columnList.length) return '';
  const className = 'column';

  return`
    <div class="column">
      ${title ? Title(title, className) : ''}
      ${ColumnList(columnList)}
    </div>
  `;
};
