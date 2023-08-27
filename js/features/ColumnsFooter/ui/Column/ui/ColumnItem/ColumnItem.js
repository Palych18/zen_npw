/** @typedef {import('../../../../types').Link} Link */

/**
 * @function ColumnItem
 * @param {Link} columnItem
 * @return {string}
 */

export const ColumnItem = (columnItem) => {
  if (Object.keys(columnItem).length !== 3) return '';
  const { type, url, content } = columnItem;
  
  let columnItemContent;

  if (type === 'text') columnItemContent = `<a href="${url}"><p>${content}</p></a>`;
  if (type === 'icon') columnItemContent = `<a href="${url}"><img src="${content}"></a>`;
  if (type === 'email') columnItemContent = `<a href="mailto:${url}"><p>${content}</p></a>`;

  const className = 'column';
  
  return `
    <li class="${className}__item">
      ${columnItemContent}
    </li>
  `;
};
