/** @typedef {import('./types').Button} Button */

/**
 * @function Button
 * @param {Button} props
 * @returns {string}
 */

export const Button = (props) => {

  const { className, typeButton, buttonId, customId, children } = props;

  const currentClassName = className
    ? `button__${className}`
    : 'button';

  const currentTypeButton = typeButton
    ? `${typeButton}`
    : 'button';

  const currentId = buttonId
    ? `${buttonId}` 
    : '';

  const currentCustomId = customId
    ? `${customId}`
    : '';
    
    const currentChildren = children
      ? `${children}`
      : '';

  return `
    <button
      class="${currentClassName}"
      type="${currentTypeButton}"
      id="${currentId}"
      data-customId="${currentCustomId}"
    >
      ${currentChildren}
    </button>
  `;
};
