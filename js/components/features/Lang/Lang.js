/**
 * @function Lang
 * @param { string } parentClassName
 * @returns { string }
 */

export const Lang = (parentClassName) => {

  const currentClassName = parentClassName
    ? `${ parentClassName }__lang`
    : 'lang';

  return `
    <select class="${ currentClassName }" id="lang">
      <option value="en">EN</option>
      <option value="ru">RU</option>
    </select>
  `;
};
