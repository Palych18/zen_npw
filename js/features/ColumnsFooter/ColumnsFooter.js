import { Column } from './ui/Column/Column.js';

/** @typedef {import('./types').Column} Column */

/**
 * @function ColumnsFooter
 * @param {Column[]} columns
 * @return {string}
 */

export const ColumnsFooter = (columns) => {
  if (!columns.length) return '';

  return `    
    ${columns.map((column) => Column(column.title, column.links)).join('')}
  `;
};
